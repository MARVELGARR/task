import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/my components/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskMate",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full flex items-center relative">
          <SideBar className='bg-slate-200 hidden sm:flex border-r-teal-300 border-2 w-fit md:w-[200px] lg:w-[300px] xl:w-[400px]'/>
          {children}
        </div>
        </body>
    </html>
  );
}
