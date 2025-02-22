import UserObj from "../../Models/User.js";
export const ProfileAuth = async (req, res) => {
  try {
    const token = req.cookies.ecom_token;
    // if (!token)
    //   return res
    //     .status(401)
    //     .json({ message: "Not authorized", status: "Not Login" });

    // // Verify JWT token
    // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // // Find user by ID
    // const user = await UserObj.findById(decoded.id);
    // if (!user)
    //   return res
    //     .status(404)
    //     .json({ message: "User not found", status: "Not Login" });

    // res.json({
    //   user: {
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    //     status: user.status,
    //     createdAt: user.createdAt,
    //     updatedAt: user.updatedAt,
    //   },
    //   status: "Login",
    // });

    // res.status(200).json(user);
    console.log(token);
    res.status(200).json({ message: "Profile fetched successfully" });
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};
