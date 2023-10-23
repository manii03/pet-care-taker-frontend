import { LOCALHOST, LOGIN_AS } from "../../../constants/common";
import { SIGNUP } from "../../../constants/constants";
import NavigateToPage from "../../../utils/navigationUtils";

async function onSubmit(
  currentAuthState,
  email,
  name,
  password,
  navigate,
  setMessage
) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  if ((!name && currentAuthState === SIGNUP) || !email || !password) {
    console.log("something is empty");
    return;
  }

  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (!emailRegex.test(email)) {
    setMessage("Error! you have entered invalid email.");
  } else {
    setMessage("");

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    if (currentAuthState === SIGNUP) {
      console.log("Hi i'm in :", currentAuthState);
      let response = await fetch(`${LOCALHOST}/signUp`, options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(response);
        })
        .then((finalResponse) => {
          localStorage.setItem("email", data.email);
          NavigateToPage(navigate, LOGIN_AS);
        })
        .catch((errorResponse) => {
          errorResponse.json().then((error) => {
            console.log("Error is : ", error);
          });
        });
    } else {
      let response = fetch(`${LOCALHOST}/login`, options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(response);
        })
        .then((finalResponse) => {
          localStorage.setItem("email", data.email);
        })
        .catch((errorResponse) => {
          console.log(errorResponse);
          errorResponse.json().then((error) => {
            console.log("Error is : ", error);
          });
        });
    }
  }
}

export default onSubmit;
