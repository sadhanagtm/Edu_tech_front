import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import { UpdateSchema } from "../components/Schema/auth.schema";
import Spinner from "../components/UI/Spinner/Spinner";
import PasswordToolbar from "../components/PageComponents/HomeSection/subcomponents/PasswordToolbar";
import Footer from "../HOC/Footer/Footer";
function UpdatePassword() {
  const router = useRouter();
  console.log(router);

  const [show, setshow] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [storeToken, setStoreToken] = useState("");
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const { token } = router.query;
      setStoreToken(token);
      console.log(token);
    }
  }, [router.isReady]);
  const handleSubmit = (values) => {
    console.log(values);
    try {
      setSpinner(true);
      // alert(token);
      const data = localStorage.getItem("userId");
      console.log(data);
      axios
        .patch(
          // userId ko id { router.query.id} data chai local storage bata lina lai ho
          `${process.env.NEXT_PUBLIC_API}/student/${data}`,
          {
            password: values.newpassword,
          },
          // token lineyy after every 10 min ma token expired huncha so yo code new new token lai generate gardai ani yeha authorize vayesi kaam garaune new password and confirm password  ma
          {
            headers: {
              Authorization: "Bearer" + " " + storeToken,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setSpinner(false);
            localStorage.removeItem("userId");
            router.push({
              pathname: "/auth/login",
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
  const errorsBad = (error) => {
    if (error !== undefined || error !== null) {
      let data = error?.split(",");

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
    <div>
      <PasswordToolbar />

      <div className="bg-gray-100  py-10 flex items-center  ">
        <div className="bg-white w-11/12 sm:w-8/12 xl:w-4/12   mx-auto rounded-lg ">
          <div className="capitalize p-5 text-gray-800 text-xl font-openSansSeven">
            Update Password
          </div>

          <div className="border-b w-full text-gray-100"></div>
          <div className="px-5 py-4 text-base  font-MonteSerratFive text-gray-700">
            Please enter field to recover your password.
          </div>
          <Formik
            initialValues={{
              newpassword: "",
              confirmpassword: "",
            }}
            validationSchema={UpdateSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div
                  className={`${
                    errors?.newpassword && touched?.newpassword
                      ? "px-5 pb-2 pt-4"
                      : errors?.confirmpassword && touched?.confirmpassword
                      ? "px-5 pb-2 pt-4"
                      : null
                  } `}
                >
                  <div
                    className={` ${
                      errors?.newpassword && touched?.newpassword
                        ? "border px-4 py-2 bg-red-50 border-red-500"
                        : errors?.confirmpassword && touched?.confirmpassword
                        ? "border px-4 py-2 bg-red-50 border-red-500"
                        : null
                    }`}
                  >
                    {" "}
                    <div className="font-openSansSix">
                      {errors.newpassword && touched.newpassword ? (
                        <div>{errorsBad(errors.newpassword)}</div>
                      ) : errors.confirmpassword && touched.confirmpassword ? (
                        <div>{errors.confirmpassword}</div>
                      ) : null}
                    </div>
                    <div className="text-xs my-1">
                      {" "}
                      {errors?.newpassword && touched?.newpassword
                        ? "Fill in at least  given field to update your password"
                        : errors?.confirmpassword && touched?.confirmpassword
                        ? "Fill in at least  given field to match your password"
                        : null}
                    </div>
                  </div>
                </div>

                <div className="px-5 ">
                  <div className=" py-1 rounded-md flex flex-col items-center">
                    <div className="w-full my-3">
                      {" "}
                      <div className="mb-2">
                        <label>New Password</label>
                      </div>
                      <div className="  border flex justify-between items-center">
                        <div className="w-full">
                          {showNewPassword ? (
                            <Field
                              type="text"
                              name="newpassword"
                              placeholder="New Password"
                              className=" h-12 px-2 outline-none  w-full"
                            />
                          ) : (
                            <Field
                              type="password"
                              name="newpassword"
                              placeholder="New Password"
                              className=" h-12 px-2 outline-none w-full"
                            />
                          )}
                        </div>
                        <div className="bg-gray-50 h-12 flex items-center px-4">
                          {showNewPassword ? (
                            <AiFillEye
                              className="text-xl hover:scale-105 hover:text-gray-400 transition-all duration-300 ease-in
                              "
                              onClick={() => {
                                setShowNewPassword(false);
                              }}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              className="text-xl hover:scale-105 hover:text-gray-400 transition-all duration-300 ease-in"
                              onClick={() => {
                                setShowNewPassword(true);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full my-3">
                      <div className="mb-2">
                        <label>Confirm Password</label>
                      </div>

                      <div className="  border flex justify-between items-center">
                        <div className="w-full">
                          {showConfirmPassword ? (
                            <Field
                              type="text"
                              name="confirmpassword"
                              placeholder="Confirm Password"
                              className=" h-12 px-2  outline-none w-full"
                            />
                          ) : (
                            <Field
                              type="password"
                              name="confirmpassword"
                              placeholder="Confirm Password"
                              className=" h-12 px-2  outline-none w-full"
                            />
                          )}
                        </div>
                        <div className="bg-gray-50 h-12 flex items-center px-4">
                          {showConfirmPassword ? (
                            <AiFillEye
                              className="text-xl hover:scale-105 hover:text-gray-400 transition-all duration-300 ease-in"
                              onClick={() => {
                                setShowConfirmPassword(false);
                              }}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              className="text-xl hover:scale-105 hover:text-gray-400 transition-all duration-300 ease-in"
                              onClick={() => {
                                setShowConfirmPassword(true);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b py-3 w-full text-gray-100"></div>
                <div className="capitalize flex flex-row-reverse  gap-4 py-4 px-4">
                  <button
                    type="submit"
                    className="bg-primary text-white flex items-center rounded-lg hover:scale-105 transition-all duration-300 delay-75 ease-in-out cursor-pointer font-openSansSix text-base h-9 px-4"
                  >
                    Submit
                  </button>
                  <Link href={"/resetPassword"}>
                    <div
                      type="button"
                      className="bg-gray-100 font-openSansSix flex rounded-lg items-center hover:scale-105 transition-all duration-300 delay-75 ease-in-out cursor-pointer text-base h-9 px-4 "
                    >
                      cancel
                    </div>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {spinner ? <Spinner /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default UpdatePassword;
