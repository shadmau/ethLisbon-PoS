import { PopupLayout } from "../components/PopupLayout";
import { TicketLayout } from "../components/TicketLayout";
import { WideButton } from "../components/WideButton";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import styles from "./SuccessTransactionForUser.module.scss";

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
          <div className="space_32px"></div>
          <p className={styles.ticket_subtitle}>Great!</p>
          <p className={styles.ticket_title}>Transaction Successful</p>
          <p className={styles.ticket_subtitle}>
            Below is the transaction summary
          </p>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              background: "#D1D5DB",
              borderRadius: "12px",
              color: "#111827",
            }}
            size={"large"}
            onClick={() => moveExploer()}
          >
            Tx hash
          </Button>
          <div className="space_16px"></div>
          <Divider />
          <p className={styles.ticket_subtitle}>Amount paid</p>
          <p className={styles.amount}>0.056 ETH</p>
          <p className={styles.amount_doller}>$100.00 USD</p>
          <div className="space_16px"></div>
        </TicketLayout>

        <div className={styles.button_group}>
          <WideButton
            text={"Post transaction to Lenster"}
            color={"#111827"}
            onClick={onClickConfirm}
          />
          <div className="space_16px"></div>

          <WideButton
            text={"Go to homepage"}
            color={"#D1D5DB"}
            onClick={onClickCancel}
          />
          <div className="space_48px"></div>
          <div className="space_48px"></div>
        </div>
      </PopupLayout>
    </div>
  );
}
