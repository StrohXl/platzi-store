"use client";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../../types/Categorie";
import CardCategory from "@/components/CardCategory";

export default function Categories() {
  const [dataCategories, setDataCategories] = useState<[] | Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getCategories = async () => {
    try {
      const data = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setDataCategories(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto ">
      <Typography
        textAlign={"center"}
        fontWeight={600}
        color={"#fff"}
        mt={10}
        component={"h1"}
        variant="h3"
        className=""
      >
        Categories
      </Typography>
      <div className="flex flex-wrap gap-3 justify-center mt-36 px-5 pb-36">
        {dataCategories.slice(0, 5).map((i) => {
          return <CardCategory id={i.id} key={i.id} title={i.name} src={i.image} />;
        })}
      </div>
    </div>
  );
}
