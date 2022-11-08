import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { fireAuthContext } from "../../Context/Context";

const Header = () => {
  const { user, userSingOut } = useContext(fireAuthContext);

  const handleSignOut = () => {
    userSingOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home" className="btn">
                Home
              </Link>
            </li>
            {/* <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
            <li>
              <Link to="/services" className="btn">
               Service
              </Link>
            </li>

            <li>
              <Link to="/blog" className="btn" >
               Blog
              </Link>
            </li>
          </ul>
        </div>
        <img className=" ml-5 w-7 h-7" src="logo.png" alt="logo"></img>
        <a className="btn btn-ghost normal-case text-xl">Spark Photography</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home" className="btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="btn">
             Services
            </Link>
          </li>

          <li>
            <Link to="/blog" className="btn">
            Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <Link to="/myreview" className="btn">
              My Review
            </Link>
            <Link to="/addservice" className="btn">
              Add service
            </Link>
            <Link onClick={handleSignOut} className="btn">
              Log out
            </Link>
            {/* <Link  to='/addservice' ><a className="btn">Add service</a></Link>
                <Link  onClick={handleSignOut} ><a className="btn">Log out</a></Link> */}
          </>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
        {/* <Link to='/login'>
    <a className="btn">Login</a>
    </Link>
    <Link to='/register'>
    <a className="btn">Register</a>
    </Link> */}
      </div>
    </div>
  );
};

export default Header;
