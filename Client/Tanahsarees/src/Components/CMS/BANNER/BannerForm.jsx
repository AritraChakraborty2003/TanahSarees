/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  text: Yup.string().required("Text is required"),
  bannerType: Yup.string().required("Banner type is required"), // Validate bannerType
  image: Yup.mixed().required("Image is required"),
});

const BannerForm = () => {
  const [preview, setPreview] = useState(null);
  const [addbanner, setAddBanner] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://apis.tanahsarees.com/api/v1/banners"
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/banners`
        );

        console.log(response);
        setData(response.data); // Axios already parses JSON
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);
  const handleRemove = async (itemTitle) => {
    try {
      const response = await axios.delete(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/v1/banners?title=${encodeURIComponent(itemTitle)}`
      );

      if (response.status === 200) {
        toast.success("Banner deleted successfully!");
        setRefresh((prev) => !prev); // ✅ Toggle refresh state to trigger useEffect
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong...");
    }
  };

  return (
    <>
      {addbanner ? (
        <>
          <div className="w-[100vw] flex justify-end">
            {" "}
            <button
              className="p-1.5 lg:p-2 mr-10 border-2 mt-10 lg:mt-70 w-25 lg:w-40 text-xs lg:text-lg rounded bg-green-500 cursor-pointer  text-white border-gray-500 hover:bg-green-600 "
              onClick={() => {
                setAddBanner(false);
              }}
            >
              View Banner
            </button>
          </div>
          <div>
            <Formik
              initialValues={{ text: "", bannerType: "", image: null }} // Add bannerType
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const formData = new FormData();
                formData.append("title", values.text);
                formData.append("bannerType", values.bannerType); // Append bannerType
                formData.append("file", values.image);

                try {
                  const response = await axios.post(
                    `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/banners`,
                    formData,
                    {
                      headers: { "Content-Type": "multipart/form-data" },
                    }
                  );
                  if (response.data.message === "success") {
                    toast.success("Banner added successfully!");
                    setRefresh((prev) => !prev);
                    resetForm();
                    setPreview(null); // Reset preview on success
                  }
                } catch (error) {
                  console.error("Error:", error);
                  toast.error("Failed to upload banner.");
                }
                setSubmitting(false);
              }}
            >
              {({ setFieldValue }) => (
                <>
                  <div className="pt-5 pb-5 w-[100vw]  flex flex-col justify-center items-center">
                    <p className="text-center text-2xl overflow-hidden font-Montserrat">
                      Add your banner
                    </p>
                  </div>
                  <Form className="space-y-4 flex flex-col justify-center items-center pb-5">
                    <div>
                      <label className="block">Title</label>
                      <Field
                        name="text"
                        className="border p-2 w-[95vw] lg:w-[60vw]"
                      />
                      <ErrorMessage
                        name="text"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label className="block">Select Banner Type</label>
                      <Field
                        as="select"
                        name="bannerType"
                        className="border p-2 w-[95vw] lg:w-[60vw]"
                      >
                        <option value="">Select</option>
                        <option value="mobile">Mobile Banner</option>
                        <option value="laptop">Laptop Banner</option>
                      </Field>
                      <ErrorMessage
                        name="bannerType"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label className="block">Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("image", file);
                          setPreview(URL.createObjectURL(file));
                        }}
                        className="border p-2 w-[95vw] lg:w-[60vw]"
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {preview && (
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-32 w-32 object-cover mt-2"
                      />
                    )}

                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Submit
                    </button>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </>
      ) : (
        <>
          <div className="w-[100vw] flex justify-end">
            {" "}
            <button
              className="p-1.5 lg:p-2 mr-10 border-2 mt-10 lg:mt-70 w-25 lg:w-40 text-xs lg:text-lg rounded bg-green-500 cursor-pointer  text-white border-gray-500 hover:bg-green-600 "
              onClick={() => {
                setAddBanner(true);
              }}
            >
              Add Banner
            </button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className="mt-10">
            {data &&
              data.map((item, index) => (
                <div className="border-b-2 flex justify-between">
                  <div key={index} className="ml-2 p-2">
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL}${item.image}`}
                      alt={item.title}
                      className="w-30 h-30 object-cover"
                    />
                    <p className=" flex justify-center">Title: {item.title}</p>
                    <p className="flex justify-center">
                      Device: {item.bannerType ? item.bannerType : "NA"}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center">
                    <button
                      className="bg-red-500 p-2 mr-4 rounded"
                      onClick={() => {
                        handleRemove(item.title);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default BannerForm;
