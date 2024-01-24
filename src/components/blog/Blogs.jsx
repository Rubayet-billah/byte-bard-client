"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../card/BlogCard";
import { getBlogPosts } from "@/lib/blog/blogApi";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const result = await getBlogPosts();
        setPosts(result?.data || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Blogs;
