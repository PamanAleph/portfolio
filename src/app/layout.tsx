import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Button from "@/components/Button";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alief Firmanda Dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#35353D]">
      <body className={poppins.className}>
        <div>
          <Button />
        </div>
        {children}
      </body>
    </html>
  );
}
