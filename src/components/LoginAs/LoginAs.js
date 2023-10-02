import "./LoginAs.css";
import { useState } from "react";
import UserAddressComponent from "../UserAddressComponent/UserAddressComponent";
import { colors } from "../../utils/Colors";
import PetAdditionComponent from "../PetAdditionComponent/PetAdditionComponent";
import { useLocation } from "react-router-dom";

function LoginAs() {
  const location = useLocation();

  // const userName = location.state.name;

  const email = localStorage.getItem("email");

  const [openModal, setOpenModal] = useState(false);

  const [OpenPetModal, setOpenPetModal] = useState(false);

  const [countAddress, setCountAddress] = useState(0);

  const [addressArray, setAddressArray] = useState([]);

  const [petArray, setPetArray] = useState([]);



  const closeModal = () => {
    setOpenModal(false);
    setCountAddress(0);
  };

  const closePetModal = () => {
    setOpenPetModal(false);
  };

  const onProceedAsButtonClicked = (userType) => {
    console.log("UserType is : ", userType);
    setOpenModal(true);
  };

  
  const onAddressSubmit = () => {
    setOpenModal(false);
    setOpenPetModal(true);
  };

  const onBackModal = () => {
    setOpenPetModal(false);
    setOpenModal(true);
  };

  const onPetSubmit = () => {
    let addressPayload = {
      address: addressArray,
      userId: email,
    };

    let petPayload = {
      petArray: petArray,
      userId: email,
    };

    let addressOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(addressPayload),
    };
    // Fake api for making post requests
    let addressResponse = fetch(
      "http://localhost:8000/addAddresses",
      addressOptions
    );

    let petOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(petPayload),
    };
    // Fake api for making post requests
    let petResponse = fetch("http://localhost:8000/addPetInfo", petOptions);
  };

  return (
    <div
      className="Loginas"
      style={{
        backgroundColor: colors.BACKGROUND,
        color: colors.FONT_SECONDARY,
      }}
    >
      <div
        className="Welcome"
        style={{
          backgroundColor: colors.COMPLIMENTARY_BLUE,
          color: colors.FONT_SECONDARY,
        }}
      >
        Hi , Welcome to PetCareTaker
      </div>
      <div
        className="LoginAsOption"
        style={{
          backgroundColor: colors.COMPLIMENTARY_YELLOW,
          color: colors.FONT_SECONDARY,
        }}
      >
        Please enter your to proceed further
      </div>

      <div
        className="proceedAsPetOwnerText"
        style={{
          backgroundColor: colors.COMPLIMENTARY_GREEN,
          color: colors.FONT_SECONDARY,
        }}
      >
        To proceed as PetOwner, please enter pet and your details.
      </div>
      <div
        className="proceedAsCaretakerText"
        style={{
          backgroundColor: colors.COMPLIMENTARY_RED,
          color: colors.FONT_SECONDARY,
        }}
      >
        To proceed as PetCareTaker, please enter your details.
      </div>
      <div className="proceedAsCareTakerButtons">
        <button
          className="button"
          style={{
            backgroundColor: colors.COMPLIMENTARY_RED,
            color: colors.FONT_SECONDARY,
          }}
          onClick={() => onProceedAsButtonClicked("PetCareTaker")}
        >
          Enter Your Details
        </button>
      </div>

      <UserAddressComponent
        addressArray={addressArray}
        closeModal={closeModal}
        onAddressSubmit={onAddressSubmit}
        openModal={openModal}
      />
      <PetAdditionComponent
        OpenPetModal={OpenPetModal}
        onBackModal={onBackModal}
        petArray={petArray}
        closePetModal={closePetModal}
        setPetArray={setPetArray}
        onPetSubmit={onPetSubmit}
      />
    </div>
  );
}

export default LoginAs;
