import type { Product as TProduct } from "@/db";
import Image from "next/image";

export default function Product({ product }: { product: TProduct }) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <Image
          width={200}
          height={200}
          src={product.imageId}
          priority={product.imageId === "white-S-1" ? true : false }
          alt="product image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-400">
            Size {product.size.toUpperCase()}, {product.color}{" "}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}
