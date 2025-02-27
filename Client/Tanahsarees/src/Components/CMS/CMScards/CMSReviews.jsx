/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const CMSReviews = () => {
  const { change } = useContext(AppContext);
  const [addReview, setAddReview] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      image: "/Sarees/saree1.jpg",
      name: "Ananya Mehta ⭐⭐⭐⭐⭐",
      review:
        "Absolutely loved the silk saree I purchased from TanahSarees! The fabric is so soft, and the intricate zari work is stunning. Perfect for festive occasions. Highly recommend!",
    },
    {
      id: 2,
      image: "/Sarees/saree2.jpg",
      name: "Priya Sharma ⭐⭐⭐⭐",
      review:
        "I am thrilled to say that I have received a beautiful silk saree from TanahSarees. The fabric is soft and the design is intricate. Highly recommend this brand!",
    },
    {
      id: 3,
      image: "/Sarees/saree3.jpg",
      name: "Radhika Iyer ⭐⭐⭐⭐",
      review:
        "The fabric is soft, and the design is intricate. I would highly recommend this brand to anyone looking for a beautiful silk saree.",
    },
  ]);

  const [editingReview, setEditingReview] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [newReview, setNewReview] = useState({
    name: "",
    image: "",
    review: "",
  });

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

  const handleAddReview = () => {
    if (!newReview.name || !newReview.image || !newReview.review) return;
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setNewReview({ name: "", image: "", review: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full p-6 mt-[30vh]">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">{review.name}</h3>
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
        ))}
      </div>
      <button
        className={`p-2 mt-9 ml-[90%] rounded-md ${
          addReview ? "bg-[#da4d0c] text-white" : "bg-[#F7D9CB]"
        }`}
        onClick={() => setAddReview(!addReview)}
      >
        {addReview ? "Cancel Review" : "Add Review"}
      </button>
      {addReview && (
        <div className="mt-6 p-4 border rounded-lg bg-white shadow-md">
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
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded-md mb-2"
            onChange={handleImageUpload}
          />
          {newReview.image && (
            <img
              src={newReview.image}
              alt="Preview"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
          )}
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
    </div>
  );
};

export default CMSReviews;
