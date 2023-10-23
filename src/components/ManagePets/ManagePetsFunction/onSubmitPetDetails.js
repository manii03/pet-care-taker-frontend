import { ADD_PET_INFO, PET_AVAILABLE } from "../../../constants/common";
import triggerAPI from "../../../utils/APIUtils";

async function onSubmitPetDetails(
  changedPetName,
  changedPetType,
  changedBreed,
  changedAge,
  email,
  setOpenAddPetModal
) {
  const data = {
    petName: changedPetName,
    petType: changedPetType,
    breed: changedBreed,
    age: changedAge,
    userId: email,
  };
  await triggerAPI(ADD_PET_INFO, data);

  const petAvailableData = {
    petName: changedPetName,
    petType: changedPetType,
    breed: changedBreed,
    age: changedAge,
    available: false,
    userId: email,
  };

  await triggerAPI(PET_AVAILABLE, petAvailableData);
  
  setOpenAddPetModal(false);
}

export default onSubmitPetDetails;
