import { MANAGE_PETS } from "../../../constants/common";
import NavigateToPage from "../../../utils/navigationUtils";

function onClickManagePets(navigate) {
  NavigateToPage(navigate,MANAGE_PETS);
}

export default onClickManagePets;
