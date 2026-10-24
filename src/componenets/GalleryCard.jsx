import React from "react";
import "./GalleryCard.css";

const GalleryCard = ({ title, img }) => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-grid">
        {img.map((image) => (
          <figure className="gallery-card" key={image.img}>
            <img className="gallery-image" src={image.img} alt={title} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GalleryCard;
