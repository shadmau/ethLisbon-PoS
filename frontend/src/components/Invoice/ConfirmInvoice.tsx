import Divider from "@mui/material/Divider";
import { WideButton } from "../WideButton";

interface Props {
  onClickConfirm: () => void;
  onClickCancel: () => void;
}

export function ConfirmInvoice(props: Props) {
  return (
    <div>
      <p>Confirm Invoice</p>
      <span>Product</span>
      <span>NikeAir Jordan Low Black</span>

      <Divider />

      <span>Price</span>
      <span>$100</span>

      <Divider />

      <span>Date</span>
      <span>May 13, 2023 · 7:43 AM</span>

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
