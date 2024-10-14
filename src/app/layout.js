import TopBar from "@/components/shared/TopBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer";
import RequestDemoProvider from "@/contexts/RequestDemoContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "GME",
  description: "GME Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RequestDemoProvider>
          <TopBar />
          <main className="mt-[96px] tracking-wide">{children}</main>
          <Footer />
        </RequestDemoProvider>
      </body>
    </html>
  );
}
