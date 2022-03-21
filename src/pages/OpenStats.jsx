import React from "react";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";

import pageVariants from "../util/pageVariants";

export default function OpenStats() {
  const { loading, error, data } = useQuery(FETCH_SUBSCRIPTIONS_QUERY);
  const [userCount, setUserCount] = React.useState([]);

  if (data) {
      data.getSubscriptions.map((sub) => {
        if (userCount.includes(sub.username)) return null;
        setUserCount([...userCount, sub.username]);
        return null;
      });
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {loading || error ? null : (
        <div className="grid grid-cols-3 w-1/2 px-4 py-8 sm:px-6 md:px-8 lg:px-10 mx-auto my-12">
          <div className="text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-12 rounded-xl shadow-lg w-2/3 mx-auto">
            <h1 className="text-2xl font-bold text-white">
              Total Active Users
            </h1>
            <p className="text-xl font-bold text-white mt-2">{userCount.length}</p>
          </div>
          <div className="text-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-12 rounded-xl shadow-lg w-2/3 mx-auto">
            <h1 className="text-2xl font-bold text-white">
              Total Subscriptions
            </h1>
            <p className="text-xl font-bold text-white mt-2">{data.getSubscriptions.length}</p>
          </div>
          <div className="text-center bg-gradient-to-r from-red-300 via-red-200 to-fuchsia-400 p-12 rounded-xl shadow-lg w-2/3 mx-auto">
            <h1 className="text-2xl font-bold text-white">
              Total Subscriptions
            </h1>
            <p className="text-xl font-bold text-white mt-2">{data.getSubscriptions.length}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

const FETCH_SUBSCRIPTIONS_QUERY = gql`
  query getSubscriptions {
    getSubscriptions {
      id
      username
    }
  }
`;
