import {
  Button,
  Container,
  Divider,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { BiWallet } from "react-icons/bi";
import { useEthers } from "./useEthers";
import { useState } from "react";

export const ConnectWalletButton = () => {
  const onModalClose = () => {};
  const { connectToWallet } = useEthers();
  const [loading, setLoading] = useState(false);

  const onConnectWalletClick = async () => {
    setLoading(true);
    await connectToWallet();
    setLoading(false);
  };

  return (
    <>
      <Button
        leftIcon={<BiWallet />}
        onClick={onConnectWalletClick}
        bgColor="black"
        textColor="white"
        _hover={{ bg: "black" }}
      >
        Connect Wallet
      </Button>
      <Modal isOpen={loading} onClose={onModalClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <Divider />
          <Container pt={28} pb={28} alignItems="center">
            <ModalBody>
              <Heading size="sm" textAlign="center">
                Pushing a request to your wallet..
              </Heading>
            </ModalBody>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
