"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider,useTheme } from "next-themes"
import { SetStateAction, useState } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;


  return (
    <html lang="en">
      
      <head />
      <body className={"dark:bg-stone-900 "} >
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
