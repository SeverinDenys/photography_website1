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
  const [footerData, setFooterData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = getUserId();
    if (!userId) {
      navigate("/PageWithoutUserId");
      return;
    }

    const fetchData = async () => {
      try {
        const docRef = doc(db, "general_info", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (error) {
        console.error(
          "Error fetching general_info document: ",
          error
        );
      }
    };

    const fetchFooterData = async () => {
      try {
        const docRef = doc(db, "footer", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFooterData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching footer document: ", error);
      }
    };

    fetchData();
    fetchFooterData();
  }, [navigate]);
  // PUBLIC

  return (
    <>
      <div className="App">
        <div className="container">
          <Header data={data} />
          <About data={data} />
          <Footer footerData={footerData} />
        </div>
      </div>
    </>
  );
}

export default App;
