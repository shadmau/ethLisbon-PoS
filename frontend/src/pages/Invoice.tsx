import { PopupLayout } from "../components/PopupLayout";
import Container from "@mui/material/Container";
import { useState } from "react";
import { CreateInvoice } from "../components/Invoice/CreateInvoice";
import { ConfirmInvoice } from "../components/Invoice/ConfirmInvoice";

export function Invoice() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const createInvoice = () => {};

  return (
    <>
      <PopupLayout title={"Invoices"}>
        <Container>
          {isConfirmed ? (
            <ConfirmInvoice
              onClickConfirm={() => createInvoice()}
              onClickCancel={() => setIsConfirmed(false)}
            />
          ) : (
            <CreateInvoice
              onClickConfirm={() => setIsConfirmed(true)}
              onClickCancel={() => {}}
            />
          )}
        </Container>
      </PopupLayout>
    </>
  );
}
