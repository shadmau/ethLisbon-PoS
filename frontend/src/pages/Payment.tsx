import { useState } from "react";
import Container from "@mui/material/Container";
import { Process } from "../components/Payment/Process";
import { Confirm } from "../components/Payment/Confirm";

export function Payment() {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div>
      <Container>
        {confirmed ? (
          <Process />
        ) : (
          <Confirm
            onClickConfirm={() => setConfirmed(true)}
            onClickCancel={() => {}}
          />
        )}
      </Container>
    </div>
  );
}
