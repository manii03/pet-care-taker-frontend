import { LOGIN_AS } from "../../../constants/common";
import { LOGIN, SIGNUP } from "../../../constants/constants";
import NavigateToPage from "../../../utils/navigationUtils";

function handleAuthStateChange(
  setEmail,
  setName,
  setPassword,
  currentAuthState,
  setCurrentAuthState,
  setAlternativeAuthState,
  
) {
  setEmail("");
  setName("");
  setPassword("");
  if (currentAuthState === SIGNUP) {
    setCurrentAuthState(LOGIN);
    setAlternativeAuthState(SIGNUP);
  } else {
    setCurrentAuthState(SIGNUP);
    setAlternativeAuthState(LOGIN);
  }
}

export default handleAuthStateChange;
