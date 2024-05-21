import React from "react";

const ButtonPrimary = (props: any) => {
    const { onClick, title, type } = props;
    return (
        <button type={type} className={"w-[100%] rounded-xl p-2 mt-5 transition-all bg-[#4FAAC1] hover:bg-[#C0E3EC]"} onClick={onClick}>
            <span className={`text-[#FBFBFB] text-sm font-medium`}>{title}</span>
        </button>
    );
};

export default ButtonPrimary;
