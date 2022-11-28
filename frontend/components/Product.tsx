// import Head from "next/head";
// import Image from "next/image";

import Head from "next/head";
import { ReactNode } from "react";
import { AiFillStar } from "react-icons/ai";
import OptimizedImage from "./ui/OptimizedImage";

// import styles from "../styles/Home.module.css";
type Props = {
  // title: string;
};
export default function Product({ title }: Props) {
  return (
    <div className="w-full shadow-lg box-s lg:w-[308px] gap-4  h-[460px] ">
      <OptimizedImage
        src={"/constants/2.png"}
        alt={"product image"}
        parentClassName={"!w-full  !h-1/2"}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-4">
        <p className="text-[20px] text-black">Lorem ipsum dolor sit</p>
        <p className="text-2xl font-bold text-black">$210.00</p>
        <div className="flex flex-row gap-3 text-base">
          <AiFillStar fill={"#FFC700"} />
          <AiFillStar fill={"#FFC700"} />
          <AiFillStar fill={"#FFC700"} />
          <AiFillStar fill={"#FFC700"} />
        </div>
        <button className="btn btn-lg btn-brown">Add to cart</button>
      </div>
    </div>
  );
}
