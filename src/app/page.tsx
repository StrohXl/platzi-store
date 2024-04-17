import CardProduct from "@/components/CardProduct";
import Image from "next/image";

export default function Home() {
  return (
    <section className="hero h-full">
      <div className="flex gap-5 justify-center mt-72">
        <CardProduct
          title="como estas"
          id={1}
          price={50}
          image="https://i.imgur.com/QkIa5tT.jpeg"
        />
        <CardProduct
          title="como estas"
          id={3}
          price={50}
          image="https://i.imgur.com/QkIa5tT.jpeg"
        />
        <CardProduct
          title="como estas"
          id={2}
          price={50}
          image="https://i.imgur.com/QkIa5tT.jpeg"
        />
        <CardProduct
          title="como estas"
          id={4}
          price={500}
          image="https://i.imgur.com/cSytoSD.jpeg"
        />
        <CardProduct
          title="como estas"
          id={5}
          price={20}
          image="https://i.imgur.com/QkIa5tT.jpeg"
        />
      </div>
    </section>
  );
}
