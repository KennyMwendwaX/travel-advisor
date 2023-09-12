import SessionProvider from "@/utils/SessionProvider";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SiteReviewer",
  description: "Review cites and destinations on maps",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
