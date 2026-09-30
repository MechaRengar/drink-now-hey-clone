import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  handle: string;
  title: string;
  price: string;
  perCanPrice: string;
  image: string;
  badge?: string;
}

const ITEMS: ProductCardProps[] = [
  {
    handle: "nowhey-berry-12-pack",
    title: "berry – 12 x 330ml",
    price: "£33.00",
    perCanPrice: "£2.75 per can",
    image: "/images/Berry_Front.png",
  },
  {
    handle: "nowhey-mango-12-pack",
    title: "mango – 12 x 330ml",
    price: "£33.00",
    perCanPrice: "£2.75 per can",
    image: "/images/Mango_Front.png",
  },
  {
    handle: "nowhey-bundle-berry-mango-24-x-330ml",
    title: "mixed bundle – 24 x 330ml",
    price: "£59.40",
    perCanPrice: "£2.48 per can | free shipping!",
    image: "/images/Pair_of_Cans.png",
    badge: "SAVE 10%",
  },
];

export function ProductsGrid() {
  return (
    <section className="py-20 bg-white text-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-normal text-center tracking-tight lowercase text-zinc-900 mb-12">
          ready-to-drink flavoured protein water
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((item) => (
            <Link
              key={item.handle}
              href={`/products/${item.handle}`}
              className="group flex flex-col items-center text-center p-6 bg-[#f7f7f7] hover:bg-[#efefef] rounded-2xl transition-all duration-300 relative border border-black/5 hover:border-black/15 shadow-xs"
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-[#c6f91f] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  {item.badge}
                </span>
              )}

              <div className="relative w-full aspect-square max-w-[280px] my-4 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-base font-bold text-zinc-900 group-hover:text-black">
                  {item.title} – {item.price}
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  {item.perCanPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
