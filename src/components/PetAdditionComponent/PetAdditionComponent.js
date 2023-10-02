import React, { useState } from "react";
import "./PetAdditionComponent.css";
import Modal from "react-modal";
import { colors } from "../../utils/Colors";
import "../LoginAs/LoginAs.css";
import crossImg from "../../pictures/cross.png";
import backImg from "../../pictures/back.png";
import skipImg from "../../pictures/next.png";
import { useNavigate } from "react-router-dom";

const PetAdditionComponent = ({
  petArray,
  OpenPetModal,
  onBackModal,
  closePetModal,
  onPetSubmit,
}) => {
  const [countPet, setCountPet] = useState(0);
  const navigate = useNavigate();

  const deletePet = () => {
    if (countPet >= 1) {
      setCountPet((prev) => {
        return prev - 1;
      });
    }
  };

  const onSkip = () => {
    navigate("/caretaker");
  };

  const addPet = () => {
    setCountPet((prev) => {
      return prev + 1;
    });

    petArray.push({
      petName: "",
      petType: "",
      breed: "",
      age: "",
    });
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
              onClick={() => onBackModal()}
              className="Image"
              src={backImg}
              alt="Cross"
              height="30px"
              width="30px"
            />
            <img
              onClick={() => closePetModal()}
              className="Image"
              src={crossImg}
              alt="Cross"
              height="30px"
              width="30px"
            />
          </div>
          {[...Array(countPet)].map((ele, index) => (
            <PetAdditionContainer index={index} />
          ))}
          <div className="buttons">
            <button
              className="button"
              style={{
                backgroundColor: colors.COMPLIMENTARY_BLUE,
                color: colors.FONT_SECONDARY,
              }}
              onClick={() => addPet()}
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
                onClick={() => deletePet()}
              >
                Delete Pet Details
              </button>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              alignItems: "flex-end",
              flex: 1,
            }}
          >
            <img
              onClick={() => onSkip()}
              src={skipImg}
              className="Image"
              alt="skip"
              height="30px"
              width="30px"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PetAdditionComponent;
