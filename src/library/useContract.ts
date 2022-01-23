import { useEffect, useState } from "react";

import { ethers } from "ethers";
import { useEthers } from "./useEthers";

export const useContract = (abi: any, contractAddress: string) => {
  const { provider, signer } = useEthers();
  const [contract, setContract] = useState(new ethers.Contract(contractAddress, abi, signer || provider));

  useEffect(() => {
    initializeContract();
  }, [provider, signer]);

  const initializeContract = () => {
    const contract = new ethers.Contract(contractAddress, abi, signer || provider);
    setContract(contract);
  };

  return {
    contract,
  };
};
