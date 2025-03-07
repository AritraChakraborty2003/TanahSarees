/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "react-simple-star-rating";
import { useContext, useState } from "react";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import NameModal from "../MAIN/HEDAERS/MAIN/NameModal";
// import { AppContext } from "../../AppContext/AppContext";

const StarRating = (props) => {
  const { sname } = props;
  const { Loginlargescreen, setLoginlargescreen, loginOpen, setLoginOpen } =
    useContext(AppContext);
  const [checkState, setCheckState] = useState(false);
  const authStatus = useCheckAuth(null, "auth");
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

  const handleSubmit = async () => {
    if (!authStatus.isAuthenticated) {
      if (screen.width > 1000) setLoginlargescreen(true);
      else setLoginOpen(true);
    } else if (!authStatus.user.message.name) {
      <NameModal />;
    } else {
      if (formData.rating || formData.review) {
        toast("Please fill all the fields");
        return;
      } else {
        const data = new FormData();
        data.append("rating", formData.rating);
        data.append("name", authStatus.user.message.name);
        data.append("sname", sname);
        data.append("review", formData.review);
        data.append("file", formData.file);
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/testimonials`,
            data
          );

          if (res.data.message === "Success") {
            toast("Review submitted successfully");
          } else {
            toast("Something went wrong...");
          }
        } catch (err) {
          toast("Something went wrong...");
        }
      }
    }
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
