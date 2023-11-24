import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/sikkai1.webp";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../HOC/Axios/Axios";
import { signUpSchema } from "../../../components/Schema/auth.schema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, Toast, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    if (router.isReady) {
      const { referral_code } = router.query;
      if (Code !== "" || Code !== undefined) {
        console.log(referral_code);
        setCode(referral_code);
      }
    }
  }, [router.isReady]);
  const [Code, setCode] = useState("");
  const [SpinnerShow, setSpinner] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);
  const [showData, setShowData] = useState(false);
  const [errr, setErrr] = useState();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const [Form, setForm] = useState([
    {
      type: "text",
      // label: "Email Address",
      placeholder: "example: jhon.doe@gmail.com",
      sub: [
        {
          type: "text",
          label: "first name",
          placeholder: "example: Mahesh",
          useName: "first_name",
        },
        {
          type: "text",
          label: "middle name",
          placeholder: "example: bahadur",
          useName: "middle_name",
        },

        {
          type: "text",
          label: "last name",
          placeholder: "example: Gaire",
          useName: "last_name",
        },
      ],
    },
    {
      type: "text",
      label: " address",
      placeholder: "example: butwal",
      useName: "address",
    },
    {
      type: "text",
      label: "Email Address",
      placeholder: "example: jhon.doe@gmail.com",
      useName: "email",
    },
    {
      type: "text",
      label: "Phone No",
      placeholder: "example: 9867023033",
      useName: "phone",
    },
    {
      type: "password",
      label: "Password",
      placeholder: "example: 22jks2j@33 ",
      useName: "password",
    },
    {
      type: "password",
      label: "confirm Password",
      placeholder: "example: 22jks2j@33",
      useName: "confirm",
    },
    {
      type: "text",
      label: "referral code",
      placeholder: "optional",
      useName: "referrer",
    },
  ]);
  const submit = (data) => {
    console.log(router.query.referral_code);
    if (data?.password === data?.confirm) {
      console.log("Codeeeeeee", Code);
      if (Code !== "" && Code !== undefined) {
        console.log("Codeeeeeee", Code);
        console.log("data", data);

        router.query.referral_code = Code;
        data.referrer = Code;
        console.log(data);
        console.log("Codeeeeeee", Code);
      }
      try {
        setSpinner(true);
        axios
          .post("student/register", { ...data })
          .then((res) => {
            if (res.status === 201) {
              setSpinner(false);
              toast.success(res?.data?.message);
              router.push({
                pathname: `/auth/login`,
                query: {
                  successful: "login",
                },
              });
            }
          })
          .catch((err) => {
            setSpinner(false);
            console.log(err.response);
            toast.error(err?.response?.data?.message);

            setErrr(err.response ? err.response.data.message : "error");
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrr("password and confirm message doesnot matches");
    }
  };

  const errorsBad = (error) => {
    if (error !== undefined || error !== null) {
      let data = error?.split(",");
      console.log(error);
      console.log(data);
      return (
        <div>
          {data?.map((val, i) => {
            console.warn(val);
            return (
              <div key={i} className="flex space-x-4  items-center">
                <div className="h-1 w-1 rounded-full bg-gray-400 "></div>
                <div>{val}</div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="h-screen w-full mb-10  ">
      {SpinnerShow ? <Spinner /> : null}
      {<ToastContainer />}
      <div
        className="h-fit shadow-xl w-12/12 mx-auto flex flex-col lg:grid 
        lg:grid-cols-7"
      >
        <div className="h-full w-full  lg:col-span-3 p-6 lg:pl-10 ">
          <div
            className=" py-0 md:bg-sky-50 flex justify-center md:block h-full w-full
             md:px-8 md:py-10 lg:py-0
    mx-auto "
          >
            <Link href={"/"} passHref>
              <div className=" relative cursor-pointer w-48 py-8 md:w-32 md:py-10 ">
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
              className=" hidden md:block font-openSansSeven text-4xl  tracking-wide
            leading-normal capitalize "
            >
              Unlock your <br /> skill &{" "}
              <span className="text-secondary">Performance</span>
            </div>
          </div>
        </div>
        <div className="h-full w-11/12  bg-white col-span-4 mx-auto lg:p-10 lg:pt-16 ">
          <div className="py-1 text-center md:text-left lg:py-4">
            <div
              className="font-MonteSerratSix 
            text-black py-1 lg:py-2 text-2xl lg:text-3xl"
            >
              Signup
            </div>
            <div className="text-gray font-MonteSerratFour text-sm capitalize ">
              create an account and become the member of Sikka-I
            </div>
          </div>
          {/* form starts here */}
          <form
            onSubmit={handleSubmit(submit)}
            className=" md:mt-0 mt-8 pb-8 md:pb-0
          "
          >
            <div>
              {Form.map((val, i) => {
                if (val.sub) {
                  return (
                    <div key={i} className=" grid md:grid-cols-3 gap-4 w-full">
                      {val.sub.map((val, i) => {
                        console.log(val, errors[val.useName]);
                        return (
                          <div
                            key={i}
                            className="flex flex-col 
                          font-openSansFour text-gray pt-2
                           lg:pt-6"
                          >
                            <label className="capitalize">{val.label}</label>
                            <input
                              id={val.useName}
                              name={val.useName}
                              {...register(val.useName)}
                              type={val.type}
                              placeholder={val.placeholder}
                              className={`border border-primary
                          
                          rounded-md text-sm p-2 lg:text-base mt-2 
                          ${
                            errors[val.useName]
                              ? "ring-2 border-0 ring-red-400"
                              : "ring-0"
                          }
                          focus:bg-blue-50
                          `}
                            />
                            <div
                              className={` ${
                                errors[val.useName]?.message
                                  ? "bg-red-100  mt-2 text-red-400 text-sm  px-2 py-1 rounded-sm"
                                  : null
                              }  `}
                            >
                              {errors[val.useName]?.message}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      className="flex flex-col 
                          font-openSansFour text-gray pt-2 
                           lg:pt-6"
                    >
                      <label className="capitalize">{val.label}</label>
                      <div
                        className={`border border-primary
                  flex
                  rounded-md text-sm  lg:text-base mt-2
                  ${
                    errors[val.useName]
                      ? "ring-2 border-0 ring-red-400"
                      : "ring-0"
                  }
                  focus:bg-blue-50
                  `}
                      >
                        {console.log(Code)}
                        <input
                          id={val.useName}
                          name={val.useName}
                          {...register(val.useName)}
                          defaultValue={val.useName === "referrer" ? Code : ""}
                          placeholder={val.placeholder}
                          className={`outline-none  rounded-md p-2 h-full w-full`}
                          type={
                            (val.useName === "password" && ShowPassword) ||
                            (val.useName === "confirm" && showData)
                              ? "text"
                              : val.type
                          }
                        />
                        {val.useName === "password" ? (
                          val.useName === "password" && ShowPassword ? (
                            <div
                              onClick={() => {
                                {
                                  setShowPassword(false);
                                }
                              }}
                              className="px-2 flex items-center capitalize text-xs cursor-pointer"
                            >
                              <AiFillEye className="h-5 w-5 sm:h-6 sm:w-6 " />
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                {
                                  setShowPassword(true);
                                }
                              }}
                              className="px-2 capitalize flex items-center  text-xs cursor-pointer"
                            >
                              {/* show data */}
                              <AiFillEyeInvisible className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                          )
                        ) : null}
                        {val.useName === "confirm" ? (
                          val.useName === "confirm" && showData ? (
                            <div
                              onClick={() => setShowData(false)}
                              className="px-2 flex items-center capitalize text-xs cursor-pointer"
                            >
                              <AiFillEye className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                          ) : (
                            <div
                              onClick={() => setShowData(true)}
                              className="px-2 capitalize flex items-center  text-xs cursor-pointer"
                            >
                              <AiFillEyeInvisible className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                          )
                        ) : null}
                      </div>
                      <div
                        className={` ${
                          errors[val.useName]?.message
                            ? "bg-red-100 w- mt-2 text-red-400 text-sm  px-2 py-1 rounded-sm"
                            : null
                        }  `}
                      >
                        {" "}
                        {val.useName !== "password"
                          ? errors[val.useName]?.message
                          : null}
                        {val.useName === "password"
                          ? errorsBad(errors[val.useName]?.message)
                          : null}
                      </div>
                    </div>
                  );
                }
              })}
              <div
                className={` 
          
          ${
            errr
              ? "bg-red-100  mt-2 text-red-400 text-sm  px-2 py-1 rounded-sm"
              : null
          }
        `}
              >
                {errr}
              </div>
              <div className="w-full  py-3 text-gray capitalize"></div>
              <div className=" w-10/12 md:w-6/12 lg:w-8/12 mx-auto">
                <input
                  type="submit"
                  value={"Create Account"}
                  className="bg-primary 
                text-white 
              text-base lg:text-xl w-full p-2 
              mt-2 lg:mt-4 
              cursor-pointer  
              font-openSansSix  rounded-xl 
              text-center mx-auto
           hover:shadow-sm
                  hover:shadow-gray-300 transition hover:opacity-75 
                  shadow-xl 
              "
                />
              </div>
              <div
                className="text-center text-gray pt-3  
                lg:pt-3 text-xs lg:text-sm
              font-openSansFour flex justify-center "
              >
                {"Already have an account?"}
                <div className=" ml-2 transition-all ease-in-out duration-150 cursor-pointer text-red-400 hover:scale-105">
                  <Link href={"/auth/login"}>Sign In</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
