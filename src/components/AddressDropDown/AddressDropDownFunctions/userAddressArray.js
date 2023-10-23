function userAddressArray(userAddresses, cities, options) {
  userAddresses.map((address) => {
    const currAddress =
      address.address + "," + address.city + "," + address.pincode;
    cities[currAddress] = address.city;
    return options.push({ value: currAddress, label: currAddress });
  });
}

export default userAddressArray;
