/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useState } from "react";
import { useAccountDelete } from "../../Utils/useAccountDelete";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import UseHTTPRequest from "../../Utils/useHTTPRequest";

const Profile = () => {
  const authStatus = useCheckAuth(null, "auth");
  const { change, setclickDeleteAccount } = useContext(AppContext);

  const res = useAccountDelete();
  const [name, setName] = useState("John Doe"); // Initial name
  const [email, setEmail] = useState("example@gmail.com"); // Initial name
  const [mobile, setMobile] = useState(""); // Initial number
  const [countryCode, setCountryCode] = useState(""); // Initial country
  const [gender, setGender] = useState(""); // Initial gender
  const [isEditing, setIsEditing] = useState(false); // Controls edit mode

  //--->>Adress code<<----//
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [address1, setAddress1] = useState("");
  const [landmark, setLandmark] = useState("");
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({});

  const { PATCHClick, setPATCHClick } = useContext(AppContext);

  useEffect(() => {
    if (authStatus.isAuthenticated) {
      setName(authStatus.user.message?.name);
      setEmail(authStatus.user.message?.email);

      setMobile(authStatus.user.message?.phone);

      setGender(authStatus.user.message?.gender);

      setCountry(authStatus.user.message?.address?.split(":")[3]);
      setState(authStatus.user.message?.address?.split(":")[2]);
      setDistrict(authStatus.user.message?.address?.split(":")[1]);
      setPincode(authStatus.user.message?.address?.split(":")[4]);
      setAddress1(authStatus.user.message?.address?.split(":")[0]);
      setLandmark(authStatus.user.message?.address?.split(":")[5]);

      if (authStatus.user.message.image) {
        setImage(authStatus.user.message.image);
      }
    }
  }, [authStatus.isAuthenticated, authStatus, authStatus.user]);

  const handleDelete = () => {
    confirmAlert({
      title: "Confirm Delete Account",
      message: "Are you sure you want to delete account?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setclickDeleteAccount(true);
          },
        },
        {
          label: "No",
          onClick: () => console.log("Logout canceled"),
        },
      ],
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const res3 = UseHTTPRequest(null, "/users", "PATCH", formData, "");
  const [isSet, setIsSet] = useState();
  useEffect(() => {
    setPATCHClick(true);
    setIsSet(!isSet);
  }, [formData, setPATCHClick, isSet]);

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Save the updated data to the database or state

    const formData = {
      name,
      email,
      phone: mobile,
      gender,
      image,
      address: `${address1}:${district}:${state}:${country}:${pincode}:${landmark}`,
    };

    setFormData(formData);
    setIsSet(!isSet);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCountry((prev) => prev);
    setState((prev) => prev);
    setDistrict((prev) => prev);
    setPincode((prev) => prev);
    setAddress1((prev) => prev);
    setLandmark((prev) => prev);
    setIsEditing(false); // Disable editing mode
    setName((prev) => prev); // Keep the last saved name
    setGender((prev) => prev); // Keep the last saved gender
    setMobile((prev) => prev); // Keep the last saved mobile number
    setCountryCode((prev) => prev); // Keep the last saved country code
  };

  return (
    <div
      className="flex flex-col justify-center items-center pb-20 font-Montserrat"
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
      <div className="flex flex-col items-center text-gray-600 mt-10 p-1 ">
        <p className="text-sm mb-3 font-Montserrat">Home / Profile</p>
        <p className="text-5xl lg:text-7xl font-medium overflow-hidden p-1 font-Montserrat">
          Profile
        </p>
      </div>
      <div className="lg:w-[70vw] w-[90vw] mt-10  border-1 border-[#d5d5d5] bg-[#f7d9cb28] rounded-md shadow-xl ">
        <h2 className="text-lg font-semibold flex justify-center mb-4 mt-4">
          Hi!&nbsp;{name}
        </h2>
        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-4">
          {image && (
            <img
              src={image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
          <label className="mt-3 bg-[#fb8c59] text-white py-1 px-4 rounded cursor-pointer">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        <form onSubmit={handleSave} className="space-y-4 p-5">
          <div>
            <label className="block font-medium">Name:</label>
            <div className="flex gap-2 ">
              <input
                type="text"
                className="border-b-1 border-gray-400 p-2  w-full"
                placeholder={name}
                value={isEditing ? name : name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
              />
              <button
                type="button"
                className="lg:px-3 lg:py-2 px-2 pr-3 bg-[#883022] hover:bg-[#883022d5] text-sm cursor-grab text-white rounded"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <label className="block font-medium">Gender:</label>
            <select
              className="border-b-1 border-gray-400 p-2  w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Email:</label>
            <div className="flex gap-2 ">
              <input
                type="text"
                className="border-b-1 border-gray-400 p-2 w-full"
                placeholder={email}
                value={isEditing ? email : email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
              />
              <button
                type="button"
                className="px-2 pr-3 lg:px-3 lg:py-2 bg-[#883022] hover:bg-[#883022d5] text-sm cursor-grab text-white rounded"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>

          <label className="block font-medium">Mobile Number:</label>
          <div className="flex gap-2">
            <select
              className="border-b-1 border-gray-400  w-[35%] text-sm"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">🇮🇳+91 (India)</option>
              <option value="+1">🇺🇸+1 (USA)</option>
              <option value="+44">🇬🇧+44 (UK)</option>
              <option value="+81">🇯🇵+81 (Japan)</option>
              <option value="+49">🇩🇪+49 (Germany)</option>
            </select>
            <input
              type="number"
              className="border-b-1 border-gray-400 p-2  w-full"
              placeholder={mobile}
              value={isEditing ? mobile : mobile}
              onChange={(e) => setMobile(e.target.value)}
              disabled={!isEditing}
            />
            <button
              type="button"
              className="px-2 pr-5 lg:pr-6 lg:pl-4 text-sm bg-[#883022] hover:bg-[#883022d5] cursor-grab text-white rounded"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>

          {/* Address Section */}
          <div>
            <label className="block font-medium">Country:</label>
            <select
              className="border-b-1 border-gray-400 p-2  w-full"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Japan">Japan</option>
              <option value="Germany">Germany</option>
            </select>
          </div>

          {/* If India is selected, show State & District */}

          <>
            <div>
              <label className="block font-medium">State:</label>
              <input
                type="text"
                className="border-b-1 border-gray-400 p-2  w-full"
                placeholder="Enter State"
                value={state}
                required="true"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium">District:</label>
              <input
                type="text"
                className="border-b-1 border-gray-400 p-2  w-full"
                placeholder="Enter District"
                value={district}
                required="true"
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
          </>

          {/* Common Address Fields */}
          <div>
            <label className="block font-medium">Address Line 1:</label>
            <input
              type="text"
              className="border-b-1 border-gray-400 p-2  w-full"
              placeholder="Street, House No, etc."
              value={address1}
              required="true"
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium">Landmark:</label>
            <input
              type="text"
              className="border-b-1 border-gray-400 p-2 w-full"
              placeholder="Near landmark (optional)"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium">Pincode:</label>
            <input
              type="number"
              className="border-b-1 border-gray-400 p-2 w-full"
              placeholder="Enter Pincode"
              value={pincode}
              required="true"
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-20">
            <button
              type="submit"
              className="px-5 py-3 bg-green-500 text-white rounded"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="mt-10 mb-10 flex  justify-center text-white text-[2vmin]">
          <button
            className="bg-red-500 p-2 rounded cursor-pointer"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
