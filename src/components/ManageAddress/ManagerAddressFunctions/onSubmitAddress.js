import { ADD_ADDRESS } from "../../../constants/common";
import triggerAPI from "../../../utils/APIUtils";

async function onSubmitAddress(
  changedAddress,
  changedCity,
  changedPincode,
  email,
  setOpenAddAddressModal,
  setRefreshPage
) {
  const data = {
    address: changedAddress,
    city: changedCity,
    pincode: changedPincode,
    userId: email,
  };

  await triggerAPI(ADD_ADDRESS, data);
  setRefreshPage((prevValue) => !prevValue);
  setOpenAddAddressModal(false);
}

export default onSubmitAddress;
