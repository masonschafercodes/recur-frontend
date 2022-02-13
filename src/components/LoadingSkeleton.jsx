import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="bg-white w-1/2 mx-auto p-2 sm:p-4 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
