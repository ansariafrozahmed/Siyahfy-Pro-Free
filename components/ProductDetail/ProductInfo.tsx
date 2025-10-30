"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { calculateDiscount } from "@/utils/constants";
import ProductVariation from "./ProductVariation";
import ProductTitle from "./ProductTitle";
import { productData } from "@/types/productData";
// import SocialShare from "../Social/SocialShare";
import DetailPageFAQ from "../FAQ/DetailPageFAQ";
import ProductDescription from "./ProductDescription";
import { useFormatAmount } from "@/hooks/useFormatAmount";

const ProductInfo: React.FC<productData> = ({ data }) => {
  const { formatAmount } = useFormatAmount();
  return (
    <div className="space-y-5">
      <div className="">
        <ProductTitle
          title={data?.name}
          average_rating={data?.average_rating}
          totalReviews={data?.totalReviews}
        />
      </div>
      <div className="">
        <div className=" flex items-end gap-3">
          <span className="text-2xl lg:text-3xl text-templateText">
            {formatAmount(Number(data?.price || 0))}
          </span>
          {data?.regularPrice && (
            <span className="text-[0.85rem] pb-1 line-through text-gray-500 tracking-wide">
              {formatAmount(Number(data?.regularPrice))}
            </span>
          )}
          {data?.regularPrice &&
            data?.price &&
            data?.regularPrice > data?.price && (
              <span className="text-xs lg:text-sm pb-1 text-green-500">
                ({" "}
                {calculateDiscount(
                  Number(data?.regularPrice),
                  Number(data?.price)
                )}
                % OFF )
              </span>
            )}
        </div>
        <span className="text-[0.7rem] pb-1 tracking-wider text-gray-500">
          Tax included. Shipping calculated at checkout.
        </span>
      </div>

      <Suspense>
        <ProductVariation
          preOrder={data?.preorder}
          data={data}
          variations={data?.variations}
          stock={data?.stock}
          isVariantProduct={data?.isVariantProduct}
        />
      </Suspense>

      <div className="relative">
        <div
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          className="productDescription space-y-4"
        ></div>
      </div>
      {/* <ProductDescription description={data?.description ?? ""} /> */}
      {/* <DetailPageFAQ /> */}
    </div>
  );
};

export default ProductInfo;
