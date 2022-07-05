import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 max-w-7xl mx-auto flex justify-between">
      <div className="flex items-center space-x-5">
        <Link href={"/"}>
          <h1 className="font-['Poppins'] text-4xl font-bold cursor-pointer">
            Pro Blog
          </h1>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign in</h3>
        <h3 className="border py-2 px-4 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
