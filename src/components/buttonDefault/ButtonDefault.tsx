import React from "react";
import Link from "next/link";

type ButtonDefaultProps = {
  onClick?: () => void;
  title: string;
  href?: string;
};

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  onClick,
  title,
  href,
}) => {
  if (href) {
    return (
      <Link href={href} legacyBehavior className="w-[100%]">
        <a className="block w-[100%] rounded-xl bg-[#E2E8ED99] p-2 text-center hover:bg-gray-300">
          <span className="text-sm font-normal text-[#111A2C]">{title}</span>
        </a>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="w-[100%] rounded-xl bg-[#E2E8ED99] p-2 hover:bg-gray-300"
      onClick={onClick}
    >
      <span className="text-sm font-normal text-[#111A2C]">{title}</span>
    </button>
  );
};

export default ButtonDefault;
