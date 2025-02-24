export const Logout = (tigger) => {
  return async (req, res) => {
    try {
      // Clear the cookie
      res.clearCookie("ecom_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // ✅ true in production, false in development
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // ✅ "None" only for cross-origin in production
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
