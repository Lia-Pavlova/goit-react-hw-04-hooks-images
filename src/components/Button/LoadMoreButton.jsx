import PropTypes from "prop-types";
import s from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick }) => (
  <button type="button" className={s.button} onClick={onClick}>
    Load more
  </button>
);

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
