import "../styles/globals.css";
import "../styles/components.css";
import type { AppProps } from "next/app";
import DefaultLayout from "@components/layouts/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || DefaultLayout;
  // console.log();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
