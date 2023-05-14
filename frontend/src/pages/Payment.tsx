import { useState } from "react";
import Container from "@mui/material/Container";
import { Process } from "../components/Payment/Process";
import { Confirm } from "../components/Payment/Confirm";
import styles from "./Payment.module.scss";

export function Payment() {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <Container className={styles.container}>
      {confirmed ? (
        <Process />
      ) : (
        <Confirm
          onClickConfirm={() => setConfirmed(true)}
          onClickCancel={() => {}}
        />
      )}
    </Container>
  );
}
