import { getBlogPosts } from "@/lib/blog/blogApi";
import { formatStringDate } from "@/utils/helperFunctions";
import Link from "next/link";
import React from "react";

const MyBlogs = async () => {
  const result = await getBlogPosts(); // Assuming getBlogPosts is defined
  const blogs = result.data;

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
          {blogs.map((blog, index) => (
            <tr
              key={index}
              className={`${index % 2 !== 0 ? "bg-gray-50" : "bg-white"} `}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {blog.title}
              </td>
              <td className="px-6 py-4">{formatStringDate(blog.createdAt)}</td>
              <td className="flex gap-2 px-6 py-4">
                <Link href={""}>Edit</Link>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBlogs;
