import { Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function CardCategory({
  src,
  title,
  id
}: Readonly<{ src: string; title: string; id: number }>) {
  return (
    <Card className="relative !overflow-hidden max-w-[250px] w-full group aspect-[1] cursor-pointer hover:shadow-2xl hover:shadow-black/80">
      <Link href={"/categories/" + id}>
        <Typography
          position={"relative"}
          color={"#fff"}
          component={"h2"}
          variant="h4"
          className="transition-all duration-300 h-full group-hover:opacity-100 w-full group-hover:bg-slate-800/80 flex justify-center items-center z-10 opacity-0"
        >
          {title}
        </Typography>
        <Image src={src} fill alt={title} />
      </Link>
    </Card>
  );
}
