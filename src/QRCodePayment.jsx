import React from "react";
import qrCodeImage from "./qr-code.png"; // Replace with your actual QR code image

const QRCodePayment = () => {
  return (
    <div className="payment-form">
      <h2>QR Code Payment</h2>
      <div className="form-group">
        <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
        <p>
          Scan the QR code using your mobile banking app to complete the
          payment.
        </p>
      </div>
    </div>
  );
};

export default QRCodePayment;
