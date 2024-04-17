"use client";
import { useRouter, useParams } from "next/navigation";

export default function ProductId() {
  const params = useParams();
  const router = useRouter();
  console.log(params);
  return <div>Producto {params.id}</div>;
}
