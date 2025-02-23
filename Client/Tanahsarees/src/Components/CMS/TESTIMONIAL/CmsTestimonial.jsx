/* eslint-disable no-undef */
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CmsTestimonial = () => {
  const [preview, setPreview] = useState(null);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Customer name is required"),
    type: Yup.string().required("Product name is required"),
    price: Yup.number()
      .positive("Rating must be 1 or more")
      .required("Rating is required"),
    photo: Yup.mixed().required("Product photo is required"),
    material: Yup.string().required("Description is required"),
    colour: Yup.string().required("Colour is required"),
    isOffer: Yup.string().required("Please select an offer status"),
    discount: Yup.number()
      .nullable()
      .when("isOffer", {
        is: "yes",
        then: (schema) =>
          schema
            .positive("Discount must be positive")
            .max(100, "Discount cannot be more than 100%")
            .required("Discount is required when offer is Yes"),
        otherwise: (schema) => schema.notRequired().nullable(),
      }),
    isOccasion: Yup.string().required("Please select an occasion status"),
    topSelling: Yup.string().required("Please select if it's top-selling"),
  });

  return (
    <div className="flex justify-center items-center p-6 mb-10">
      <Formik
        initialValues={{
          name: "",
          type: "",
          price: "",
          photo: null,
          material: "",
          colour: "",
          isOffer: "no",
          discount: "",
          isOccasion: "no",
          topSelling: "no",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const formData = new FormData();
          for (let key in values) {
            formData.append(key, values[key]);
          }
          console.log("Form Submitted: ", values);
          onSubmit && onSubmit(values);
          resetForm();
          setPreview(null);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="max-w-4xl w-full p-6 font-Montserrat bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold  text-center mb-4">
              Add New Review
            </h2>

            {/* Grid Layout */}

            {/* Customer Name */}
            <div>
              <label className="block font-medium">Customer Name</label>
              <Field name="name" className="border p-2 w-full" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Product name */}
            <div>
              <label className="block font-medium">Product Name</label>
              <Field name="type" className="border p-2 w-full" />
              <ErrorMessage
                name="type"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* RATING */}

            {/* Photo */}
            <div>
              <label className="block font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("photo", event.currentTarget.files[0]);
                  setPreview(URL.createObjectURL(event.currentTarget.files[0]));
                }}
                className="border p-2 w-full"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-20 h-20 mt-2 object-cover"
                />
              )}
              <ErrorMessage
                name="photo"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium">Description</label>
              <Field name="material" className="border p-2 w-full" />
              <ErrorMessage
                name="material"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Select Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Rating */}
              <div>
                <label className="block font-medium">Rating</label>
                <Field as="select" name="Rating" className="border p-2 w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Field>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#F58B74] text-white p-2 rounded-lg hover:bg-[#f19884] transition mt-6 cursor-pointer"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CmsTestimonial;
