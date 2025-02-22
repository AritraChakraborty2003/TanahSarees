export const Logout = () => {
  return async (req, res) => {
    try {
      // Clear the cookie
      res.clearCookie("ecom_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "production",
        sameSite: "None",
        maxAge: 0, // 0 means delete the cookie
      });
      return res
        .status(200)
        .json({ message: "Logout successful", status: "success" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error", status: "error" });
    }
  };
};
