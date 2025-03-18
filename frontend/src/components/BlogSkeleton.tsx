import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white max-w-screen-md mx-auto cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-5/6"></div>
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        <div className="mt-6 flex items-center space-x-3">
          <Circle />
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
