import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const role: "user" | "admin" = "admin";

  return (
    <div className="navbar bg-neutral text-neutral-content">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                  {role === "admin" ? (
                    <li>
                      <Link href="/dashboard/admin">Admin</Link>
                    </li>
                  ) : role === "user" ? (
                    <li>
                      <Link href="/dashboard/user">User</Link>
                    </li>
                  ) : null}
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 text-black">
                {role === "admin" ? (
                  <li>
                    <Link href="/dashboard/admin">Admin</Link>
                  </li>
                ) : role === "user" ? (
                  <li>
                    <Link href="/dashboard/user">User</Link>
                  </li>
                ) : null}
              </ul>
            </details>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
