import React from "react";

export default function About({ data }) {
  return (
    <div className="aboutMe">
      {data?.main_title && (
        <h2 className="aboutMe__title">{data.main_title}</h2>
      )}
      {data?.about_me_description && (
        <div className="aboutMe__description">
          {" "}
          <p> {data.about_me_description}</p>
        </div>
      )}
    </div>
  );
}
