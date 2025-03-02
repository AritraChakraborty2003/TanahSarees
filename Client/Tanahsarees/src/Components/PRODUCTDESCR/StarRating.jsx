import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
// import { AppContext } from "../../AppContext/AppContext";

const StarRating = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: "",
    file: null,
  });

  // UseHTTPRequest automatically triggers when httpTrigger changes
  const apiResponse = UseHTTPRequest("/testimonials", "POST", formData);

  const handleRating = (rate) => {
    setFormData((prevData) => ({ ...prevData, rating: rate }));
  };

  const handleReviewChange = (e) => {
    setFormData((prevData) => ({ ...prevData, review: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, file: file }));
    }
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Rating onClick={handleRating} SVGstyle={{ display: "inline" }} />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="p-2 border-1 hover:bg-gray-50 cursor-pointer"
      />

      <textarea
        className="border p-3 w-[100%] hover:bg-gray-50 cursor-pointer"
        name="review"
        placeholder="Write your review..."
        value={formData.review}
        onChange={handleReviewChange}
      ></textarea>

      <button
        className="p-3 border w-[50%] hover:bg-[#262424ec] hover:text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {apiResponse && <p>Response: {JSON.stringify(apiResponse)}</p>}
    </div>
  );
};

export default StarRating;
