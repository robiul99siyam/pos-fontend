import React from "react";

export default function Invoice({ productData, qty }) {
  console.log(productData);
  return (
    <div>
      {productData?.map((Item) => (
        <p key={Item.id}> {Item.name}</p>
      ))}
    </div>
  );
}
