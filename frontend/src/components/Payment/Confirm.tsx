import { WideButton } from "../WideButton";

interface Props {
  onClickConfirm: () => void;
  onClickCancel: () => void;
}
export function Confirm(props: Props) {
  return (
    <div>
      <p>Pending transaction</p>
      <p>Amount charged</p>
      <p>0.056 ETH</p>
      <p>$100.00 USD</p>

      <WideButton
        text={"Confirm payment"}
        color={"#111827"}
        onClick={props.onClickConfirm}
      />

      <WideButton
        text={"Cancel payment"}
        color={"#D1D5DB"}
        onClick={props.onClickCancel}
      />
    </div>
  );
}
