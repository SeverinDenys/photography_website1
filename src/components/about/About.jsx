import React from "react";
import { useNavigate } from "react-router-dom";

export default function About({ data }) {
  const navigate = useNavigate();
  const navToPhotoSessions = () => {
    navigate("PhotoSessions");
  };
  return (
    <>
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
      <div className="myWorks">
        <button className="myWorks__Btn" onClick={navToPhotoSessions}>
          My Works
        </button>
      </div>
    </>
  );
}
