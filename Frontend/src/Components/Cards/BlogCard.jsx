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
    <section className="py-[50px] px-5 max-[769px]:px-[15px] bg-white">

      <div className="max-w-[1300px] mx-auto">

        <div className="[text-align:center] mb-[60px]">


          <h2 className="text-[38px] max-[769px]:text-[30px] font-medium text-[#003366] uppercase mb-[10px]">Latest Blogs</h2>

          <div className="w-[55px] h-[4px] bg-[#ea8215] mx-auto mb-5 rounded-[20px]"></div>
          <h6 className="text-[25px] max-[993px]:text-[22px] max-[769px]:text-[18px] font-semibold text-[#003366] mb-[25px] leading-[1.5] max-[769px]:leading-[1.6] whitespace-pre-line">
            {section.description}
          </h6>

          <button className="border-2 border-[#222] bg-white py-3 px-7 max-[769px]:py-[10px] max-[769px]:px-[22px] rounded-[30px] text-[15px] max-[769px]:text-[14px] cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white" onClick={() => navigate("/blogs")}>
            {section.buttonText || "View All Blogs"}
          </button>

        </div>

        <div className="flex flex-wrap gap-[35px] max-[769px]:gap-[25px] justify-start max-[993px]:justify-center">

          {blogs.map((blog, index) => {
            const blogSlug = blog.slug || slugify(blog.title);
            return (
              <div
                className="group relative bg-white border border-[#e6e6e6] rounded-[14px] overflow-hidden shadow-[0_4px_14px_rgba(0,34,68,0.08)] transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-[360px] h-[460px] flex flex-col animate-blog-card-in hover:-translate-y-[10px] hover:shadow-[0_22px_40px_rgba(0,34,68,0.18)]"
                key={blog.id || index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >

                <span
                  className="absolute top-0 left-0 w-2/5 h-full bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_50%,rgba(255,255,255,0)_100%)] z-[3] pointer-events-none opacity-0 -translate-x-[150%] -skew-x-[20deg] group-hover:opacity-100 group-hover:animate-blog-shine"
                  aria-hidden="true"
                ></span>

                <div className="relative h-[220px] max-[769px]:h-[200px] p-0 overflow-hidden">

                  <div className="w-full h-full p-0 m-0 [text-align:center] border-0">

                    <img
                      src={blog.image}
                      alt="blog"
                      loading="lazy"
                      className="w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />

                  </div>

                  <div className="absolute left-0 right-0 bottom-[18px] [text-align:center] z-[2] mx-5">

                    <h5 className="text-[#f4a300] text-[15px] max-[769px]:text-[14px] font-semibold leading-[1.4]">{blog.title}</h5>

                  </div>

                  <div className="absolute left-0 right-0 bottom-0 h-[60px] bg-[linear-gradient(transparent,rgba(0,0,0,0.65))] z-[1] pointer-events-none"></div>

                </div>

                <div className="p-5 flex-[1_1_auto] flex flex-col justify-between">

                  <p className="text-[#555] text-[15px] max-[769px]:text-[14px] leading-[1.6] max-[769px]:leading-[1.8] mb-3 [display:-webkit-box] [-webkit-line-clamp:4] max-[769px]:[-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis break-words">{blog.desc}</p>

                  <button
                    className="group/btn bg-[#1f1978] text-white border-0 py-3 px-[22px] rounded-[30px] cursor-pointer text-sm inline-flex items-center gap-2 transition-[background-color,transform,box-shadow] duration-300 ease-in-out hover:bg-black hover:text-white hover:translate-x-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.25)] max-[769px]:w-full"
                    onClick={() => navigate(`/blog/${blogSlug}`)}
                  >
                    {blog.buttonText}
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
