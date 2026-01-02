import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  text: string;
  link?: string;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  text,
  link,
  type = "button",
  bgColor = "bg-purpleBackground",
  textColor = "text-white",
  hoverBgColor = "hover:bg-purpleBackground/90",
}) => {
  if (link) {
    return (
      <Link href={link} target="_blank">
        <div
          className={`
            shadow-bottom
            flex lg:h-12 lg:w-60 w-full h-12
            cursor-pointer items-center justify-center
            rounded-3xl transition
            ${bgColor} ${textColor} ${hoverBgColor}
          `}
        >
          <h2 className="text-md font-inter font-medium">{text}</h2>
        </div>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`
        shadow-bottom
        flex lg:h-12 lg:w-60 w-full h-12
        cursor-pointer items-center justify-center
        rounded-3xl transition
        ${bgColor} ${textColor} ${hoverBgColor}
      `}
    >
      <h2 className="text-md font-inter font-medium">{text}</h2>
    </button>
  );
};

export default ButtonComponent;
