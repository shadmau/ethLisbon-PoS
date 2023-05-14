import { useState } from "react";
import styles from "./Scanner.module.scss";
import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";

const qrcodeRegionId = "html5qr-code-full-region";

export function Scanner() {
  const [scanner, setScanner] = useState<Html5Qrcode>();
  const [scaned, setScaned] = useState(false);

  const onScanError = (error: any) => {
    console.log("App [error]", error);
  };

  const handleScan = () => {
    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    };
    const html5QrCode = new Html5Qrcode(qrcodeRegionId);
    html5QrCode.start(
      { facingMode: "user" },
      config,
      (decodedText: string, decodedResult: any) => {
        console.log("App [result]", decodedResult);
        html5QrCode.stop();
        setScanner(undefined);
        setScaned(true);
        //TODD: navigate to payment confirm page
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

  return (
    <div>
      <div>
        <button onClick={() => handleScan()}>Scan QR Code</button>
        <div id={qrcodeRegionId} />
        {scanner !== undefined ? (
          <button onClick={() => stopScanner()}>Stop Scanner</button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
