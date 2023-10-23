function onEditAddress(
  address,
  setChangedAddress,
  setChangedCity,
  setChangedPincode,
  setChangedAddressId,
  setOpenEditModal
) {
  console.log("Selected address is :", address);
  setChangedAddress(address.address);
  setChangedCity(address.city);
  setChangedPincode(address.pincode);
  setChangedAddressId(address._id);
  setOpenEditModal(true);
}

export default onEditAddress;
