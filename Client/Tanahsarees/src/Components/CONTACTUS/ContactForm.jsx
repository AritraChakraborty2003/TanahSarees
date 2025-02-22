import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
export default function ContactForm() {
  const { change } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/contact", data);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="pb-15"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "20%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      <div className="w-[96vw] lg:max-w-lg mx-auto p-6 bg-white shadow-xl border-gray-300 border-[0.15px]  rounded-lg mt-15 font-Montserrat">
        <h2 className="text-4xl lg:text-5xl font-medium text-center text-gray-500 overflow-hidden">
          Contact Us
        </h2>
        <p className="text-sm lg:text-md text-center mt-2  text-gray-500">
          (Please feel free to contact)
        </p>
        {success ? (
          <p className="text-green-500 text-center mt-4">
            Message sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
            <div className="font-poppins">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg  outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg  outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none h-32 resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">Message is required</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#883022] text-white py-3 rounded-lg font-semibold hover:bg-[#c28076] transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
