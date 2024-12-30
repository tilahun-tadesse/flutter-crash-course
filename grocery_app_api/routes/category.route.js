const categoryController = require("../controllers/category.controler");

const express = require("express");
const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getByID);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.deleteOne);

module.exports = router;