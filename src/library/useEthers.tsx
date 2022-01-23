import { createContext, useContext, useEffect, useState } from "react";

import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const defaultProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_URL);

type ConnectedWallet = {
  address: string;
  provider: ethers.providers.JsonRpcProvider;
  signer?: ethers.Signer;
};

type Ethers = {
  address?: string;
  signer?: ethers.Signer;
  provider: ethers.providers.JsonRpcProvider;
  connectToWallet: () => Promise<ConnectedWallet>;
};

const defaultFunction = (): Promise<ConnectedWallet> => {
  return Promise.resolve({
    provider: defaultProvider,
    address: "",
  });
};

const EthersContext = createContext<Ethers>({
  provider: defaultProvider,
  connectToWallet: defaultFunction,
});

export function EthersProvider({ children }) {
  const ethers = useProvideEthers();

  return <EthersContext.Provider value={ethers}>{children}</EthersContext.Provider>;
}

export const useEthers = () => {
  return useContext(EthersContext);
};

export const useProvideEthers = () => {
  const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider>(defaultProvider);
  const [signer, setSigner] = useState<ethers.Signer>();
  const [address, setAddress] = useState("");

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setProvider(provider);

      try {
        const address = await signer.getAddress();

        setSigner(signer);
        setAddress(address);
      } catch (err) {
        // TODO: log properly
      }
    }
  };

  const connectToWallet = async (): Promise<ConnectedWallet> => {
    if (!window.ethereum) {
      return {
        address,
        provider,
        signer,
      };
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const response = (await provider.send("eth_requestAccounts", [])) as [string];
      const address = response[0];

      setProvider(provider);
      setSigner(signer);
      setAddress(address);

      return {
        address,
        provider,
        signer,
      };
    } catch (err) {
      // TODO: log properly
      return {
        address,
        provider,
        signer,
      };
    }
  };

  return {
    connectToWallet,
    provider,
    signer,
    address,
  };
};
