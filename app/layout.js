"use client";
import "./globals.css";
import Layout from "./components/Layout.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/Transition";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className=" w-fill h-screen bg-gradient-to-br from-slate-900 to-slate-700  bg-no-repeat">
        <Layout>
          {/* <AnimatePresence mode="wait">
            <motion.div key={path} className="h-full">
              <Transition /> */}
              {children}
            {/* </motion.div>
          </AnimatePresence> */}
        </Layout>
      </body>
    </html>
  );
}
