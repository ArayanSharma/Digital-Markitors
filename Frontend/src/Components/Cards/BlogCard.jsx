import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <section className="py-[60px] px-5 max-[769px]:px-[15px] bg-[#fdfdfd]">

      <div className="max-w-[1300px] mx-auto">

        <div className="[text-align:center] mb-[50px]">



          <div className="w-[55px] h-[4px] bg-[#e31e24] mx-auto mb-5 rounded-[20px]"></div>
          <h6 className="text-[22px] max-[993px]:text-[20px] max-[769px]:text-[17px] font-semibold text-[#4b5563] mb-[25px] leading-[1.5] max-[769px]:leading-[1.6] whitespace-pre-line">
            {section.description}
          </h6>

          <button
            className="border-2 border-[#e31e24] bg-transparent text-[#e31e24] py-3 px-8 max-[769px]:py-[10px] max-[769px]:px-[22px] rounded-[30px] text-[15px] max-[769px]:text-[14px] font-bold cursor-pointer transition-all duration-300 hover:bg-[#e31e24] hover:text-white hover:scale-[1.03]"
            onClick={() => navigate("/blogs")}
          >
            {section.buttonText || "View All Blogs"}
          </button>

        </div>

        <div className="flex flex-wrap gap-[35px] max-[769px]:gap-[25px] justify-center">

          {blogs.map((blog, index) => {
            const blogSlug = blog.slug || slugify(blog.title);
            return (
              <div
                className="group relative bg-white border-t-[5px] border-t-[#e31e24] border border-[#e6e6e6] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-[360px] h-[480px] flex flex-col animate-blog-card-in hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(227,30,36,0.12)]"
                key={blog.id || index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >

                <span
                  className="absolute top-0 left-0 w-2/5 h-full bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_50%,rgba(255,255,255,0)_100%)] z-[3] pointer-events-none opacity-0 -translate-x-[150%] -skew-x-[20deg] group-hover:opacity-100 group-hover:animate-blog-shine"
                  aria-hidden="true"
                ></span>

                <div className="relative h-[200px] p-0 overflow-hidden bg-[#fee2e2]/20">

                  <div className="w-full h-full p-0 m-0 [text-align:center] border-0">

                    <img
                      src={blog.image}
                      alt="blog"
                      loading="lazy"
                      className="w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />

                  </div>

                </div>

                <div className="p-5 flex-[1_1_auto] flex flex-col justify-between">

                  <div>
                    <h3 className="text-[19px] font-heading font-extrabold text-[#2b2b2e] mb-3 leading-[1.3] group-hover:text-[#e31e24] transition-colors duration-300 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis">
                      {blog.title}
                    </h3>

                    <p className="text-[#4b5563] text-[14.5px] leading-[1.6] [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis break-words">
                      {blog.desc}
                    </p>
                  </div>

                  <button
                    className="group/btn bg-[#e31e24] text-white border-0 py-3 px-6 rounded-[30px] cursor-pointer text-sm font-bold inline-flex items-center gap-2 transition-[background-color,transform,box-shadow] duration-300 ease-in-out hover:bg-[#c4151a] hover:translate-x-1 hover:shadow-[0_6px_15px_rgba(227,30,36,0.3)] max-[769px]:w-full justify-center"
                    onClick={() => navigate(`/blog/${blogSlug}`)}
                  >
                    {blog.buttonText || "Read More"}
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
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
