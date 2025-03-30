/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CmsVideoCard = () => {
  const [viewMode, setViewMode] = useState("view"); // "view" or "add"
  const [gifs, setGifs] = useState([]);
  const [gifFile, setGifFile] = useState(null);
  const [title, setTitle] = useState("");
  const [refresh, setRefresh] = useState(false);

  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await axios.get(`${API_URL}api/v1/videos`);

        setGifs(response.data);
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    };
    fetchGifs();
  }, [refresh]);

  const handleFileChange = (e) => {
    setGifFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!gifFile || !title) {
      return toast.error("Please enter a title and select a GIF file");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", gifFile); // ✅ Change "gif" -> "file"

    try {
      const response = await axios.post(`${API_URL}api/v1/videos`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        // ✅ Change status check to 201
        toast.success("GIF uploaded successfully!");
        setGifFile(null);
        setTitle("");
        setRefresh((prev) => !prev);
      }
    } catch (error) {
      console.error("Error uploading GIF:", error);
      toast.error("Something went wrong...");
    }
  };

  const handleDelete = async (gifId) => {
    try {
      const response = await axios.delete(`${API_URL}api/v1/videos/${gifId}`);
      if (response.status === 200) {
        toast.success("GIF deleted successfully!");
        setRefresh((prev) => !prev);
      }
    } catch (error) {
      console.error("Error deleting GIF:", error);
      toast.error("Something went wrong...");
    }
  };

  return (
    <div className="p-4 mt-70">
      <div className="w-[100%] flex justify-end">
        <button
          className="bg-blue-500 text-white rounded p-2 ml-20 cursor-pointer hover:bg-blue-600"
          onClick={() => setViewMode(viewMode === "view" ? "add" : "view")}
        >
          {viewMode === "view" ? "Add GIF" : "View GIFs"}
        </button>
      </div>

      {viewMode === "view" ? (
        <div className="mt-4 pt-3 border-t-1 ">
          <div className="w-[100%] flex justify-center items-center">
            <h2 className="text-3xl font-semibold text-gray-500">Added GIFs</h2>
          </div>

          {gifs.length === 0 ? (
            <div className="mt-10 flex justify-center items-center">
              <p>⃠ No GIFs available.</p>
            </div>
          ) : (
            <div className=" flex justify-center items-center mt-5 mb-5 gap-4">
              {gifs.map((gif) => (
                <div
                  key={gif._id}
                  className="relative border-1 rounded w-50 h-95   overflow-hidden"
                >
                  <img
                    src={encodeURI(gif.url)}
                    alt={gif.title}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-gray-700 font-semibold mt-1  ">
                    {gif.title}
                  </p>
                  <button
                    onClick={() => handleDelete(gif._id)}
                    className="absolute top-0 right-0 text-white p-1 cursor-pointer"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-y-6 justify-center items-center">
          <h2 className="text-3xl font-semibold text-gray-500">Upload a GIF</h2>
          <input
            className="border-2 p-3 lg:w-[60%] cursor-pointer hover:bg-gray-50"
            type="text"
            placeholder="Enter GIF Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border-2 p-3 lg:w-[60%] cursor-pointer hover:bg-gray-50"
            type="file"
            accept="image/gif"
            onChange={handleFileChange}
          />
          <button
            className="bg-green-500 pt-2 pl-3 pr-3 pb-2 rounded text-white cursor-pointer hover:bg-green-600"
            onClick={handleUpload}
            disabled={!gifFile || !title}
          >
            Upload GIF
          </button>
        </div>
      )}
    </div>
  );
};

export default CmsVideoCard;
