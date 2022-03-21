import React from "react";
import { useUser } from "../context/auth";

export default function UserSettings() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex flex-col w-full lg:max-w-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 mx-auto my-12">
      <div className="self-center mb-2 text-3xl font-bold text-black">
        Profile Settings
      </div>
      <div className="p-6 mt-2">
        <div className="flex flex-col mb-2">
          <div className=" relative mb-2">
            <label className="ml-2 mb-2 font-bold text-base">Username</label>
            <input
              type="text"
              id="create-account-username"
              className="mb-2 transition ease-in duration-200 hover:bg-gray-100 rounded-full border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="username"
              placeholder="username"
              defaultValue={user.username}
              disabled
            />
          </div>
          <div className=" relative ">
            <label className="ml-2 mb-2 font-bold text-base">Email</label>
            <input
              type="text"
              id="create-account-password"
              className="mb-2 transition ease-in duration-200 hover:bg-gray-100 rounded-full border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="email"
              placeholder="email"
              defaultValue={user.email}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
