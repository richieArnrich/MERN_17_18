const express = require("express");
const {
  createPlace,
  uploadPhoto,
  getAllPlaces,
} = require("../controllers/placeControllers");
// const { upload } = require("../controllers/uploadMiddleware");
// const multer = require("multer");
const router = express.Router();
// POST route for creating a place

// const photosMiddleware = multer({ dest: "controllers/uploads" });
// router.post("/upload", photosMiddleware.single("image"), uploadPhoto);
// router.post("/createPlace", upload.single("placeimage"), createPlace);

router.get("/getplaces", getAllPlaces);

module.exports = router;
