import React, { useState } from "react";
import Layout from "../../HOC/Layout/Layout";
import { FaFilePdf } from "react-icons/fa";
import Publish from "../../components/PageComponents/DownloadsTabs/Publish";
import Draft from "../../components/PageComponents/DownloadsTabs/Draft";
import Archived from "../../components/PageComponents/DownloadsTabs/Archived";
import All from "../../components/PageComponents/DownloadsTabs/All";
import Table from "../../components/UI/table/Table";
import Link from "next/link";
function Index() {
  const Thead = [
    { title: "date", width: "20%" },
    { title: "notices", width: "70%" },
    { title: "pdf File", width: "10%" },
  ];
  const tBody = [
    { date: "2078/02/26", notices: "download ppt here!!" },
    {
      date: "2078/02/26",
      notices: " download ppt here!!",
    },
    {
      date: "2078/02/26",
      notices:
        "download ppt here!!   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "2078/02/26",
      notices:
        "download ppt here!!   Lorem ipsum dolor sit amet consectetur adipisicing elit.   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "2078/02/26",
      notices:
        "     Velit laboriosam dolorum, ipsam corrupti repudiandae natus maxime quidem, repellat provident dignissimos reprehenderit tempore ipsa vero eligendi aperiam explicabo autem harum quo.",
    },
  ];
  return (
    <Layout>
      <div>
        <div className=" py-14 lg:py-20 xl:py-20 xxl:py-20 px-4 md:px-10 lg:px-14 xl:px-14 xxl:px-14">
          <div className="pb-8 capitalize  flex items-center justify-between">
            <div className=" text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl font-openSansSix">
              {" "}
              download pdf :
            </div>
            <div className="w-5/12 lg:w-3/12 xl:w-3/12 xxl:w-3/12 border border-gray-600 rounded-md">
              {" "}
              <input
                type="text"
                placeholder="Search ..."
                className="px-2  py-1.5 md:py-3 lg:py-3 xl:py-3 xxl:py-3 w-full rounded-md"
              />
            </div>
          </div>
          <Table Thead={Thead}>
            {tBody.map((val, i) => {
              return (
                <tr key={i} className=" border border-gray-600   text-left">
                  <td className="border-r border-gray-600 px-2">{val.date}</td>

                  <td className="flex gap-2 items-center border-r border-gray-600  py-5 px-2 ">
                    {/* <Link href={"/"} passHref> */}
                    <div className=" scroll  text-left overflow-scroll h-fit cursor-pinter ">
                      {" "}
                      {val.notices}
                    </div>
                    {/* </Link> */}
                  </td>
                  <td className="border-r border-gray-600 px-2">
                    <Link href={"/"} passHref>
                      <div className="cursor-pointer flex justify-center items-center">
                        <FaFilePdf className="h-10 w-10 text-red-600 hover:scale-105 transition-all duration-300 ease-in-out" />
                      </div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </Table>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
