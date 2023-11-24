import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "../HOC/Axios/Axios";
import Spinner from "../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";
import PasswordToolbar from "../components/PageComponents/HomeSection/subcomponents/PasswordToolbar";
import Footer from "../HOC/Footer/Footer";

function ForgotPassword() {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [Error, setError] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    try {
      setSpinner(true);
      axios
        .get(`/student/findbyemail/${data.email}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setSpinner(false);
            // router.push({
            //   pathname: "/resetPassword",
            //   query: {
            //     email: `${res.data.data.email}`,
            //     first_name: `${res.data.data.first_name}`,
            //     last_name: `${res.data.data.last_name}`,
            //     id: `${res.data.data.id}`,
            //   },
            // });
            router.push({
              pathname: "/resetPassword",
              query: {
                email: `${res.data.email}`,
                first_name: `${res.data.first_name}`,
                last_name: `${res.data.last_name}`,
                id: `${res.data.id}`,
              },
            });
          }
        })
        .catch((err) => {
          setSpinner(false);
          if (err.response) {
            setError(err.response.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(errors, Error);
  }, [errors]);
  return (
    <div>
      <PasswordToolbar />
      <div className="bg-gray-100 h-128 flex items-center  ">
        <div className="bg-white w-11/12 sm:w-8/12 lg:w-4/12  mx-auto rounded-lg ">
          <div className="capitalize p-5 text-gray-800 text-xl font-openSansSeven">
            find your account
          </div>
          <div className="border-b w-full text-gray-100"></div>
          <div className={`${errors?.email ? "px-5 pb-2 pt-4" : null} `}>
            <div
              className={` ${
                errors?.email
                  ? "border px-4 py-2 bg-red-50 border-red-500"
                  : null
              }`}
            >
              {" "}
              <div className="font-openSansSix">{errors?.email?.message}</div>
              <div className="text-xs my-1">
                {" "}
                {errors?.email &&
                  "Fill in at least one field to search for your account"}
              </div>
            </div>
          </div>
          {Error && (errors?.email === null || errors?.email === undefined) ? (
            <div className={`${Error ? "px-5 pb-2 pt-4" : null} `}>
              <div
                className={` ${
                  Error ? "border px-4 py-2 bg-red-50 border-red-500" : null
                }`}
              >
                {Error}
              </div>
            </div>
          ) : null}
          <div className="px-5 py-4 text-base  font-MonteSerratFive text-gray-700">
            Please enter your email to search for your account.{" "}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-5 ">
              <div className="border rounded-md flex items-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please fill in at least one field",
                    },
                  })}
                  className="px-2  h-12 outline-none  w-full"
                />
              </div>
            </div>
            <div className="border-b py-3 w-full text-gray-100"></div>
            <div className="capitalize flex flex-row-reverse  gap-4 py-4 px-4">
              <input
                type="submit"
                value="Submit"
                className="bg-primary outline-none text-white flex items-center rounded-lg hover:scale-105 transition-all duration-300 delay-75 ease-in-out cursor-pointer font-openSansSix text-base h-9 px-4"
              />
              <Link href={"/auth/login"}>
                <div
                  type="button"
                  className="bg-gray-100 font-openSansSix flex rounded-lg items-center hover:scale-105 transition-all duration-300 delay-75 ease-in-out cursor-pointer text-base h-9 px-4 "
                >
                  cancel
                </div>
              </Link>
            </div>
          </form>
        </div>
        {spinner ? <Spinner /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
