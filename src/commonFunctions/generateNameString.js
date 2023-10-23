import { colors } from "../utils/Colors";

function generateNameString(name, value) {
  return (
    <div
      style={{
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      <span
        style={{
          color: colors.FONT_PRIMARY,
        }}
      >
        {name}:
      </span>
      <span
        style={{
          color: colors.FONT_PRIMARY,
        }}
      >
        {"  " + value}
      </span>
    </div>
  );
}

export default generateNameString;
