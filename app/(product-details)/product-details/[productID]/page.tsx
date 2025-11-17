import React from "react";
import { ProductWrapper } from "../_components/Wrapper";

export default async function page({ params }: any) {
  const productId = await params;
  return (
    <div>
      <ProductWrapper />
    </div>
  );
}
