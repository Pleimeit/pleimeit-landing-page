import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  text: string;
  link: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  text,
  link,
  bgColor = "bg-purpleBackground",
  textColor = "text-white",
  hoverBgColor = "hover:bg-purpleBackground/90",
}) => {
  return (
    <Link href={link} target="_blank">
      <div
        className={`
          shadow-bottom
          flex h-12 w-60
          cursor-pointer items-center justify-center
          rounded-3xl
          transition
          ${bgColor}
          ${textColor}
          ${hoverBgColor}
        `}
      >
        <h2 className="text-md font-inter ">{text}</h2>
      </div>
    </Link>
  );
};

export default ButtonComponent;
