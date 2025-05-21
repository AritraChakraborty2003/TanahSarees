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
  const { sname, photo } = props;
  const { Loginlargescreen, setLoginlargescreen, loginOpen, setLoginOpen } =
    useContext(AppContext);
  const [checkState, setCheckState] = useState(false);
  const authStatus = useCheckAuth(null, "auth");
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    review: "",
    file: null,
    photo: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!authStatus.isAuthenticated) {
        if (screen.width > 1000) setLoginlargescreen(true);
        else setLoginOpen(true);
      } else if (!authStatus.user.message.name) {
        setCheckState(true);
      } else {
        if (!formData.rating || !formData.review) {
          toast.error("Please fill all the fields");
          return;
        } else {
          const data = new FormData();

          formData.name = authStatus.user.message.name; // To add name

          if (formData.file) {
            data.append("name", authStatus.user.message.name);
            data.append("sname", sname);
            data.append("review", formData.review);
            data.append("rating", formData.rating);
            data.append("file", formData.file);

            const res = await axios.post(
              `${import.meta.env.VITE_APP_API_URL}api/v1/testimonials`,
              data
            );
            if (res.data.message === "Success") {
              toast.success("Review Submitted Successfully");
            } else {
              toast.error("Something went wrong");
            }
          } else {
            // data.append("photo", photo);
            formData.photo = photo;
            const res = await axios.post(
              `${import.meta.env.VITE_APP_API_URL}api/v1/testimonials/reviews`,
              formData
            );
            if (res.data.message === "Success") {
              toast.success("Review Submitted Successfully");
            } else {
              toast.error("Something went wrong");
            }
          }

          // console.log("FormData Contents:");
          // for (let pair of data.entries()) {
          //   console.log(pair[0], pair[1]); // Logs key-value pairs
          // }
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
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

      {/* ✅ Ensure modal is included in JSX */}
      <NameModal checkState={checkState} setCheckState={setCheckState} />
    </div>
  );
};

export default StarRating;
