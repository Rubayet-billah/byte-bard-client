"use client";
import React, { useState } from "react";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog data:", formData);
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your blog title"
            value={formData.title}
            onChange={handleChange}
            required
          />
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
