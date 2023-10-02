import { useEffect } from "react";
import "./CareTaker.css";
import { useNavigate } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";

function CareTaker() {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log("monicha");
    if (!email) {
      navigate("/login");
    }

    // const data = {
    //   userId: email,
    // };

    // let options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(data),
    // };

    // let response = fetch("http://localhost:8000/fetchAddress", options)
    //   .then((response) => {
    //     console.log("manisaa", response);
    //     if (response.ok) {
    //       return response.json();
    //     }

    //     return Promise.reject(response);
    //   })
    //   .then((response) => {
    //     console.log("mai", response);
    //   });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "space-between",
      }}
    >
      <div>
        <MenuBar />
      </div>
    </div>
  );
}

export default CareTaker;
