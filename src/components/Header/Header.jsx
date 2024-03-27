import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-books">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages-to-read">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/new-books">New Books</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#23BE0A] lg:hidden"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl hover:text-[#23BE0A] hover:border-[#23BE0A]">
          Reading <span className="text-[#23BE0A]">Reflections</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-lg px-6 bg-[#23BE0A] hover:bg-[#23BE0A] text-white mr-4">
          Sign In
        </a>
        <a className="btn text-lg bg-[#59C6D2] px-6 hover:bg-[#23BE0A] text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};
export default Header;
