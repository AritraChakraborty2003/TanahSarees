/* eslint-disable react/prop-types */
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddCatalogue = ({ onSubmit }) => {
  const [preview, setPreview] = useState(null);
  const [additionalPreviews, setAdditionalPreviews] = useState([]);

  // Validation Schema
  const validationSchema = Yup.object({
    sku: Yup.string().required("SKU is required"),
    sname: Yup.string().required("Product name is required"),
    type: Yup.string().required("Product type is required"),
    price: Yup.number()
      .positive("Price must be positive")
      .required("Price is required"),
    file: Yup.mixed().required("Product photo is required"),
    additionalImages: Yup.array().max(4, "You can upload up to 4 images"),
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
          sku: "",
          sname: "",
          type: "",
          price: "",
          file: null,
          additionalImages: [],
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
            if (key === "additionalImages") {
              // formData.append(`files[]`, values.additionalImages);
              // Append multiple images correctly
              values.additionalImages.forEach((file) => {
                formData.append(`files[]`, file);
              });
            } else {
              formData.append(key, values[key]);
            }
          }

          // Debugging
          // console.log("Form Submitted: ", values);
          // console.log("FormData Entries:");
          // for (let pair of formData.entries()) {
          //   console.log(pair[0], pair[1]);
          // }

          // Submit form data
          onSubmit && onSubmit(formData);

          resetForm();
          setPreview(null);
          setAdditionalPreviews([]); // Clear additional image previews
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="max-w-4xl w-full p-6 light darktxt shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-center mb-4">
              Add New Product
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block font-medium">SKU</label>
                <Field name="sku" className="border p-2 w-full" />
                <ErrorMessage
                  name="sku"
                  component="div"
                  className="text-red-500"
                />
              </div>
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
                <Field as="select" name="type" className="border p-2 w-full">
                  <option value="">Select</option>
                  <option value="floral">Floral</option>
                  <option value="paisley">Paisley</option>
                  <option value="sequin">Sequin</option>
                  <option value="printed">Printed</option>
                  <option value="embroidered">Embroidered</option>
                  <option value="solid">Solid/Plain</option>
                  <option value="striped">Striped</option>
                  <option value="checkered">Checkered</option>
                  <option value="polka-dot">Polka Dot</option>
                  <option value="animal-print">Animal Print</option>
                </Field>
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
              {/* Additinozl images */}
              <div>
                <label className="block font-medium">
                  Additional Images (Max 4)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => {
                    const selectedFiles = Array.from(event.currentTarget.files);
                    const existingFiles = values.additionalImages || [];

                    // Combine new and old images, ensuring max 4
                    const updatedFiles = [
                      ...existingFiles,
                      ...selectedFiles,
                    ].slice(0, 4);
                    setFieldValue("additionalImages", updatedFiles);

                    // Generate previews
                    const updatedPreviews = updatedFiles.map((file) =>
                      typeof file === "string"
                        ? file
                        : URL.createObjectURL(file)
                    );
                    setAdditionalPreviews(updatedPreviews);
                  }}
                  className="border p-2 w-full"
                />

                {/* Preview Section */}
                <div className="flex mt-2 gap-2 flex-wrap">
                  {additionalPreviews.map((src, index) => (
                    <div key={index} className="relative">
                      <img
                        src={src}
                        alt={`Preview ${index}`}
                        className="w-20 h-20 object-cover border"
                      />
                    </div>
                  ))}
                </div>

                <ErrorMessage
                  name="additionalImages"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Material */}
              <div>
                <label className="block font-medium">Material</label>
                <Field
                  as="select"
                  name="material"
                  className="border p-2 w-full"
                >
                  <option value="">Select</option>
                  <option value="banarasi">Banarasi Silk</option>
                  <option value="kanjivaram">Kanjivaram Silk</option>
                  <option value="mysore">Mysore Silk</option>
                  <option value="tussar">Tussar Silk</option>
                  <option value="chanderi">Chanderi Silk</option>
                  <option value="baluchari">Baluchari Silk</option>
                  <option value="patola">Patola Silk</option>
                  <option value="ikkat">Ikkat Silk</option>
                  <option value="paithani">Paithani Silk</option>
                  <option value="muga">Muga Silk</option>
                  <option value="katan">Katan Silk</option>
                  <option value="crepe">Crepe Silk</option>
                  <option value="georgette">Georgette Silk</option>
                  <option value="tissue">Tissue Silk</option>
                  <option value="raw_silk">Raw Silk (Paat)</option>
                  <option value="dupion">Dupion Silk</option>
                  <option value="organza">Organza Silk</option>
                  <option value="ghicha">Ghicha Silk</option>
                  <option value="mansoori">Mansoori Silk</option>
                  <option value="matka">Matka Silk</option>

                  {/* <!-- Bonus Silks --> */}
                  <option value="bhagalpuri">Bhagalpuri Silk</option>
                  <option value="eri">Eri Silk</option>
                  <option value="noil">Noil Silk</option>
                  <option value="china">China Silk</option>
                  <option value="orange">Orange Silk</option>
                  <option value="rawmango">Raw Mango Silk</option>
                </Field>
              </div>

              {/* Colour */}
              <div>
                <label className="block font-medium">Colour</label>
                <Field as="select" name="colour" className="border p-2 w-full">
                  <option value="">Select</option>
                  <option value="">Select</option>
                  <option value="red">Red</option>
                  <option value="crimson">Crimson</option>
                  <option value="maroon">Maroon</option>
                  <option value="pink">Pink</option>
                  <option value="blush_pink">Blush Pink</option>
                  <option value="rose_gold">Rose Gold</option>
                  <option value="peach">Peach</option>
                  <option value="orange">Orange</option>
                  <option value="coral">Coral</option>
                  <option value="yellow">Yellow</option>
                  <option value="mustard">Mustard</option>
                  <option value="gold">Gold</option>
                  <option value="green">Green</option>
                  <option value="olive">Olive Green</option>
                  <option value="parrot_green">Parrot Green</option>
                  <option value="sea_green">Sea Green</option>
                  <option value="blue">Blue</option>
                  <option value="navy">Navy Blue</option>
                  <option value="turquoise">Turquoise</option>
                  <option value="teal">Teal</option>
                  <option value="purple">Purple</option>
                  <option value="lavender">Lavender</option>
                  <option value="violet">Violet</option>
                  <option value="grey">Grey</option>
                  <option value="elegant_grey">Elegant Grey</option>
                  <option value="charcoal">Charcoal Grey</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="ivory">Ivory</option>
                  <option value="beige">Beige</option>
                  <option value="cream">Cream</option>
                  <option value="silver">Silver</option>

                  {/* <!-- Additional 15 Colors --> */}
                  <option value="wine">Wine</option>
                  <option value="burgundy">Burgundy</option>
                  <option value="chocolate">Chocolate Brown</option>
                  <option value="rust">Rust</option>
                  <option value="saffron">Saffron</option>
                  <option value="amber">Amber</option>
                  <option value="sky_blue">Sky Blue</option>
                  <option value="baby_pink">Baby Pink</option>
                  <option value="magenta">Magenta</option>
                  <option value="fuchsia">Fuchsia</option>
                  <option value="mint">Mint Green</option>
                  <option value="jade">Jade Green</option>
                  <option value="copper">Copper</option>
                  <option value="bronze">Bronze</option>
                  <option value="platinum">Platinum</option>
                </Field>
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
                    as="select"
                    name="occasion"
                    className="border p-2 w-full"
                  >
                    <option value="">Select</option>
                    <option value="summer_collection">Summer Collection</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="reception">Reception</option>
                    <option value="haldi">Haldi</option>
                    <option value="mehendi">Mehendi</option>
                    <option value="sangeet">Sangeet</option>
                    <option value="festival">Festival</option>
                    <option value="diwali">Diwali</option>
                    <option value="navratri">Navratri</option>
                    <option value="karva_chauth">Karva Chauth</option>
                    <option value="raksha_bandhan">Raksha Bandhan</option>
                    <option value="durga_puja">Durga Puja</option>
                    <option value="bhai_dooj">Bhai Dooj</option>
                    <option value="ganesh_chaturthi">Ganesh Chaturthi</option>
                    <option value="onam">Onam</option>
                    <option value="pongal">Pongal</option>
                    <option value="bihu">Bihu</option>
                    <option value="eid">Eid</option>
                    <option value="christmas">Christmas</option>
                    <option value="new_year">New Year</option>
                    <option value="housewarming">Housewarming</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="baby_shower">Baby Shower</option>
                    <option value="graduation">Graduation</option>
                    <option value="birthday">Birthday</option>
                    <option value="farewell">Farewell</option>
                    <option value="casual">Casual Wear</option>
                    <option value="office">Office/Work Wear</option>
                    <option value="puja">Puja (Religious Ceremony)</option>
                    <option value="bridal">Bridal Wear</option>
                    <option value="bridesmaid">Bridesmaid Saree</option>
                    <option value="reunion">Reunion</option>
                    <option value="gifting">Gifting</option>
                  </Field>

                  <ErrorMessage
                    name="occasion"
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
              className="w-full dark lighttxt p-2 rounded-lg hover:bg-[#f19884] transition mt-6 cursor-pointer"
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
