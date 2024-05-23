import React from "react";
import Link from "next/link";

type ButtonProps = {
  onClick?: () => void;
  title: string;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, title, href }) => {
  if (href) {
    return (
      <Link href={href} legacyBehavior className="w-[100%]">
        <a className="block w-[100%] rounded-xl bg-[#E2E8ED99] p-2 text-center">
          <span className="text-base font-medium text-[#111A2C]">{title}</span>
        </a>
      </Link>
    );
  }

  return (
    <button
      className="w-[100%] rounded-xl bg-[#E2E8ED99] p-2"
      onClick={onClick}
    >
      <span className="text-base font-medium text-[#111A2C]">{title}</span>
    </button>
  );
};

export default Button;
