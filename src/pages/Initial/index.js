import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import LogoHome from "../../images/LogoHome.png";
export default function Index() {
  const navigate = useNavigate();
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    sleep(5000);
    //disable the rule for a single line
    navigate("/registrese");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <main className="main">
        <img src={LogoHome} alt="test" />
      </main>
    </div>
  );
}
