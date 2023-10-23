function onEditPetDetails(pet, setChangedPetName, setChangedPetType, setChangedBreed,setChangedAge,setChangedPetDetailsId,setOpenEditModal) {
  console.log("Selected pet is :", pet);
  setChangedPetName(pet.petName);
  setChangedPetType(pet.petType);
  setChangedBreed(pet.breed);
  setChangedAge(pet.age);
  setChangedPetDetailsId(pet._id);
  setOpenEditModal(true);
};

export default onEditPetDetails
