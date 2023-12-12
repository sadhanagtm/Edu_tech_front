import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { MdAccountBalance, MdAccountBalanceWallet } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import {
  RiAccountCircleLine,
  RiBook2Fill,
  RiComputerLine,
} from "react-icons/ri";

import Axu from "../../../HOC/Axu/Axu";
import { BiCategory } from "react-icons/bi";
import BreakPointTest from "../../test/BreakPointTest.jsx";
import { BsArrowRight } from "react-icons/bs";
import Collapse from "@kunukn/react-collapse";
import CoursesCategoryModel from "../../UI/model/coursesCategoryModel";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/sikkai1.webp";
import { NavData } from "../NavData/NavData";
import { UserInfoContext } from "../../../HOC/ContextApi/UserInfo";
import axios from "../../../HOC/Axios/Axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

function ToolBar({
  show,
  setShow,
  datad,
  val,
  showSearchForm,
  setShowSearchForm,
  showInputData,
  setShowInputData,
  inputTwister,
  setInputTwister,
}) {
  const [data, setData] = React.useState([]);

  const [course, setCourse] = React.useState([]);
  const [Status, setStatus] = useState(false);
  const [Route, setRotue] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [ShowProfileLink, setShowProfileLink] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Logos, setLogos] = useState(false);
  const router = useRouter();
  const [change, setChange] = useState("");
  const [storeEvent, setStoreEvent] = useState("");
  const [COOKIE, setCOOKIE] = useState(cookie.get("token"));

  const { UserInfo } = useContext(UserInfoContext);

  const toggle = () => {
    setShowProfileLink(!ShowProfileLink);
  };

  useEffect(() => {
    if (process.browser) {
      if (cookie.get("token")) {
        console.log(cookie.get("token"));
        setCOOKIE(cookie.get("token"));
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
      console.log(router.asPath);
    }
  }, [router.isReady]);

  useEffect(() => {
    setFname(
      localStorage.getItem("first_name")
        ? localStorage.getItem("first_name")
        : "sikkai"
    );
    setLname(
      localStorage.getItem("last_name")
        ? localStorage.getItem("last_name")
        : "nepal"
    );
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
      title: "Business Account",
      // link: `https://onlineaccount.sikkainepal.com?token=${COOKIE}`,
      link: `https://onlineaccount.sikkainepal.com?tkn=${COOKIE}`,
      id: "blank",
    },
  ]);
  useEffect(() => {
    const fetch = async () => {
      try {
        await axios.get(`/course`).then((res) => {
          console.log("course", res.data.data);
          setCourse(res.data.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
    // getCategory();
  }, []);
  let model;
  if (showModel) {
    model = (
      <CoursesCategoryModel>
        <div className="text-xl px-5 py-3 font-openSansSix">
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

  const filter = (options) => {
    return options.filter((option) => {
      return (
        option?.course_name?.toLowerCase()?.indexOf(change) > -1 ||
        option?.category_name?.toLowerCase()?.indexOf(change) > -1
      );
    });
  };

  let mod;
  if (showSearchForm) {
    mod = (
      <div className=" w-full lg:w-full  h-fit -right-0 lg:-right-2 absolute top-9  shadow-xl  border z-50 bg-white p-2">
        {change ? (
          <div className="">
            {filter(course).map((val, i) => {
              return (
                <div key={i} className=" flex items-center gap-2 m-2">
                  <div>
                    <FiSearch className="text-gray-600 text-lg" />
                  </div>

                  <Link
                    href={{
                      pathname: "/courses",
                      query: {
                        course: val.course_name,
                        r: "y",
                      },
                    }}
                    passHref
                  >
                    <div
                      onClick={() => setShowSearchForm(false)}
                      className={`text-sm capitalize cursor-pointer line-clamp-2
                       font-openSansFour text-gray-600 `}
                    >
                      {val.course_name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
        {change ? (
          <div className="">
            {filter(data).map((val, i) => {
              return (
                <div key={i} className=" flex items-center gap-2 m-2">
                  <div>
                    <FiSearch className="text-gray-600 text-lg" />
                  </div>
                  <Link
                    href={{
                      pathname: "/courses",

                      query: { category: val.id, name: val.category_name },
                    }}
                    passHref
                  >
                    <div
                      onClick={() => setShowSearchForm(false)}
                      className={`text-sm capitalize  cursor-pointer line-clamp-2 font-openSansFour text-gray-600`}
                    >
                      {val.category_name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
  const showFormPerClick = () => {
    if (change.length >= 3) {
      setShowSearchForm(true);
    } else if (change.length < 3) {
      setShowSearchForm(false);
    }
    // alert(5);
  };
  const unChange = (e) => {
    setStoreEvent(e.target.value);
    if (e.target.value.length < 3) {
      setShowSearchForm(false);
      setChange("");
    } else if (e.target.value.length >= 3) {
      setShowSearchForm(true);
      setChange(e.target.value);
    } else {
      setChange("");
    }
  };
  // search field for small screen upto md screen
  const SearchField = () => {
    setShowInputData(true);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push({
        pathname: `/courses`,
        query: {
          course: storeEvent,
          r: "y",
        },
      });
      setShowSearchForm(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 40) {
      if (e.target.value.length >= 3) {
        console.log("You pressed the escape key!");
      }
    }
  };
  return (
    <Axu>
      <div
        className="flex items-center justify-between py-1  h-16 lg:h-fit px-4 md:p-4 border shadow-xl lg:px-12 navBg"
        onMouseLeave={() => {
          setShowInputData(false), setShowSearchForm(false);
        }}
      >
        {!show ? (
          <div className="lg:hidden  cursor-pointer">
            {!show ? (
              <div className="flex items-center space-x-4">
                {!showInputData ? (
                  <HiMenuAlt2
                    className="text-3xl"
                    onClick={() => setShow(true)}
                  />
                ) : (
                  <HiArrowNarrowLeft
                    className="text-3xl text-gray-700 fold:mr-2"
                    onClick={() => setShowInputData(false)}
                  />
                )}
                {!showInputData ? (
                  <div className="w-20 ">
                    <Link href={"/"} passHref>
                      <Image
                        alt="logo"
                        src={Logo}
                        width={100}
                        height={50}
                        sizes={"80vw"}
                        quality={75}
                        layout="responsive"
                        objectFit="contain"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="w-20 hidden md:block lg:hidden">
                    <Link href={"/"} passHref>
                      <Image
                        alt="logo"
                        src={Logo}
                        width={100}
                        height={50}
                        sizes={"80vw"}
                        quality={75}
                        layout="responsive"
                        objectFit="contain"
                      />
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ) : null}

        {/* sikkai logo */}
        <div className="hidden lg:block">
          <div className="w-28 bg-green-700 lg:w-24 xl:ml-1 2xl:ml-0 cursor-pointer">
            {/* <Link href={"/"} passHref>
              <Image
                alt="logo"
                src={Logo}
                width={100}
                height={50}
                sizes={"80vw"}
                quality={100}
                layout="responsive"
                objectFit="contain"
              />
            </Link> */}
          </div>
        </div>
        {/* mid section  */}

        {/* mid section for lg and upper screens  */}
        <div className="block xl:flex-1 lg:flex lg:flex-1 lg:mx-4 xl:flex w-full xl:items-center xl:mx-4 ">
          {/* Drop Down Category */}
          <div className="flex cursor-pointer w-full items-center lg:space-x-10">
            <div className="lg:flex items-center hidden cursor-pointer space-x-1 transition hover:opacity-60">
              <p className="px-1 pl-2">
                <BiCategory />
              </p>
              <Link href="/courses" passHref>
                <p>Courses</p>
              </Link>
            </div>

            {!inputTwister ? (
              <div className=" relative  flex-row-reverse hidden lg:flex items-center  bg-primary rounded-full border-2 xl:w-10/12 lg:w-8/12 border-primary shadow-md text-sm">
                <p className="text-white px-2">
                  <FiSearch />
                </p>
                <input
                  type={"text"}
                  placeholder="Search courses......."
                  className="rounded-full py-1.5 w-full px-2 fold:w-16 "
                  onChange={(e) => unChange(e)}
                  onClick={() => showFormPerClick()}
                  onKeyPress={(e) => handleKeyPress(e)}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
                {mod}
              </div>
            ) : (
              <div>
                <FiSearch onClick={() => setInputTwister(true)} className="" />
              </div>
            )}
            {/* sikkai navigation */}
            <div className="lg:flex hidden capitalize items-center lg:space-x-4 xl:space-x-8 2xl:space-x-10 w-full justify-center">
              {NavData.map((val, i) => {
                if (val.disable === undefined) {
                  return (
                    <div
                      className="flex flex-col items-center relative"
                      key={i}
                    >
                      <Link href={val.link} passHref>
                        <div
                          className={`w-fit  cursor-pointer font-medium lg:text-sm ${
                            val.link === Route ? "font-medium " : null
                          } active:border-b-2 transition hover:opacity-60`}
                        >
                          {val.title}
                        </div>
                      </Link>
                      {/* {val.link === Route && (
                        <div className="h-0.5 w-2/3 bg-primary absolute top-7"></div>
                      )} */}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex flex-col items-center relative"
                      key={i}
                    >
                      <div href={val.link}>
                        <div
                          className={`w-fit cursor-not-allowed font-medium lg:text-sm ${
                            val.link === Route ? "font-medium " : null
                          } active:border-b-2 transition hover:opacity-60`}
                        >
                          {val.title}
                        </div>
                      </div>
                      {val.link === Route && (
                        <div className="h-0.5 w-2/3 bg-primary absolute top-7"></div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {/* right bar icons */}
        <div className="">
          {Status === false ? (
            <div className="items-center flex ml-4 xl:ml-6 gap-3">
              <div className="flex lg:hidden ">
                {" "}
                {showInputData ? (
                  <div className="flex flex-row-reverse relative items-center bg-primary rounded-full border-2 border-primary shadow-md text-sm lg:w-96">
                    <p className="text-white px-2">
                      <FiSearch />
                    </p>
                    <input
                      type={"text"}
                      placeholder="Search courses......."
                      className="w-60 py-1.5 px-2 rounded-full  fold:w-36 md:w-96  "
                      onChange={(e) => unChange(e)}
                      onClick={() => showFormPerClick()}
                      onKeyPress={(e) => handleKeyPress(e)}
                      onKeyDown={(e) => handleKeyDown(e)}
                    />
                    {mod}
                  </div>
                ) : (
                  <div
                    className="p-1 rounded-full bg-gray-100 hover:shadow-md hover:shadow-gray-300"
                    onClick={() => SearchField()}
                  >
                    {" "}
                    <FiSearch className="cursor-pointer text-gray-700 fold:w-5 fold:h-5 w-6 h-6" />
                  </div>
                )}
              </div>
              {!showInputData ? (
                <div className="hidden lg:flex gap-8 lg:mr-4  ">
                  <Link href="/auth/login" passHref>
                    <div className="border cursor-pointer px-3 py-2  lg:px-7 xl:px-6 xl:py-2 flex  items-center 2xl:btn-outline-primary xl:text-sm  2xl:text-base rounded-md hover:scale-105 hover:shadow-sm text-base hover:shadow-gray-300 text-gray-600 transition hover:opacity-75">
                      Login
                    </div>
                  </Link>
                  <Link href="/auth/signup" passHref>
                    <div className=" bg-primary cursor-pointer px-3 py-2 lg:px-5 xl:px-4 xl:py-3 text-base xl:text-sm items-center flex text-white 2xl:btn-primary rounded-md hover:scale-105 hover:shadow-sm hover:shadow-gray-300 transition hover:opacity-75 shadow-xl ">
                      Sign up
                    </div>
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="relative flex justify-center lg:space-x-12 items-center space-x-2 sm:justify-start">
              <div className="flex items-center space-x-3">
                <div className="flex lg:hidden ">
                  {" "}
                  {showInputData ? (
                    <div className="flex relative items-center space-x-2 rounded-full px-4 py-2 border border-gray-200 shadow-md text-sm lg:w-96">
                      <p className="text-gray-400">
                        <FiSearch />
                      </p>
                      <input
                        type={"text"}
                        placeholder="Search courses......."
                        className="fold:w-36 w-60 md:w-96"
                        onChange={(e) => unChange(e)}
                        onClick={() => showFormPerClick()}
                        onKeyPress={(e) => handleKeyPress(e)}
                        onKeyDown={(e) => handleKeyDown(e)}
                      />
                      {mod}
                    </div>
                  ) : (
                    <FiSearch
                      className="cursor-pointer text-gray-700"
                      onClick={() => SearchField()}
                    />
                  )}
                </div>
                {/* input field on click searchIcon for small upto md devices */}
                {!showInputData ? (
                  <FaShoppingCart className="cursor-not-allowed" />
                ) : null}
                {!showInputData ? (
                  <div
                    className="flex justify-center  items-center space-x-2"
                    // onMouseEnter={() => setShowProfileLink(true)}
                    // onMouseLeave={() => setShowProfileLink(false)}
                  >
                    <div className="font-openSansSix lg:text-lg text-xl  text-gray capitalize mr-1 flex">
                      {/* {fname[0]} */}
                    </div>
                    {/* name or image  */}
                    <div
                      onClick={() => toggle()}
                      className="relative border-2 h-8 w-8 lg:h-11 lg:w-11 cursor-pointer  rounded-full object-cover"
                    >
                      {console.log(UserInfo)}
                      {UserInfo.length > 0 && UserInfo[0].profile_img ? (
                        <Image
                          src={UserInfo[0].profile_img}
                          alt=""
                          placeholder="blur"
                          blurDataURL={Logo}
                          objectFit="cover"
                          layout="fill"
                          className="rounded-full"
                        />
                      ) : (
                        <div
                          onClick={() => toggle()}
                          className="bg-gray-300 flex cursor-pointer  last:uppercase justify-center items-center text-sm h-full w-full rounded-full"
                        >
                          {UserInfo.length > 0 && UserInfo[0].first_name[0]}
                          {UserInfo.length > 0 && UserInfo[0].last_name[0]}
                        </div>
                      )}
                    </div>
                    <div className="bg-grayTwo px-2 absolute right-2 rounded-md top-12 lg:w-52  lg:-right-3 w-44 h-fit  z-50 ">
                      <Collapse
                        isOpen={ShowProfileLink}
                        // state ko value yeha change huni raicha like true or false
                        className={
                          "app__collapse app__collapse--gradient " +
                          (ShowProfileLink
                            ? "app__collapse--active UserProfile "
                            : "UserProfile ")
                        }
                        transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                        aria-hidden={ShowProfileLink ? "false" : "true"}
                        elementType="article"
                        render={() => (
                          <React.Fragment>
                            {Profile.map((val, i) => {
                              if (val.disable === true) {
                                return (
                                  <Link href={val.link} key={i} passHref>
                                    <div
                                      key={i}
                                      className={`flex mt-2 items-center px-4 py-2 w-full space-x-2 capitalize lg:text-base text-sm cursor-not-allowed rounded-lg `}
                                    >
                                      <div className="text-lg ">
                                        {val.icons}
                                      </div>
                                      <div>{val.title}</div>
                                    </div>
                                  </Link>
                                );
                              } else {
                                if (val.id) {
                                  return (
                                    <Link href={val.link} key={i} passHref>
                                      <a target="_blank">
                                        <div
                                          onClick={toggle}
                                          key={i}
                                          className={`flex mt-2 items-center px-4 py-2 w-full space-x-2 capitalize lg:text-base text-sm cursor-pointer hoverme  rounded-lg hover:text-white`}
                                        >
                                          <div className="text-lg ">
                                            {val.icons}
                                          </div>
                                          <div>{val.title}</div>
                                        </div>
                                      </a>
                                    </Link>
                                  );
                                } else {
                                  return (
                                    <Link href={val.link} key={i} passHref>
                                      <div
                                        key={i}
                                        className={`flex mt-2 items-center px-4 py-2 w-full space-x-2 capitalize lg:text-base text-sm cursor-pointer hoverme  rounded-lg hover:text-white`}
                                      >
                                        <div className="text-lg ">
                                          {val.icons}
                                        </div>
                                        <div>{val.title}</div>
                                      </div>
                                    </Link>
                                  );
                                }
                              }
                            })}

                            <div>
                              <div
                                onClick={() => {
                                  cookie.remove("token");
                                  router.reload();
                                  setStatus(false);
                                }}
                                className="flex my-2 items-center  px-4 py-2 w-full space-x-2 capitalize lg:text-base  text-sm cursor-pointer hoverme  rounded-lg hover:text-white"
                              >
                                <div className="text-lg ">
                                  <AiOutlineLogout />
                                </div>
                                <div>Logout</div>
                              </div>
                            </div>
                          </React.Fragment>
                        )}
                      />
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
