"use client";
import { deleteBlogPost, getMyBlogPosts } from "@/lib/blog/blogApi";
import { formatStringDate } from "@/utils/helperFunctions";
import httpStatus from "http-status";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import action from "../action";
import constants from "@/utils/constants";
import { useRouter } from "next/navigation";

const MyBlogs = () => {
  const { user } = useSelector((state) => state.user);
  const [blogPosts, setBlogPosts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const router = useRouter();

  const handleDelete = async (blog) => {
    if (blog.author._id.toString() !== user._id) {
      return toast.error("Unauthorized user");
    } else {
      const result = await deleteBlogPost(blog._id);
      if (result.status === httpStatus.OK) {
        action(constants.blogsTag);
        setRefetch(!refetch);
        toast.success("Blog deleted successfully");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMyBlogPosts(user?._id);
      const blogs = result.data;
      setBlogPosts(blogs);
    };
    fetchData();
  }, [user, refetch]);

  // useEffect for private route
  useEffect(() => {
    if (!user) {
      toast("Please login first");
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Published
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {blogPosts?.map((blog, index) => (
            <tr
              key={index}
              className={`${index % 2 !== 0 ? "bg-gray-50" : "bg-white"} `}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {blog.title}
              </td>
              <td className="px-6 py-4">{formatStringDate(blog.createdAt)}</td>
              <td className="flex gap-2 px-6 py-4">
                <Link
                  className="font-bold text-blue-500"
                  href={`/blogs/edit/${blog._id}`}
                >
                  Edit
                </Link>
                <button
                  className="font-bold text-red-500"
                  onClick={() => handleDelete(blog)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBlogs;
