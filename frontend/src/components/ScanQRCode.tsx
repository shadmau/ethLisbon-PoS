import { ethers } from "ethers";
import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const qrcodeRegionId = "html5qr-code-full-region";

function ScanQRCode() {
  const [scanner, setScanner] = useState<Html5Qrcode>();
  const [qrCodeData, setQrCodeData] = useState("");
  const [qrCodeResult, setQrCodeResult] = useState();

  const onNewScanResult = (decodedText: string, decodedResult: any) => {
    if (decodedText !== null && decodedResult !== null) {
      if (scanner) {
        console.log("App [result]", decodedResult);
        setQrCodeResult(decodedResult);
        setScanner(undefined);
      }
    }
  };

  const onScanError = (error: any) => {
    console.log("App [error]", error);
  };

  const handleScan = () => {
    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
      // Only support camera scan type.
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    };
    // const verbose = props.verbose === true;
    // // Suceess callback is required.
    // if (!props.qrCodeSuccessCallback) {
    //   throw "qrCodeSuccessCallback is required callback.";
    // }
    const html5QrCode = new Html5Qrcode(qrcodeRegionId);
    html5QrCode.start(
      { facingMode: "user" },
      config,
      (decodedText: string, decodedResult: any) => {
        console.log("App [result]", decodedResult);
        html5QrCode.stop();
      },
      onScanError
    );

    setScanner(html5QrCode);
  };

  const stopScanner = () => {
    if (scanner) {
      scanner
        .stop()
        .then(() => {
          setScanner(undefined);
        })
        .catch((err: any) => {
          console.log("App [error]", err);
        });
    }
  };

  const createQRCode = (address: string, amount: number) => {
    const data = {
      address,
      amount: ethers.utils.parseUnits(amount.toString(), "ether").toString(),
    };
    setQrCodeData(JSON.stringify(data));
  };

  return (
    <div>
      <button onClick={() => handleScan()}>Scan QR Code</button>
      <button
        onClick={() =>
          createQRCode("0xDc2543d90a20C306cb74714F2A36C7BD8Fa1444b", 0.001)
        }
      >
        Create QR Code
      </button>
      <div id={qrcodeRegionId} />
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <br />
        {qrCodeData != "" && (
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={qrCodeData}
            viewBox={`0 0 256 256`}
          />
        )}
      </div>
      <br />
      {scanner !== undefined ? (
        <button onClick={() => stopScanner()}>Stop Scanner</button>
      ) : (
        <div></div>
      )}
      <div>{qrCodeResult ? qrCodeResult : <div></div>}</div>
    </div>
  );
}

export default ScanQRCode;
