import Image from "next/image";
import React from "react";
import carImage from "@/assets/car.jpg";

const BlogCard = () => {
  const imageUrl = "https://placekitten.com/800/400";
  return (
    <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <Image className="object-cover w-full" src={carImage} alt="Blog Image" />
      <div className="p-4">
        <section className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
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
          <div className="bg-green-400 text-white px-2 py-1 rounded-full text-xs w-fit font-bold">
            Technology
          </div>
        </section>
        {/* Blog Title */}
        <h2 className="text-2xl font-bold my-2">Blog Post Title</h2>

        {/* Short Description */}
        <p className="text-gray-700 mb-4">
          Short description or summary of the blog post goes here. You can
          provide a brief overview of the content.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
            Read More
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
