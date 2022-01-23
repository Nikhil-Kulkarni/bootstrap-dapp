import * as React from "react";

import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

import { App } from "./App";
import { EthersProvider } from "./library/useEthers";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <EthersProvider>
        <App />
      </EthersProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
