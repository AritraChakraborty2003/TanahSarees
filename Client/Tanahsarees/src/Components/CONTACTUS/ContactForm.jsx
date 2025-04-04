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
      className="pb-15 flex flex-col justify-center items-center"
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
      <div className="border-[1px] border-gray-200 p-5 w-[96vw] lg:max-w-lg gap-y-5 flex flex-col justify-center rounded-lg shadow-md">
        <a
          href="mailto:Anup91700@gmail.com"
          className="text-sm font-semibold darktxt hover:text-blue-600 transition-all"
        >
          📧 Email: Anup91700@gmail.com
        </a>
        <a
          href="tel:+919170021128"
          className="text-sm font-semibold darktxt hover:text-blue-600 transition-all"
        >
          📞 Phone: +91 91700 21128
        </a>
        <p className="text-sm font-semibold darktxt">
          🏢 Business: Silk Of Banaras
        </p>
      </div>

      <div className="w-[96vw] lg:max-w-lg mx-auto p-6  shadow-xl border-gray-300 border-[0.15px]  rounded-lg mt-15 font-Montserrat">
        <h2 className="text-4xl lg:text-5xl font-medium text-center darktxt overflow-hidden">
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
                className="w-full p-3 border darktxt rounded-lg  outline-none"
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
                className="w-full p-3 border border-[#262424] rounded-lg  outline-none"
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
                className="w-full p-3 border border-[#262424] rounded-lg outline-none h-32 resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">Message is required</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#262424] lighttxt py-3 rounded-lg font-semibold hover:bg-gray-900 cursor-pointer transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
