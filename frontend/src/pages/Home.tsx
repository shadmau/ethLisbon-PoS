import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { Typography } from "@mui/material";
import { WalletContext } from "../context/Wallet";
import { PopupLayout } from "../components/PopupLayout";
import Ethereum from "../assets/ethereum-logo.png";

export function HomePage({ ...props }) {
  const [address, setAddress] = useState("");
  const { accounts, logout, isMerchant } = useContext(WalletContext);
  useEffect(() => {
    if (accounts) {
      setAddress(accounts.address);
      console.log("address ", address);
    }
  }, [accounts]);

  return (
    <PopupLayout title="Account">
      <div className={styles.container} {...props}>
        <div className="space_32px"></div>
        <Typography variant="h4" component="h1">
          nike_lisbon@nike.com
        </Typography>
        <p className={styles.address}>0xabcd........xyz</p>
        <div className={styles.info}>
          <img src={Ethereum} height={65} width={50} />
          <p className={styles.amount}>0 ETH</p>
          <p className={styles.amount_doller}>$0.00 USD</p>
        </div>
      </div>
    </PopupLayout>
  );
}
