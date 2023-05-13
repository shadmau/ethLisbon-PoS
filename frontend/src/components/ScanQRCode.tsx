import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
const qrcodeRegionId = "html5qr-code-full-region";

function ScanQRCode() {
  const onNewScanResult = (decodedText: string, decodedResult: any) => {
    if (decodedText !== null && decodedResult !== null) {
      console.log("App [result]", decodedResult);
      // transition to next page
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
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      true
    );
    html5QrcodeScanner.render(onNewScanResult, onScanError);

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  };
  return (
    <div>
      <button onClick={() => handleScan()}>Scan QR Code</button>
      <div id={qrcodeRegionId} />
    </div>
  );
}

export default ScanQRCode;
