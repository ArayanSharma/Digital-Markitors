import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../Styles/BlogCard.css";

import { defaultBlogs, normalizeMediaUrl, slugify, fetchAllBlogs } from "../../utils/blogData";
import blog1 from "../../assets/blog-1.webp";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const LatestBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(defaultBlogs.slice(0, 3));
  const [section, setSection] = useState({
    description: "An Amazing thought can build a brilliant world.\nHere are some of ours",
    buttonText: "View All Blogs",
    buttonLink: "/blogs",
  });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/blogs`);
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data.blogs) ? data.blogs : [];
        if (items.length > 0) {
          setBlogs(
            items.map((item) => ({
              id: item._id || item.id,
              slug: item.slug || slugify(item.title),
              image: normalizeMediaUrl(item.image) || blog1,
              title: item.title,
              desc: item.description,
              link: `/blog/${item.slug || slugify(item.title)}`,
              buttonText: item.buttonText || "Read More",
            }))
          );
        }
      } catch (err) {
        console.error("Failed to load blogs:", err);
      }
    };

    const loadSection = async () => {
      try {
        const res = await fetch(`${API}/api/pages/blog`);
        if (!res.ok) return;
        const data = await res.json();
        const desc = data.description || data.section?.description || data.header?.description;
        const btnText = data.buttonText || data.section?.buttonText || data.header?.buttonText;
        const btnLink = data.buttonLink || data.section?.buttonLink || data.header?.buttonLink;
        setSection((prev) => ({
          description: desc || prev.description,
          buttonText: btnText || prev.buttonText,
          buttonLink: btnLink || prev.buttonLink,
        }));
      } catch (err) {
        console.error("Failed to load blog section:", err);
      }
    };

    load();
    loadSection();
  }, []);

  return (
    <section className="latest-blogs">

      <div className="blogs-container">

        <div className="blogs-heading">


          <h2>Latest Blogs</h2>

          <div className="blogs-line"></div>
          <h6>
            {section.description}
          </h6>

          <button className="view-blog-btn" onClick={() => navigate("/blogs")}>
            {section.buttonText || "View All Blogs"}
          </button>

        </div>

        <div className="blogs-grid">

          {blogs.map((blog, index) => {
            const blogSlug = blog.slug || slugify(blog.title);
            return (
              <div
                className="blog-card"
                key={blog.id || index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >

                <span className="blog-shine" aria-hidden="true"></span>

                <div className="blog-top">

                  <div className="blog-img-border">

                    <img
                      src={blog.image}
                      alt="blog"
                      loading="lazy"
                    />

                  </div>

                  <div className="blog-title">

                    <h5>{blog.title}</h5>

                  </div>

                </div>

                <div className="blog-content">

                  <p>{blog.desc}</p>

                  <button className="read-more-btn" onClick={() => navigate(`/blog/${blogSlug}`)}>
                    {blog.buttonText}
                    <span className="btn-arrow">&rarr;</span>
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default LatestBlogs;
