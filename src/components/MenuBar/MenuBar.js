import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { colors } from "../../utils/Colors";
import onClickManageAddress from "./Functions/onClickManageAddress";
import onClickManagePets from "./Functions/onClickManagePets";
import onClickAsCareTaker from "./Functions/onClickAsCareTaker";
import onClickAsPetOwner from "./Functions/onClickAsPetOwner";
import onClickContact from "./Functions/onClickContact";

function MenuBar() {
  const navigate = useNavigate();

  return (
    <Menu>
      <div
        className="menuBarContainer"
        style={{
          backgroundColor: colors.COMPLIMENTARY_GREEN,
        }}
      >
        <div
          id="Switch as Pet owner"
          className="menuItem"
          onClick={() => onClickAsPetOwner(navigate)}
        >
          Switch as Pet owner
        </div>
        <div
          id="Switch as Pet care taker"
          className="menuItem"
          onClick={() => onClickAsCareTaker(navigate)}
        >
          Switch as Pet care taker
        </div>
        <div
          id="Manage Address"
          className="menuItem"
          onClick={() => onClickManageAddress(navigate)}
        >
          Manage Address
        </div>
        <div
          id="Manage Pet"
          className="menuItem"
          onClick={() => onClickManagePets(navigate)}
        >
          Manage Pet
        </div>
        <div
          id="contact"
          className="menuItem"
          onClick={() => onClickContact(navigate)}
        >
          Contact Us
        </div>
      </div>
    </Menu>
  );
}

export default MenuBar;
