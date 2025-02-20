import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const Profile = () => {
  const { change } = useContext(AppContext);
  return (
    <div
      className="flex justify-center items-center pb-20"
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
      <div className="w-[90vw] h-100 border-1 border-[#d5d5d5] bg-gray-100 rounded-md shadow-xl ">
        <form action=""></form>
      </div>
    </div>
  );
};

export default Profile;
