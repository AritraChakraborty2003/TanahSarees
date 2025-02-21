export const generalGET = (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the Tanah Sarees API!", status: 200 });
};
