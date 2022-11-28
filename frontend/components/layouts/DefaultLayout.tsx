import Navbar from "@components/Navbar";
import Footer from "../Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
