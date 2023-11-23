// Pagelinker.jsx
import React from "react";
import mainproduct from "../components/Card_Components/CardProduct";
import Mainpage from "../components/Card_Components/Card";
import Header from "../components/Header_components/Header";
import "../components/Card_Components/Mainpage.css"; // Import the CSS file for styling
import HeaderData from "../components/Header_components/headerData";

const Home = () => {
  return (
    <>

      <div className="page-container">
        
      {HeaderData.map((val, ind) => (
          <div  key={ind}>
            <Header details={val} ind={ind} />
          </div>
            ))}

        {mainproduct.map((val, ind) => (
          <div className="main-container" key={ind}>
            <Mainpage details={val} ind={ind} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
