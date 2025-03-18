import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition-transform transform hover:-translate-y-1 w-full max-w-screen-md cursor-pointer">
        {/* Header Section */}
        <div className="flex items-center mb-4">
          <Avatar name={authorName} />
          <div className="ml-3">
            <div className="text-sm font-semibold text-gray-800">
              {authorName}
            </div>
            <div className="text-xs text-gray-500">{publishedDate}</div>
          </div>
        </div>

        {/* Blog Content */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 truncate">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>

        {/* Footer Section */}
        <div className="text-gray-500 text-sm flex items-center">
          <span>{`${Math.ceil(content.length / 100)} minute(s) read`}</span>
          <Circle className="mx-2" />
          <span className="text-blue-600 hover:underline">Read more</span>
        </div>
      </div>
    </Link>
  );
};

export function Circle({ className }: { className?: string }) {
  return (
    <div className={`h-2 w-2 rounded-full bg-gray-500 ${className}`}></div>
  );
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-blue-500 rounded-full text-white ${
        size === "small" ? "w-8 h-8 text-sm" : "w-12 h-12 text-lg"
      }`}
    >
      {name[0].toUpperCase()}
    </div>
  );
}
