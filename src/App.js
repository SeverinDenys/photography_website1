import { useEffect, useState } from "react";
import { db } from "./db";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import "./styles/main.scss";
import Header from "./components/header/Header";

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

  // PUBLIC

  return (
    <>
      <div className="App">
        <div className="container">
          <Header data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
