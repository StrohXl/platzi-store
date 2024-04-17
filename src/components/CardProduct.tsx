import {
  AddShoppingCartSharp,
  Favorite,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function CardProduct({
  title,
  image,
  id,
  price,
}: Readonly<{ title: string; image: string; id: number; price: number }>) {
  return (
    <Link href={`/product/${id}`} style={{maxWidth: '200px',width: '100%'}}>
      <Card className="hover:shadow-xl hover:shadow-black/50 cursor-pointer">
        <Box className="relative w-full aspect-[1]" component={"div"}>
          <IconButton color="secondary" className="absolute z-20 right-3 top-3">
            <Favorite />
          </IconButton>
          <Image fill src={image} alt="eaple" />
        </Box>
        <CardContent>
          <Typography variant="h5" className="text-lg" component="div">
            {title}
          </Typography>
          <Typography color="text.primary">{price}$$</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
