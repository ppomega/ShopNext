import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="h-full w-full bg-gray-300 dark:bg-gray-800/70 rounded animate-pulse"></div>
      <div className="h-full w-full bg-gray-300 dark:bg-gray-800/70 rounded animate-pulse"></div>
      <div className="h-full w-full bg-gray-300 dark:bg-gray-800/70 rounded animate-pulse"></div>
      <div className="h-full w-full bg-gray-300 dark:bg-gray-800/70 rounded animate-pulse"></div>
      <div className="h-full w-full bg-gray-300 dark:bg-gray-800/70 rounded animate-pulse"></div>
      <div className="h-full w-full bg-gray-300 dark:bg-gray-800/70 rounded animate-pulse"></div>
    </>
  );
};

export default CardSkeleton;
