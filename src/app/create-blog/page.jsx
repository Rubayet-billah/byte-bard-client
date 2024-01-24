"use client";
import { createBlogPost } from "@/lib/blog/blogApi";
import httpStatus from "http-status";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import action from "../action";
import constants from "@/utils/constants";

const CreateBlog = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Universal",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBlogPost({
        userId: user._id,
        authorName: user.firstName + " " + user.lastName,
        ...formData,
      });
      if (response.status === httpStatus.CREATED) {
        action(constants.blogsTag);
        toast.success("Your blog is successfully posted.");
        router.push("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // useEffect for private route
  useEffect(() => {
    if (!user) {
      router.push("/login");
      toast("Please login first");
    }
  }, [user, router]);

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
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
