import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
  const navItem = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem.map((item) => (
                <Link href={item.path} key={item.path}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href={"/"}>
            <Image src="/assets/logo.svg" alt="logo" width={60} height={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 space-x-6">
            {
                navItem.map((item) => (
                <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>
                    {item.name}
                </Link>
                ))
            }
          </div>
        </div>
        <div className="navbar-end">
            <div className="flex space-x-3 items-center">
                <MdOutlineShoppingCart />
                <IoMdSearch />
                <a className="btn btn-primary btn-outline">Appointment</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
