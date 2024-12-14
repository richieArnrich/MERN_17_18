import React, { useState } from "react";
import Layout from "../components/Layout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function Places() {
  const [placeName, setPlaceName] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    const formObj = { placeName, placeDescription, placeAddress };
    console.log(formObj);
    axios
      .post("http://localhost:8000/places/createPlace", formObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  }

  function uploadPhoto() {
    axios
      .post(
        "http://localhost:8000/places/upload",
        { headers: { "Content-type": "multipart/form-data" } },
        image
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Layout>
      <h3 className="display-4 text-center">Create Places</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="">Place Name</label>
          <input
            type="text"
            name="placeName"
            id="placeName"
            className="form-control"
            onChange={(event) => {
              setPlaceName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            onChange={(event) => {
              setPlaceDescription(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            name="placeaddress"
            id="placeaddress"
            className="form-control"
            onChange={(event) => {
              setPlaceAddress(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="place-image">Image</label>
          <input
            type="file"
            accept="image/**"
            name="placeimage"
            id="placeimage"
            className="form-control"
            onChange={(event) => {
              const file = event.target.files[0];
              console.log(event.target.files);
              if (file) {
                setImage(file);
                alert("Image uploaded");
              } else {
                alert("cannot upload file");
              }
            }}
          />
        </div>
        <div>
          <button onClick={uploadPhoto}>Upload Photo</button>
        </div>
        <div className="form-group d-flex justify-content-center">
          <input type="submit" className="btn btn-primary p-3 m-3" />
        </div>
      </form>
    </Layout>
  );
}

export default Places;
