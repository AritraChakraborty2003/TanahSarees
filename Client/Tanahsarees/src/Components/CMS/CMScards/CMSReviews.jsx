/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import { toast } from "react-toastify";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";

const CMSReviews = () => {
  const { change, setHttpClick } = useContext(AppContext);
  const [addReview, setAddReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState(null);

  const [editingReview, setEditingReview] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: "",
  });
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEditClick = (review) => {
    setEditingReview(review.id);
    setEditedText(review.review);
  };

  const handleSaveClick = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, review: editedText } : review
      )
    );
    setEditingReview(null);
  };

  // making post api call
  const res = UseHTTPRequest(null, "/testimonials", "POST", reviewData);

  const handleAddReview = () => {
    if (!newReview.name || !file || !newReview.review || !newReview.rating) {
      toast.error("all fields are required!");
      return;
    }
    // setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    console.log(
      newReview.name,
      file,

      newReview.review,
      newReview.rating
    );
    const formData = new FormData();
    formData.append("name", newReview.name);
    formData.append("review", newReview.review);
    formData.append("rating", newReview.rating);
    formData.append("file", file);
    setReviewData(formData);
    setHttpClick(true);
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setNewReview((prev) => ({ ...prev, image: reader.result }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const data = UseHTTPRequest(null, "/testimonials", "GET", "");
  useEffect(() => {
    setReviews(data);
    console.log("fetched");
  }, [setHttpClick, reviews, data]);

  return (
    <div className="w-full p-6 mt-[vh] lg:mt-[30vh]">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Customer Reviews
      </h2>
      <button
        className={`p-2 mt-2 mb-6 ml-[70%] lg:ml-[90%] rounded-md ${
          addReview ? "bg-[#da4d0c] text-white" : "bg-[#F7D9CB]"
        }`}
        onClick={() => setAddReview(!addReview)}
      >
        {addReview ? "Cancel Review" : "Add Review"}
      </button>
      {addReview && (
        <div className=" p-4 border rounded-lg mb-5 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-3">Add a New Review</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded-md mb-2"
            value={newReview.name}
            onChange={(e) =>
              setNewReview({ ...newReview, name: e.target.value })
            }
          />
          <select
            name="Rating"
            id="rating"
            className="p-2 border w-[50%] mb-2 rounded"
            onChange={(e) =>
              setNewReview({ ...newReview, rating: e.target.value })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            Rating
          </select>
          <input
            name="files"
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded-md mb-2"
            onChange={
              // handleImageUpload();
              handleChange
            }
          />

          <textarea
            placeholder="Review"
            className="w-full border p-2 rounded-md mb-2"
            value={newReview.review}
            onChange={(e) =>
              setNewReview({ ...newReview, review: e.target.value })
            }
          />
          <button
            onClick={handleAddReview}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
          >
            Add Review
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <img
                src={`${import.meta.env.VITE_APP_API_URL_TEST}` + review.photo}
                alt={review.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-bold">
                {review.name + review.rating}
              </h3>
              {editingReview === review.id ? (
                <textarea
                  className="w-full border p-2 rounded-md"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
              ) : (
                <p className="text-gray-700 mt-2">{review.review}</p>
              )}
              <div className="flex justify-between mt-3">
                {editingReview === review.id ? (
                  <button
                    onClick={() => handleSaveClick(review.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(review)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="flex w-[95vw] h-[100%] justify-center items-center">
              <p>No data Found ... </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CMSReviews;
