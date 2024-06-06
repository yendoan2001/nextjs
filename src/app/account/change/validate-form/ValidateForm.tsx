import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import { useStepperStore } from "@/stores/stepper.store";
import { FileInput, Label } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ValidateForm = () => {
  const [selectedFileFront, setSelectedFileFront] = useState<any>(null);
  const [selectedFileBack, setSelectedFileBack] = useState<any>(null);
  const { setStep } = useStepperStore();
  const handleFileChangeFront = (event: any) => {
    const file = event.target.files[0];
    if (file.size > 100 * 1024) {
      toast.warn("Vui lòng chọn ảnh nhỏ hơn 100kb", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
      return;
    }

    if (file) {
      setSelectedFileFront(URL.createObjectURL(file));
    }
  };

  const handleRemoveFileFront = () => {
    setSelectedFileFront(null);
  };

  const handleFileChangeBack = (event: any) => {
    const file = event.target.files[0];
    if (file.size > 100 * 1024) {
      toast.warn("Vui lòng chọn ảnh nhỏ hơn 100kb", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
      return;
    }
    if (file) {
      setSelectedFileBack(URL.createObjectURL(file));
    }
  };
  const handleRemoveFileBack = () => {
    setSelectedFileBack(null);
  };

  return (
    <form className="px-4 py-8">
      <div className="py-4">
        <div className="grid grid-cols-1  sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Họ tên chủ tài khoản:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium uppercase text-[#111A2C] sm:text-start ">
              LE THI MINH
            </h2>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Địa chỉ Email:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              minhltt@hpay.com.vn
            </h2>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Số điện thoại:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              0343402954
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="mb-2 text-center text-base font-medium text-[#111A2C] sm:text-start">
          Thông tin doanh nghiệp
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Số giấy ĐKKD:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              1231244345
            </h2>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Địa chỉ trụ sở:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              Yên Hòa - Cầu Giấy - Hà Nội
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="mb-2 text-center text-base font-medium text-[#111A2C] sm:text-start">
          Thông tin người đại diện
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Người đại diện:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium uppercase text-[#111A2C] sm:text-start ">
              LE THI MINH
            </h2>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Số CMND:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              175898097
            </h2>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Địa chỉ liên lạc:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              Yên Hòa
            </h2>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
          <div className="text-center sm:text-start">
            <span className="text-color-gray-sm">Số điện thoại liên hệ:</span>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
              0343402954
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="mb-3 text-base font-medium text-[#111A2C] sm:text-start">
          Số giấy Đăng ký kinh doanh
        </h2>
        <div className="flex  items-center rounded-lg border-2 border-dashed border-[#FFC700] bg-[#FFF8DD4D] p-4">
          <Image
            src="/icons/warning.png"
            className="me-5 h-[30px] w-[30px]"
            alt="warning"
            width={500}
            height={500}
          />

          <span className="text-color-gray-sm text-justify">
            Upload đầy đủ bản scan màu hoặc ảnh chụp màu 2 mặt của Số giấy
            ĐKKD mang tên người đại diện doanh nghiệp Tran Duc Long. Xin vui
            lòng kiểm tra ảnh mà bạn upload phải trùng với các thông tin bạn
            đang yêu cầu chứng thực.
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-5 py-5">
        <div>
          <h3 className="py-5 text-center text-sm font-medium text-[#111A2C]">
            Mặt trước
          </h3>
          <div className="relative w-[200px]">
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  {selectedFileFront ? (
                    <div>
                      <img
                        src={selectedFileFront}
                        alt="Selected"
                        className="mb-4 h-32 w-32 object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src="/icons/plus-private.png"
                        alt="plus-private"
                        className="h-[28px] w-[28px]"
                        width={500}
                        height={500}
                      />
                    </>
                  )}
                </div>
                <FileInput
                  id="dropzone-file"
                  className="hidden"
                  onChange={handleFileChangeFront}
                />
              </Label>
            </div>
            {selectedFileFront && (
              <div>
                <Label htmlFor="dropzone-file">
                  <Image
                    src="/icons/edit-image.png"
                    alt="close"
                    className="absolute -top-5 right-5 h-10 w-10 cursor-pointer"
                    width={500}
                    height={500}
                  />
                  <FileInput
                    id="dropzone-file"
                    className="hidden"
                    onChange={handleFileChangeFront}
                  />
                </Label>
                <Image
                  src="/icons/close-image.png"
                  alt="close"
                  onClick={handleRemoveFileFront}
                  className="absolute -right-5 -top-5 h-10 w-10 cursor-pointer"
                  width={500}
                  height={500}
                />
              </div>
            )}
            <p className="mt-2 text-center text-sm font-normal text-[#111A2C]">
              matruoc.png
            </p>
            <p className="text-color-gray-sm mt-3 text-center">
              Ảnh .GIF, .PNG hoặc .JPG, kích thước không quá 6MB
            </p>
          </div>
        </div>
        <div>
          <h3 className="py-5 text-center text-sm font-medium text-[#111A2C]">
            Mặt sau
          </h3>
          <div className="relative w-[200px]">
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file-back"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  {selectedFileBack ? (
                    <div>
                      <img
                        src={selectedFileBack}
                        alt="Selected"
                        className="mb-4 h-32 w-32 object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src="/icons/plus-private.png"
                        alt="plus-private"
                        className="h-[28px] w-[28px]"
                        width={500}
                        height={500}
                      />
                    </>
                  )}
                </div>
                <FileInput
                  id="dropzone-file-back"
                  className="hidden"
                  onChange={handleFileChangeBack}
                />
              </Label>
            </div>
            {selectedFileBack && (
              <div>
                <Label htmlFor="dropzone-file-back">
                  <Image
                    src="/icons/edit-image.png"
                    alt="close"
                    className="absolute -top-5 right-5 h-10 w-10 cursor-pointer"
                    width={500}
                    height={500}
                  />
                  <FileInput
                    id="dropzone-file-back"
                    className="hidden"
                    onChange={handleFileChangeBack}
                  />
                </Label>
                <Image
                  src="/icons/close-image.png"
                  alt="close"
                  onClick={handleRemoveFileBack}
                  className="absolute -right-5 -top-5 h-10 w-10 cursor-pointer"
                  width={500}
                  height={500}
                />
              </div>
            )}
            <p className="mt-2 text-center text-sm font-normal text-[#111A2C]">
              matsau.png
            </p>
            <p className="text-color-gray-sm mt-3 text-center">
              Ảnh .GIF, .PNG hoặc .JPG, kích thước không quá 500kb
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault title="Hủy" onClick={() => setStep(1)} />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(4)} />
        </div>
      </div>
    </form>
  );
};

export default ValidateForm;
