import { getBlogPostById } from "@/lib/blog/blogApi";
import { formatStringDate } from "@/utils/helperFunctions";
import React from "react";

const BlogPage = async ({ params }) => {
  const blogId = params.id;

  const { data: blogData } = await getBlogPostById(blogId);
  const { _id, authorName, title, category, content, createdAt } = blogData;

  return (
    <div className="p-8 mx-auto rounded max-w-7xl bg-slate-100">
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <section className="flex justify-between mb-2">
        <div>
          <p className="text-xl font-bold text-gray-600 ">{authorName}</p>
          <p className="text-gray-600 ">{formatStringDate(createdAt)}</p>
        </div>
        <div>
          <p className="px-3 py-1 mt-1 font-bold text-white bg-green-500 rounded-full">
            {category}
          </p>
        </div>
      </section>
      <div>{content}</div>
    </div>
  );
};

export default BlogPage;
