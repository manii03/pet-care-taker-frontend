import { GET_USERS_BY_CITIES } from "../../../constants/common";
import triggerAPI from "../../../utils/APIUtils"
async function onSelectedCityOptions(city, setSelectedOption, setPetData) {
  console.log("city is", city);
  setSelectedOption(city);
  localStorage.setItem("defaultCity", city);
  const citiesData = {
    cities: [city],
  };

  const response = await triggerAPI(GET_USERS_BY_CITIES, citiesData);

  setPetData(response.response.message);
}

export default onSelectedCityOptions;
