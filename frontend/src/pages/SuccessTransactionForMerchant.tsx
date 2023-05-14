import { PopupLayout } from "../components/PopupLayout";
import { WideButton } from "../components/WideButton";

export function SuccessTransactionForMerchant() {
  const onClickConfirm = () => {};

  const onClickCancel = () => {
    //TODO: navigate to homepage
  };
  return (
    <div>
      <PopupLayout title={"Invoices"}>
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
