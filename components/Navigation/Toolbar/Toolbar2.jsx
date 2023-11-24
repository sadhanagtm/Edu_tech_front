import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { MdAccountBalance, MdAccountBalanceWallet } from "react-icons/md";
import React, { useEffect, useState } from "react";
import {
  RiAccountCircleLine,
  RiBook2Fill,
  RiComputerLine,
} from "react-icons/ri";

import Axu from "../../../HOC/Axu/Axu";
import { BiCategory } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import CoursesCategoryModel from "../../UI/model/coursesCategoryModel";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/sikkai1.webp";
import { NavData } from "../NavData/NavData";
import axios from "../../../HOC/Axios/Axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

function ToolBar({ show, setShow, datad, val }) {
  const [data, setData] = React.useState([]);
  const [Status, setStatus] = useState(false);
  const [Route, setRotue] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [ShowProfileLink, setShowProfileLink] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Logos, setLogos] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      if (cookie.get("token")) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
  }, [cookie]);
  useEffect(() => {
    if (router.isReady) {
      console.log(router);
      setRotue(router.asPath);
    }
  }, [router.isReady]);

  useEffect(() => {
    setFname(localStorage.getItem("first_name"));
    setLname(localStorage.getItem("last_name"));
    const fetch = async () => {
      try {
        await axios.get(`/category/withNum`).then((res) => {
          setData(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const [Profile, setProfile] = useState([
    {
      icons: <RiAccountCircleLine />,
      title: "Profile",
      link: "/studentprofile",
    },
    {
      icons: <RiBook2Fill />,
      title: "My Courses",
      link: "/myCourses",
    },
    {
      icons: <MdAccountBalanceWallet />,
      title: "online Account",
      link: "/onlineAccount",
    },
    {
      icons: <MdAccountBalance />,
      title: "Earning Account",
      link: "/earningAccount",
    },
  ]);

  let model;
  if (showModel) {
    model = (
      <CoursesCategoryModel>
        <div className="text-xl  px-5  py-3 font-openSansSix">
          Course Categories
        </div>
        <div className=" flex flex-wrap gap-5  w-full items-center justify-center  ">
          {data.map((val, i) => {
            let image = `${process.env.NEXT_PUBLIC_FILE}/images/${val.category_img}`;
            return (
              <div
                className=" border-2  h-24 flex items-center hover:border-green-600 border-gray-300  rounded-lg "
                key={i}
              >
                <div className="relative mx-2 w-16 h-16">
                  <Image
                    src={val.category_img}
                    alt={val.category_name}
                    placeholder="blur"
                    blurDataURL={val.category_img}
                    width={100}
                    height={100}
                    layout="responsive"
                    quality={75}
                    priority={true}
                    sizes={"40vw"}
                  />
                </div>
                <div className=" px-2 flex flex-col">
                  <div className=" font-openSansFour leading-5 line-clamp-2  w-32  ">
                    {" "}
                    {val.category_name}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className=" font-openSansThree">
                      {" "}
                      {val.course} courses
                    </div>
                    <div>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="w-full flex justify-center py-6 "
          onClick={() => setShowModel(false)}
        >
          <Link href="/courses" passHref>
            <div className=" w-fit p-3 rounded-md hover:scale-105 transition-all duration-300 ease-in-out delay-75 text-white font-openSansFive bg-primary">
              View Courses
            </div>
          </Link>
        </div>
      </CoursesCategoryModel>
    );
  }
  return (
    <Axu>
      <div
        className="sticky z-10 mx-auto  top-0 grid  
       grid-cols-6
        gap-3  items-center py-5 sm:py-5 
         lg:py-3 shadow-lg sm:grid-cols-6
          md:grid-cols-8   md:pl-0  md:gap-1
         lg:grid-cols-12 lg:gap-4 xl:gap-0 "
      >
        {!show ? (
          <div
            className=" col-span-1  text-4xl cursor-pointer
           mx-auto lg:hidden 
           sm:text-3xl sm:mr-0 sm:ml-2   
           "
          >
            {!show ? <HiMenuAlt2 onClick={() => setShow(true)} /> : null}
          </div>
        ) : null}

        {/* sikkai logo */}
        <div
          className="col-span-1 
          row-start-1 col-start-5 
          lg:col-span-1
          xl:col-span-1 
          cursor-pointer
          sm:w-11/12 sm:h-10 sm:col-span-1 
          sm:col-start-5 
          sm:pr-2
          sm:ml-10
        md:col-span-1 
        md:w-full
        lg:mr-0
        w-11/12 
        h-12  aspect-video mx-auto
        lg:w-8/12 xl:w-10/12 
        xl:ml-10 lg:h-12
         lg:ml-7
        md:col-start-7
        lg:col-start-1
        "
        >
          <div
            className="mt-0   w-24 mr-2 md:w-24 sm:-mt-2
           md:-mt-1 lg:-mt-0
          xl:p-0 sm:w-18 lg:w-24 xl:mr-0 2xl:w-28 
           xl:-mt-1"
          >
            <Link href={"/"} passHref>
              <Image
                alt="logo"
                src={Logo}
                width={100}
                height={50}
                onjectFit="contain"
                sizes={"80vw"}
                quality={75}
                layout="responsive"
              />
            </Link>
          </div>
        </div>
        {/* Drop Down Category */}
        <div
          className="col-span-3   
           sm:col-span-3 md:col-span-5 
           md:col-start-2
           sm:col-start-2  
           col-start-2 relative 
           lg:gap-0 
           2xl:gap-4  
           row-start-1 flex
            items-center 
            justify-center 
            capitalize font-openSansFour 
          lg:col-span-9
    lg:justify-end
    lg:ml-4
          xl:col-span-9 
          xl:justify-center
           lg:text-base 
         "
        >
          <div
            onMouseOver={() => setShowModel(false)}
            onMouseLeave={() => setShowModel(false)}
            className=" hidden tranfrom-all duration-300
            delay-100 
     
         active:border-b-2 hover:scale-105 hover:border-black h-20 
            w-fit cursor-pointer   lg:flex flex-row  
            items-center justify-center  "
          >
            <div
              onMouseLeave={() => setShowModel(false)}
              className="cursor-pointer text-black"
            >
              {model}
            </div>
            <p className="px-1 pl-2">
              <BiCategory />
            </p>
            <Link href="/courses" passHref>
              <p>Courses</p>
            </Link>
          </div>
          <div
            className="lg:ml-4 p-1 rounded-3xl w-11/12 
            lg:w-4/12 xl:w-4/12 
           flex items-center h-fit border-2 border-gray-300        
           sm:w-full px-4
           
           "
          >
            <p
              className="flex-start-2 text-xl
             sm:text-xs cursor-pointer text-gray-400  mx-auto"
            >
              <FiSearch />
            </p>
            <input
              type={"text"}
              placeholder="search courses......."
              className="w-11/12 h-8 bg-transparent outline-0
              sm:h-6 sm:text-xs
              sm:w-full
              ml-2
              "
            />
          </div>
          {/* sikkai navigation */}
          <div
            className="text-sm hidden lg:flex ml-2 xl:ml-8  
          
              lg:text-xs 
            
              space-x-6
               xl:text-sm items-center  
               justify-center
               
              "
          >
            {NavData.map((val, i) => {
              return (
                <Link key={i} href={val.link} passHref>
                  <div
                    className={`w-fit  mx-auto cursor-pointer 
                  tranfrom-all duration-300
                  delay-100 
                  ${val.link === Route ? "border-b-2 border-black" : null}
           
               active:border-b-2 hover:scale-105 hover:border-black
                  
                  `}
                  >
                    {val.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* right bar icons */}
        <div
          className=" lg:col-span-2   
          lg:mr-0 xl:mr-2 2xl:mr-4   
           lg:col-start-11

            lg:flex flex-row items-center
              justify-center
         font-openSansSix
          text-base"
        >
          {Status === false ? (
            <div className="hidden lg:flex ml-4 xl:ml-6 gap-4">
              <Link href="/auth/login" passHref>
                <div
                  className=" border cursor-pointer 
                p-3 xl:px-4 xl:py-2 flex  items-center
                 2xl:btn-outline-primary xl:text-sm  2xl:text-base
                   rounded-md hover:scale-105
                   
                   hover:shadow-sm text-xs 
                   hover:shadow-gray-300 text-gray-600
                    transition hover:opacity-75"
                >
                  Login
                </div>
              </Link>
              <Link href="/auth/signup" passHref>
                <div
                  className=" bg-primary cursor-pointer  
                px-2 xl:px-2 xl:py-3 text-xs xl:text-sm 
                items-center flex text-white  2xl:btn-primary 
                 rounded-md  hover:scale-105 hover:shadow-sm
                  hover:shadow-gray-300 transition hover:opacity-75 
                  shadow-xl "
                >
                  Sign up
                </div>
              </Link>
            </div>
          ) : (
            <div
              className=" relative flex justify-center lg:space-x-12 
          items-center lg:ml-8 ml-0 space-x-2 sm:justify-start"
            >
              <div
                className="hidden lg:flex justify-center cursor-pointer  items-center space-x-2"
                onMouseEnter={() => setShowProfileLink(true)}
                onMouseLeave={() => setShowProfileLink(false)}
              >
                <div
                  className="font-openSansSix lg:text-lg
            text-sm  text-gray capitalize mr-1"
                >
                  {fname}
                </div>
                <div
                  className="relative border-2 
                  h-11 w-11  rounded-full object-cover"
                >
                  {Logos ? (
                    <Image
                      src={Logo}
                      alt=""
                      placeholder="blur"
                      blurDataURL={Logo}
                      objectFit="contain"
                      layout="fill"
                    />
                  ) : (
                    <div className="bg-gray-300 flex uppercase justify-center items-center text-sm h-full w-full rounded-full">
                      {fname[0]}
                      {lname[0]}
                    </div>
                  )}
                </div>
                {ShowProfileLink ? (
                  <div
                    className="bg-grayTwo absolute right-2
             rounded-md top-12 lg:w-52  lg:-right-3 w-44
            h-fit p-2  pb-2 z-50"
                    id="UserProfile"
                  >
                    {Profile.map((val, i) => {
                      return (
                        <Link href={val.link} key={i} passHref>
                          <div
                            key={i}
                            className={`flex mt-2 items-center  px-4 py-2 w-full
                  space-x-2 capitalize lg:text-base  text-sm cursor-pointer 
        
                   hoverme  rounded-lg hover:text-white`}
                          >
                            <div className="text-lg ">{val.icons}</div>
                            <div>{val.title}</div>
                          </div>
                        </Link>
                      );
                    })}
                    <div>
                      <div
                        onClick={() => {
                          cookie.remove("token");
                          setStatus(false);
                        }}
                        className="flex mt-2 items-center  px-4 py-2 w-full
                  space-x-2 capitalize lg:text-base  text-sm cursor-pointer 
        
                   hover:bg-blue-400  rounded-lg hover:text-white"
                      >
                        <div className="text-lg ">
                          <AiOutlineLogout />
                        </div>
                        <div>Logout</div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </Axu>
  );
}

export function getServerSideProps({ req, res }) {
  return {
    props: { datad: req.cookies.token },
  };
}

export default ToolBar;
