import styles from "./CreateInvoice.module.scss";
import TextField from "@mui/material/TextField";
import InfoIcon from "@mui/icons-material/Info";
import Divider from "@mui/material/Divider";
import { WideButton } from "../WideButton";

interface Props {
  onClickConfirm: () => void;
  onClickCancel: () => void;
}

export function CreateInvoice(props: Props) {
  return (
    <div>
      <p>Create Invoice</p>
      <TextField
        id="outlined-basic"
        label="Product description"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Product price" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Amount charged"
        variant="outlined"
      />

      <div className={styles.info}>
        <InfoIcon
          style={{
            color: "#9CA3AF",
            paddingTop: "20px",
            paddingRight: "12px",
            paddingLeft: "8px",
          }}
        />
        <p className={styles.info_text}>
          You will receive ETH equivalent to the USD amount above.
        </p>
      </div>

      <Divider />

      <WideButton
        text={"Create Invoice"}
        color={"#111827"}
        onClick={props.onClickConfirm}
      />

      <WideButton
        text={"Cancel"}
        color={"#D1D5DB"}
        onClick={props.onClickCancel}
      />
    </div>
  );
}
