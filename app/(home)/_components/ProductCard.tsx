import React from "react";
import { IProduct } from "../_types/type";
import { BiRupee } from "react-icons/bi";
import Link from "next/link";
interface ProductCardProps {
  product: IProduct;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product-details/${product.id}`}>
      <div className="flex flex-col gap-2 group cursor-pointer">
        <div className="overflow-hidden rounded-xl aspect-square bg-gray-200">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-alt="A slightly used psychology textbook with a colorful cover."
            src={product.thumbnail}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-800 text-base leading-snug">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600">Near Main Campus</p>
          <p className="font-bold text-lg text-primary mt-1 flex items-center">
            <span>
              <BiRupee />
            </span>
            <span>{product.price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
