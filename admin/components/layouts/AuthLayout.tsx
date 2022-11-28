// import Head from "next/head";
// import Image from "next/image";

import { ReactNode } from "react";

// import styles from "../styles/Home.module.css";
type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  return (
    <div
      className={
        "grid lg:grid-cols-12  grid-cols-1 w-screen min-h-screen bg-white"
      }
    >
      <div className="lg:col-span-7 py-5 lg:pb-0">{children}</div>
      <div className="image bg-welcome-banner lg:col-span-5 hidden md:block" />
    </div>
  );
}
