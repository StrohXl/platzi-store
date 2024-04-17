"use client";
import SearchButton from "./SearchButton";
import Link from "next/link";
import ButtonsNavigation from "../Buttons/ButtonsNavigation";
import ButtonsLoged from "../Buttons/ButtonsLoged";

export default function AppBar() {
  return (
    <header className="relative z-10 bg-transparent">
      <nav className="text-white flex items-center justify-between px-3  max-w-[1400px] mx-auto">
        <Link href={"/"}> 
          <h2 className="text-2xl font-bold">PlatziStore</h2>
        </Link>
        <ButtonsNavigation />
        <div className="flex items-center gap-2">
          <SearchButton />
          <ButtonsLoged />
        </div>
      </nav>
    </header>
  );
}
