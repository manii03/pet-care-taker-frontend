import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import { colors } from "../../utils/Colors";
import "./PetOwner.css";
import AddressDropDown from "../AddressDropDown/AddressDropDown";
import switchOn from "../../pictures/switchOn.png";
import switchOff from "../../pictures/switchOff.png";
import onSetSelectedCity from "../PetOwner/PetOwnerFunctions/onSetSelectedCity";
import onClickSwitch from "../PetOwner/PetOwnerFunctions/onClickSwitch";
import onUpdatePetAvailableDetails from "../PetOwner/PetOwnerFunctions/onUpdatePetAvailableDetails";
import generateNameString from "../../commonFunctions/generateNameString";
import {
  FETCH_ADDRESS,
  FETCH_PET_AVAILABLE,
  LOGIN,
  MANAGE_ADDRESS,
  MANAGE_PETS,
} from "../../constants/common";
import NavigateToPage from "../../utils/navigationUtils";
import triggerAPI from "../../utils/APIUtils";

function PetOwner() {
  const navigate = useNavigate();
  const [petAvailableArray, setPetAvailableArray] = useState({});
  const [userAddresses, setUserAddresses] = useState([]);
  const [petData, setPetData] = useState({});

  const checkUserEligibility = async () => {
    const email = localStorage.getItem("email");
    if (!email) {
      NavigateToPage(navigate, LOGIN);
    }

    const data = {
      userId: email,
    };

    try {
      const fetchAddressAPIResponse = await triggerAPI(FETCH_ADDRESS, data);
      console.log(
        "Addresses areeeeee : ",
        fetchAddressAPIResponse.response.message.address
      );
      setUserAddresses(fetchAddressAPIResponse.response.message.address);
    } catch (response) {
      if (response?.message?.includes("no address registered to this email")) {
        NavigateToPage(navigate, MANAGE_ADDRESS);
      }
    }

    try {
      console.log("hiiiiiiiiiiiiiiiiiii");
      const fetchPetAvailableAPIResponse = await triggerAPI(
        FETCH_PET_AVAILABLE,
        data
      );
      console.log("hioooiiiooo", fetchPetAvailableAPIResponse.response);
      console.log("Pets are : ", fetchPetAvailableAPIResponse.response.message);
      setPetAvailableArray(fetchPetAvailableAPIResponse.response.message);
    } catch (response) {
      if (response?.message?.includes("no pets registered to this email")) {
        NavigateToPage(navigate, MANAGE_PETS);
      }
    }
  };

  useEffect(() => {
    //IF EMAIL NOT REGISTERED, SEND USER TO LOGIN PAGE
    checkUserEligibility();
  }, []);

  console.log("petavailarrayyyy", petAvailableArray);

  useEffect(() => {
    onUpdatePetAvailableDetails(petAvailableArray);
  }, [petAvailableArray]);

  return (
    <div>
      <MenuBar />
      <div
        className="petOwnerContainer"
        style={{
          background: colors.COMPLIMENTARY_GREEN,
        }}
      >
        <div
          className="petOwnerHeader"
          style={{
            background: "#cccfdb",
          }}
        >
          <span className="headerText">
            Welcome Pet Owner, Please select city and availability and get your
            pet a care taker
          </span>
        </div>
        <div className="availablePetDetails">
          {petAvailableArray?.petAvailableDetails &&
            petAvailableArray?.petAvailableDetails.map(
              (petDetailsArray, index) => {
                return (
                  <div className="petDetails">
                    <div
                      className="petDetailsBoxInPetOwner"
                      style={{
                        background: colors.COMPLIMENTARY_BLUE,
                        color: colors.FONT_PRIMARY,
                      }}
                    >
                      <div className="petNameType">
                        {generateNameString("PetName", petDetailsArray?.petName)}
                        {generateNameString("PetType", petDetailsArray?.petType)}
                      </div>
                      <div className="petNameType">
                        {generateNameString("Breed", petDetailsArray?.breed)}
                        {generateNameString("Age", petDetailsArray?.age)}
                      </div>
                      <div className="selectText">Select Address</div>
                      <div className="addressSelectorInPetOwner">
                        {userAddresses.length > 0 ? (
                          <AddressDropDown
                            userAddresses={userAddresses}
                            setSelectedOption={(city) =>
                              onSetSelectedCity(
                                city,
                                index,
                                petAvailableArray,
                                setPetAvailableArray
                              )
                            }
                            setPetData={setPetData}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="selectText">Availability</div>
                      <div>
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
                          onClick={() =>
                            onClickSwitch(
                              index,
                              petAvailableArray,
                              setPetAvailableArray
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}

export default PetOwner;
