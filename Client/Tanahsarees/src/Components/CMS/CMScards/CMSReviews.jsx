import { useState, useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

const CMSReviews = () => {
  const { change } = useContext(AppContext);
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

  // Function to handle edit button click
  const handleEditClick = (review) => {
    setEditingReview(review.id);
    setEditedText(review.review);
  };

  // Function to save the edited review
  const handleSaveClick = async (id) => {
    const updatedReviews = reviews.map((review) =>
      review.id === id ? { ...review, review: editedText } : review
    );
    setReviews(updatedReviews);
    setEditingReview(null);

    // API request to save the updated review
    try {
      const response = await fetch(
        "https://your-api-endpoint.com/update-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            updatedReview: editedText,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update review");
      }

      console.log("Review updated successfully!");
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };
  const isMobile = screen.width <= 768 ? true : false;

  return (
    <div
      className="w-full p-6"
      style={{
        paddingTop: `${
          !change
            ? document.getElementById("mainHeader")?.offsetHeight ||
              (isMobile ? "60px" : "280px")
            : isMobile
            ? "60px"
            : "280px"
        }`,

        zIndex: 900,
      }}
    >
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
    </div>
  );
};

export default CMSReviews;
