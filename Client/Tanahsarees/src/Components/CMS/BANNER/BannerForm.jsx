import { useState } from "react";
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

  return (
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
          <div className="pt-5 pb-5 w-[100vw] mt-10 lg:mt-70 flex flex-col justify-center items-center">
            <p className="text-center text-2xl overflow-hidden font-Montserrat">
              Add your banner
            </p>
          </div>
          <Form className="space-y-4 flex flex-col justify-center items-center pb-5">
            <div>
              <label className="block">Title</label>
              <Field name="text" className="border p-2 w-[95vw] lg:w-[60vw]" />
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
  );
};

export default BannerForm;
