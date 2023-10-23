import ReactModal from "react-modal";
import "./EditPetDetailsModal.css";
import { colors } from "../../utils/Colors";
import onEditPetDetailsSubmit from "./EditPetDetailsModalFunctions/onEditPetDetailsSubmit";

function EditPetDetailsModal({
  closeEditModal,
  openEditModal,
  changedPetName,
  setChangedPetName,
  changedPetType,
  setChangedPetType,
  changedBreed,
  setChangedBreed,
  changedAge,
  setChangedAge,
  changedPetDetailsId,
}) {
  return (
    <ReactModal contentClassName="modalHeight" isOpen={openEditModal}>
      <div className="editModal">
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Pet Name"
              value={changedPetName}
              onChange={(input) => setChangedPetName(input.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Pet Type"
              value={changedPetType}
              onChange={(input) => setChangedPetType(input.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Breed"
              value={changedBreed}
              onChange={(input) => setChangedBreed(input.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Age"
              value={changedAge}
              onChange={(input) => setChangedAge(input.target.value)}
            />
          </div>
        </div>
        <div className="submitContainer">
          <button
            className="button"
            onClick={() => {
              onEditPetDetailsSubmit(
                changedPetDetailsId,
                changedPetName,
                changedPetType,
                changedBreed,
                changedAge
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
            onClick={() => closeEditModal()}
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

export default EditPetDetailsModal;
