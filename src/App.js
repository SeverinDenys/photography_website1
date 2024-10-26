import { useEffect, useState } from "react";
import { db } from "./db";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

export const getUserId = () => {
  const subdomain = window.location.host.split(".")[0];

  if (subdomain.startsWith("localhost")) return null;
  else {
    return subdomain;
  }
};

 

function App() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

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
    if (getUserId()) {
      fetchData();
    } else {
      navigate("/PageWithoutUserId");
    }
  }, []);

  // PUBLIC

  return (
    <>
      <div className="App">
        <div className="container">
          <Header data={data} />
          <About data={data} />
          <Footer data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
