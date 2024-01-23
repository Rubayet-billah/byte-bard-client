import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <h3 className="text-2xl font-bold">Byte Bard</h3>
      <ul className="flex gap-5">
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
      </ul>
    </div>
  );
};

export default Header;
