import { DELETE_PET_INFO } from "../../../constants/common";
import triggerAPI from "../../../utils/APIUtils";

async function onDeletePetDetails(
  pet,
  setChangedPetDetailsId,
  changedPetDetailsId,
  email
) {
  setChangedPetDetailsId(pet._id);

  const data = {
    id: pet._id,
    userId: email,
  };
  console.log("changed id",changedPetDetailsId)
  await triggerAPI(DELETE_PET_INFO,data);

}
export default onDeletePetDetails;