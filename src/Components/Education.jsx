import React from "react";
import PropTypes from "prop-types";
/**
 * Education background image
 */
import image from "../images/education.jpg";

const Education = () => {
  return (
    <section className="min-height" id="education">
      <img className="background" src={image} alt="" />
      <div style={{
        position: "absolute",
        top: "5rem",
        left: "2rem",
        width: "17rem",
        color: "azure"
        }}>
        <h3>Engineering Student</h3>
      </div>
    </section>
  );
};

Education.defaultProps = {
  name: "",
  title: "",
};

Education.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Education;