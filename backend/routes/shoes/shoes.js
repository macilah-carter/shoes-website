const express = require("express");
const router = express.Router();
const Shoes = require("../../db/schema/shoes");
const shoes = require("../../db/schema/shoes");
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
  try {
    const shoes = await Shoes.find();
    return res.status(200).json(shoes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(401).json({msg: "No such id"});
    }
    const shoe = await shoes.findById({ _id: id });
    if(!shoe){
        return res.status(201).json({msg: "does not exist"})
    }
    return res.status(200).json(shoe);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const { name, description, colour, image } = req.body;
    const exist = await Shoes.findOne({ name });
    if (exist) {
      return res.status(400).json({ msg: "exist" });
    }
    const shoe = await Shoes.create({ name, description, colour, image });
    return res.status(200).json({ msg: "created", shoe: shoe });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
