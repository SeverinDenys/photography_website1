import { useEffect, useState } from "react";
import { db } from "./db";
import { getDoc, updateDoc, doc } from "firebase/firestore";

import './App.css';

const getUserId = () => window.location.host.split('.')[0];

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "test", getUserId());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };
    fetchData();
  }, []);

  // const changeData = async () => {
  //   const docRef = doc(db, "test", data.id);
  //
  //   try {
  //     const newDocument = { title: "Updated title" , description: "HOw are u?"};
  //     await updateDoc(docRef, newDocument);
  //
  //     setData({ ...data, ...newDocument });
  //
  //   } catch (error) {
  //     console.error("Error updating document: ", error);
  //   }
  // }

  return (
    <div className="App">
      <h1>PUBLIC</h1>
      {
        data?.title && <h1> {data.title}</h1>
      }
      {
          data?.description && <h2> {data.description}</h2>
      }
      {
          data?.img_url && <img src={data.img_url}/>
      }
    </div>
  );
}

export default App;
