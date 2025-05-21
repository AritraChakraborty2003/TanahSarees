import { useState } from "react";
import axios from "axios";

const TestUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    review: "",
    customer: "",
    photo: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("review", formData.review);
    data.append("customer", formData.customer);
    data.append("file", formData.photo);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/sarees`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Post uploaded:", res.data);
      alert("Post uploaded successfully!");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="review"
        placeholder="Review"
        value={formData.review}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="customer"
        placeholder="Customer"
        value={formData.customer}
        onChange={handleChange}
        required
      />
      <input type="file" name="photo" onChange={handleFileChange} required />
      <button type="submit">Upload Post</button>
    </form>
  );
};

export default TestUpload;
