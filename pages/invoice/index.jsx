import React from "react";
import logo from "../../public/sikkai1.webp";
import Collapse from "@kunukn/react-collapse";
import Image from "next/image";
import Table from "../../components/UI/table/Table";

function Invoice() {
  const data = [
    { title: "invoice #" },
    { title: "date" },
    { title: "payment due " },
    { title: "course name " },
  ];
  const detas = [
    {
      invoice: "000128",
      date: "28-10-2013",
      paymentDue: "15-11-2013",
      productName: "web design",
    },
  ];

  const tHead = [
    { title: "course name", width: "50%" },
    { title: "unit ", width: "15%" },
    { title: "price ", width: "15%" },
    { title: "total ", width: "1%" },
  ];
  const tBody = [
    {
      courseName: "c++ course",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: "basics java course",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: "javaScript course freee in chinese language  free free free",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: "programming in c language ",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: " python course",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName:
        "javaScript course freee in japanese language  free free free",
      unit: "10",
      price: "500",
      total: "5000",
    },

    {
      courseName: "c++ course",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: "basics java course",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: "javaScript course freee in hindi language  free free free",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: "programming in c language ",
      unit: "10",
      price: "500",
      total: "5000",
    },
    {
      courseName: " python course",
      unit: "10",
      price: "500",
      total: "5000",
    },
  ];
  return (
    <div className="bg-gray-100 h-full  py-14">
      <div className="bg-white w-12/12 sm:w-11/12 lg:w-6/12  mx-auto  px-2 md:px-12 lg:px-20 pb-8">
        <div className="flex w-full py-5 justify-center ">
          <div className=" w-28 sm:w-32 md:w-40">
            <Image
              src={logo}
              alt={logo}
              width={60}
              height={30}
              layout="responsive"
              placeholder="blur"
              objectFit="contain"
              blurDataURL={logo}
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className=" border-y-2 border-gray-300  py-2 flex justify-between items-center ">
          <div className="text-xl md:text-3xl uppercase text-primary ">
            invoice
          </div>
          <div className="capitalize">
            <div className="font-openSansSix text-sm">prepared for :</div>
            <div className="text-xs">nischal karki</div>
            {/* <div className="text-xs">butwal,rupandehi</div> */}
          </div>
        </div>
        <div className="  flex  gap-9 md:grid grid-cols-4  md:gap-10  mt-8 py-2 font-openSansSeven text-xs md:text-sm  capitalize ">
          {data.map((val, i) => {
            return (
              <div key={i}>
                <div className="border-b-2 border-gray-300 h-10  mg:h-0 ">
                  {val.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          {detas.map((val, i) => {
            return (
              <div
                key={i}
                className=" flex  gap-9 md:grid grid-cols-4 text-gray-700 md:gap-10 md:font-openSansFour capitalize text-xs md:text-sm"
              >
                <div>#{val.invoice}</div>
                <div>{val.date}</div>
                <div>{val.paymentDue}</div>
                <div>{val.productName}</div>
              </div>
            );
          })}
        </div>
        <div className="  w-12/12 mt-10 mb-3   sm:w-11/12 md:w-full">
          <Table
            value="simple"
            Thead={tHead}
            cellspacing="0px"
            cellpadding="0px"
          >
            {tBody?.map((val, i) => {
              return (
                <tr
                  key={i}
                  className=" capitalize h-10 text-gray-700 text-sm font-openSansFive "
                >
                  <td className="  pr-8">{val.courseName}</td>
                  <td>{val.unit}</td>
                  <td>{val.price}</td>
                  <td>{val.total}</td>
                </tr>
              );
            })}
          </Table>
          <div className="border-b-2 border-gray-300 "></div>
        </div>
        <div className="my-1 flex justify-end  w-full ">
          <div className="text-right">
            <div className="capitalize font-openSansSeven text-sm">total</div>
            <div className="border-b-2 border-gray-300 w-28  "></div>

            <div className="capitalize">rs.50000</div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="text-sm md:text-base font-openSansSeven capitalize">
            terms and conditions
          </div>

          <div className="capitalize text-sm md:text-base font-openSansSeven">
            {" "}
            amount due
          </div>
        </div>
        <div className="border-b-2 border-gray-300 "></div>
        <div className="flex justify-between mt-2 mb-6">
          <div className="text-xs md:text-sm text-gray-700  w-8/12  text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            eveniet maiores rem fuga eligendi ut unde dolor eius impedit. Odit
            libero, facere asperiores ex deleniti quam facilis illum dolores
            hic!
          </div>
          <div className=" text-xl md:text-4xl flex  font-openSansFour items-center justify-end capitalize text-primary ">
            rs 50000
          </div>
        </div>
        <div className=" border-y-2 border-gray-300  py-2 flex justify-between items-center ">
          <div className="capitalize">
            <div className="font-openSansSix text-sm md:text-base">
              contact details
            </div>
            <div className="text-xs">9548756321</div>
          </div>
          <div className=" text-xl md:text-3xl uppercase text-primary ">
            thank you
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
