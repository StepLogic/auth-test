import OptimizedImage from "@components/ui/OptimizedImage";
type Props = {
   title: string;
};
export default function Categories({ title }: Props) {
  return (
    <div className="flex items-center justify-between w-full shadow-lg box-s lg:w-[200px] gap-4  h-[35px] mb-2">
      <OptimizedImage
        src={"/constants/2.png"}
        alt={title+" image"}
        parentClassName={"!w-1/3  !h-full "}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="">
        <p className="text-[15px] text-black">{title}</p>
      </div>
      <div className="">
      <svg width="18" height="15" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.837108 34.7833C0.355858 34.2028 0.115234 33.4639 0.115234 32.5667C0.115234 31.6694 0.355858 30.9305 0.837108 30.35L11.0746 18L0.837108 5.64999C0.355858 5.06944 0.115234 4.33055 0.115234 3.43332C0.115234 2.5361 0.355858 1.79721 0.837108 1.21666C1.31836 0.636102 1.93086 0.345825 2.67461 0.345825C3.41836 0.345825 4.03086 0.636102 4.51211 1.21666L16.5871 15.7833C16.8496 16.1 17.036 16.443 17.1462 16.8125C17.2547 17.1819 17.309 17.5778 17.309 18C17.309 18.4222 17.2547 18.818 17.1462 19.1875C17.036 19.5569 16.8496 19.9 16.5871 20.2167L4.51211 34.7833C4.03086 35.3639 3.41836 35.6542 2.67461 35.6542C1.93086 35.6542 1.31836 35.3639 0.837108 34.7833Z" fill="#545454"/>
      </svg>
      </div>
    </div>
  );
}