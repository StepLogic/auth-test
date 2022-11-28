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
export default function SalesCounter(props: Props) {
  return (
    <div className="bg-[#D7C9AA] w-full flex flex-col lg:flex-row justify-center items-center py-[30px]">
      <div className="flex flex-col items-center gap-2 text-black">
        <h4 className="text-4xl font-bold">80000+</h4>
        <p className="text-base font-bold">Customers</p>
      </div>
      <div className="bg-black md:!w-[1px] md:!h-[48px] h-[1px] w-[48px] my-4 lg:mx-16" />
      <div className="flex flex-col items-center gap-2 text-black">
        <h4 className="text-4xl font-bold">80000+</h4>
        <p className="text-base font-bold">Customers</p>
      </div>
      <div className="bg-black md:!w-[1px] md:!h-[48px] h-[1px] w-[48px] my-4 lg:mx-16" />
      <div className="flex flex-col items-center gap-2 text-black">
        <h4 className="text-4xl font-bold">80000+</h4>
        <p className="text-base font-bold">Customers</p>
      </div>
    </div>
  );
}
