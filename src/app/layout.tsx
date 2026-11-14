import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Blessing's Lifestyle | Home, Kitchen & More",description:"Thoughtful finds for your home and everyday living. Everything You Love, All in One Place.",metadataBase:new URL("https://blessing-s-lifestyle.vercel.app")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}