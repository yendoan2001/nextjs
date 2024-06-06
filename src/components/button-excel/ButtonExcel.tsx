import { Button } from "flowbite-react";
import React from "react";

const ButtonExcel = () => {
  return (
    <Button color="light" className="min-w-[108px]">
        <img src="icons/download-cloud-02.png" alt="download-cloud" />
        <span className="ms-2 text-sm font-medium text-[#344054]">Export</span>
    </Button>
  );
};

export default ButtonExcel;
