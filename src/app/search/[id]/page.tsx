'use client'
import { useParams } from "next/navigation";
export default function SearchId() {
  const params = useParams();
  return <div>producto {params.id}</div>;
}
