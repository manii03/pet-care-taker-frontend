import Modal from "react-modal";
import { colors } from "../../utils/Colors";
import "./UserAddressComponent.css";
import { useState } from "react";
import crossImg from "../../pictures/cross.png";
import nextImg from "../../pictures/next.png";

const UserAddressComponent = ({
  addressArray,
  openModal,
  closeModal,
  onAddressSubmit,
}) => {
  const [countAddress, setCountAddress] = useState(0);

  const userId = localStorage.getItem("email");

  const deleteAddress = () => {
    if (countAddress >= 1) {
      setCountAddress((prev) => {
        return prev - 1;
      });
    }
  };

  const addAddress = () => {
    setCountAddress((prev) => {
      return prev + 1;
    });

    addressArray.push({
      address: "",
      city: "",
      pinCode: "",
    });
  };

  const UserAddressContainer = (index) => {
    const onInputChange = (input, inputType) => {
      addressArray[index.index][inputType] = input.target.value;
    };

    return (
      <div className="userAddressContainer">
        <div className="input">
          <input
            type="text"
            placeholder="address"
            onChange={(input) => onInputChange(input, "address")}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="city"
            onChange={(input) => onInputChange(input, "city")}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="pinCode"
            onChange={(input) => onInputChange(input, "pinCode")}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal isOpen={openModal} contentLabel="Example Modal">
        <div
          className="Modal"
          style={{
            backgroundColor: colors.COMPLIMENTARY_GREEN,
            color: colors.FONT_SECONDARY,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <img
              onClick={() => closeModal()}
              className="Image"
              src={crossImg}
              alt="Cross"
              height="30px"
              width="30px"
            />
          </div>
          {[...Array(countAddress)].map((ele, index) => (
            <UserAddressContainer index={index} />
          ))}

          <div className="buttons">
            <button
              className="button"
              style={{
                backgroundColor: colors.COMPLIMENTARY_BLUE,
                color: colors.FONT_SECONDARY,
              }}
              onClick={() => addAddress()}
            >
              {countAddress === 0 ? "Add address" : "Add another address"}
            </button>

            {countAddress >= 1 ? (
              <button
                className="button"
                style={{
                  backgroundColor: colors.COMPLIMENTARY_YELLOW,
                  color: colors.FONT_SECONDARY,
                }}
                onClick={() => deleteAddress()}
              >
                Delete address
              </button>
            ) : (
              ""
            )}
          </div>

          {countAddress >= 1 ? (
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
                onClick={() => onAddressSubmit()}
                src={nextImg}
                className="Image"
                alt="skip"
                height="30px"
                width="30px"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UserAddressComponent;
