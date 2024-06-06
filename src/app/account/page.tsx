"use client";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ButtonAdd from "@/components/button-add/ButtonAdd";
import ButtonExcel from "@/components/button-excel/ButtonExcel";
import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import { Button, Dropdown, Modal, Table, Tooltip } from "flowbite-react";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import ChangePhone from "./change-phone/ChangePhone";
import ChangeAuth from "./change-auth/ChangeAuth";
import Image from "next/image";
import ButtonDelete from "@/components/button-delete/ButtonDelete";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";

interface IsCloseModalPhoneContextProps {
  setOpenModalChangePhone: Dispatch<SetStateAction<boolean>>;
}
interface IsCloseModalChangeAuthContextProps {
  setOpenModalChangeAuth: Dispatch<SetStateAction<boolean>>;
}

export const isCloseModalPhoneContext = createContext<
  IsCloseModalPhoneContextProps | undefined
>(undefined);

export const isCloseModalChangeAuthContext = createContext<
  IsCloseModalChangeAuthContextProps | undefined
>(undefined);

const AccountPage = () => {
  const [openModalChangePhone, setOpenModalChangePhone] = useState(false);
  const [openModalChangeAuth, setOpenModalChangeAuth] = useState(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false);
  const [openModalBlockAccount, setOpenModalBlockAccount] = useState(false);
  const [openModalChangePassSubUser, setOpenModalChangePassSubUser] =
    useState(false);
  const accountData = [
    {
      name: "Minhminh01",
      info: "Phó giám đốc",
      status: 1,
    },
    {
      name: "Minhminh01",
      info: "Phó giám đốc",
      status: 2,
    },
    {
      name: "Minhminh01",
      info: "Phó giám đốc",
      status: 0,
    },
  ];

  const typeStatus = [
    {
      status: 0,
      value: (
        <span className="inline-block min-w-[100px] rounded-full bg-[#FFD1D1] px-3 py-1 text-center text-[#E01C26]">
          Tạm khóa
        </span>
      ),
    },
    {
      status: 1,
      value: (
        <span className="inline-block min-w-[100px] rounded-full bg-[#ECFDF3] px-3 py-1 text-center text-[#037847]">
          Hoạt động
        </span>
      ),
    },
    {
      status: 2,
      value: (
        <span className=" inline-block min-w-[100px] rounded-full bg-[#FFF0CB] px-3 py-1 text-center text-[#DFA100]">
          Mới tạo
        </span>
      ),
    },
  ];
  return (
    <DefaultLayout>
      <div>
        <div className="shadows-custom rounded-lg bg-white px-6 py-4">
          <h2 className="text-2xl font-semibold text-[#202224]">
            Thông tin cá nhân
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="flex rounded-2xl bg-gradient-to-r from-[#79bbc62d] to-[#ADDCE325] p-3">
              <div className="h-[56px] w-[56px] ">
                <ButtonPrimary
                  title={
                    <div className="flex flex-col items-center">
                      <img src="icons/edit.png" alt="edit" />
                      <span className="mt-1 text-sm font-medium">Sửa</span>
                    </div>
                  }
                  onClick={() => setOpenModalChangePhone(true)}
                />
              </div>
              <div className="ms-3 h-full">
                <h3 className="text-color-primary-sm-medium my-1">
                  Số điện thoại
                </h3>
                <span className="text-color-black-base-normal">
                  0374 234 530
                </span>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="ms-2 h-full">
                <h3 className="text-color-primary-sm-medium my-1">Email</h3>
                <span className="text-color-black-base-normal">
                  longkudo2209@gmail.com
                </span>
              </div>
            </div>
            <div className="relative flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="ms-2 h-full">
                <h3 className="text-color-primary-sm-medium my-1">
                  Loại tài khoản
                </h3>
                <span className="text-color-black-base-normal">
                  Tài khoản ví cá nhân
                </span>
              </div>
              <div className="absolute right-2 top-2 select-none rounded-full bg-gradient-to-r from-[#76DCFF] to-[#FF89E766] px-4 py-1">
                <p className="text-xs font-medium text-[#FFFFFF]">
                  Đã xác thực
                </p>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="h-[56px] w-[56px] ">
                <ButtonPrimary
                  title={
                    <div className="flex flex-col items-center">
                      <img src="icons/edit.png" alt="edit" />
                      <span className="mt-1 text-sm font-medium">Sửa</span>
                    </div>
                  }
                  onClick={() => setOpenModalChangeAuth(true)}
                />
              </div>
              <div className="ms-3 h-full">
                <h3 className="text-color-primary-sm-medium my-1">
                  Hình thức xác thực
                </h3>
                <span className="text-color-black-base-normal">
                  Tin nhắn điện thoại
                </span>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="ms-2 h-full">
                <h3 className="text-color-primary-sm-medium my-1">Địa chỉ</h3>
                <span className="text-color-black-base-normal">
                  Hà Nội - Cầu Giấy
                </span>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="h-[56px] w-[56px] ">
                <ButtonPrimary
                  href="/account/change"
                  title={
                    <div className="flex flex-col items-center">
                      <img src="icons/TelegramLogo.png" alt="edit" />
                      <span className="mt-1 text-sm font-medium">Gửi</span>
                    </div>
                  }
                />
              </div>
              <div className="ms-3 h-full">
                <span className="text-color-black-base-normal mt-1 block">
                  Đổi sang tài khoản doanh <br /> nghiệp
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadows-custom mt-3 overflow-hidden rounded-lg bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3">
            <h3 className="text-lg font-medium text-[#101828]">
              Danh sách tài khoản Subuser
            </h3>
            <div className="flex items-center gap-3">
              <div className="me-3">
                <Dropdown
                  label=""
                  renderTrigger={() => (
                    <div className="flex items-center">
                      <img src="icons/filter-lines.png" alt="filter-lines" />
                      <span className="ms-2 text-sm font-medium text-[#344054]">
                        Lọc nâng cao
                      </span>
                    </div>
                  )}
                >
                  <Dropdown.Item>
                    <span className="mx-2 text-sm font-normal text-black">
                      A-Z
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <span className="mx-2 text-sm font-normal text-black">
                      Z-A
                    </span>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div>
                <ButtonExcel />
              </div>
              <div>
                <ButtonAdd href="/account/create" />
              </div>
            </div>
          </div>
          <hr />
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>
                  <p className="text-nowrap text-base font-medium normal-case">
                    Tên truy cập
                  </p>
                </Table.HeadCell>
                <Table.HeadCell>
                  <p className="text-nowrap text-base font-medium normal-case">
                    Thông tin
                  </p>
                </Table.HeadCell>
                <Table.HeadCell>
                  <p className="text-nowrap text-base font-medium normal-case">
                    Trạng thái
                  </p>
                </Table.HeadCell>
                <Table.HeadCell>
                  <p className="w-30 text-nowrap text-base font-medium normal-case">
                    Thao tác
                  </p>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {accountData.map((acc, key) => (
                  <Table.Row
                    key={key}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <span className="text-sm font-medium text-[#101828]">
                        {acc.name}
                      </span>
                    </Table.Cell>
                    <Table.Cell>{acc.info}</Table.Cell>
                    <Table.Cell>
                      {
                        typeStatus.filter((tst) => tst.status === acc.status)[0]
                          ?.value
                      }
                    </Table.Cell>
                    <Table.Cell>
                      <div className="">
                        <div className="flex flex-wrap gap-3  ">
                          <Tooltip content="Khóa tài khoản">
                            <button
                              className="rounded-lg bg-gray-300 p-1.5"
                              onClick={() => setOpenModalBlockAccount(true)}
                            >
                              <Image
                                src="/icons/Password.svg"
                                alt="Password"
                                className="h-[20px] w-[20px]"
                                width={500}
                                height={500}
                              />
                            </button>
                          </Tooltip>
                          <Tooltip content="Chỉnh sửa tài khoản">
                            <button className="rounded-lg bg-gray-300 p-1.5">
                              <Image
                                src="/icons/PencilSimple.svg"
                                alt="PencilSimple"
                                className="h-5 w-5"
                                width={500}
                                height={500}
                              />
                            </button>
                          </Tooltip>
                          <Tooltip content="Xóa tài khoản">
                            <button
                              className="rounded-lg bg-gray-300 p-1.5"
                              onClick={() => setOpenModalDeleteAccount(true)}
                            >
                              <Image
                                src="/icons/Delete.svg"
                                alt="Delete"
                                className="h-5 w-5"
                                width={500}
                                height={500}
                              />
                            </button>
                          </Tooltip>
                        </div>
                        <button
                          className="text-color-primary-sm ms-4 mt-2"
                          onClick={() => setOpenModalChangePassSubUser(true)}
                        >
                          Đổi mật khẩu
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      {/* modal change phone start  */}
      <Modal
        show={openModalChangePhone}
        onClose={() => setOpenModalChangePhone(false)}
      >
        <Modal.Body>
          <isCloseModalPhoneContext.Provider
            value={{ setOpenModalChangePhone }}
          >
            <ChangePhone />
          </isCloseModalPhoneContext.Provider>
        </Modal.Body>
      </Modal>
      {/* modal change phone end  */}

      {/* modal change auth start  */}
      <Modal
        show={openModalChangeAuth}
        onClose={() => setOpenModalChangeAuth(false)}
      >
        <Modal.Body>
          <isCloseModalChangeAuthContext.Provider
            value={{ setOpenModalChangeAuth }}
          >
            <ChangeAuth />
          </isCloseModalChangeAuthContext.Provider>
        </Modal.Body>
      </Modal>
      {/* modal change auth end  */}

      {/* modal delete account start */}
      <Modal
        show={openModalDeleteAccount}
        size="md"
        onClose={() => setOpenModalDeleteAccount(false)}
        popup
      >
        <Modal.Body>
          <div className="px-0 text-center md:px-10">
            <h2 className="text-color-black-2xl mt-8">Xóa tài khoản</h2>
            <p className="text-color-gray-sm mt-5">
              Bạn có chắc chắn muốn xóa tài khoản{" "}
              <span className="font-semibold text-[#1B2837]">minhminh01</span> ?
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <ButtonDefault
                onClick={() => setOpenModalDeleteAccount(false)}
                title="Đóng"
              />

              <ButtonDelete
                title="Đồng ý"
                onClick={() => setOpenModalDeleteAccount(false)}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal delete account end */}

      {/* modal change pass subUser start */}
      <Modal
        show={openModalChangePassSubUser}
        size="md"
        onClose={() => setOpenModalChangePassSubUser(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h2 className="text-color-black-2xl">Thay đổi mật khẩu subuser</h2>
            <p className="text-color-gray-sm mt-5">
              Bạn đang thay đổi mật khẩu cho subuser
              <span className="font-semibold text-[#1B2837]">minhminh01</span>,
              vui lòng nhập thông tin phía dưới
            </p>
            <form action="">
              <div className="mt-5">
                <Input
                  id="newPass"
                  isRequired={true}
                  label="Mật khẩu mới"
                  status="default"
                  type="password"
                />
              </div>
              <div className="mt-5">
                <Input
                  id="confirmPass"
                  isRequired={true}
                  label="Nhập lai mật khẩu mới"
                  status="default"
                  type="password"
                />
              </div>
              <div className="mt-14 flex justify-center">
                <div className="flex w-[400px] gap-4">
                  <ButtonDefault
                    title="Hủy"
                    onClick={() => setOpenModalChangePassSubUser(false)}
                  />
                  <ButtonPrimary
                    title={"Tiếp tục"}
                    onClick={() => setOpenModalChangePassSubUser(false)}
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal change pass subUser end */}

      {/* modal block account start */}
      <Modal
        show={openModalBlockAccount}
        size="md"
        onClose={() => setOpenModalBlockAccount(false)}
        popup
      >
        <Modal.Body>
          <div className="px-0 text-center md:px-10">
            <h2 className="text-color-black-2xl mt-8">Khóa tài khoản</h2>
            <p className="text-color-gray-sm mt-5">
              Bạn có chắc chắn muốn khóa tài khoản{" "}
              <span className="font-semibold text-[#1B2837]">minhminh01</span> ?
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <ButtonDefault
                onClick={() => setOpenModalBlockAccount(false)}
                title="Đóng"
              />

              <ButtonDelete
                title="Đồng ý"
                onClick={() => setOpenModalBlockAccount(false)}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal block account end */}
    </DefaultLayout>
  );
};

export default AccountPage;
