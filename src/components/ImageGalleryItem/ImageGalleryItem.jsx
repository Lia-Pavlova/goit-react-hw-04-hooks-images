import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li className={s.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={s.ImageGalleryItemImage}
      onClick={() => onClick({ largeImageURL, tags })}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
