import Select from "react-select";
import { colors } from "../../utils/Colors";

function AvailabilityDropDown({ OnSetSelectAvailability }) {
  const options = [];
  options.push(
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    }
  );
  return (
    <div>
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
        onChange={(isAvailable) => {
          isAvailable === "Yes"
            ? OnSetSelectAvailability(true)
            : OnSetSelectAvailability(false);
        }}
        options={options}
      />
    </div>
  );
}

export default AvailabilityDropDown;
