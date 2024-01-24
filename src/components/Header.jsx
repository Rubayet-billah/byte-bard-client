"use client";
import { clearUser } from "@/redux/features/user/userSlice";
import constants from "@/utils/constants";
import { removeFromLocalStorage } from "@/utils/helperFunctions";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    removeFromLocalStorage(constants.authKey);
    dispatch(clearUser());
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      {user && (
        <>
          <li>
            <Link href="/create-blog">Add Blog</Link>
          </li>
          <li>
            <Link href="/my-blogs">My blogs</Link>
          </li>
        </>
      )}
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
      <li>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <button
            onClick={() => handleLogout()}
            className="px-3 py-1 font-bold text-white bg-red-600 rounded"
          >
            Logout
          </button>
        )}
      </li>
    </>
  );

  return (
    <div className="relative flex items-center justify-between py-3">
      <h3 className="mb-2 text-2xl font-bold sm:mb-0">Byte Bard</h3>
      <div className="flex flex-col gap-5 sm:flex-row">
        <button
          className="block text-2xl text-blue-500 sm:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
        <ul className={`hidden md:flex gap-5 md:items-center`}>{links}</ul>
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
