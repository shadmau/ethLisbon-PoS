import { useEffect, useState } from "react";
import styles from "./CreateQRCode.module.scss";
import { ethers } from "ethers";
import QRCode from "react-qr-code";

export function CreateQRCode() {
  const [qrCodeData, setQrCodeData] = useState("");

  const createQRCode = (address: string, amount: number) => {
    const data = {
      address,
      amount: ethers.utils.parseUnits(amount.toString(), "ether").toString(),
    };
    setQrCodeData(JSON.stringify(data));
  };

  useEffect(() => {
    const data = {
      address: "0xDc2543d90a20C306cb74714F2A36C7BD8Fa1444b",
      amount: ethers.utils.parseUnits("0.001", "ether").toString(),
    };
    setQrCodeData(JSON.stringify(data));
  }, []);

  return (
    <>
      {/* <button
        onClick={() =>
          createQRCode("0xDc2543d90a20C306cb74714F2A36C7BD8Fa1444b", 0.001)
        }
      >
        Create QR Code
      </button> */}
      {qrCodeData != "" && (
        <div className="space_32px">
          ©
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "50%" }}
            value={qrCodeData}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </>
  );
}
