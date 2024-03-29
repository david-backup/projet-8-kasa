import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeGallery = ({ locations }) => {
  return (
    <div className="gallery">
      {locations.map((location) => (
        <div key={location.id} className="locationCard">
          <Link to={`/locations/${location.id}`}>
            <img src={location.cover} alt={`image de ${location.title}`} />
            <h2>{location.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

HomeGallery.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomeGallery;
