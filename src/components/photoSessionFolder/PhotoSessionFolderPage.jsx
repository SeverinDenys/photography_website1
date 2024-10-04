import React, { useEffect, useState } from "react";
import { getUserId } from "../../App";
import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../db";
import { useParams } from "react-router-dom";

export default function PhotoSessionFolderPage() {
  const [photoSessionInfo, setPhotoSessionInfo] = useState(null);
  const { photoSessionId } = useParams(); // get from index.js rout
  console.log(photoSessionId);

  const fetchPhotoSessionInfo = async () => {
    try {
      const docRef = doc(db, "photo_sessions", photoSessionId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());

        setPhotoSessionInfo({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
        setPhotoSessionInfo(null);
      }
    } catch (error) {
      console.error("Error fetching photo session: ", error);
    }
  };
  useEffect(() => {
    fetchPhotoSessionInfo();
  }, []);

  return (
    <div className="PhotoSessionFolderPage">
      {photoSessionInfo?.title && (
        <h2 className="PhotoSessionFolderPage__title">
          {photoSessionInfo.title}
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
