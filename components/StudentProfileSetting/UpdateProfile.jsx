import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Image from "next/image";
import Inputs from "../UI/Inputs/Inputs";
import { UserInfoContext } from "../../HOC/ContextApi/UserInfo";
import axios from "../../HOC/Axios/Axios";
import { useRouter } from "next/router";

function UpdateProfile() {
  const { UserInfo, ChangeVal } = useContext(UserInfoContext);
  const [progress, setProgress] = useState(0);
  console.log(ChangeVal);

  const Router = useRouter();
  const passwordForm = [
    {
      label: "upload image",
      useName: "update profile",
      type: "file",
    },
  ];

  return (
    <div>
      <ToastContainer />
      {progress !== 0 ? (
        <div
          className="w-screen h-screen fixed top-0 left-0 
                        z-40 flex justify-center items-center"
          style={{
            background: "rgba(0,0,0,.7)",
          }}
        >
          <div className="flex w-44 h-44 justify-center items-center">
            <CircularProgressbar
              background={false}
              styles={buildStyles({
                textColor: "#02A8D9",
                trailColor: "#d6d6d6",
                pathColor: `rgb(2, 168, 217})`,

                strokeLinecap: "butt",
                backgroundColor: "#02A8D9",
              })}
              value={progress}
              text={`${progress}%`}
            />
          </div>
        </div>
      ) : null}

      <div className="font-openSansSix capitalize p-10">
        <div className="md:text-2xl pt-2 text-lg ">update profile</div>
        {/* <div className="text-secondary text-sm">Not updated</div> */}
        <div className="text-gray-500 font-openSansFour text-xs">
          Minimum 200x200 pixels, Maximum 6000x6000 pixels
        </div>
        <Formik
          initialValues={{
            profile_img: UserInfo && UserInfo[0] && UserInfo[0].profile_img,
            img: null,
          }}
          onSubmit={(values) => {
            try {
              console.log(values);
              let formData = new FormData();
              formData.append(
                "profile_img",
                values.img === null ? values.profile_img : values.img
              );
              axios
                .post("/student/updateProfile", formData, {
                  onUploadProgress: (progressEvent) => {
                    console.log(progressEvent.loaded, progressEvent.total);
                    const progress =
                      (progressEvent.loaded / progressEvent.total) * 50;
                    console.log(progress);
                    setProgress(progress);
                  },
                })
                .then((res) => {
                  if (res.status === 201) {
                    setProgress(0);
                    toast.success("Profile Picture has been updated");
                    ChangeVal();
                    // Router.reload()
                  }
                })
                .catch((err) => {
                  setProgress(0);
                  toast.error(err.response.data.message);
                });
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({ isSubmitting, handleSubmit, values, errors, setFieldValue }) => {
            return (
              <Form className="py-3">
                {passwordForm.map((val, i) => {
                  return (
                    <div key={i} className=" my-2  ">
                      <div className="text-gray-600  text-sm md:text-base">
                        <label htmlFor="profile_img">
                          <div
                            className="border cursor-pointers  flex mb-3  items-center justify-center
                         border-gray-700  w-full"
                          >
                            <div
                              className="bg-gray-50 w-full py-2 h-64 
                          relative  m-4 flex  justify-center  "
                            >
                              {values.profile_img && values.img === null ? (
                                <Image
                                  src={UserInfo[0].profile_img}
                                  height={220}
                                  width={220}
                                  alt="user"
                                  layout="fill"
                                  objectFit="contain"
                                  objectPosition="center"
                                  placeholder="blur"
                                  blurDataURL="/vectorimage.png"
                                />
                              ) : values.img !== null ? (
                                <Image
                                  src={URL.createObjectURL(values.img)}
                                  height={220}
                                  width={220}
                                  alt="user"
                                  placeholder="blur"
                                  layout="fill"
                                  objectFit="contain"
                                  objectPosition="center"
                                  blurDataURL="/vectorimage.png"
                                />
                              ) : (
                                <Image
                                  src="/vectorimage.png"
                                  alt="user"
                                  layout="fill"
                                  objectFit="contain"
                                  objectPosition="center"
                                  placeholder="blur"
                                  blurDataURL="/vectorimage.png"
                                />
                              )}
                            </div>
                          </div>
                        </label>
                      </div>
                      <input
                        id="profile_img"
                        type={val.type}
                        placeholder={val.placeholder}
                        accept=".gif,.jpg,.jpeg,.png,"
                        className="border-2 p-1 w-full hidden outline-none mt-2"
                        // username={val?.useName} // TODO: look what does this code do .. err in build
                        onChange={(event) => {
                          let value = event.target.files[0];
                          value === undefined && values.img === null
                            ? setFieldValue(
                                "profile_img",
                                values["profile_img"]
                              )
                            : value === undefined
                            ? setFieldValue("img", values["img"])
                            : setFieldValue("img", event.target.files[0]);
                        }}
                      />
                    </div>
                  );
                })}
                <div className="btn-Add  w-fit rounded-md ">
                  <input
                    type="submit"
                    value="SAVE"
                    className="px-3  cursor-pointer   font-openSansFiv"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default UpdateProfile;
