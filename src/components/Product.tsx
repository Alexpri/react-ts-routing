import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [is_show_description, setDescription] = useState(false);
  const btnClassName = is_show_description ? "bg-gray-400" : "bg-yellow-400";
  const btnClasses = ["py-1 px-2 border bg-gray-400 text-white", btnClassName];
  return (
    <div className="border py-2 px-4 flex flex-col items-center">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        onClick={() => setDescription((prev: boolean) => !prev)}
        className={btnClasses.join(" ")}
      >
        {is_show_description ? "Hide Details" : "Show more"}
      </button>
      {is_show_description && (
        <div className="">
          <p>{product.description}</p>
        </div>
      )}
      {product.rating && (
        <p>
          Rate:
          <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
        </p>
      )}
    </div>
  );
}
