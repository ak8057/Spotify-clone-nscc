import React from "react";
import { artists } from "../../database/data";
import "./ArtistsSection.css"
const ArtistsSection = () => {
  return (
    <div>
      <div className="right-content">
        <div className="section f-section">
          <div className="head">
            <h4>Popular artists</h4>
            <p className="show_all">Show all</p>
          </div>
          <div className="collection">
            {artists.map((artist, index) => (
              <div className="fst" key={index}>
                <img
                  aria-hidden="false"
                  draggable="false"
                  loading="lazy"
                  src={artist.image}
                  alt={artist.name}
                />
               
                <div className="onimg">
                  <p className="reset">{artist.name}</p>
                  <p className="reset">{artist.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsSection;
