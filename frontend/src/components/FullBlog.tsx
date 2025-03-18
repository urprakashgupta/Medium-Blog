import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="flex justify-center py-12">
        <div className="grid grid-cols-12 px-8 w-full max-w-screen-xl gap-8">
          {/* Blog Content Section */}
          <div className="col-span-8 bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              Posted on 2nd December 2023
            </p>
            <article className="leading-8 text-gray-700 text-lg">
              {blog.content}
            </article>
          </div>

          {/* Author Section */}
          <div className="col-span-4 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              About the Author
            </h2>
            <div className="flex items-center mb-4">
              <Avatar size="big" name={blog.author.name || "Anonymous"} />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {blog.author.name || "Anonymous"}
                </h3>
                <p className="text-sm text-gray-500">
                  "Bringing words to life with authentic storytelling."
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              Random catch phrase about the author's ability to grab the user's
              attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
