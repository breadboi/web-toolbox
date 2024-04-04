import QRCodeGenerator from "@/components/QRCodeGenerator";
import { ToolboxNavigation } from "@/components/ToolboxNavigation";

export default function Home() {
  return (
    <>
      <ToolboxNavigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <QRCodeGenerator />
      </main>
    </>
  );
}
