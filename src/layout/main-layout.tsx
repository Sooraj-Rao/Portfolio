"use client";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/layout/navbar";
import { routes } from "@/data/navigationRoutes";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Footer = dynamic(() => import("@/layout/footer"), { ssr: true });

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={`min-h-screen
      ${montserrat.className}
      `} >
        <Navbar routes={routes} />
        <main>{props.children}</main>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </div>
      <Footer />
    </>
  );
}
