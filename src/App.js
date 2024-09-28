import { useEffect, useState } from "react";
import { db } from "./db";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import "./styles/main.scss";
const getUserId = () => window.location.host.split(".")[0];
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "general_info", getUserId());
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

  console.log("data", data);

  return (
    <div className="App">
      {/* <h1>PUBLIC</h1> */}
      {data?.about_me_title && <h1> {data.about_me_title}</h1>}
      {data?.main_picture1 && <img src={data.main_picture1} />}
      {data?.main_title && <h2> {data.main_title}</h2>}

      {data?.about_me_sub_title && (
        <h2> {data.about_me_sub_title}</h2>
      )}
      {data?.about_me_description && (
        <h2> {data.about_me_description}</h2>
      )}
    </div>
  );
}

export default App;
