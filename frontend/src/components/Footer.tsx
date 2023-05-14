import { Equalizer, Home, Person, QrCode, Wallet } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Paper,
} from "@mui/material";

export function Footer() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const navigationRoutes = ["/", "/activity", "/my-wallets", "/profile"];

  function handleClickQRCode() {
    navigate("/scanner");
  }

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(navigationRoutes[newValue]);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Activity" icon={<Equalizer />} />
          <BottomNavigationAction label="My Wallets" icon={<Wallet />} />
          <BottomNavigationAction label="Profile" icon={<Person />} />
        </BottomNavigation>
      </Paper>
      <Paper
        sx={{
          width: "fit-content",
          position: "fixed",
          bottom: "4%",
          left: "50%",
          right: 0,
          transform: "translateX(-50%)",
          borderRadius: "100%",
        }}
        elevation={5}
      >
        <Button
          sx={{ width: "56px", height: "56px", borderRadius: "100%" }}
          variant="contained"
          onClick={handleClickQRCode}
        >
          <QrCode />
        </Button>
      </Paper>
    </>
  );
}
