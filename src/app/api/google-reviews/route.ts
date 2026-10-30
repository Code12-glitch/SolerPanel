import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google reviews are not configured." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `Google Places API error: ${res.status} ${text}` },
        { status: res.status },
      );
    }

    const data = await res.json();

    return NextResponse.json({
      name: data.displayName?.text ?? "SOLPOWER AUSTRALIA",
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      reviews: (data.reviews ?? []).map((r: any) => ({
        authorAttribution: r.authorAttribution
          ? {
              displayName: r.authorAttribution.displayName,
              uri: r.authorAttribution.uri,
            }
          : undefined,
        rating: r.rating,
        relativePublishTimeDescription:
          r.relativePublishTimeDescription,
        text: r.text?.text ?? r.text,
      })),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Google reviews." },
      { status: 500 },
    );
  }
}
