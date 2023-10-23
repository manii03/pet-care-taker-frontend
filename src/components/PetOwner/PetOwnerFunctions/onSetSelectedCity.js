function onSetSelectedCity(
  city,
  index,
  petAvailableArray,
  setPetAvailableArray
) {
  const prevPetAvailableArray = { ...petAvailableArray };
  prevPetAvailableArray.petAvailableDetails[index].city = city;
  console.log("city is", city);
  setPetAvailableArray(prevPetAvailableArray);

  console.log("cityyyyyyy", city);
}

export default onSetSelectedCity;
