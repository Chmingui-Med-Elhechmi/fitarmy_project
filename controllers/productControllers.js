const Product = require("../Models/productSchema");
/**
 *@param<string>
 */

module.exports = {

  addProduct: async (req, res) => {
    try {
      const { title, desc, expDate, price, quantity } = req.body;

      if (req.userRole === "Admin") {
        const newProject = await Product.create({
          title,
          desc,
          owner: req.userID,
          expDate,
          price,
          quantity,
        });
        res.json(newProject);
      } else {
        res.json("You are not authorized");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
  getProducts: async (req, res) => {
    try {
      const Products = await Product.find({}).populate("");
      res.json(Products);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const Product = await product.findById(req.params.id);
      res.status(200).json(Product);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { description, title } = req.body;
      if (req.userRole === "Admin") {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id, {
          expDate,
          description,
          title,
          price,
          quantity,
          owner,
          image,
        });
        res.json(updatedProduct);
      } else {
        res.json("Your not authorized.");
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await product.findByIdAndDelete(req.params.id);
      if (req.userRole === "Admin") {
        res.status(200).json(deletedProduct);
      } else {
        res.json("Your not authorized.");
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
