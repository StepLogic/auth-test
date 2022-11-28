"use client";
import AuthLayout from "components/layouts/AuthLayout";
import TextField from "components/ui/textfield";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { KgFacebook, KgGoogle } from "@components/ui/Icons";
import MetaData from "@components/MetaData";

function Register() {
  return (
    <>
      <MetaData title="Register" />
      <main className="flex flex-col w-full justify-center items-center h-full">
        <div className="flex flex-col gap-6 md:w-[429px] w-full px-4 overflow-y-auto max-h-[100vh]">
          <Image
            src={"/logo/logo.png"}
            width={185}
            height={75}
            alt="Logo"
            className="self-center mb-8"
          />
          <TextField label={"First Name"} type="email" />
          <TextField label={"Last Name"} type="email" />
          <TextField label={"Email"} type="email" />
          <TextField label={"Password"} type="email" />
          <button className="btn btn-primary ml-auto mt-4">login</button>
          <p className="text-black text-center my-4">
            Already have an account ?&nbsp;
            <Link className="text-[#E23636]" href={"/login"}>
              Login
            </Link>
          </p>
          <p className="text-black text-center my-6 text-2xl font-bold">OR</p>
          <div className="flex flex-row justify-center ">
            <button>
              <KgGoogle className={"w-[4rem] h-[4rem]"} />
            </button>
            <button>
              <KgFacebook className={"w-[4rem] h-[4rem]"} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

Register.Layout = AuthLayout;
export default Register;
