/* eslint-disable react/prop-types */
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddCatalogue = ({ onSubmit }) => {
  const [preview, setPreview] = useState(null);

  // Validation Schema
  const validationSchema = Yup.object({
    sname: Yup.string().required("Product name is required"),
    type: Yup.string().required("Product type is required"),
    price: Yup.number()
      .positive("Price must be positive")
      .required("Price is required"),
    file: Yup.mixed().required("Product photo is required"),
    material: Yup.string().required("Material is required"),
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
    occasion: Yup.string()
      .nullable()
      .when("isOccasion", {
        is: "yes",
        otherwise: (schema) => schema.notRequired().nullable(),
      }),
    topSelling: Yup.string().required("Please select if it's top-selling"),
    rating: Yup.number()

      .positive("rating must be positive")
      .max(5, "Discount cannot be more than 5")
      .min(1, "rating must not be less than 1")
      .required("Discount is required when offer is Yes"),
  });

  return (
    <div className="flex justify-center items-center p-4">
      <Formik
        initialValues={{
          sname: "",
          type: "",
          price: "",
          file: null,
          material: "",
          colour: "",
          isOffer: "no",
          discount: "",
          isOccasion: "no",
          topSelling: "no",
          ocassion: "",
          rating: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const formData = new FormData();
          for (let key in values) {
            formData.append(key, values[key]);
          }
          // console.log("Form Submitted: ", values);
          onSubmit && onSubmit(values);
          resetForm();
          setPreview(null);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="max-w-4xl w-full p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-center mb-4">
              Add New Product
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block font-medium">Product Name</label>
                <Field name="sname" className="border p-2 w-full" />
                <ErrorMessage
                  name="sname"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block font-medium">Type</label>
                <Field name="type" className="border p-2 w-full" />
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium">Price</label>
                <Field
                  name="price"
                  type="number"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block font-medium">Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                    setPreview(
                      URL.createObjectURL(event.currentTarget.files[0])
                    );
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
                  name="file"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Material */}
              <div>
                <label className="block font-medium">Material</label>
                <Field name="material" className="border p-2 w-full" />
                <ErrorMessage
                  name="material"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Colour */}
              <div>
                <label className="block font-medium">Colour</label>
                <Field name="colour" className="border p-2 w-full" />
                <ErrorMessage
                  name="colour"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            {/* Select Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Top selling */}
              <div>
                <label className="block font-medium">Top Selling?</label>
                <Field
                  as="select"
                  name="topSelling"
                  className="border p-2 w-full"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </Field>
              </div>
              {/* Is Offer */}
              <div>
                <label className="block font-medium">Is Offer?</label>
                <Field as="select" name="isOffer" className="border p-2 w-full">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </Field>
              </div>

              {/* Discount */}
              {values.isOffer === "yes" && (
                <div>
                  <label className="block font-medium">% Discount</label>
                  <Field
                    name="discount"
                    type="number"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              )}

              {/* Is Occasion */}
              <div>
                <label className="block font-medium">Is Occasion?</label>
                <Field
                  as="select"
                  name="isOccasion"
                  className="border p-2 w-full"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </Field>
              </div>
              {values.isOccasion === "yes" && (
                <div>
                  <label className="block font-medium">Occasion</label>
                  <Field
                    name="occasion"
                    type="text"
                    className="border p-1.5 w-full"
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Rating */}
              <div>
                <label className="block font-medium">Rating</label>
                <Field as="select" name="rating" className="border p-2 w-full">
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

export default AddCatalogue;
