function onDeleteAddress(setChangedAddressId,add,email) {
  console.log("address", add);
  setChangedAddressId(add._id);

  const data = {
    id: add._id,
    userId: email,
  };
}
export default onDeleteAddress