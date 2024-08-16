import { Rating } from "@/app/_components/Rating";
import type { Product } from "@/lib/schemas";
import Image from "next/image";
import { cache } from "react";

type Props = {
  products: Omit<Product, "id">[];
};

export function GridProducts({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-10 justify-between">
      {products?.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
  );
}

const cacheImages = new Map<string, number>();

function Product({ product }: { product: Product }) {
  if (!cacheImages.has(product.productId)) {
    cacheImages.set(product.productId, Math.floor(Math.random() * 3) + 1);
  }

  return (
    <article
      key={product.productId}
      className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
    >
      <div className="flex flex-col items-center">
        <Image
          src={`https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/product${cacheImages.get(
            product.productId
          )}.png`}
          alt={product.name}
          width={150}
          height={150}
          className="mb-3 rounded-2xl w-36 h-36"
        />
        <h3 className="text-lg text-gray-900 font-semibold">{product.name}</h3>
        <p className="text-gray-800">${product.price.toFixed(2)}</p>
        <div className="text-sm text-gray-600 mt-1">
          Stock: {product.stockQuantity}
        </div>
        {product.rating && (
          <div className="flex items-center mt-2">
            <Rating rating={product.rating} />
          </div>
        )}
      </div>
    </article>
  );
}
