import * as React from "react";

import { Box, Code, Grid, Text, VStack } from "@chakra-ui/react";

import { ConnectWalletButton } from "./library/ConnectWalletButton";

export const App = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text>
          Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
        </Text>
        <ConnectWalletButton />
      </VStack>
    </Grid>
  </Box>
);
