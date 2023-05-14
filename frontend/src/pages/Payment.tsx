import { useContext, useState } from "react";
import Container from "@mui/material/Container";
import { Process } from "../components/Payment/Process";
import { Confirm } from "../components/Payment/Confirm";
import styles from "./Payment.module.scss";
import { sendTransaction } from "../utils/sendTransaction";
import { WalletContext } from "../context/Wallet";

export function Payment() {
  const [confirmed, setConfirmed] = useState(false);
  const { privateKey, safeAddress } = useContext(WalletContext);

  const send = async () => {
    await sendTransaction(privateKey, safeAddress!);
    setConfirmed(true);
  };
  return (
    <Container className={styles.container}>
      {confirmed ? (
        <Process />
      ) : (
        <Confirm onClickConfirm={() => send()} onClickCancel={() => {}} />
      )}
    </Container>
  );
}
