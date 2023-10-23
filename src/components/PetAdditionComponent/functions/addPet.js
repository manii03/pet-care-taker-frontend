function addPet(setCountPet, petArray) {
  setCountPet((prev) => {
    return prev + 1;
  });

  petArray.push({
    petName: "",
    petType: "",
    breed: "",
    age: "",
  });
}

export default addPet;
