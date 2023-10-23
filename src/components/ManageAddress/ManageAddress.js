import { useState, useEffect } from "react";
import { colors } from "../../utils/Colors";
import MenuBar from "../MenuBar/MenuBar";
import EditAddressModal from "../EditAddressModal/EditAddressModal";
import "./ManageAddress.css";
import "../ManagePets/ManagePets.css";
import AddressModal from "../AddressModal/AddressModal";
import onAddAddress from "./ManagerAddressFunctions/onAddAddress";
import generateNameString from "../../commonFunctions/generateNameString";
import onEditAddress from "./ManagerAddressFunctions/onEditAddress";
import triggerAPI from "../../utils/APIUtils";
import {
  ADD_ADDRESS,
  DELETE,
  DELETE_ADDRESS_API,
  EDIT,
  FETCH_ADDRESS,
} from "../../constants/common";
import { YOUR_SAVED_ADDRESS } from "../../constants/constants";

function ManageAddress() {
  let email = localStorage.getItem("email");
  const [userAddresses, setUserAddresses] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [changedAddress, setChangedAddress] = useState("");
  const [changedCity, setChangedCity] = useState("");
  const [changedPincode, setChangedPincode] = useState("");
  const [changedAddressId, setChangedAddressId] = useState("");
  const [openAddAddressModal, setOpenAddAddressModal] = useState(false);
  const [refreshPage, setRefreshPage] = useState(true);

  /* ON DELETE ADDRESS*/
  const onDeleteAddress = async (add) => {
    console.log("address", add);
    setChangedAddressId(add._id);

    const data = {
      id: add._id,
      userId: email,
    };

    await triggerAPI(DELETE_ADDRESS_API, data);

    setRefreshPage((prevValue) => !prevValue);
  };

  const fetchAddresses = async () => {
    const data = {
      userId: email,
    };

    const response = await triggerAPI(FETCH_ADDRESS, data);

    setUserAddresses(response.response.message.address);
  };

  useEffect(() => {
    fetchAddresses();
  }, [refreshPage]);

  return (
    <div>
      <MenuBar />
      <EditAddressModal
        setOpenEditModal={setOpenEditModal}
        openEditModal={openEditModal}
        userAddresses={userAddresses}
        changedAddress={changedAddress}
        setChangedAddress={setChangedAddress}
        changedCity={changedCity}
        setChangedCity={setChangedCity}
        changedPincode={changedPincode}
        setChangedPincode={setChangedPincode}
        changedAddressId={changedAddressId}
        setRefreshPage={setRefreshPage}
      />
      <AddressModal
        openAddAddressModal={openAddAddressModal}
        changedAddress={changedAddress}
        setChangedAddress={setChangedAddress}
        changedCity={changedCity}
        setChangedCity={setChangedCity}
        changedPincode={changedPincode}
        setChangedPincode={setChangedPincode}
        setOpenAddAddressModal={setOpenAddAddressModal}
        setRefreshPage={setRefreshPage}
      />
      <div
        className="manageAddressContainer"
        style={{
          background: colors.COMPLIMENTARY_GREEN,
        }}
      >
        <div
          className="manageAddressHeader"
          style={{
            background: "#cccfdb",
            color: colors.FONT_PRIMARY,
          }}
        >
          {YOUR_SAVED_ADDRESS}
        </div>
        <div>
          {userAddresses.map((address) => {
            return (
              <div className="addressDetailsContainer">
                <div
                  className="addressDetailsCard"
                  style={{
                    background: colors.COMPLIMENTARY_BLUE,
                    color: colors.FONT_SECONDARY,
                  }}
                >
                  <div className="address">
                    {generateNameString("Address", address.address)}
                  </div>
                  <div className="cityPincode">
                    {generateNameString("City", address.city)}
                    {generateNameString("Pincode", address.pincode)}
                  </div>
                </div>
                <div className="EditDelete">
                  <div
                    className="button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: colors.COMPLIMENTARY_YELLOW,
                      color: colors.FONT_SECONDARY,
                      margin: "10px",
                    }}
                    onClick={() =>
                      onEditAddress(
                        address,
                        setChangedAddress,
                        setChangedCity,
                        setChangedPincode,
                        setChangedAddressId,
                        setOpenEditModal
                      )
                    }
                  >
                    {EDIT}
                  </div>
                  <div
                    className="button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: colors.COMPLIMENTARY_RED,
                      color: colors.FONT_SECONDARY,
                    }}
                    onClick={() => onDeleteAddress(address)}
                  >
                    {DELETE}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{}}>
          <button
            className="button"
            style={{
              background: colors.COMPLIMENTARY_BLUE,
              color: colors.FONT_PRIMARY,
            }}
            onClick={() =>
              onAddAddress(
                setChangedAddress,
                setChangedCity,
                setChangedPincode,
                setOpenAddAddressModal
              )
            }
          >
            {ADD_ADDRESS}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageAddress;
