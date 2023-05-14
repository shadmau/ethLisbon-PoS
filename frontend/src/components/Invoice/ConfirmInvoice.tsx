import Divider from "@mui/material/Divider";
import { WideButton } from "../WideButton";
import styles from "./ConfirmInvoice.module.scss";
interface Props {
  onClickConfirm: () => void;
  onClickCancel: () => void;
}

export function ConfirmInvoice(props: Props) {
  return (
    <div>
      <p className={styles.title}>Confirm Invoice</p>
      <div className={styles.list}>
        <span>Product</span>
        <span>NikeAir Jordan Low Black</span>
      </div>

      <div className="space_8px"></div>
      <Divider />
      <div className="space_16px"></div>

      <div className={styles.list}>
        <span>Price</span>
        <span>$100</span>
      </div>
      <div className="space_8px"></div>
      <Divider />
      <div className="space_16px"></div>

      <div className={styles.list}>
        <span>Date</span>
        <span>May 13, 2023 · 7:43 AM</span>
      </div>

      <div className="space_8px"></div>
      <Divider />
      <div className="space_8px"></div>
      <WideButton
        text={"Create Invoice"}
        color={"#111827"}
        onClick={props.onClickConfirm}
      />
      <div className="space_16px"></div>
      <WideButton
        text={"Cancel"}
        color={"#D1D5DB"}
        onClick={props.onClickCancel}
      />
    </div>
  );
}
