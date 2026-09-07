import React, { useEffect, useState } from "react";
import { Logo } from "../index";
import { NavLink, Link, useNavigate } from "react-router";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { initFlowbite } from "flowbite";

function Header() {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
      initFlowbite()
    },[navigate])

  const[userData,setUserData]=useState("")
  useEffect(()=>{
    authService.authenticationState().then((data)=>setUserData(data))
  },[navigate])

  const LogoutHandler=()=>{
    authService.logoutAccount().then(()=>dispatch(logout())).finally(()=>navigate("/login"))
  }
  

  const navItems = [
    {
      name: "Dashboard",
      slug: "/",
      active: true,
    },
    {
      name: "My Tasks",
      slug: "/my-tasks",
      active: true,
    },
  ];

  return (
    <header className="py-2 shadow bg-blue-100">
      <nav className="flex">
        <div className="mx-5">
          <Link to="/">
          <Logo className="w-12 rounded-full" />
          </Link>
        </div>

        <ul className="flex flex-row flex-wrap items-center justify-center ml-auto">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({isActive})=>`inline-bock px-6 py-2 duration-200  rounded-full font-semibold hover:bg-neutral-tertiary-medium ${isActive? "text-amber-700 " :"text-black" }`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ),
          )}
        </ul>

        <div className="ml-auto flex justify-center items-center">
          <button
            id="avatarButton"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
          >
            <svg
              className="w-11 h-11 text-gray-600 opacity-60 cursor-pointer mx-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            id="userDropdown"
            className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-75"
          >
            <div className="px-4 py-3 border-b border-default-medium text-sm text-heading">
              <div className="font-medium">{userData.name}</div>
              <div className="truncate">{userData.email}</div>
            </div>

            <ul
              className="p-2 text-sm text-body font-medium"
              aria-labelledby="avatarButton"
            >
              <li>
                <button className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md text-start">
                  Profile
                </button>
              </li>

              <li>
                <button className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md text-start">
                  Settings
                </button>
              </li>

              <li>
                <button className="block w-full p-2 hover:bg-neutral-tertiary-medium text-fg-danger rounded-md text-start" 
                
                onClick={LogoutHandler}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
