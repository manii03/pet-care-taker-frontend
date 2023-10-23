import { useState, useEffect } from "react";
import { colors } from "../../utils/Colors";
import { useNavigate } from "react-router-dom";
import "./ManagePets.css";
import MenuBar from "../MenuBar/MenuBar";
import EditPetDetailsModal from "../EditPetDetailsModal/EditPetDetailsModal";
import AddPetModal from "../AddPetModal/AddPetModal";
import closeEditModal from "./ManagePetsFunction/closeEditModal";
import closeAddPetModal from "./ManagePetsFunction/closeAddPetModal";
import onAddPetDetails from "./ManagePetsFunction/onAddPetDetails";
import onEditPetDetails from "./ManagePetsFunction/onEditPetDetails";
import generateNameString from "../../commonFunctions/generateNameString";
import { DELETE, EDIT, FETCH_PET_INFO, LOGIN } from "../../constants/common";
import NavigateToPage from "../../utils/navigationUtils";
import { ADD_PET, YOUR_SAVED_PETS } from "../../constants/constants";
import onDeletePetDetails from "./ManagePetsFunction/onDeletePetDetails";
import triggerAPI from "../../utils/APIUtils";

function ManagePets() {
  const navigate = useNavigate();

  let email = localStorage.getItem("email");
  const [userPetDetails, setUserPetDetails] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [changedPetName, setChangedPetName] = useState("");
  const [changedPetType, setChangedPetType] = useState("");
  const [changedBreed, setChangedBreed] = useState("");
  const [changedAge, setChangedAge] = useState("");
  const [changedPetDetailsId, setChangedPetDetailsId] = useState("");
  const [openAddPetModal, setOpenAddPetModal] = useState(false);

  async function fetchingPetInfo() {
    const data = {
      userId: email,
    };

    try {
      const fetchPetInfoAPIResponse = await triggerAPI(FETCH_PET_INFO, data);
      setUserPetDetails(fetchPetInfoAPIResponse.response.message.petInfoArray);
    } catch (response) {
      if (response?.message?.includes("no pets registered to this email")) {
        NavigateToPage(navigate, LOGIN);
      }
    }
  }

  useEffect(() => {
    fetchingPetInfo();
  }, []);

  return (
    <div>
      <MenuBar />
      <EditPetDetailsModal
        closeEditModal={closeEditModal}
        openEditModal={openEditModal}
        userPetDetails={userPetDetails}
        changedPetName={changedPetName}
        setChangedPetName={setChangedPetName}
        changedPetType={changedPetType}
        setChangedPetType={setChangedPetType}
        changedBreed={changedBreed}
        setChangedBreed={setChangedBreed}
        changedAge={changedAge}
        setChangedAge={setChangedAge}
        changedPetDetailsId={changedPetDetailsId}
      />
      <AddPetModal
        openAddPetModal={openAddPetModal}
        closeAddPetModal={closeAddPetModal}
        changedPetName={changedPetName}
        setChangedPetName={setChangedPetName}
        changedPetType={changedPetType}
        setChangedPetType={setChangedPetType}
        changedBreed={changedBreed}
        setChangedBreed={setChangedBreed}
        changedAge={changedAge}
        setChangedAge={setChangedAge}
        setOpenAddPetModal={setOpenAddPetModal}
      />
      <div
        className="managePets"
        style={{
          background: colors.COMPLIMENTARY_GREEN,
        }}
      >
        <div
          className="headings"
          style={{
            color: colors.FONT_PRIMARY,
          }}
        >
          {YOUR_SAVED_PETS}
        </div>
        <div>
          {userPetDetails.map((pet) => {
            return (
              <div className="petDetails">
                <div
                  className="petDetailsBox"
                  style={{
                    background: colors.COMPLIMENTARY_BLUE,
                    color: colors.FONT_SECONDARY,
                  }}
                >
                  <div className="petNameType">
                    {generateNameString("PetName", pet.petName)}
                    {generateNameString("PetType", pet.petType)}
                  </div>
                  <div className="petNameType">
                    {generateNameString("Breed", pet.breed)}
                    {generateNameString("Age", pet.age)}
                  </div>
                </div>
                <div className="editDeleteButtons">
                  <div
                    className="button"
                    style={{
                      backgroundColor: colors.COMPLIMENTARY_YELLOW,
                      color: colors.FONT_SECONDARY,
                    }}
                    onClick={() =>
                      onEditPetDetails(
                        pet,
                        setChangedPetName,
                        setChangedPetType,
                        setChangedBreed,
                        setChangedAge,
                        setChangedPetDetailsId,
                        setOpenEditModal
                      )
                    }
                  >
                    {EDIT}
                  </div>
                  <div
                    className="button"
                    style={{
                      backgroundColor: colors.COMPLIMENTARY_RED,
                      color: colors.FONT_SECONDARY,
                    }}
                    onClick={() =>
                      onDeletePetDetails(
                        pet,
                        setChangedPetDetailsId,
                        changedPetDetailsId,
                        email
                      )
                    }
                  >
                    {DELETE}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{}}>
          <button
            className="button"
            style={{
              background: colors.COMPLIMENTARY_BLUE,
              color: colors.FONT_PRIMARY,
            }}
            onClick={() =>
              onAddPetDetails(
                setChangedPetName,
                setChangedPetType,
                setChangedBreed,
                setChangedAge,
                setOpenAddPetModal
              )
            }
          >
            {ADD_PET}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManagePets;
