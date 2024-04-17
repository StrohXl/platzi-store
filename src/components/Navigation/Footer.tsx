"use client";
import {
  Category,
  Facebook,
  House,
  Person,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  TableFooter,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FooterComponent() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  return (
    <Box component={"footer"} className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-10 ">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h2 className="text-3xl font-bold">PlatziStore</h2>
          </Link>
          <div className="flex -translate-x-3 gap-1 ">
            <IconButton color="primary">
              <WhatsApp />
            </IconButton>
            <IconButton color="primary">
              <Twitter />
            </IconButton>
            <IconButton color="primary">
              <Facebook />
            </IconButton>
            <IconButton color="primary">
              <YouTube />
            </IconButton>
          </div>
        </div>
        <BottomNavigation
          className=" w-96 !bg-transparent"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => router.push("/")}
            label="Inicio"
            className="text-slate-300"
            icon={<House />}
          />

          <BottomNavigationAction
            className="text-slate-300"
            onClick={() => router.push("/categories")}
            label="Categorias"
            icon={<Category />}
          />

          <BottomNavigationAction
            className="text-slate-300"
            label="Sobre mi"
            icon={<Person />}
          />
        </BottomNavigation>
      </div>
    </Box>
  );
}
