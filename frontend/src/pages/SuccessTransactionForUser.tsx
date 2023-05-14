import { PopupLayout } from "../components/PopupLayout";
import { TicketLayout } from "../components/TicketLayout";
import { WideButton } from "../components/WideButton";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export function SuccessTransactionForUser() {
  const onClickConfirm = () => {};
  const onClickCancel = () => {
    //TODO: navigate to homepage
  };

  const moveExploer = () => {};
  return (
    <div>
      <PopupLayout title={"Invoices"}>
        <TicketLayout
          icon={
            <CheckIcon
              sx={{ color: "#FFFFFF", paddingTop: "12px" }}
              fontSize={"large"}
            />
          }
        >
          <p>Great!</p>
          <p>Transaction Successful</p>
          <p>Below is the transaction summary</p>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              background: "#D1D5DB",
              width: "100%",
              borderRadius: "12px",
            }}
            size={"large"}
            onClick={() => moveExploer()}
          >
            Tx hash
          </Button>
          <Divider />
          <p>Amount paid</p>
          <p>0.056 ETH</p>
          <p>$100.00 USD</p>
        </TicketLayout>
        <br />

        <WideButton
          text={"Post transaction to Lenster"}
          color={"#111827"}
          onClick={onClickConfirm}
        />

        <WideButton
          text={"Go to homepage"}
          color={"#D1D5DB"}
          onClick={onClickCancel}
        />
      </PopupLayout>
    </div>
  );
}
