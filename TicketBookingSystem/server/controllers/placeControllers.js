// import place model
const place = require("../models/placeSchema");

const createPlace = async (req, res) => {
  try {
    const { placeName, placeAddress, placeDescription } = req.body;
    console.log(req.files);
    const image = req.file ? req.file.path : null;
    console.log(req.body);
    const placeDoc = new place({
      placeName,
      placeAddress,
      placeDescription,
      image,
    });
    await placeDoc.save();
    res.json({ data: placeDoc, message: "Place created successfuly" });
  } catch (err) {
    console.log(err);
  }
};
const uploadPhoto = (req, res) => {
  console.log(req.files);
  const uploadedFiles = [];
  const { path, originalname } = req.files;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  uploadedFiles.push(newPath.replace("controllers\\uploads\\", ""));
  console.log(newPath.replace("controllers\\uploads\\", ""));
  res.json(uploadedFiles);
};

const getAllPlaces = async (req, res) => {
  // write a function to get all data from places
  try {
    // fetch all data from the database
    const places = await place.find();
    console.log(places);
    res.json({ places: places, message: "places fetched sucessfully" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPlace, uploadPhoto, getAllPlaces };
