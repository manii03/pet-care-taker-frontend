import React, { useState } from "react";
import "./PetAdditionComponent.css";
import Modal from "react-modal";
import { colors } from "../../utils/Colors";
import "../LoginAs/LoginAs.css";
import crossImg from "../../pictures/cross.png";
import backImg from "../../pictures/back.png";
import skipImg from "../../pictures/next.png";
import addPet from "./functions/addPet";
import deletePet from "./functions/deletePet";
import closePetModal from "../LoginAs/LoginAsFunctions/closePetModal";
import onBackModal from "../LoginAs/LoginAsFunctions/onBackModal";

const PetAdditionComponent = ({
  petArray,
  OpenPetModal,
  setOpenPetModal,
  onPetSubmit,
  setOpenLoginAsOpenModal,
}) => {
  const [countPet, setCountPet] = useState(0);
  const onSkip = () => {
    onPetSubmit();
  };

  const PetAdditionContainer = (index) => {
    const onInputChange = (input, inputType) => {
      petArray[index.index][inputType] = input.target.value;
    };

    return (
      <div className="petAdditionContainer">
        <div className="input">
          <input
            type="text"
            placeholder="petName"
            onChange={(input) => onInputChange(input, "petName")}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="petType"
            onChange={(input) => onInputChange(input, "petType")}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="breed"
            onChange={(input) => onInputChange(input, "breed")}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="age"
            onChange={(input) => onInputChange(input, "age")}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal isOpen={OpenPetModal}>
        <div
          className="Modal"
          style={{
            backgroundColor: colors.COMPLIMENTARY_GREEN,
            color: colors.FONT_SECONDARY,
          }}
        >
          <div
            className="closeModalButtons topModalButtons"
            style={{
              color: colors.COMPLIMENTARY_BLUE,
            }}
          >
            <img
              onClick={() =>
                onBackModal(setOpenPetModal, setOpenLoginAsOpenModal)
              }
              className="petAdditionComponenetImage"
              src={backImg}
              alt="Cross"
            />
            <img
              onClick={() => closePetModal(setOpenPetModal)}
              className="petAdditionComponenetImage"
              src={crossImg}
              alt="Cross"
            />
          </div>
          {[...Array(countPet)].map((ele, index) => (
            <PetAdditionContainer index={index} petArray={petArray} />
          ))}
          <div className="petAdditionComponentButtons">
            <button
              className="button"
              style={{
                backgroundColor: colors.COMPLIMENTARY_BLUE,
                color: colors.FONT_SECONDARY,
              }}
              onClick={() => addPet(setCountPet, petArray)}
            >
              Add Pet Details
            </button>

            {countPet >= 1 ? (
              <button
                className="button"
                style={{
                  backgroundColor: colors.COMPLIMENTARY_YELLOW,
                  color: colors.FONT_SECONDARY,
                }}
                onClick={() => onPetSubmit()}
              >
                Submit Pet Details
              </button>
            ) : (
              ""
            )}

            {countPet >= 1 ? (
              <button
                className="button"
                style={{
                  backgroundColor: colors.COMPLIMENTARY_RED,
                  color: colors.FONT_SECONDARY,
                }}
                onClick={() => deletePet(countPet, setCountPet)}
              >
                Delete Pet Details
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="petAdditionComponentSkip">
            <img
              onClick={() => onSkip()}
              src={skipImg}
              className="petAdditionComponenetImage"
              alt="skip"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PetAdditionComponent;
