import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaCheck, FaEnvelope } from "react-icons/fa6";

export default function OpenModal({ isOpen }) {
  const { onOpenChange, onOpen } = useDisclosure();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  (isOpenMenu);
  useEffect(() => {
    setIsOpenMenu(isOpen);
  }, []);
  const closeMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  };
  return (
    <>
      <Modal isOpen={isOpenMenu} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex gap-1 items-center">
                <FaCheck className="text-green-500" />
                <h2>Email enviado</h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center">
                  <FaEnvelope className="text-7xl text-emerald-300" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onPress={closeMenu}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
