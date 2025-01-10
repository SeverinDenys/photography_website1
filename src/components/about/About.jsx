import React from "react";
import { useNavigate } from "react-router-dom";
import AuthorInfo from "./AuthorInfo/AuthorInfo";

export default function About({ data }) {
  const navigate = useNavigate();
  const navToPhotoSessions = () => {
    navigate("PhotoSessions");
  };
  return (
    <>
      <div className="aboutMe" id="aboutMe">
        {data?.main_description_title && (
          <h2 className="aboutMe__title">
            {data.main_description_title}
          </h2>
        )}
        {data?.about_me_description && (
          <div className="aboutMe__description">
            {" "}
            <p> {data.about_me_description}</p>
          </div>
        )}
      </div>
      <AuthorInfo data={data} />
      <div className="myWorks">
        <button
          className="myWorks__Btn"
          onClick={navToPhotoSessions}
          id="myWorks"
        >
          My Works
        </button>
      </div>
    </>
  );
}
