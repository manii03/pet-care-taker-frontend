// import editAddressAPI from "../../../apiCalls/editAddressAPI";

import { EDIT_ADDRESS } from "../../../constants/common";
import triggerAPI from "../../../utils/APIUtils";

async function onEditAddressSubmit(
  changedAddress,
  changedAddressId,
  changedPincode,
  changedCity
) {
  const request = {
    userId: localStorage.getItem("email"),
    id: changedAddressId,
    address: changedAddress,
    city: changedCity,
    pincode: changedPincode,
  };

  const response = await triggerAPI(EDIT_ADDRESS, request);
}

export default onEditAddressSubmit;
