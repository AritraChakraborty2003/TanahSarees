import CancelObj from "../../Models/Cancel.js";

export const CancelDELETE = async (req, res) => {
  try {
    const id = req.query.order_id;
    console.log(id);
    const deletedCancel = await CancelObj.findOneAndDelete({ order_id: id });

    if (!deletedCancel) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
