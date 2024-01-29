import React from "react";
import CardLocation from "./CardLocation";
import locations from "../data/locations.json";
console.log(locations);

const Gallery = () => {
  return (
    <div className="gallery">
      <CardLocation locations={locations} />
    </div>
  );
};

export default Gallery;
