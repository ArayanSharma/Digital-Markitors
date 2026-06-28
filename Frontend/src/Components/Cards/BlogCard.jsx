import React from "react";
import { useNavigate } from "react-router-dom";

import "../../Styles/BlogCard.css";

import blog1 from "../../assets/blog-1.webp";

const blogs = [
  {
    image: blog1,
    title: "8 Reasons Why You Should Invest In SEO For Your Business",
    desc: "Search Engine Optimization (SEO) is the process of optimizing online content so that it ranks higher on search engines like Google and Bing.",
  },

  {
    image: blog1,
    title: "Boost Your Business With The Right SEO",
    desc: "Technology has transformed businesses and SEO helps brands reach more customers online with better visibility.",
  },

  {
    image: blog1,
    title: "Examining Relationship Between Zero-Click Searches & SEO",
    desc: "Zero-click searches are changing SEO strategies and businesses must adapt to modern search behavior.",
  },
];

const LatestBlogs = () => {
  const navigate = useNavigate();

  return (
    <section className="latest-blogs">

      <div className="blogs-container">

        <div className="blogs-heading">


          <h2>Latest Blogs</h2>

          <div className="blogs-line"></div>
          <h6>
            An Amazing thought can build a brilliant world.
            Here are some of ours
          </h6>

          <button className="view-blog-btn" onClick={() => navigate("/seo-results")}>
            View All Blogs
          </button>

        </div>

        <div className="blogs-grid">

          {blogs.map((blog, index) => (

            <div className="blog-card" key={index}>

              <div className="blog-top">

                <div className="blog-img-border">

                  <img
                    src={blog.image}
                    alt="blog"
                  />

                </div>

                <div className="blog-title">

                  <h5>{blog.title}</h5>

                </div>

              </div>

              <div className="blog-content">

                <p>{blog.desc}</p>

                <button className="read-more-btn" onClick={() => navigate("/seo-results")}>
                  Read More
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default LatestBlogs;