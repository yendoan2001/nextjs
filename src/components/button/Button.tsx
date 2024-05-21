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
                <a className="w-[100%] rounded-xl p-2 bg-[#E2E8ED99] block text-center">
                    <span className="text-[#111A2C] text-sm font-normal">{title}</span>
                </a>
            </Link>
        );
    }

    return (
        <button className="w-[100%] rounded-xl p-2 bg-[#E2E8ED99]" onClick={onClick}>
            <span className="text-[#111A2C] text-sm font-normal">{title}</span>
        </button>
    );
};

export default Button;
