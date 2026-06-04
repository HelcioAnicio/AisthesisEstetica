import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Aisthésis - Clínica Estética & Pilates",
  description:
    "Um refúgio de tranquilidade onde a ciência estética encontra o cuidado humano para revelar sua melhor versão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className='font=[Montserrat]'>{children}</body>
    </html>
  );
}