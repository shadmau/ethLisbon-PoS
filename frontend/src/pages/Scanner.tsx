import { useEffect, useState } from "react";
import styles from "./Scanner.module.scss";
import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

const qrcodeRegionId = "html5qr-code-full-region";

export function Scanner() {
  const [scanner, setScanner] = useState<Html5Qrcode>();
  const navigate = useNavigate();
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
      { facingMode: "environment" },
      config,
      (decodedText: string, decodedResult: any) => {
        console.log("App [result]", decodedResult);
        html5QrCode.stop();
        setScanner(undefined);
        navigate("/payment");
      },
      onScanError
    );

    setScanner(html5QrCode);
  };

  useEffect(() => {
    handleScan();
  }, []);

  return <div id={qrcodeRegionId} />;
}
