import { useEffect, useState } from "react";
import "./CareTaker.css";
import { useNavigate } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import AddressDropDown from "../AddressDropDown/AddressDropDown";
import { colors } from "../../utils/Colors";
import generateNameString from "../../commonFunctions/generateNameString";
import triggerAPI from "../../utils/APIUtils";
import NavigateToPage from "../../utils/navigationUtils";
import { FETCH_ADDRESS, GET_USERS_BY_CITIES, LOGIN, MANAGE_ADDRESS } from "../../constants/common";
import { CARETAKERHEADERTEXT } from "../../constants/constants";

function CareTaker() {
  const navigate = useNavigate();
  const defaultCity = localStorage.getItem("defaultCity");
  const [userAddresses, setUserAddresses] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [petData, setPetData] = useState([]);

  const getUserCities = async () => {
    const citiesArray = [];
    const email = localStorage.getItem("email");

    if (!email) {
      NavigateToPage(navigate,LOGIN);
    }

    const data = {
      userId: email,
    };
    try {
      const fetchAddressAPIResponse = await triggerAPI(FETCH_ADDRESS, data);
      setUserAddresses(fetchAddressAPIResponse.response.message.address);
      fetchAddressAPIResponse.response.message.address.map((add) => {
        citiesArray.push(add.city);
      });

      const cityData = { cities: [] };

      if (defaultCity == null) {
        cityData.cities = [...citiesArray];
      } else {
        cityData.cities.push(defaultCity);
      }

      // setPetData(citiesArray);

      const getUsersByCitiesAPIResponse = await triggerAPI(
        GET_USERS_BY_CITIES,
        cityData
      );
      setPetData(getUsersByCitiesAPIResponse.response.message);
    } catch (rresponse) {
      console.log("error response is : ", rresponse);
      if (
        JSON.stringify(rresponse).includes(
          "no address registered to this email"
        )
      ) {
        NavigateToPage(navigate,MANAGE_ADDRESS);
      }
    }
  };

  useEffect(() => {
    getUserCities();
  }, []);

  return (
    <div>
      <MenuBar />
      <div
        className="careTakerContainer"
        style={{
          background: colors.COMPLIMENTARY_GREEN,
        }}
      >
        <div
          className="careTakerHeader"
          style={{
            background: "#cccfdb",
          }}
        >
          <div></div>
          <span className="careTakerHeaderText">{CARETAKERHEADERTEXT}</span>
          <span className="careTakerAddressSelector">
            {userAddresses.length > 0 ? (
              <AddressDropDown
                userAddresses={userAddresses}
                setSelectedOption={setSelectedOption}
                setPetData={setPetData}
              />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="careTakerBody">
          {petData.length > 0 ? (
            <div className="availablePets">
              {petData.map((pet) => {
                return (
                  <div
                    className="availablePetCard"
                    style={{
                      background: colors.COMPLIMENTARY_BLUE,
                      color: colors.FONT_PRIMARY,
                    }}
                  >
                    {generateNameString("Name", pet?.petDetails?.petName)}
                    {generateNameString("Type", pet?.petDetails?.petType)}
                    {generateNameString("Breed", pet?.petDetails?.breed)}
                    {generateNameString("Age", pet?.petDetails?.age)}
                    <div>Select</div>
                    {/* <div>
                      <img
                        className="Image"
                        src={
                          petDetailsArray.available === true
                            ? switchOn
                            : switchOff
                        }
                        alt="Cross"
                        height="30px"
                        width="30px"
                        onClick={() => onClickSwitch(index)}
                      />
                    </div> */}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CareTaker;
