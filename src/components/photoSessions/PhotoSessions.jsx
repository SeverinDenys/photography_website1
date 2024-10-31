import { React, useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../db";

import { getUserId } from "../../App";
import PhotoSessionFile from "../photoSessionFile/PhotoSessionFile";
import Footer from "../footer/Footer";

export default function PhotoSessions() {
  const [photoSessions, setPhotoSessions] = useState([]);
  const [generalInfo, setGeneralInfo] = useState(null);
  const [footerData, setFooterData] = useState(null);

  const fetchPhotos = async () => {
    try {
      const q = query(collection(db, "photo_sessions"));
      const querySnapshot = await getDocs(q);
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        if (data.userId === getUserId()) {
          fetchedData.push({ id: doc.id, ...doc.data() });
        }
      });

      setPhotoSessions(fetchedData);
    } catch (error) {
      console.error("Error fetching photos: ", error);
    }
  };

  const fetchGeneralInfo = async () => {
    try {
      const userId = getUserId();
      const docRef = doc(db, "photo_session_general", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGeneralInfo({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
        setGeneralInfo(null);
      }
    } catch (error) {
      console.error("Error fetching photo session: ", error);
    }
  };

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

  useEffect(() => {
    fetchPhotos();
    fetchGeneralInfo();
    fetchFooterData();
  }, []);
  return (
    <>
      <div className="photoSessions">
        <div className="photoSessions__title">
          {generalInfo?.title && (
            <h2 className="title">{generalInfo.title}</h2>
          )}
          {generalInfo?.sub_title && (
            <h2 className="subTitle">{generalInfo.sub_title}</h2>
          )}
        </div>

        {photoSessions.map((photo) => (
          <PhotoSessionFile
            key={photo.id}
            photo={photo}
            id={photo.id}
          />
        ))}
      </div>
      <Footer footerData={footerData} />
    </>
  );
}
