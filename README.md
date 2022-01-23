## Bootstrap DApp

![Component image](/public/bootstrapdapp.png)

A small collection of hooks and UI that are useful for building DApps <br /> Mini DApp has `useEthers`, `useContract`, and `ConnectWalletButton` to get your bootstrapped with your web3 dapp. <br />

## Installation

Drap and Drop the library to your react project and install ethers. Add `REACT_APP_INFURA_URL` to your environment. This should point to your infura environment. <br /> Wrap your top level React component in `EthersProvider` and you're ready to go. <br /> For create react app, wrap your index.js with `EthersProvider`.

```
<EthersProvider>
    <App />
</EthersProvider>
```

## Usage

###### useEthers

```
const { connectToWallet, address, provider, signer } = useEthers();
```

###### useContract

```
const { contract } = useContract(your_contract_abi, your_contract_address);
```

###### ConnectWalletButton

```
<ConnectWalletButton />
```
