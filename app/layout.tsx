import type { Metadata } from "next";
import "./globals.css";
import SideBar from "../components/nav/SideBar";

export const metadata: Metadata = {
  title: "Take-home Assement - aTrace",
  description: "Take-home Assement - aTrace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative`}>
        <div className="flex flex-col md:flex-row items-start relative">
          <div className="w-full md:block md:w-60 lg:w-72 ">
            <SideBar />
          </div>
          <main className="flex-1 container mx-auto px-2 py-4 md:px-4 h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
