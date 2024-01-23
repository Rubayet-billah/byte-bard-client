"use client";
import action from "@/app/action";
import {
  editBlogPost,
  getBlogPostById,
  updateBlogPost,
} from "@/lib/blog/blogApi";
import constants from "@/utils/constants";
import httpStatus from "http-status";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const EditBlogPost = ({ params }) => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Universal",
  });
  const router = useRouter();
  const blogId = params.id;

  useEffect(() => {
    const fetchBlogPost = async () => {
      const response = await getBlogPostById(blogId);

      if (response.status === httpStatus.OK) {
        const blogData = response.data;
        setFormData({
          title: blogData.title,
          content: blogData.content,
          category: blogData.category,
        });
      } else {
        toast.error(response.message);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateBlogPost(blogId, {
        userId: user._id,
        authorName: user.firstName + " " + user.lastName,
        ...formData,
      });

      if (response.status === httpStatus.OK) {
        action(constants.blogsTag);
        action(constants.blogTag);
        toast.success("Your blog post is successfully updated.");
        router.push("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Blog Title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your blog title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        {/* Blog Category */}
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Blog Category
          </label>
          <select
            id="category"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Universal">Universal</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Astronomy">Astronomy</option>
            <option value="Literature">Literature</option>
          </select>
        </div>

        {/* Blog Content */}
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Blog Content
          </label>
          <textarea
            id="content"
            name="content"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your blog content here"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlogPost;
