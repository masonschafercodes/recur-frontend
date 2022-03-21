import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import moment from "moment";

import pageVariants from "../util/pageVariants";

import formatter from "../util/currencyFormatter";

export default function SubscriptionCard(props) {
  const { id, subscriptionName, price, isSuspended, firstPayment } = props.sub;

  const getMonthsOfset = (date, date2) => {
    const dateDif = new Date(date) - new Date(date2);
    return Math.ceil(dateDif / 2629746000);
  };

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className="relative my-1 w-full lg:w-3/5 mx-auto p-2 sm:p-2 flex flex-col sm:flex-row gap-5 select-none transition ease-in-out hover:cursor-pointer rounded-lg"
    >
      <Link
        to={`/subscriptions/${id}`}
        className="flex flex-col flex-1 gap-5 sm:p-2"
      >
        <div className="flex flex-1 gap-3 transition ease-in-out duration-200 hover:text-gray-600 items-center">
          <div className="p-2 bg-gradient-to-tr from-rose-50 via-red-200 to-fuchsia-200 rounded-[14px] w-12 h-12 hidden 2xl:flex"></div>
          <div className="flex items-center w-full h-12 rounded-2xl">
            {isSuspended ? (
              <h1 className="text-gray-400 text-lg font-semibold">
                {subscriptionName}
              </h1>
            ) : (
              <div className="z-0 flex flex-col justify-center">
                <h1 className="text-lg font-semibold">{subscriptionName}</h1>
                <span className="lg:flex gap-2 text-sm flex items-center">
                  <svg
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="header-shape-gradient"
                        x2="0.35"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="var(--color-stop)" />
                        <stop offset="30%" stopColor="var(--color-stop)" />
                        <stop offset="100%" stopColor="var(--color-bot)" />
                      </linearGradient>
                    </defs>
                    <circle cx="7" cy="7" r="7" className="gradient-bg" />
                  </svg>
                  Due{" "}
                  {moment(firstPayment)
                    .add(getMonthsOfset(Date.now(), firstPayment), "months")
                    .startOf("hour")
                    .fromNow()}
                </span>
              </div>
            )}
            {isSuspended ? (
              <p className="lg:block uppercase bg-gray-200 text-xs font-bold p-1 rounded ml-2">
                inactive
              </p>
            ) : null}
          </div>
          <div className="rounded-2xl">
            <motion.p
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="p-3 font-semibold text-lg"
            >
              {props.selected.monthly
                ? formatter.format(price)
                : props.selected.yearly
                ? formatter.format(price * 12)
                : props.selected.weekly
                ? formatter.format(price / 4)
                : "-"}
            </motion.p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
