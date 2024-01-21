import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <h3 className="text-2xl font-bold">Byte Bard</h3>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
