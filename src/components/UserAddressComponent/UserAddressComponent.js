import Modal from "react-modal";
import { colors } from "../../utils/Colors";
import "./UserAddressComponent.css";
import { useState } from "react";
import crossImg from "../../pictures/cross.png";
import nextImg from "../../pictures/next.png";
import onAddressSubmit from "../LoginAs/LoginAsFunctions/onAddressSubmit";

const UserAddressComponent = ({
  addressArray,
  openLoginAsModal,
  closeModal,
  setOpenLoginAsOpenModal,
  setOpenPetModal,
  setAddressArray,
}) => {
  const [countAddress, setCountAddress] = useState(0);

  const userId = localStorage.getItem("email");

  const deleteAddress = () => {
    if (countAddress >= 1) {
      setCountAddress((prev) => {
        return prev - 1;
      });
      addressArray.pop();
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

    console.log("ADDRESSES ARE HERE MANISHA: ", addressArray);
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
            defaultValue={addressArray[index.index]["address"]}
            onChange={(input) => onInputChange(input, "address")}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="city"
            defaultValue={addressArray[index.index]["city"]}
            onChange={(input) => onInputChange(input, "city")}
          />
        </div>
        <div className="input">
          <input
            type="number"
            placeholder="pinCode"
            defaultValue={addressArray[index.index]["pinCode"]}
            onChange={(input) => onInputChange(input, "pinCode")}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal isOpen={openLoginAsModal} contentLabel="Example Modal">
        <div
          className="loginAsAddressModal"
          style={{
            backgroundColor: colors.COMPLIMENTARY_GREEN,
            color: colors.FONT_SECONDARY,
          }}
        >
          <div className="loginAsAddressCrossImage">
            <img
              className="loginAsAddressComponenetImage"
              onClick={() => closeModal()}
              src={crossImg}
              alt="Cross"
              height="30px"
              width="30px"
            />
          </div>
          {[...Array(countAddress)].map((ele, index) => (
            <UserAddressContainer index={index} />
          ))}

          <div className="loginAsAddressbuttons">
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
            <div className="loginAsAddressSkipImage">
              <img
                className="loginAsAddressComponenetImage"
                onClick={() =>
                  onAddressSubmit(setOpenLoginAsOpenModal, setOpenPetModal)
                }
                src={nextImg}
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
