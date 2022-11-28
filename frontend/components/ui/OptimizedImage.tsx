import Image, { ImageProps } from "next/image";
import cn from "classnames";
type Props = {
  width?: number;
  height?: number;
  parentClassName?: string;
} & ImageProps;
export default function OptimizedImage(props: Props) {
  return (
    <div className={cn("relative w-fit h-fit z-[0]", props?.parentClassName)}>
      <Image fill {...props} />
    </div>
  );
}
