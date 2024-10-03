import { React, useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../db";

import { getUserId } from "../../App";
import PhotoSessionFile from "../photoSessionFile/PhotoSessionFile";

export default function PhotoSessions() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
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

        setPhotoData(fetchedData);
      } catch (error) {
        console.error("Error fetching photos: ", error);
      }
    };

    fetchPhotos();
  }, []);
  return (
    <div className="photoSessions">
      <div className="photoSessions__title">
        {photoData[0]?.title && (
          <h2 className="title">{photoData[0].title}</h2>
        )}
        {photoData[0]?.sub_title && (
          <h2 className="subTitle">{photoData[0].sub_title}</h2>
        )}
      </div>

      {photoData.map((photo) => (
        <PhotoSessionFile
          key={photo.id}
          photo={photo}
          id={photo.id}
        />
      ))}
    </div>
  );
}

// why i can't just write photoData.title , sub_title to get the title? why i need to write [0] specifically
