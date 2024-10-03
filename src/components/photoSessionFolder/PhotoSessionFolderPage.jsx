import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export default function PhotoSessionFolderPage() {
  const location = useLocation();
  const photoData = location.state?.photo;
  return (
    <div className="PhotoSessionFolderPage">
      {photoData?.title && (
        <h2 className="PhotoSessionFolderPage__title">
          {photoData.title}
        </h2>
      )}

      <p className="PhotoSessionFolderPage__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Illum architecto ipsam dicta ratione tempora?
      </p>
      {/* <div className="PhotoSessionFolderPage__photos">
        <div className="folderPagePhoto">
          <img src={me} alt="some" />
        </div>
        <div className="folderPagePhoto">
          <img src={me} alt="some" />
        </div>
        <div className="folderPagePhoto">
          <img src={me} alt="some" />
        </div>
        <div className="folderPagePhoto">
          <img src={me} alt="some" />
        </div>
      </div> */}
    </div>
  );
}
