// import Head from "next/head";
// import Image from "next/image";

import Head from "next/head";
import { ReactNode } from "react";
import OptimizedImage from "./ui/OptimizedImage";

// import styles from "../styles/Home.module.css";
type Props = {
  title: string;
};
export default function Hero({ title }: Props) {
  return (
    <div className="w-full h-screen pt-[60px] bg-[#efefed]">
      <div className="md:grid md:grid-cols-2 grid-cols-1 w-full h-full px-3 lg:px-0 container mx-auto">
        <div className="flex flex-col h-fit lg:h-full lg:justify-center gap-6 text-black">
          <h3 className=" text-base lg:text-5xl font-bold">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-md lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Aenean arcu aliquam lacus
            nec. In ipsum orci amet pellentesque. In diam eget feugiat sit. Sed
            sit faucibus quisque sit non tristique interdum.{" "}
          </p>
          <button className="btn btn-primary">shop</button>
        </div>
        <OptimizedImage
          alt={"chosenImage"}
          parentClassName="!w-full !h-[50%] lg:!h-full"
          src={"/constants/1.png"}
          style={{ objectFit: "fill", objectPosition: "center", zIndex: -1 }}
        />
      </div>
    </div>
  );
}
