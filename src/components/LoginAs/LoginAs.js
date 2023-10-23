import "./LoginAs.css";
import { useState } from "react";
import UserAddressComponent from "../UserAddressComponent/UserAddressComponent";
import { colors } from "../../utils/Colors";
import PetAdditionComponent from "../PetAdditionComponent/PetAdditionComponent";
import { useNavigate } from "react-router-dom";
import onProceedAsButtonClicked from "../PetAdditionComponent/functions/onProceedAsButtonClicked";
import { LOCALHOST, PET_AVAILABLE } from "../../constants/common";
import triggerAPI from "../../utils/APIUtils";

function LoginAs() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const [openLoginAsModal, setOpenLoginAsOpenModal] = useState(false);
  const [OpenPetModal, setOpenPetModal] = useState(false);
  const [countAddress, setCountAddress] = useState(0);
  const [addressArray, setAddressArray] = useState([]);
  const [petArray, setPetArray] = useState([]);

  const onPetSubmit = async () => {
    //adding into petAvailable Schema
    petArray.map((pet) => {
      let petAvailablePayLoad = {
        petName: pet.petName,
        petType: pet.petType,
        breed: pet.breed,
        age: pet.age,
        available: false,
        userId: email,
      };

      const petAvailableAPIResponse = triggerAPI(
        PET_AVAILABLE,
        petAvailablePayLoad
      );
    });

    let addressPayload = {
      address: addressArray,
      userId: email,
    };

    let petPayload = {
      petArray: petArray,
      userId: email,
    };

    console.log("addressPayload is : ", addressPayload);

    let addressOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(addressPayload),
    };

    // Fake api for making post requests
    let addressResponse = await fetch(
      `${LOCALHOST}/addAddress`,
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
    let petResponse = await fetch(`${LOCALHOST}/addPetInfo`, petOptions);

    navigate("/caretaker");
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
          onClick={() => onProceedAsButtonClicked(setOpenLoginAsOpenModal)}
        >
          Enter Your Details
        </button>
      </div>

      <UserAddressComponent
        addressArray={addressArray}
        setOpenLoginAsOpenModal={setOpenLoginAsOpenModal}
        setOpenPetModal={setOpenPetModal}
        openLoginAsModal={openLoginAsModal}
        setAddressArray={setAddressArray}
      />
      <PetAdditionComponent
        OpenPetModal={OpenPetModal}
        petArray={petArray}
        setOpenPetModal={setOpenPetModal}
        setPetArray={setPetArray}
        onPetSubmit={onPetSubmit}
        setOpenLoginAsOpenModal={setOpenLoginAsOpenModal}
      />
    </div>
  );
}

export default LoginAs;
