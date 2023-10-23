import ReactModal from "react-modal";
import crossImg from "../../pictures/cross.png";
import "./AddressModal.css";
import { colors } from "../../utils/Colors";
import closeAddAddressModal from "../ManageAddress/ManagerAddressFunctions/closeAddressModal";
import onSubmitAddress from "../ManageAddress/ManagerAddressFunctions/onSubmitAddress";

function AddressModal({
  openAddAddressModal,
  changedAddress,
  setChangedAddress,
  changedCity,
  setChangedCity,
  changedPincode,
  setChangedPincode,
  setOpenAddAddressModal,
  setRefreshPage,
}) {
  return (
    <div>
      <ReactModal isOpen={openAddAddressModal}>
        <div
          className="addressModal"
          style={{
            background: colors.COMPLIMENTARY_BLUE,
          }}
        >
          <div className="addressModalCrossImg">
            <img
              onClick={() => closeAddAddressModal(setOpenAddAddressModal)}
              className="Image"
              src={crossImg}
              alt="Cross"
            />
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="address"
                value={changedAddress}
                onChange={(input) => setChangedAddress(input.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="city"
                value={changedCity}
                onChange={(input) => setChangedCity(input.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="pinCode"
                value={changedPincode}
                onChange={(input) => setChangedPincode(input.target.value)}
              />
            </div>
          </div>
          <div className="submitContainer">
            <button
              className="button"
              style={{
                backgroundColor: colors.COMPLIMENTARY_GREEN,
              }}
              onClick={() =>
                onSubmitAddress(
                  changedAddress,
                  changedCity,
                  changedPincode,
                  localStorage.get("email"),
                  setOpenAddAddressModal,
                  setRefreshPage
                )
              }
            >
              Submit
            </button>
            <button
              className="button"
              style={{
                backgroundColor: colors.COMPLIMENTARY_RED,
              }}
              onClick={() => closeAddAddressModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default AddressModal;
