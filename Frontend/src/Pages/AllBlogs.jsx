import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllBlogs, slugify } from "../utils/blogData";
import "../Styles/AllBlogs.css";
import "../Styles/BlogCard.css";

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const load = async () => {
      setLoading(true);
      const allBlogs = await fetchAllBlogs();
      setBlogs(allBlogs);
      setLoading(false);
    };

    load();
  }, []);

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="all-blogs-page">
        <div className="all-blogs-loading">
          <div className="all-blogs-spinner" />
          <p>Loading blogs…</p>
        </div>
      </div>
    );
  }

  return (
    <section className="all-blogs-page">
      <div className="all-blogs-container">

        {/* Page header */}
        <div className="all-blogs-header">
          <h1>Our Blog</h1>
          <div className="all-blogs-header-line" />
          <p>
            An amazing thought can build a brilliant world.
            <br />
            Here are some of ours.
          </p>
        </div>

        {/* Blog grid */}
        {blogs.length === 0 ? (
          <div className="all-blogs-empty">
            <p>No blog posts available at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="all-blogs-grid">
            {blogs.map((blog, index) => {
              const blogSlug = blog.slug || slugify(blog.title);
              return (
                <div className="blog-card" key={blog.id || index}>
                  <div className="blog-top">
                    <div className="blog-img-border">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="blog-title">
                      <h5>{blog.title}</h5>
                    </div>
                  </div>

                  <div className="blog-content">
                    <p>{blog.desc}</p>
                    <button
                      className="read-more-btn"
                      onClick={() => navigate(`/blog/${blogSlug}`)}
                    >
                      {blog.buttonText || "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllBlogs;
