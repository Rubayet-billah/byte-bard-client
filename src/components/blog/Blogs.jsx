import { getBlogPosts } from "@/lib/blog/blogApi";
import React from "react";
import BlogCard from "../card/BlogCard";

const Blogs = async () => {
  const result = await getBlogPosts();
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        {result?.data?.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Blogs;
