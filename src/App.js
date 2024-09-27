import { useEffect, useState } from "react";
import { db } from "./db";
import { getDoc, updateDoc, doc } from "firebase/firestore";

import './App.css';

const DOCUMENT_ID = "6tdyRU2STWjSNCwz20qI";

function App() {
  const [data, setData] = useState({ title: 'MY Title', description: 'My description' });

  // useEffect(() => {
  //   const fetchData = async () => {
      // try {
      // TODO show why we need ID.

      //   const docRef = doc(db, "test", DOCUMENT_ID);
      //   const docSnap = await getDoc(docRef);
      //   if (docSnap.exists()) {
      //     setData(docSnap.data());
      //   } else {
      //     console.log("No such document!");
      //   }
      // } catch (error) {
      //   console.error("Error fetching document: ", error);
      // }
  //   };
  //
  //   fetchData();
  // }, []);

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
      {
        data && <div>
         <h1> {data.title}</h1>
         <h1> {data.description}</h1>
        </div>
      }
      {/*<button onClick={changeData}>Change</button>*/}
    </div>
  );
}

export default App;
