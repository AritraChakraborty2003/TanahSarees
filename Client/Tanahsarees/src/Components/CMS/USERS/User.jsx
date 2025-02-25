/* eslint-disable react/jsx-key */
import UserCard from "../CMScards/UserCard";

import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import SearchBar from "../CMS_Search/SearchBar";

const User = () => {
  const { change } = useContext(AppContext);
  const data = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 9876543210",
      address: "123 MG Road, Bangalore, India",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Ishita Verma",
      email: "ishita.verma@example.com",
      phone: "+91 9876543211",
      address: "456 Nehru Street, Delhi, India",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Rohan Patel",
      email: "rohan.patel@example.com",
      phone: "+91 9876543212",
      address: "789 Park Avenue, Mumbai, India",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Sanya Kapoor",
      email: "sanya.kapoor@example.com",
      phone: "+91 9876543213",
      address: "159 Gandhi Nagar, Hyderabad, India",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Kabir Singh",
      email: "kabir.singh@example.com",
      phone: "+91 9876543214",
      address: "246 Green Colony, Pune, India",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Meera Joshi",
      email: "meera.joshi@example.com",
      phone: "+91 9876543215",
      address: "357 Lake View, Chennai, India",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Arjun Rao",
      email: "arjun.rao@example.com",
      phone: "+91 9876543216",
      address: "852 Central Road, Kolkata, India",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Pooja Mehta",
      email: "pooja.mehta@example.com",
      phone: "+91 9876543217",
      address: "753 Sunflower Street, Jaipur, India",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Varun Desai",
      email: "varun.desai@example.com",
      phone: "+91 9876543218",
      address: "951 Skyline Towers, Ahmedabad, India",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Ananya Chatterjee",
      email: "ananya.chatterjee@example.com",
      phone: "+91 9876543219",
      address: "357 Rose Lane, Lucknow, India",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col text-center mt-8 lg:mt-0"
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "18%"
                : ""
              : screen.width > 1000
              ? "12%"
              : ""
          }`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        <p className="text-sm text-gray-500">Home/Users</p>
        <h2 className="text-5xl text-gray-500 font-Montserrat font-medium overflow-hidden">
          Users
        </h2>
      </div>

      <div className="flex justify-center items-center w-[100vw] pb-5 mt-10">
        <div className="w-[85vw] lg:w-[50vw] ">
          <SearchBar category="user" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  mt-10 mb-10 gap-y-5">
        {data.map((item) => (
          <UserCard data={item} />
        ))}
      </div>
    </>
  );
};

export default User;
