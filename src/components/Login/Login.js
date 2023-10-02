import personImg from "../../pictures/person.png";
import { useState } from "react";
import "./Login.css";
import emailImg from "../../pictures/email.png";
import passwordImg from "../../pictures/password.png";
import { STRINGS } from "../../string";
import { colors } from "../../utils/Colors";
import { useNavigate } from "react-router-dom";

function Login() {
  const [currentAuthState, setCurrentAuthState] = useState(STRINGS.LOGIN);
  const [alternativeAuthState, setAlternativeAuthState] = useState(
    STRINGS.SIGNUP
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuthStateChange = () => {
    setEmail("");
    setName("");
    setPassword("");
    if (currentAuthState === STRINGS.SIGNUP) {
      setCurrentAuthState(STRINGS.LOGIN);
      setAlternativeAuthState(STRINGS.SIGNUP);
    } else {
      setCurrentAuthState(STRINGS.SIGNUP);
      setAlternativeAuthState(STRINGS.LOGIN);
    }
  };

  const onInputChange = (input, inputType) => {
    if (inputType === "name") setName(input.target.value);
    if (inputType === "email") setEmail(input.target.value);
    if (inputType === "password") setPassword(input.target.value);
  };

  const onSubmit = async (currentAuthState) => {
    const data = {
      name: name,
      email: email,
      password: password,
    };

    if ((!name && currentAuthState === STRINGS.SIGNUP) || !email || !password) {
      console.log("something is empty");
      return;
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    if (currentAuthState === STRINGS.SIGNUP) {
      console.log("Hi i'm in :", currentAuthState);
      let response = fetch("http://localhost:8000/signUp", options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(response);
        })
        .then((finalResponse) => {
          localStorage.setItem("email", data.email);
           navigate("/mainpage")
          //{
          //   state: {
          //     email: data.email,
          //     name: data.name,
          //   },
          // });
        })
        .catch((errorResponse) => {
          errorResponse.json().then((error) => {
            console.log("Error is : ", error);
          });
        });
    } else {
      let response = fetch("http://localhost:8000/login", options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(response);
        })
        .then((finalResponse) => {
          localStorage.setItem("email", data.email);
          navigate("/mainpage")
          // , {
          //   state: {
          //     email: data.email,
          //     name: data.name,
          //   },
          // });
        })
        .catch((errorResponse) => {
          console.log(errorResponse);
          errorResponse.json().then((error) => {
            console.log("Error is : ", error);
          });
        });
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
        {currentAuthState === STRINGS.SIGNUP ? (
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
            onChange={(input) => onInputChange(input, "email")}
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
          />
        </div>
      </div>
      <div className="clickHereText">
        <p>
          {currentAuthState === STRINGS.SIGNUP
            ? STRINGS.ALREADY_HAVE_ACCOUNT
            : STRINGS.DONT_HAVE_ACCOUNT}
          {STRINGS.CLICK_HERE}
          <span onClick={() => handleAuthStateChange()}>
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
          onClick={() => onSubmit(currentAuthState)}
        >
          {currentAuthState}
        </button>
      </div>
    </div>
  );
}

export default Login;
