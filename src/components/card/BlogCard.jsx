import Image from "next/image";
import React from "react";
import carImage from "@/assets/car.jpg";

const BlogCard = () => {
  const imageUrl = "https://placekitten.com/800/400";
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-md shadow-md">
      <Image className="object-cover w-full" src={carImage} alt="Blog Image" />
      <div className="p-4">
        <section className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Image
              className="w-10 h-10 rounded-full"
              src={carImage}
              alt="profile image"
            />
            <div>
              <h3 className="font-bold">Eren Yeager</h3>
              <p className="text-sm text-gray-500">25 April 2023</p>
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
          <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md">
            Read More
          </button>
          <button className="px-4 py-2 text-white bg-gray-500 rounded-md">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
