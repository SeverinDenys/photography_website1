import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../db";
import { useParams } from "react-router-dom";
import { getUserId } from "../../App";
import Footer from "../footer/Footer";

export default function PhotoSessionFolderPage() {
  const [photoSessionInfo, setPhotoSessionInfo] = useState([]);
  const [footerData, setFooterData] = useState(null);
  const { photoSessionId } = useParams(); // get from index.js route

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const userId = getUserId();
        const docRef = doc(db, "footer", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFooterData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching footer data: ", error);
      }
    };
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
    fetchPhotoSessionInfo();
    fetchFooterData();
  }, [photoSessionId]);

  return (
    <>
      <div className="PhotoSessionFolderPage">
        {photoSessionInfo?.title && (
          <h2 className="PhotoSessionFolderPage__title">
            {photoSessionInfo.title}
          </h2>
        )}

        {photoSessionInfo?.description && (
          <p className="PhotoSessionFolderPage__description">
            {photoSessionInfo.description}
          </p>
        )}

        <div className="PhotoSessionFolderPage__photos">
          {photoSessionInfo.photos && (
            <div className="photo-grid">
              {photoSessionInfo.photos.map((photo, index) => (
                <div key={index} className="photo-grid-item">
                  <img src={photo} alt={`photo ${index}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer footerData={footerData} />
    </>
  );
}
