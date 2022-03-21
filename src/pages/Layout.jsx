import React from "react";
import { Link } from "react-router-dom";
import { Settings, LogOut, Box, User } from "react-feather";

import { useUser } from "../context/auth";

const Layout = () => {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);

  const Layout = user ? (
    <nav className="hidden lg:flex bg-slate-50 flex-wrap items-center justify-between my-3 w-3/5 mx-auto p-2 font-mono">
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-purple-900 text-xl font-semibold hover:text-purple-600"
          to="/"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              fill="none"
            >
              <g clipPath="url(#a)">
                <path fill="#fff" d="M0 0h48v48H0z" />
                <g filter="url(#b)">
                  <rect y={9} width={48} height={29} rx={3} fill="#CD9FCC" />
                </g>
                <g filter="url(#c)">
                  <rect
                    x={2}
                    y={11}
                    width={45}
                    height={17}
                    rx={3}
                    fill="#0A014F"
                  />
                </g>
                <path d="M25 25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#E4C2C6" />
              </g>
              <defs>
                <filter
                  id="b"
                  x={-4}
                  y={9}
                  width={56}
                  height={37}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3_9"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3_9"
                    result="shape"
                  />
                </filter>
                <filter
                  id="c"
                  x={-3}
                  y={8}
                  width={55}
                  height={27}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={2} />
                  <feGaussianBlur stdDeviation={2.5} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3_9"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3_9"
                    result="shape"
                  />
                </filter>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
      </div>
      <div className="navbar-menu hidden relative lg:order-3 lg:flex flex-start items-center justify-end w-full lg:w-1/2 lg:text-right">
        <div
          className="flex items-center justify-center h-10 w-10 transition ease-in duration-200 lg:mt-0 hover:bg-gray-200 text-black rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <User size={20} />
        </div>
        {isOpen ? (
          <div className="z-50 absolute top-10 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col justify-center rounded-lg shadow-lg">
              <Link
                to="/profile"
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 flex flex-row items-center justify-between rounded-lg hover:bg-gray-100 hover:cursor-pointer"
              >
                <p>Settings</p>
                <Settings size={14} />
              </Link>
              <Link
                to="/subscriptions"
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 flex flex-row items-center justify-between hover:bg-gray-100 hover:cursor-pointer"
              >
                <p>Dashboard</p>
                <Box size={14} />
              </Link>
              <div className="border-t-2 p-3 flex flex-row hover:bg-gray-100 hover:cursor-pointer">
                <p>Send Feedback</p>
              </div>
              <div className="p-3 flex flex-row items-center justify-between hover:bg-gray-100 hover:cursor-pointer">
                <p>Buy me a coffee</p>
              </div>
              <Link
                to="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                  logout();
                }}
                className="border-t-2 p-4 flex flex-row items-center justify-between hover:bg-gray-100 rounded-lg hover:cursor-pointer"
              >
                <p className="font-bold">Logout</p>
                <LogOut size={14} />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  ) : (
    <nav className="flex bg-slate-50 flex-wrap items-center justify-between my-3 w-3/5 mx-auto p-2 font-mono">
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-purple-900 text-xl font-semibold hover:text-purple-600"
          to="/"
        >
          <div className="flex flex-row items-center justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                  <g filter="url(#b)">
                    <rect y={9} width={48} height={29} rx={3} fill="#CD9FCC" />
                  </g>
                  <g filter="url(#c)">
                    <rect
                      x={2}
                      y={11}
                      width={45}
                      height={17}
                      rx={3}
                      fill="#0A014F"
                    />
                  </g>
                  <path
                    d="M25 25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    fill="#E4C2C6"
                  />
                </g>
                <defs>
                  <filter
                    id="b"
                    x={-4}
                    y={9}
                    width={56}
                    height={37}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3_9"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3_9"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="c"
                    x={-3}
                    y={8}
                    width={55}
                    height={27}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation={2.5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3_9"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3_9"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-fuchsia-900 text-md hover:text-fuchsia-600"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="transition ease-in duration-200 block lg:inline-block mt-4 lg:mt-0 text-md font-semibold bg-gradient-to-tr from-rose-300 via-red-200 to-fuchsia-200 text-white px-4 py-1 hover:scale-90 rounded-full"
          to="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );

  return Layout;
};

export default Layout;
