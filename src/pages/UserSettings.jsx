import React from "react";

import { AuthContext } from "../context/auth";
import moment from "moment";

export default function UserSettings() {
  const { user } = React.useContext(AuthContext);
  return (
    <div className="flex flex-col w-full lg:max-w-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 mx-auto my-12">
      <div className="self-center mb-2 text-3xl font-bold text-black">
        Profile Settings
      </div>
      <div className="p-6 mt-2">
        <div className="flex flex-col mb-2">
          <div className=" relative mb-2">
            <label className="ml-2 mb-2 font-bold text-base">
              Profile Created On
            </label>
            <input
              type="text"
              id="create-account-username"
              className="mb-2 transition ease-in duration-200 flex-1 appearance-none w-full py-2 px-2 text-gray-700 text-base focus:outline-none"
              name="creationDate"
              placeholder="creationDate"
              defaultValue={moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              disabled
            />
          </div>
          <div className=" relative mb-2">
            <label className="ml-2 mb-2 font-bold text-base">Username</label>
            <input
              type="text"
              id="create-account-username"
              className="mb-2 transition ease-in duration-200 bg-gray-200 hover:bg-gray-100 rounded-full border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
              className="mb-2 transition ease-in duration-200 bg-gray-200 hover:bg-gray-100 rounded-full border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
