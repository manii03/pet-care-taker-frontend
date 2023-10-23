function onEditPetDetailsSubmit(
  changedPetDetailsId,
  changedPetName,
  changedPetType,
  changedBreed,
  changedAge
) {
  const request = {
    userId: localStorage.getItem("email"),
    id: changedPetDetailsId,
    petName: changedPetName,
    petType: changedPetType,
    breed: changedBreed,
    age: changedAge,
  };

  console.log("Data is : ", 
  request);

//API call
}

export default onEditPetDetailsSubmit;
