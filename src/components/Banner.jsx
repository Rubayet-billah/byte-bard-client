import React from "react";
import bannerImage from "@/assets/Banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] overflow-hidden">
      <div className="absolute z-10 w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2">
        <h1 className="text-3xl font-bold">Your Blog Website</h1>
      </div>
      <Image
        src={bannerImage}
        alt="Banner image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
