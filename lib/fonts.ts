import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Roboto_Slab as Roboto,
  Rubik,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const robotoSlab = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
})
