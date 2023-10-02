import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
function PetOwner() {
  const navigate = useNavigate();

  console.log("HELLO");

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log("monicha");
    if (!email) {
      navigate("/login");
    }
  }, []);

  
  return (
    <div>
      {/* <MenuBar/> */}
    </div>
  );
}

export default PetOwner;
