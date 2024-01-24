"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/create-blog">Add Blog</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/my-blogs">My blogs</Link>
      </li>
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="relative flex items-center justify-between px-6 py-3">
      <h3 className="mb-2 text-2xl font-bold sm:mb-0">Byte Bard</h3>
      <div className="flex flex-col gap-5 sm:flex-row">
        <button
          className="block text-2xl text-blue-500 sm:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
        <ul className={`hidden md:flex gap-5`}>{links}</ul>
        <ul
          className={`${isMobileMenuOpen ? "top-16 right-8" : "-translate-y-60 right-8"} absolute bg-white z-10  px-12 py-2 rounded duration-300 gap-5 md:hidden`}
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;
