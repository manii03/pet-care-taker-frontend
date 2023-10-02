import { useState } from "react";
import Modal from "react-modal";

function PetAdditionModal() {

  const [openPetModal, setOpenPetModal] = useState(true);

  const closePetModal = () => {
    setOpenPetModal(false);
  };


  return (
    <Modal isPetModal={openPetModal} contentLabel="Example2 Modal">
        <div className="closeModalButtons">
          <button onClick={() => closePetModal()}>close</button>
      </div>
    </Modal>
  );
};

export default PetAdditionModal;
