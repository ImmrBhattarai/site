import React from "react";

/**
 * Education background image
 */
import image from "../images/education.jpg";

const imageAltText = "stack of books";

const Education = () => {
  return (
        <section className="light" id="education">
            <img className="background" src={image} alt="" />
            <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem", color: "azure" }}>
        <h2>Engineering Student</h2>
      </div>
        </section>
    );
};

export default Education;