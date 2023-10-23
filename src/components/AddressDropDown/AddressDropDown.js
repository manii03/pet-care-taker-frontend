import Select from "react-select";
import "./AddressDropDown.css";
import { colors } from "../../utils/Colors";
import userAddressArray from "./AddressDropDownFunctions/userAddressArray";
import onSelectedCityOptions from "../CareTaker/CareTakerFubctions/onSelectedCityOptions";

const AddressDropDown = ({ userAddresses, setSelectedOption, setPetData }) => {
  const options = [];
  const cities = {};

  userAddressArray(userAddresses, cities, options);

  console.log("options ARE", options);

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "row",
    //   justifyContent: "flex-end",
    //   width: "100%",
    //   margin: "30px",
    // }}
    >
      <Select
        id="AddressSelecter"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : colors.FONT_SECONDARY,
            background: colors.FONT_SECONDARY,
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: colors.FONT_SECONDARY,
            primary: "grey",
          },
        })}
        defaultValue={null}
        onChange={(city) => {
          onSelectedCityOptions(
            cities[city?.value],
            setSelectedOption,
            setPetData
          );
        }}
        options={options}
      />
    </div>
  );
};

export default AddressDropDown;
