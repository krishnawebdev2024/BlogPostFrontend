import { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [blogPost, setBlogPost] = useState("");
  const date = new Date().toISOString();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, title, image_url, blogPost });
    axios
      .post(`http://localhost:3000/api/v1/BlogPosts`, {
        date,
        title,
        image_url,
        blogPost,
      })
      .then((response) => {
        console.log("Post successful:", response.data);
      })
      .catch((error) => {
        console.error("There was an error posting the blog:", error);
      });
  };

  const handleReset = () => {
    setTitle("");
    setImage_url("");
    setBlogPost("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-8 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Create a New Blog Post
      </h1>
      <div className="mb-6">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Date:</label>
        <span className="text-gray-600">
          {new Date().toLocaleDateString("en-US")}
        </span>
      </div>
      <div className="mb-6">
        <label
          htmlFor="image_url"
          className="block text-gray-700 font-medium mb-2"
        >
          Background Image URL:
        </label>
        <input
          type="text"
          id="image_url"
          required
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
          className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="blog" className="block text-gray-700 font-medium mb-2">
          Blog Content:
        </label>
        <textarea
          id="blog"
          required
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
          className="textarea textarea-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-400 min-h-48"
        />
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
