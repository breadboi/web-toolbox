'use client';
import { useState } from 'react';
import QRCode from 'qrcode.react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(128); // Default QR code size

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrCodeEl') as HTMLCanvasElement;
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'QRCode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL here..."
      />
      <Input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        placeholder="Size (pixels)"
      />
      <QRCode id="qrCodeEl" value={url} size={size} level={"H"} />
      <Button onClick={downloadQRCode}>Download QR Code</Button>
    </div>
  );
};

export default QRCodeGenerator;
