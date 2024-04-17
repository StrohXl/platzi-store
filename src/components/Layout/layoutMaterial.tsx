"use client";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme.config";
import AppBar from "../Navigation/AppBar";
import Image from "next/image";
import FooterComponent from "../Navigation/Footer";

const LayoutMaterial = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <div className="absolute top-0 w-full aspect-[2.5]  bg-gradient-to-b from-slate-900 to-transparent">
        <Image
          style={{
            maskImage: "linear-gradient( black 60%, transparent )",
          }}
          className="object-cover object-[top] opacity-30"
          src={"/167763.jpg"}
          alt="hero"
          fill
        />
      </div>

      {children}
      <FooterComponent />
    </ThemeProvider>
  );
};
export default LayoutMaterial;
