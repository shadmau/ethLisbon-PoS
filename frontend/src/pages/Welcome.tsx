import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { WalletContext } from "../context/Wallet";

export function WelcomePage() {
  const { login, handleSetUserAsMerchant } = useContext(WalletContext);

  function handleStart() {
    login();
  }

  function handleStartAsMerchant() {
    handleSetUserAsMerchant();
    login();
  }

  return (
    <Box
      sx={{
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Box
        sx={{
          width: "86vw",
          height: "84vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <Typography variant="h4" component="h1">
          Send your money smarter
        </Typography>
        <Typography sx={{ paddingTop: "0.75rem", paddingBottom: "4rem" }}>
          Quick supportive description
        </Typography>
      </Box>
      <Button sx={{ margin: '1rem' }} fullWidth variant="contained" onClick={handleStart}>
        Start here
      </Button>
      <Button fullWidth variant="outlined" color="info" onClick={handleStartAsMerchant}>
        Start here as a Merchant
      </Button>
    </Box>
  );
}
