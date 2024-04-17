import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { Category, House, Person } from "@mui/icons-material";
import { useRouter } from "next/navigation";
export default function ButtonsNavigation() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      className="h-[5rem] w-96 !bg-transparent"
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
  );
}
