import Image from "next/image";
import React from "react";
import carImage from "@/assets/car.jpg";
import { GrNext } from "react-icons/gr";
import { formatStringDate } from "@/utils/helperFunctions";
import Link from "next/link";

const BlogCard = ({ post }) => {
  const { _id, authorName, title, category, content, createdAt } = post;
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md bg-slate-100">
      {/* <Image className="object-cover w-full" src={carImage} alt="Blog Image" /> */}
      <div className="p-4">
        {/* Blog Author */}
        <section className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* <Image
              className="w-10 h-10 rounded-full"
              src={carImage}
              alt="profile image"
            /> */}
            <div>
              <h3 className="font-bold">{authorName}</h3>
              <p className="text-xs text-gray-500">
                {formatStringDate(createdAt)}
              </p>
            </div>
          </div>
          <div className="px-2 py-1 text-xs font-bold text-white bg-green-400 rounded-full w-fit">
            {category}
          </div>
        </section>
        {/* Blog Title */}
        <h2 className="my-2 text-2xl font-bold">{title}</h2>

        {/* Short Description */}
        <p className="mb-4 text-gray-700">
          {content.length > 120 ? content.slice(0, 120) + "..." : content}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end">
          <Link href={`/blogs/${_id}`}>
            <button className="flex items-center gap-1 font-bold duration-150 hover:scale-105">
              Read Full <GrNext className="font-extrabold" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
