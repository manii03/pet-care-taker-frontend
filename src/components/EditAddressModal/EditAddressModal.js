import ReactModal from "react-modal";
import "./EditAddressModal.css";
import { colors } from "../../utils/Colors";
import AddressModal from "../AddressModal/AddressModal";
import closeEditModal from "../ManageAddress/ManagerAddressFunctions/closeEditModal";
import onEditAddressSubmit from "./EditModalFunctions/onEditAddressSubmit";

function EditAddressModal({
  setOpenEditModal,
  openEditModal,
  changedAddress,
  setChangedAddress,
  changedCity,
  setChangedCity,
  changedPincode,
  setChangedPincode,
  changedAddressId,
  setRefreshPage,
}) {
  return (
    <ReactModal contentClassName="modalHeight" isOpen={openEditModal}>
      <div className="editModal">
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
            onClick={() => {
              onEditAddressSubmit(
                changedAddress,
                changedAddressId,
                changedPincode,
                changedCity
              );
            }}
            style={{
              backgroundColor: colors.COMPLIMENTARY_BLUE,
            }}
          >
            Submit
          </button>
          <button
            className="button"
            onClick={() => closeEditModal(setOpenEditModal)}
            style={{
              backgroundColor: colors.COMPLIMENTARY_RED,
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default EditAddressModal;
