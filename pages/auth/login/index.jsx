import "react-toastify/dist/ReactToastify.css";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { AuthSchema } from "../../../components/Schema/auth.schema";
import Collapse from "@kunukn/react-collapse";
import { DiJqueryLogo } from "react-icons/di";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/sikkai1.webp";
import Notification from "../../../components/UI/Notifications/Notification";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../HOC/Axios/Axios";
import cookie from "js-cookie";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import loginpic from "../../../public/HomeBanner/login.png";
function Index() {
  const router = useRouter();
  console.log(router);
  const [collapse, setCollapse] = useState(false);
  const [show, setShow] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const [cookied, setCookie] = useCookies(["user"]);
  const [SpinnerShow, setSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [Status, setError] = useState([]);
  const [Try, settry] = useState(false);

  console.log("user");
  const [Form, setForm] = useState([
    {
      type: "text",
      label: "Email Address",
      placeholder: "example: jhon.doe@gmail.com",
      useName: "email",
    },

    {
      type: "password",
      label: "Password",
      placeholder: "Enter Password",
      useName: "password",
    },
  ]);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthSchema),
  });
  let html;
  const submit = (data) => {
    try {
      setSpinner(true);
      axios
        .post("/auth/student/login", { ...data })
        .then((res) => {
          console.log("login res", res);
          if (res.status === 201) {
            setSpinner(false);

            if (process.browser) {
              toast.success(
                res?.data?.message ? res?.data?.message : "login successful"
              );

              console.log(res.data.access_token);
              console.log(router);
              cookie.set("token", res.data.access_token, {
                expires: 2,
              });
              localStorage.setItem("first_name", res.data.first_name);
              localStorage.setItem("last_name", res.data.last_name);
              setError([res.data]);
              // Info('sucess');
              if (router.isReady) {
                console.log(router);
                if (router.query.r === "y") {
                  router.back();
                } else {
                  router.push("/");
                }
              } else {
                router.push("/");
              }
            }
          }
        })
        .catch((err) => {
          setSpinner(false);
          toast.error(err?.response?.data?.message);
          setError(err.response ? err.response.data : "error");
          console.log(err.response);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      setCollapse(!collapse);
    }
  }, [router.isReady]);
  useEffect(() => {
    if (router.query.successful === "login") {
      setShow(true);
    }
  }, [router.query]);
  useEffect(() => {
    if (router.query.successful === "updated") {
      setResetPassword(true);
    }
  }, [router.query]);
  const Info = (type) => {
    alert(type);

    html = <Notification type={type} />;
  };
  console.log(router);

  return (
    <div
      className="h-screen w-full
     flex justify-center items-center "
    >
      {SpinnerShow ? <Spinner /> : null}
      <div
        className="h-full w-full
         mx-auto flex flex-col lg:grid 
        lg:grid-cols-7"
      >
        <div className="md:h-full w-full  lg:col-span-3 p-6 lg:pl-10 ">
          <div
            className=" flex justify-center md:block md:bg-sky-50 h-full w-full md:px-8 md:py-10 lg:py-0
    mx-auto "
          >
            <Link href={"/"} passHref>
              <div className=" cursor-pointer relativ w-48 md:w-44 py-12 md:py-10 ">
                <Image
                  alt="logo"
                  src={Logo}
                  width={"100%"}
                  height={"45%"}
                  sizes={"60vw"}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </Link>
            <div
              className="hidden md:block font-openSansSeven text-4xl  tracking-wide
            leading-normal capitalize "
            >
              Unlock your <br /> skill &{" "}
              <span className="text-secondary">Performance</span>
            </div>
            <div className="py-5  hidden lg:flex  justify-center">
              <div className=" relativ cursor-pointer  w-72 sm:w-72 lg:w-11/12 py-10 ">
                <Image
                  alt="logo"
                  src={loginpic}
                  width={"100%"}
                  height={"100%"}
                  sizes={"100vw"}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-full w-10/12  bg-white col-span-4 mx-auto 
        lg:p-10 lg:pt-16 "
        >
          <Collapse
            isOpen={collapse}
            // state ko value yeha change huni raicha like true or false
            className={
              "app__collapse app__collapse--gradient " +
              (collapse
                ? "app__collapse--active  bg-red-800    w-full "
                : "w-full")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={collapse ? "false" : "true"}
            elementType="article"
            render={() => (
              <React.Fragment>
                {/* <div> */}
                {show ? (
                  <div
                    className="   bg-NeonGreen  flex  items-start gap-2 text-gray-700 border-l-4 text-xs md:text-sm   
                    small:text-base py-2  px-2 border-r-4 w-full border-red-500 font-openSansFive
                     "
                  >
                    <DiJqueryLogo className=" w-10 h-10" />
                    <div className=" ">
                      <div className="flex justify-between  ">
                        <div className="font-openSansSeven text-base md:text-xl">
                          Notification
                        </div>
                      </div>
                      <div className="   ">{`  Please check  your email
              address to verify your account.`}</div>
                    </div>
                  </div>
                ) : resetPassword ? (
                  <div
                    className="   bg-NeonGreen  flex  items-start gap-2 text-gray-700 border-l-4 text-xs md:text-sm   
                    small:text-base py-2  px-2 border-r-4 w-full border-red-500 font-openSansFive
                     "
                  >
                    <DiJqueryLogo className=" w-10 h-10" />
                    <div className=" ">
                      <div className="flex justify-between  ">
                        <div className="font-openSansSeven text-base md:text-xl">
                          Notification
                        </div>
                      </div>
                      <div className="   ">{` You will receive an email  to reset your
               password.`}</div>
                    </div>
                  </div>
                ) : null}
                {/* </div> */}
              </React.Fragment>
            )}
          />
          <div className=" text-center md:text-left py-1 lg:py-4">
            <div
              className="font-MonteSerratSix 
            text-black py-1 
            lg:py-2 text-xl lg:text-4xl"
            >
              Welcome Back !
            </div>
            <div
              className="text-gray 
            font-MonteSerratFour text-sm lg:text-base "
            >
              {`              Sign In To Sikkai & Explore Endless Possibilities Of E-learning
`}{" "}
            </div>
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className=" 

          "
          >
            <div>
              {Form.map((val, i) => {
                console.log(val.useName, errors);
                return (
                  <div
                    key={i}
                    className="flex flex-col 
                    font-openSansFour text-gray pt-5
                     lg:pt-6"
                  >
                    <label
                      htmlFor={val.useName}
                      className={`${
                        errors[val.useName] ? "text-red-400" : null
                      }`}
                    >
                      {val.label}
                    </label>
                    <div className="  border  mt-2 border-primary rounded-md  flex justify-between items-center">
                      <div className="w-full">
                        {" "}
                        {!showPassword ? (
                          <input
                            id={val.useName}
                            name={val.useName}
                            {...register(val.useName)}
                            type={val.type}
                            placeholder={val.placeholder}
                            className={`
                    
                    text-sm h-10 lg:text-base px-2 rounded-md  w-full 
                   
                    focus:bg-blue-50
                    `}
                          />
                        ) : (
                          <input
                            id={val.useName}
                            name={val.useName}
                            {...register(val.useName)}
                            type="text"
                            placeholder={val.placeholder}
                            className={`
                  
                  text-sm h-10 lg:text-base rounded-md  w-full px-2
                  ${
                    errors[val.useName]
                      ? "ring-2 border-0 ring-red-400"
                      : "ring-0"
                  }
                  focus:bg-blue-50
                  `}
                          />
                        )}
                      </div>
                      {val.useName === "password" ? (
                        <div
                          className="bg-gray-50 borderRadiusRight h-10 flex items-center px-4"
                          // onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <AiFillEye
                              className="text-xl hover:scale-105 hover:text-gray-400 transition-all duration-300 ease-in"
                              onClick={() => {
                                setShowPassword(false);
                              }}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              className="text-xl hover:scale-105 hover:text-gray-400 transition-all duration-300 ease-in"
                              onClick={() => {
                                setShowPassword(true);
                              }}
                            />
                          )}
                        </div>
                      ) : null}
                    </div>
                    <div
                      className={` ${
                        errors[val.useName]?.message
                          ? "bg-red-100  mt-2 text-red-400 text-sm  px-2 py-1 rounded-sm"
                          : null
                      }  `}
                    >
                      {" "}
                      {errors[val.useName]?.message}
                    </div>
                  </div>
                );
              })}
              <Link href={"/forgotPassword"} passHref>
                <div
                  className="w-full flex  justify-end 
              font-openSansSix   cursor-pointer py-3 text-gray capitalize"
                >
                  <div className="w-fit hovertext"> forgot password?</div>
                </div>
              </Link>
              <div
                className="
               w-10/12 md:w-6/12 lg:w-8/12 
           
 mx-auto"
              >
                <input
                  type="submit"
                  value={"Login"}
                  className="bg-primary 
                text-white 
              text-base lg:text-xl w-full p-2 
              mt-2 lg:mt-4 
              cursor-pointer  
              font-openSansSix  rounded-xl 
              text-center mx-auto            hover:shadow-sm
              hover:shadow-gray-300 transition hover:opacity-75 
              shadow-xl   duration-300 ease-in-out delay-75"
                />
              </div>
              <div
                className="text-center text-gray pt-3  pb-8
                 lg:pt-3 text-xs lg:text-sm
              font-openSansFour flex justify-center "
              >
                {"Don't have an account?"}
                <div className=" ml-2 transition-all duration-150 ease-in-out cursor-pointer text-red-400 hover:scale-105 ">
                  <Link href={"/auth/signup"}>Sign Up</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {console.log(Status)}
      <ToastContainer />
    </div>
  );
}

export default Index;
