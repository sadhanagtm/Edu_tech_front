import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "../HOC/Axios/Axios";
import { useRouter } from "next/router";
import Spinner from "../components/UI/Spinner/Spinner";
import PasswordToolbar from "../components/PageComponents/HomeSection/subcomponents/PasswordToolbar";
import Footer from "../HOC/Footer/Footer";
function ResetPassword() {
  const [datas, setDatas] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const data = [{}];
  const router = useRouter();
  const submit = () => {
    try {
      setSpinner(true);
      localStorage.setItem("userId", router.query.id);
      axios
        .post(`/student/forgetpassword/${router.query.id}`)

        .then((res) => {
          if (res.status === 201) {
            setSpinner(false);
            router.push({
              pathname: "/auth/login",
              query: {
                first_name: `${res.data.data.first_name}`,
                last_name: `${res.data.data.last_name}`,
                successful: "updated",
              },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <PasswordToolbar />

      <div className="bg-gray-100 h-128 w-full flex items-center text-center md:text-left  ">
        <div className="bg-white   w-11/12 md:w-fit mx-auto rounded-lg ">
          <div className="capitalize p-5 text-gray-800 text-xl font-openSansSeven">
            reset your password
          </div>
          <div className="border-b w-full text-gray-100"></div>
          {/* middle section  starts */}

          <div className=" px-5 pt-4 text-sm sm:text-base  font-MonteSerratFive md:w-8/12 text-gray-700">
            How do you want to get the code to reset your password?{" "}
          </div>
          {/* middle section left part */}
          <div className="flex flex-col md:flex-row md:justify-between mt-4 md:mt-0 items-center ">
            <div className="px-4">
              {data.map((val, i) => {
                return (
                  <div key={i} className="m-2 flex gap-2">
                    <div className="">
                      <input type="radio" className="w-4 h-4" />
                    </div>
                    <div>
                      <div className=" text-sm md:text-base font-MonteSerratFour">
                        SendCodeVia Email
                      </div>
                      <div className="text-xs md:text-sm  font-MonteSerratThree">
                        {router.query.email}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* middle section right part */}

            <div className="px-4 flex flex-col mt-4 items-center ">
              <div className="w-14 md:w-16 ">
                <Image
                  src="/profileVectorImage.jpg"
                  alt="logo"
                  width={"45%"}
                  height={"45%"}
                  sizes={"60vw"}
                  quality={50}
                  layout="responsive"
                  className="rounded-full"
                />
              </div>
              <div className=" text-sm md:text-base capitalize my-2 md:mt-2 md:my-0 font-MonteSerratFive ">
                {router.query.first_name} {router.query.last_name}
              </div>
            </div>
          </div>

          <div className="border-b py-3 w-full text-gray-100"></div>
          {/* bottom section for nolonger and continue buttons */}
          <div className="flex flex-col md:flex-row items-center lg:mt-0 mt-4 justify-between cursor-pointer px-4">
            <div className="hover:underline text-xs text-blue-500 w-fit    md:text-sm font-MonteSerratFour ">
              No longer have access to these?
            </div>

            <div className=" flex flex-row-reverse  gap-4 py-4 ">
              <div
                type="button"
                onClick={() => submit()}
                className="bg-primary text-sm md:text-base text-white flex items-center rounded-lg hover:scale-105 transition-all duration-300 delay-75 ease-in-out cursor-pointer font-openSansSix  h-9 px-2 md:px-3 lg:px-4"
              >
                Continue
              </div>

              <Link href={"/forgotPassword"}>
                <div
                  type="button"
                  className="bg-gray-100 text-sm md:text-base font-openSansSix flex rounded-lg items-center hover:scale-105 transition-all duration-300 delay-75 ease-in-out cursor-pointer h-9 px-2 md:px-3 lg:px-4"
                >
                  Not you?
                </div>
              </Link>
            </div>
          </div>
        </div>
        {spinner ? <Spinner /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
