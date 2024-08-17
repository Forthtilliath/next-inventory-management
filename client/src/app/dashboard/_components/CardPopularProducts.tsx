import { ShoppingBag } from "lucide-react";
import React from "react";
import { Rating } from "../../_components/Rating";
import Image from "next/image";
import { useGetDashboardMetricsQuery } from "@/lib/api";
import { cn } from "@/lib/helpers/cn";
import {
  shortCurrencyFormatter,
  shortNumberFormatter,
} from "@/lib/helpers/formatters";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16 overflow-hidden">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className={cn(
                  "flex items-center justify-between gap-x-3 max-xs:flex-col",
                  "px-5 py-7 [&:not(:last-child)]:border-b"
                )}
              >
                <div className="flex items-center gap-3 w-full">
                  <Image
                    src={`https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/product${
                      Math.floor(Math.random() * 3) + 1
                    }.png`}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="rounded-lg w-14 h-14"
                  />
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        {shortCurrencyFormatter.format(product.price)}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating ?? 0} />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex items-center gap-2 max-xs:-order-1 max-xs:ml-auto">
                  <ShoppingBag
                    className="p-2 rounded-full bg-blue-100 text-blue-600 max-xs:hidden"
                    size={32}
                    aria-labelledby="shopping bag"
                  />
                  <span className="text-nowrap">
                    {shortNumberFormatter.format(product.stockQuantity)} Sold
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
