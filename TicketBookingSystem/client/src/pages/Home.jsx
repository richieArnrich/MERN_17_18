import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [places, setPlace] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/places/getplaces")
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        setPlace(res.data.places);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function displayPlaces() {
    return places.map((place, index) => {
      return (
        <div key={index} className="p-3 border border-primary">
          <h2 className="fw-light">{place.placeName}</h2>
          <p>{place.placeDescription}</p>
          <p>{place.placeAddress}</p>
          <Link to={`/places/${place._id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      );
    });
  }
  return (
    <Layout>
      <h2 className="fw-semibold text-center text-warning p-2">
        Book your next trip
      </h2>
      {/* fetch the places from the data into home page */}
      <div className="d-flex m-2">{displayPlaces()}</div>
    </Layout>
  );
}

export default Home;
