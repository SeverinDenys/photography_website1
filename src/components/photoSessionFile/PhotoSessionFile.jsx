import React from "react";

import { useNavigate } from "react-router-dom";

export default function PhotoSessionFile({ photo, id }) {
  const navigate = useNavigate();
  const navToPhotoSessionFolder = () => {
    navigate(`/PhotoSessionFolderPage/${id}`);
  };
  return (
    <div className="photoSessionFile">
      {photo?.photos[0] && (
        <img
          src={photo.photos[0]}
          alt="sessionImg"
          className="photoSessionFile__img"
          onClick={navToPhotoSessionFolder}
        />
      )}

      {photo?.description && (
        <h2 className="photoSessionFile__title">
          {photo.description}
        </h2>
      )}
    </div>
  );
}
