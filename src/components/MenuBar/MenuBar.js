import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function MenuBar() {
  const navigate = useNavigate();
  const onClickAsPetOwner = () => {
    navigate("/petowner");
  };

  const onClickAsCareTaker = () => {
    navigate("/caretaker");
  };

  const onClickContact = () => {
    navigate("/home");
  };

  const onClickAddAddress = () => {
    navigate("/manageaddress");
  };
  const onClickAddPet = () => {
    navigate("/loginAs");
  };
  return (
    <Menu>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // backgroundColor: colors.COMPLIMENTARY_GREEN,
        }}
      >
        <div
          id="Switch as Pet owner"
          className="menuItem"
          onClick={() => onClickAsPetOwner()}
        >
          Switch as Pet owner
        </div>
        <div
          id="Switch as Pet care taker"
          className="menuItem"
          onClick={() => onClickAsCareTaker()}
        >
          Switch as Pet care taker
        </div>
        <div
          id="Manage Address"
          className="menuItem"
          onClick={() => onClickAddAddress()}
        >
          Manage Address
        </div>
        <div
          id="Manage Pet"
          className="menuItem"
          onClick={() => onClickAddPet()}
        >
          Manage Pet
        </div>
        <div id="contact" className="menuItem" onClick={() => onClickContact()}>
          Contact Us
        </div>
      </div>
    </Menu>
  );
}

export default MenuBar;
