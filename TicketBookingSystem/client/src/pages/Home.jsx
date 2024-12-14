import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div key={index}>
          <h2>{place.placeName}</h2>
          <p>{place.placeDescription}</p>
          <p>{place.placeAddress}</p>
          <Link to={`/places/${place._id}`}>
            <button>Book Now</button>
          </Link>
        </div>
      );
    });
  }
  return (
    <Layout>
      <h2>Select your travel destination</h2>
      {/* fetch the places from the data into home page */}
      {displayPlaces()}
    </Layout>
  );
}

export default Home;
