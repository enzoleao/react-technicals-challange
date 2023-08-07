import NextImage from "next/image";

type ImageProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
};
const Image = ({ className, src, width, height, alt }: ImageProps) => {
  if (!src) {
    return (
      <div className={`${className} bg-gray-200`} style={{ width, height }} />
    );
  }

  return (
    <NextImage
      alt={alt || ""}
      className={className}
      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${src}`}
      layout='fixed'
      width={width}
      height={height}
    />
  );
};

export default Image;
