import OptimizedImage from "@components/ui/OptimizedImage";

// import styles from "../styles/Home.module.css";
type Props = {
   title: string;
};
export default function Categories({ title }: Props) {
  return (
    <div className="w-full shadow-lg box-s lg:w-[100px] gap-4  h-[100px] ">
      <OptimizedImage
        src={"/../../../public/constants/"+{title}+".png"}
        alt={"left category image"}
        parentClassName={"!w-full  !h-1/2"}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-4">
        <p className="text-[15px] text-black">{title}</p>
      </div>
    </div>
  );
}