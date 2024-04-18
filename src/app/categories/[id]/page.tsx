'use client'
import { useParams } from "next/navigation";

export default function CategoryId() {
  const params = useParams();
  return <div>Categoria {params.id}</div>;
}
