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
      <p className={styles.title}>Create Invoice</p>
      <TextField
        id="outlined-basic"
        label="Product description"
        variant="outlined"
        fullWidth
        placeholder="Product name"
      />
      <div className="space_16px"></div>
      <TextField
        id="outlined-basic"
        label="Product price"
        variant="outlined"
        fullWidth
        placeholder="$100"
      />
      <div className="space_16px"></div>

      <TextField
        id="outlined-basic"
        label="Amount charged"
        variant="outlined"
        fullWidth
      />
      <div className="space_16px"></div>

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
      <div className="space_16px"></div>

      <WideButton
        text={"Cancel"}
        color={"#D1D5DB"}
        onClick={props.onClickCancel}
      />
    </div>
  );
}
