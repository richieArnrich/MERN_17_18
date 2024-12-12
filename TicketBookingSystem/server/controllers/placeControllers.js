// import place model
const place = require("../models/placeSchema");

const createPlace = async (req, res) => {
  try {
    const { placeName, placeAddress, placeDescription } = req.body;
    console.log(req.body);
    const placeDoc = new place({
      placeName,
      placeAddress,
      placeDescription,
    });
    await placeDoc.save();
    res.json({ data: placeDoc, message: "Place created successfuly" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPlace };
