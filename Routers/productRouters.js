const express = require("express");
const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const router = express.Router();
const auth = require("../middlewares/authMiddlewares");



router.post("/add", auth, addProduct);
router.get("/", getProducts);
router.get("/getproduct/:id", getSingleProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
