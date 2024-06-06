import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
type ButtonAddProps = {
  onClick?: () => void;
  href?: string;
};
const ButtonAdd: React.FC<ButtonAddProps> = ({ onClick, href }) => {
  if (href) {
    return (
      <Link href={href} legacyBehavior className="h-full w-full">
        <a className=" flex w-[100%] items-center rounded-lg bg-blue-500 px-4 py-[0.55rem] transition-all  hover:bg-blue-700  ">
          <img src="icons/plus.png" className="min-w-5" alt="plus" />
          <span className="ms-2 hidden text-center text-base font-medium text-white md:block">
            Thêm mới
          </span>
        </a>
      </Link>
    );
  }
  return (
    <Button color="blue">
      <img src="icons/plus.png" className="min-w-[20px]" alt="plus" />
      <span className="ms-2 hidden text-nowrap md:block">Thêm mới</span>
    </Button>
  );
};

export default ButtonAdd;
