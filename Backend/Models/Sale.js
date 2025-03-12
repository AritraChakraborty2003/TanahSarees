import mongoosge from "mongoose";

const SaleSchema = new mongoosge.Schema(
  {
    sale_name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 60,
    },
    sale_time: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "sales",
    timestamps: true,
  }
);

const salesObj = mongoosge.model("sales", SaleSchema);
export default salesObj;
