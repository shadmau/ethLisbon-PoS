import { TicketLayout } from "../TicketLayout";
import { WideButton } from "../WideButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styles from "./Confirm.module.scss";
import Container from "@mui/material/Container";

interface Props {
  onClickConfirm: () => void;
  onClickCancel: () => void;
}
export function Confirm(props: Props) {
  return (
    <div>
      <TicketLayout
        icon={
          <CameraAltIcon
            sx={{ color: "#FFFFFF", paddingTop: "14px" }}
            fontSize={"large"}
          />
        }
      >
        <Container>
          <div className="space_32px"></div>
          <p className={styles.ticket_title}>Pending transaction</p>
          <p className={styles.ticket_subtitle}>Amount charged</p>
          <p className={styles.amount}>0.056 ETH</p>
          <p className={styles.amount_doller}>$100.00 USD</p>

          <WideButton
            text={"Confirm payment"}
            color={"#111827"}
            onClick={props.onClickConfirm}
          />
          <div className="space_16px"></div>
          <WideButton
            text={"Cancel payment"}
            color={"#D1D5DB"}
            onClick={props.onClickCancel}
          />
          <div className="space_16px"></div>
        </Container>
      </TicketLayout>
    </div>
  );
}
