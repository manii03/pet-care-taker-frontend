async function onClickSwitch(index, petAvailableArray, setPetAvailableArray) {
  const temp = { ...petAvailableArray };
  console.log("onclick",temp.petAvailableDetails[index].available)
  temp.petAvailableDetails[index].available =
    !temp.petAvailableDetails[index].available;
  setPetAvailableArray(temp);
  console.log("onclick", temp.petAvailableDetails[index].available);
}

export default onClickSwitch;
