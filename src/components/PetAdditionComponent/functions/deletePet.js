function deletePet(countPet, setCountPet) {
  if (countPet >= 1) {
    setCountPet((prev) => {
      return prev - 1;
    });
  }
}

export default deletePet;
