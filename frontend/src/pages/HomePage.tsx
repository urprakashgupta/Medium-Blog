import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to the Blogging World
          </h1>
          <p className="text-lg mb-6">
            Explore insightful blogs, share your thoughts, and discover amazing
            stories.
          </p>
          <Link
            to="/blogs"
            className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-full hover:bg-blue-700 hover:text-white"
          >
            Discover Blogs
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Read Authentic Blogs</h3>
            <p className="text-gray-600">
              Discover high-quality blogs from passionate writers across various
              categories.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Share Your Stories</h3>
            <p className="text-gray-600">
              Publish your own articles and connect with a community of readers.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600">
              Follow your favorite writers and get notified about new posts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Blogging Journey Today!
          </h2>
          <Link
            to="/signup"
            className="bg-blue-600 px-6 py-3 font-semibold rounded-full hover:bg-blue-500"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};
