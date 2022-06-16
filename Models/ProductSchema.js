const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  expDate: {
    type: Date,
    // required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    imageURL: {
      type: String,
      default:
        "https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-3.png",
    },
    public_id: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("post", productSchema);
