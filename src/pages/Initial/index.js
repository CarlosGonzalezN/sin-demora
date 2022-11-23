import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import LogoHome from "../../images/LogoHome.png";
export default function Index() {
  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const homeRedirect = async () => {
    console.log("antes");
    await delay(5000);
    console.log("despues");
    navigate("/registrese");
  };

  useEffect(() => {
    homeRedirect();
  });
  return (
    <div className="initial">
      <img src={LogoHome} alt="test" />
    </div>
  );
}
