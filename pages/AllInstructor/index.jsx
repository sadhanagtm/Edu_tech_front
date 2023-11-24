import React, { useState } from "react";

import Instructors from "../../components/PageComponents/Instructors/Instructors";
import Layout from "../../HOC/Layout/Layout";
import axios from "../../HOC/Axios/Axios";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { GrFormNext } from "react-icons/gr";
function Index() {
  const [Gurus, setGurus] = useState([]);
  const [storeGurusData, setStoreGurusData] = useState([]);
  const [searchNameParams, setsearchNameParams] = useState([
    { first_name: "", last_name: "" },
  ]);
  const [show, setShow] = useState("");
  const [search, setSearch] = useState("");
  const [PaginationOrder, setPaginationOrder] = useState("DESC");
  const [PaginationInfo, setPaginationInfo] = useState({
    page: "1",
    take: "12",
    itemCount: "",
    pageCount: "",
    hasPreviousPage: false,
    hasNextPage: false,
  });
  // get Gurus
  const GetGurus = () => {
    try {
      axios
        .get(
          `/instructor?order=${PaginationOrder}&page=${PaginationInfo.page}&take=${PaginationInfo.take}&first_name=${searchNameParams.first_name?searchNameParams.first_name:''}`
          // paginationOrder,PaginationInfo.Page,PaginationInfo.take chai PaginationInfo state bata ako data ho hai
        )
        .then((res) => {
          if (res.status === 200) {
            setGurus(res.data.data);
            setPaginationInfo(res.data.meta);
          }
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetGurus();
  }, []);

  const paginationPageChange = (current) => {
    PaginationInfo.page = current.selected + 1;
    // current.selected le array of index dincha jun data click vako cha tesko
    GetGurus();
  };
  
  const searchFilter = () => {
    GetGurus();
  };
  return (
    <Layout>
      <div className="container mx-auto px-4 pb-14   mt-8 lg:px-8">
        {/* <Link href={"/"} passHref>
          <div className=" cursor-pointer py-4 sm:p-4">
            <MdKeyboardBackspace className="w-6 sm:w-10 h-6 sm:h-10 text-gray-700 " />
          </div>
        </Link> */}
        <div className="flex justify-between w-full">
          <div className="text-primary  w-full capitalize text-2xl text- my-14 lg:text-4xl md:text-3xl sm:text-2xl tracking-wider font-openSansEight">
            Our Valuable Guru
          </div>
          <div className="flex justify-end items-center gap-5 w-full" >
            <div className="my-5  flex justify-end  w-full">
              <input
                type="text"
                placeholder="Search by First Name ..."
                className=" border rounded-md border-gray-200 bg-gray-50 h-12 w-full  px-3"
                onChange={(e) =>
                 searchNameParams.first_name=e.target.value
                }
              />
            </div>
            <div>
              <button
                className="bg-primary text-white capitalize px-6 rounded-md py-3"
                onClick={() => searchFilter()}
              >
                {" "}
                search
              </button>
            </div>
          </div>
        </div>
        {/* Header bod section */}
        {/* <div className="text-center my-10">
          <Image
            src={`${process.env.Url}/images/${data[0].img}`}
            alt="image"
            srcSet=""
            height={400}
            width={400}
            layout="intrinsic"
            objectPosition="center"
            quality={30}
            className="rounded-md shadow-md lg:h-96  md:h-72 sm:h-40 mx-auto"
          />
          <p className="lg:text-2xl font-openSansSeven mt-5 ">{data[0].name}</p>
          <p className="lg:text-xl font-openSansSix mt-3 ">{data[0].title}</p>
        </div> */}

        {/* Bod body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {Gurus?.map((item) => (
            <Instructors
              key={item.id}
              id={item.id}
              img={item.profile_img}
              // img={`${process.env.Url}/images/${item.img}`}
              name={item.first_name + " " + item.last_name}
              lastname={item.last_name ? item.last_name : ""}
              courses={item.course}
            />
          ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <GrFormNext className="bg-gray-100 rounded p-0.5 text-3xl transition hover:bg-gray-300 hover:text-white font-bold" />
          }
          className="flex items-center space-x-2 customPaginate mt-20"
          activeClassName={`activePage `}
          onPageChange={paginationPageChange}
          pageClassName="classPaginate"
          pageCount={PaginationInfo.pageCount}
          previousLabel={
            <GrFormNext className="rotate-180 bg-gray-100 p-0.5 text-3xl cursor-pointer transition hover:bg-gray-300 hover:text-white" />
          }
        />
      </div>
    </Layout>
  );
}

export default Index;
