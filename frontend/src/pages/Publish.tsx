import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content: description },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Failed to publish post:", error);
    }
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Title"
          />

          {/* Text Editor */}
          <TextEditor onChange={(e) => setDescription(e.target.value)} />

          {/* Publish Button */}
          <button
            onClick={handlePublish}
            className="mt-4 w-full py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-200"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-4">
      <label htmlFor="editor" className="sr-only">
        Write your article
      </label>
      <textarea
        id="editor"
        rows={8}
        onChange={onChange}
        className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 
        focus:outline-none"
        placeholder="Write an article..."
        required
      />
    </div>
  );
}
