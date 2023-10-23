import personImg from "../../pictures/person.png";
import { useState } from "react";
import "./Login.css";
import emailImg from "../../pictures/email.png";
import passwordImg from "../../pictures/password.png";
import { colors } from "../../utils/Colors";
import { useNavigate } from "react-router-dom";
import handleAuthStateChange from "./LoginFunctions/handleAuthStateChange";
import onSubmit from "./LoginFunctions/onSubmit";
import {
  ALREADY_HAVE_ACCOUNT,
  CLICK_HERE,
  DONT_HAVE_ACCOUNT,
  LOGIN,
  SIGNUP,
} from "../../constants/constants";

function Login() {
  const [currentAuthState, setCurrentAuthState] = useState(LOGIN);
  const [alternativeAuthState, setAlternativeAuthState] = useState(SIGNUP);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(" ");

  const navigate = useNavigate();

  const onInputChange = (input, inputType) => {
    if (inputType === "name") setName(input.target.value);
    if (inputType === "email") setEmail(input.target.value);
    if (inputType === "password") setPassword(input.target.value);
  };

  const checkEMail = (inputValue) => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue.target.value)) {
      setMessage("Error! you have entered invalid email.");
    } else {
      setMessage("");
    }
  };

  return (
    <div
      className="Login"
      style={{
        backgroundColor: colors.COMPLIMENTARY_BLUE,
        color: colors.FONT_SECONDARY,
      }}
    >
      <div
        className="text"
        style={{
          color: colors.FONT_SECONDARY,
        }}
      >
        {currentAuthState}
      </div>
      <div
        className="inputs"
        style={{
          backgroundColor: colors.COMPLIMENTARY_BLUE,
          color: colors.FONT_SECONDARY,
        }}
      >
        {/* Don't show Name input field for login */}
        {currentAuthState === SIGNUP ? (
          <div
            className="input"
            style={{
              backgroundColor: colors.COMPLIMENTARY_GREEN,
              color: colors.FONT_SECONDARY,
            }}
          >
            <img src={personImg} alt="Name" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              required={true}
              onChange={(input) => onInputChange(input, "name")}
              style={{
                width: "100%",
                height: "70px",
              }}
            />
          </div>
        ) : (
          ""
        )}
        <div
          className="input"
          style={{
            backgroundColor: colors.COMPLIMENTARY_GREEN,
            color: colors.FONT_SECONDARY,
          }}
        >
          <img src={emailImg} alt="Email" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required={true}
            onChange={(input) => {
              onInputChange(input, "email");
              checkEMail(input);
            }}
            style={{
              width: "100%",
              height: "70px",
            }}
          />
        </div>
        <div
          className="input"
          style={{
            backgroundColor: colors.COMPLIMENTARY_GREEN,
            color: colors.FONT_SECONDARY,
          }}
        >
          <img src={passwordImg} alt="Password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required={true}
            onChange={(input) => onInputChange(input, "password")}
            style={{
              width: "100%",
              height: "70px",
            }}
          />
        </div>
      </div>
      <div className="clickHereText">
        <p>
          {currentAuthState === SIGNUP
            ? ALREADY_HAVE_ACCOUNT
            : DONT_HAVE_ACCOUNT}
          {CLICK_HERE}
          <span
            onClick={() =>
              handleAuthStateChange(
                setEmail,
                setName,
                setPassword,
                currentAuthState,
                setCurrentAuthState,
                setAlternativeAuthState,
                navigate,
                
              )
            }
          >
            {alternativeAuthState}
          </span>
        </p>
      </div>
      <div className="submit-container">
        <button
          className="submit"
          style={{
            backgroundColor: colors.COMPLIMENTARY_RED,
            color: colors.FONT_SECONDARY,
          }}
          onClick={() => onSubmit(currentAuthState, email, name, password,navigate, setMessage)}
        >
          {currentAuthState}
        </button>
      </div>
      {message}
    </div>
  );
}

export default Login;
