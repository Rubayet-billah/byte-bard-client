import Image from "next/image";
import React from "react";
import carImage from "@/assets/car.jpg";
import { GrNext } from "react-icons/gr";

const BlogCard = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-md shadow-md">
      <Image className="object-cover w-full" src={carImage} alt="Blog Image" />
      <div className="p-4">
        {/* Blog Author */}
        <section className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Image
              className="w-10 h-10 rounded-full"
              src={carImage}
              alt="profile image"
            />
            <div>
              <h3 className="font-bold">Eren Yeager</h3>
              <p className="text-xs text-gray-500">25 April 2023</p>
            </div>
          </div>
          <div className="px-2 py-1 text-xs font-bold text-white bg-green-400 rounded-full w-fit">
            Technology
          </div>
        </section>
        {/* Blog Title */}
        <h2 className="my-2 text-2xl font-bold">Blog Post Title</h2>

        {/* Short Description */}
        <p className="mb-4 text-gray-700">
          Short description or summary of the blog post goes here. You can
          provide a brief overview of the content.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end">
          <button className="flex items-center gap-1 font-bold duration-150 hover:scale-105">
            Read Full <GrNext className="font-extrabold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
