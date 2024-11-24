import Marker from "../assets/Marker.svg";
import "./Cards.css";
import PropTypes from "prop-types";

function Cards(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img className="marker" src={Marker} alt="map marker icon" />
        <span className="country">Japan</span>
        <a href={props.googleMapsLink}>
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">
          {props.text}
        </p>
      </div>
    </article>
  );
}

Cards.propTypes = {
    img: PropTypes.shape({
      src: PropTypes.string.isRequired, // `src` zorunlu ve string olmalı
      alt: PropTypes.string.isRequired, // `alt` zorunlu ve string olmalı
    }).isRequired,
    title: PropTypes.string.isRequired, // `title` zorunlu ve string olmalı
    country: PropTypes.string.isRequired, // `country` zorunlu ve string olmalı
    googleMapsLink: PropTypes.string.isRequired, // `googleMapsLink` zorunlu ve string olmalı
    dates: PropTypes.string.isRequired, // `dates` zorunlu ve string olmalı
    text: PropTypes.string.isRequired, // `text` zorunlu ve string olmalı
  };

export default Cards;
