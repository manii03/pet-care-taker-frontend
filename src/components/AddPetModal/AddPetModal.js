import ReactModal from "react-modal";
import crossImg from "../../pictures/cross.png";
import "./AddPetModal.css";
import { colors } from "../../utils/Colors";
import onSubmitPetDetails from "../ManagePets/ManagePetsFunction/onSubmitPetDetails";

function AddPetModal({
  openAddPetModal,
  closeAddPetModal,
  changedPetName,
  setChangedPetName,
  changedPetType,
  setChangedPetType,
  changedBreed,
  setChangedBreed,
  changedAge,
  setChangedAge,
  setOpenAddPetModal,
}) {
  const email = localStorage.getItem("email");
  return (
    <div>
      <ReactModal isOpen={openAddPetModal}>
        <div
          className="addressModal"
          style={{
            background: colors.COMPLIMENTARY_BLUE,
          }}
        >
          <div className="crossImg">
            <img
              onClick={() => closeAddPetModal()}
              className="Image"
              src={crossImg}
              alt="Cross"
              height="30px"
              width="30px"
            />
          </div>
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
                placeholder="breed"
                value={changedBreed}
                onChange={(input) => setChangedBreed(input.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="age"
                value={changedAge}
                onChange={(input) => setChangedAge(input.target.value)}
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
                onSubmitPetDetails(
                  changedPetName,
                  changedPetType,
                  changedBreed,
                  changedAge,
                  email,
                  setOpenAddPetModal
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
              onClick={() => closeAddPetModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default AddPetModal;
