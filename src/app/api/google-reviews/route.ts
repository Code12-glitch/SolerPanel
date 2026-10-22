
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google Reviews API is not configured." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Google Places API error:",
        response.status
      );

      return NextResponse.json(
        { error: "Unable to load Google reviews." },
        { status: 502 }
      );
    }

    const place = await response.json();

    return NextResponse.json({
      name: place.displayName?.text ?? "",
      rating: place.rating ?? null,
      totalReviews: place.userRatingCount ?? 0,
      googleMapsUri: place.googleMapsUri ?? "",
      reviews: (place.reviews ?? []).map((review: any) => ({
        rating: review.rating ?? 0,
        text: review.text?.text ?? "",
        published: review.relativePublishTimeDescription ?? "",
        author: review.authorAttribution?.displayName ?? "Google reviewer",
        authorUrl: review.authorAttribution?.uri ?? "",
        photoUrl: review.authorAttribution?.photoUri ?? "",
        reviewUrl: review.googleMapsUri ?? place.googleMapsUri ?? "",
      })),
    });
  } catch (error) {
    console.error("Google Reviews request failed:", error);

    return NextResponse.json(
      { error: "Unable to load Google reviews." },
      { status: 500 }
    );
  }
}
