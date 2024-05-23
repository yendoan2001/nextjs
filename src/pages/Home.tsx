import Button from "@/components/button/Button";
import ChartOne from "@/components/charts/CharOne";
import ChartThree from "@/components/charts/ChartThree";
import { Label } from "flowbite-react";
import Image from "next/image";
import React from "react";

const Home = () => {
  const productData = [
    {
      time: "15/08/2022 12:39",
      info: (
        <div>
          <span className="text-sm font-normal text-[#FF1717]">
            Fruit_INV-000552
          </span>
          <p className="text-sm font-normal text-[#525C67]">
            Thanh toán đơn hàng Fruit_INV- 000550
          </p>
        </div>
      ),
      price: "-100.000",
      deadline: " 12:55:09 15/08/2022",
      code: 956565656,
    },
    {
      time: "15/08/2022 12:39",
      info: (
        <div>
          <span className="text-sm font-normal text-[#FF1717]">
            Fruit_INV-000552
          </span>
          <p className="text-sm font-normal text-[#525C67]">
            Thanh toán đơn hàng Fruit_INV- 000550
          </p>
        </div>
      ),
      price: "-100.000",
      deadline: " 12:55:09 15/08/2022",
      code: 956565656,
    },
    {
      time: "15/08/2022 12:39",
      info: (
        <div>
          <span className="text-sm font-normal text-[#FF1717]">
            Fruit_INV-000552
          </span>
          <p className="text-sm font-normal text-[#525C67]">
            Thanh toán đơn hàng Fruit_INV- 000550
          </p>
        </div>
      ),
      price: "-100.000",
      deadline: " 12:55:09 15/08/2022",
      code: 956565656,
    },
    {
      time: "15/08/2022 12:39",
      info: (
        <div>
          <span className="text-sm font-normal text-[#FF1717]">
            Fruit_INV-000552
          </span>
          <p className="text-sm font-normal text-[#525C67]">
            Thanh toán đơn hàng Fruit_INV- 000550
          </p>
        </div>
      ),
      price: "-100.000",
      deadline: " 12:55:09 15/08/2022",
      code: 956565656,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-color-black-3xl">Dashboard</h2>
        <div>
          <div className="flex items-center">
            <Label
              htmlFor="countries"
              className="text-color-primary-sm me-2 text-nowrap"
              value="Lọc theo:"
            />
            <select
              id="countries"
              className="bottom-0 block rounded-lg bg-transparent text-sm font-medium tracking-wide text-[#1B2837] outline-none"
            >
              <option selected value="day">
                Ngày
              </option>
              <option value="week">Tuần</option>
              <option value="month">Tháng</option>
              <option value="year">Năm</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-3">
        <div className="shadows-custom rounded-lg bg-white pb-3 pe-3 ps-4 pt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mt-1 text-base font-semibold text-[#525C67]">
                Tổng giao dịch
              </h3>
              <h2 className="mt-4 text-2xl font-semibold tracking-wider text-[#202224]">
                10293
              </h2>
            </div>
            <div className="flex justify-end">
              <img
                src="icons/icon-total-transaction.png"
                className="h-[60px] w-[60px]"
                alt="icon-total-transaction"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <img
              src="icons/ic-trending-up-24px.png"
              className="h-[24px] w-[24px]"
              alt="ic-trending-up"
            />
            <span className="ms-1 text-base font-medium text-[#00B69B]">
              {" "}
              1.3%
            </span>
            <p className="ms-1 text-base font-medium text-[#606060]">
              So với hôm qua
            </p>
          </div>
        </div>
        <div className="shadows-custom rounded-lg bg-white pb-3 pe-3 ps-4 pt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mt-1 text-base font-semibold text-[#525C67]">
                Tổng doanh thu
              </h3>
              <h2 className="mt-4 text-2xl font-semibold tracking-wider text-[#202224]">
                90.000.000đ
              </h2>
            </div>
            <div className="flex justify-end">
              <img
                src="icons/icon-total-revenue.png"
                className="h-[60px] w-[60px]"
                alt="icon-total-transaction"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <img
              src="icons/ic-trending-down-24px.png"
              className="h-[24px] w-[24px]"
              alt="ic-trending-down"
            />
            <span className="ms-1 text-base font-medium text-[#F93C65]">
              {" "}
              4.3%
            </span>
            <p className="ms-1 text-base font-medium text-[#606060]">
              So với hôm qua
            </p>
          </div>
        </div>
        <div className="shadows-custom rounded-lg bg-white pb-3 pe-3 ps-4 pt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mt-1 text-base font-semibold text-[#525C67]">
                Giao dịch chờ
              </h3>
              <h2 className="mt-4 text-2xl font-semibold tracking-wider text-[#202224]">
                2040
              </h2>
            </div>
            <div className="flex justify-end">
              <img
                src="icons/icon-pending-transaction.png"
                className="h-[60px] w-[60px]"
                alt="icon-total-transaction"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <img
              src="icons/ic-trending-up-24px.png"
              className="h-[24px] w-[24px]"
              alt="ic-trending-up"
            />
            <span className="ms-1 text-base font-medium text-[#00B69B]">
              {" "}
              1.8%
            </span>
            <p className="ms-1 text-base font-medium text-[#606060]">
              So với hôm qua
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <ChartThree />
        </div>
        <div className="col-span-8">
          <ChartOne />
        </div>
      </div>
      <div className="mt-3">
        <div className="shadows-custom rounded-lg bg-white ">
          <div className="flex items-center justify-between px-6 py-3">
            <h3 className="text-lg font-medium text-[#101828]">
              Giao dịch gần đây
            </h3>
            <button className="rounded-lg border bg-white px-4 py-2">
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Thời gian </p>
              <img
                src="icons/icon-arrow-down.png"
                className="ms-2 h-[16px] w-[16px]"
                alt="icon-arrow-down"
              />
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="font-medium">Thông tin</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Số tiền</p>
              <img
                src="icons/icon-arrow-down.png"
                className="ms-2 h-[16px] w-[16px]"
                alt="icon-arrow-down"
              />
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Thời gian hoàn thành</p>
              <img
                src="icons/icon-arrow-down.png"
                className="ms-2 h-[16px] w-[16px]"
                alt="icon-arrow-down"
              />
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Mã giao dịch</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Thao tác</p>
            </div>
          </div>

          {productData.map((product, key) => (
            <div
              className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-1 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">{product.time}</div>
                </div>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.info}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-red">{product.price}</p>
              </div>
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    {product.deadline}
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm ">{product.code}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <a href="" className="text-sm text-red">
                  Xem chi tiết
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
