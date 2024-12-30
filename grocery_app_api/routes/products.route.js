
const expreses= require('express');
const router =expreses.Router();
const productController = require("../controllers/product.controler");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router