"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  link: string;
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
      alt_text?: string;
      media_details?: {
        sizes?: {
          medium?: {
            source_url: string;
          };
          medium_large?: {
            source_url: string;
          };
          full?: {
            source_url: string;
          };
        };
      };
    }[];
  };
}

const BlogAreaHomeOne = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://blog.solpoweraustralia.com.au/wp-json/wp/v2/posts?per_page=3&_embed"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }

        const data: BlogPost[] = await response.json();

        setBlogData(data);
      } catch (error) {
        console.error("Error fetching WordPress blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="blog-section">
        <div className="container">

          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center wow animate__slideInUp">

                <div className="section-sub-title">
                  <h4>Latest News & Blog</h4>
                </div>

                <div className="section-main-title blog">
                  <h2>Latest News & Articles</h2>
                </div>

              </div>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>Loading latest blogs...</p>
              </div>
            </div>
          )}

          {/* Blog Posts */}
          {!loading && (
            <div className="row">

              {blogData.map((item, i) => {

                const featuredImage =
                  item._embedded?.["wp:featuredmedia"]?.[0]
                    ?.media_details?.sizes?.medium_large?.source_url ||
                  item._embedded?.["wp:featuredmedia"]?.[0]
                    ?.source_url ||
                  "/assets/images/resource/blog1.png";

                const imageAlt =
                  item._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                  item.title.rendered;

                const formattedDate = new Date(
                  item.date
                ).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });

                return (
                  <div
                    key={item.id}
                    className="col-lg-4 col-md-6"
                  >
                    <div
                      className={`blog-items-box wow animate__${
                        i === 1 ? "slideInUp" : "slideInDown"
                      }`}
                    >

                      {/* Blog Image */}
                      <div className="blog-thumb">
                        <Image
                          src={featuredImage}
                          width={600}
                          height={400}
                          style={{
                            height: "auto",
                            width: "100%",
                          }}
                          alt={imageAlt}
                        />
                      </div>

                      {/* Date */}
                      <div className="blog-date">
                        <span>
                          <i className="bi bi-calendar3"></i>
                          {formattedDate}
                        </span>
                      </div>

                      {/* Blog Content */}
                      <div className="blog-content">

                        <div className="blog-meta">
                          <span>
                            <i className="bi bi-eye"></i>
                            Blog
                          </span>

                          <span>
                            <i className="bi bi-wechat"></i>
                            Comments
                          </span>
                        </div>

                        {/* Blog Title */}
                        <div className="blog-title">
                          <h4>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              dangerouslySetInnerHTML={{
                                __html: item.title.rendered,
                              }}
                            />
                          </h4>
                        </div>

                        {/* More Details */}
                        <div className="blog-btn">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            More Details{" "}
                            <i className="bi bi-arrow-up-right"></i>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          )}

          {/* No Posts */}
          {!loading && blogData.length === 0 && (
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>No blog posts available.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default BlogAreaHomeOne;