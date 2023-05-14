import Button from "@mui/material/Button";
import { TicketLayout } from "../TicketLayout";
import SendIcon from "@mui/icons-material/Send";
import styles from "./Process.module.scss";

export function Process() {
  const moveExploer = () => {};
  return (
    <div>
      <TicketLayout
        icon={
          <SendIcon
            sx={{ color: "#FFFFFF", paddingTop: "14px" }}
            fontSize={"large"}
          />
        }
      >
        <div className="space_32px"></div>
        <p className={styles.ticket_title}>
          The transaction is being processed
        </p>
        <p className={styles.ticket_subtitle}>Please don’t close this screen</p>
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
      </TicketLayout>
      <p className={styles.add_on}>Featured add-ons</p>
    </div>
  );
}
