import Hero from "@components/Hero";
import Product from "@components/Product";
import SalesCounter from "@components/SalesCounter.";
import OptimizedImage from "@components/ui/OptimizedImage";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <Hero title={""} />
      <section className="flex flex-col md:h-screen pt-[60px] items-center w-full px-3 gap-6">
        <div className="flex flex-col gap-2 items-center mb-6">
          <h2 className="text-black text-lg lg:text-5xl font-bold">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-black text-base lg:text-3xl">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className=" flex flex-col my-auto md:flex-row md:justify-center gap-8 w-full">
          <Product />
          <Product />
          <Product />
        </div>
        <button className="btn btn-primary my-8">Shop Now</button>
      </section>
      <section className="bg-[#F0F3F5] lg:h-screen pt-[120px] pb-[60px] w-full px-3 gap-6">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row gap-12 md:h-[70%] md:mb-4">
            <div className="lg:flex-[50%]">
              <OptimizedImage
                src={"/constants/2.png"}
                alt={"product image"}
                parentClassName={"!w-full  md:!h-full h-[40vh]"}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="lg:flex-[50%] flex flex-col justify-center gap-4">
              <h2 className="text-black text-lg lg:text-3xl xl:text-5xl font-bold">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-black text-base lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur. Est egestas augue
                facilisis ullamcorper. Tristique dignissim in bibendum vitae ac
                leo ac quis. Tortor odio id nulla orci nulla. Arcu ut sit
                placerat ac facilisi. Ullamcorper dui sed tortor nunc. Amet urna
                sit viverra leo enim nec eget.
              </p>
              <button className="btn btn-primary my-8 md:ml-auto !w-full lg:w-fit">
                Read Now
              </button>
            </div>
          </div>
          <SalesCounter />
        </div>
      </section>
      <section className="flex-col flex px-3 pb-14">
        <h2 className="text-black text-lg uppercase lg:text-4xl font-bold mx-auto my-5">
          Trending
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 row-auto gap-4 place-items-center mt- container mx-auto">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}
