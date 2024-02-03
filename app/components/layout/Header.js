import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-primary text-2xl font-semibold">
        Pizza Store
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link href="/">Home</Link>
        <Link href="#">Menu</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#" className=" text-gray-600 px-8 py-2 pr-0 rounded-full">
          Login
        </Link>
        <Link
          href="/register"
          className="bg-primary text-white px-8 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
