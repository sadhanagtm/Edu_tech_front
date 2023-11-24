import * as yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import FormValue from "./FormData.json";
import Image from "next/image";
import ImageTest from "../../public/profileVectorImage.jpg";

const schema = yup.object().shape({
  full_name: yup.string().required("* FullName is required *"),
  Gender: yup.string().required("* Gender is required *"),
  father_or_husband_name: yup
    .string()
    .required("* Guardain name is required *"),
  grand_father_or_father_in_law: yup
    .string()
    .required("* GrandFather name  is required *"),
  marital_status: yup.string().required("* Marital status is required *"),
  current_country: yup.string().required("* Current country is required *"),
  current_address: yup.string().required("* Current address is required *"),
  permanent_country: yup.string().required("* Permanent country is required *"),
  permanent_address: yup.string().required("* Permanent address is required *"),
  citizenship_no: yup.string().required("* Citizenship no is required *"),
  issue_date: yup.string().required("* Issue date is required *"),
  issued_country: yup.string().required("* Issue country is required *"),
  issue_district: yup.string().required("* Issue district is required *"),
  doc_img_first: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value;
    })
    .test("fileSize", "The file is too large", (value, context) => {
      return value && value.size <= 10000000;
    })
    .test(
      "type",
      "Invalid file extension, use only jpg, jpeg and png file extension",
      function (value) {
        return (
          (value && value && value.type === "image/jpeg") ||
          (value && value && value.type === "image/jpg") ||
          (value && value && value.type === "image/png")
        );
      }
    ),
  doc_img_second: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value;
    })
    .test("fileSize", "The file is too large", (value, context) => {
      return value && value.size <= 10000000;
    })
    .test(
      "type",
      "Invalid file extension, use only jpg, jpeg and png file extension",
      function (value) {
        return (
          (value && value && value.type === "image/jpeg") ||
          (value && value && value.type === "image/jpg") ||
          (value && value && value.type === "image/png")
        );
      }
    ),
});
function KYCVerificationForm({ SubmitKYC, Countries, KYCDATA,btnName,Status,setStatus,IsVERIFIED }) {
  // doc form values names and type
  const DocForm = [
    {
      title: "CitizenShip Front",
      type: "file",
      apiKey: "doc_img_first",
      apiKeyFake: "doc_img_first_dummy",
    },
    {
      title: "CitizenShip Back",
      type: "file",
      apiKey: "doc_img_second",
      apiKeyFake: "doc_img_first_dummy",
    },
  ];

  // initial values
  const initialStates = {
    full_name: KYCDATA && KYCDATA[0] ? KYCDATA[0].full_name : "",
    Gender: KYCDATA ? KYCDATA[0]?.Gender : "",
    father_or_husband_name: KYCDATA ? KYCDATA[0]?.father_or_husband_name : "",
    guardian_type: KYCDATA ? KYCDATA[0]?.guardian_type : "",
    grand_father_or_father_in_law: KYCDATA
      ? KYCDATA[0]?.grand_father_or_father_in_law
      : "",
    citizenship_no: KYCDATA ? KYCDATA[0]?.citizenship_no : "",
    marital_status: KYCDATA ? KYCDATA[0]?.marital_status : "",
    issue_date: KYCDATA ? KYCDATA[0]?.issue_date : "",
    issue_district: KYCDATA ? KYCDATA[0]?.issue_district : "",
    issued_country: KYCDATA ? KYCDATA[0]?.issued_country : "",
    current_country: KYCDATA ? KYCDATA[0]?.current_country : "",
    current_address: KYCDATA ? KYCDATA[0]?.current_address : "",
    permanent_country: KYCDATA ? KYCDATA[0]?.permanent_country : "",
    permanent_address: KYCDATA ? KYCDATA[0]?.permanent_address : "",
    doc_img_first: null,
    doc_img_first_dummy: null,
    doc_img_second: null,
    doc_img_second_dummy: null,
  };

  console.log(KYCDATA && KYCDATA[0]);

  return (
    <div className="p-8 lg:p-10  ">
      <Formik
        initialValues={{
          full_name: KYCDATA && KYCDATA[0] ? KYCDATA[0].full_name : "",
          Gender: KYCDATA ? KYCDATA[0]?.Gender : "",
          father_or_husband_name: KYCDATA
            ? KYCDATA[0]?.father_or_husband_name
            : "",
          guardian_type: KYCDATA ? KYCDATA[0]?.guardian_type : "",
          grand_father_or_father_in_law: KYCDATA
            ? KYCDATA[0]?.grand_father_or_father_in_law
            : "",
          citizenship_no: KYCDATA ? KYCDATA[0]?.citizenship_no : "",
          marital_status: KYCDATA ? KYCDATA[0]?.marital_status : "",
          issue_date: KYCDATA ? KYCDATA[0]?.issue_date : "",
          issue_district: KYCDATA ? KYCDATA[0]?.issue_district : "",
          issued_country: KYCDATA ? KYCDATA[0]?.issued_country : "",
          current_country: KYCDATA ? KYCDATA[0]?.current_country : "",
          current_address: KYCDATA ? KYCDATA[0]?.current_address : "",
          permanent_country: KYCDATA ? KYCDATA[0]?.permanent_country : "",
          permanent_address: KYCDATA ? KYCDATA[0]?.permanent_address : "",
          doc_img_first: null,
          doc_img_first_dummy: null,
          doc_img_second: null,
          doc_img_second_dummy: null,
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          SubmitKYC(values);
          setSubmitting(false);
        }}
        validationSchema={schema}
      >
        {({ isSubmitting, handleSubmit, values, errors, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit} className="relative">
              {console.log(values)}
              {FormValue?.map((items, i) => {
                return (
                  <div key={i}>
                    <div className="text-xl Poppins underline font-medium pt-6 pb-4">
                      {items.title}
                    </div>
                    <div className="flex flex-col lg:grid grid-cols-2  gap-5 lg:gap-6">
                      {items.info?.map((items, i) => {
                        if (items.type === "select") {
                          return (
                            <div key={i}>
                              <label htmlFor={items.apiKey}>
                                {items.title}
                              </label>
                              <Field
                                name={items.apiKey}
                                as={items.type}
                                placeholder={items.placeholder}
                                className="border-2 p-1 w-full outline-none mt-2"
                              >
                                <option value={""}>Select {items.title}</option>
                                {!items.options
                                  ? Countries?.map((val, i) => {
                                      return (
                                        <option key={i} value={val.name}>
                                          {val.name}
                                        </option>
                                      );
                                    })
                                  : items.options?.map((val, i) => {
                                      return (
                                        <option key={i} value={val.id}>
                                          {val.name}
                                        </option>
                                      );
                                    })}
                              </Field>
                              <ErrorMessage
                                name={items.apiKey}
                                component={"div"}
                                className="text-red-500 pt-2"
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div key={i}>
                              <label htmlFor={items.apiKey}>
                                {items.title}
                              </label>
                              <Field
                                name={items.apiKey}
                                type={items.type}
                                placeholder={items.placeholder}
                                className="border-2 p-1 w-full outline-none mt-2"
                              />
                              <ErrorMessage
                                name={items.apiKey}
                                component={"div"}
                                className="text-red-500 pt-2"
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              })}

              {console.log(values)}
              <div className="flex flex-col lg:grid grid-cols-2 pt-8 gap-5 lg:gap-6">
                {/* form document front and back part with preview */}
                {DocForm?.map((val, i) => {
                  return (
                    <div key={i}>
                      <label htmlFor={val.apiKey}>{val.title}</label>
                      <label htmlFor={val.apiKey}>
                        <div className={`h-64  w-full mt-2 relative`}>
                          <Image
                            src={
                              values[val.apiKey] === null
                                ? ImageTest
                                : URL.createObjectURL(values[val.apiKey])
                            }
                            alt={val.title}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </div>
                      </label>
                      <input
                        id={val.apiKey}
                        name={val.apiKey}
                        type="file"
                        accept=".gif,.jpg,.jpeg,.png,"
                        className="border-2 p-1 w-full outline-none mt-2"
                        onChange={(event) => {
                          let name = val.apiKey;
                          console.log("event.target", values[name]);
                          console.log(event.target.files[0]);
                          let value = event.target.files[0];
                          value === undefined
                            ? setFieldValue(name, values[name])
                            : setFieldValue(name, event.target.files[0]);
                        }}
                      />
                      <ErrorMessage
                        name={val.apiKey}
                        component={"div"}
                        className="text-red-500 pt-2"
                      />
                    </div>
                  );
                })}
              </div>
              {/* Form Buttons */}
              {console.log(isSubmitting)}
              <div
                className="absoute bottom-0 pt-5 space-x-4
							text-lg w-full flex justify-start"
              >
                {
                  IsVERIFIED!=='verified'?
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 rounded-md shadow-md text-white py-2 px-8"
                >
                  {btnName?btnName:'Submit'}
                </button>:null
                }
                {
                  Status===false?<div 
                  onClick={setStatus}
                  className='bg-primary cursor-pointer rounded-md shadow-md text-white py-2 px-6'>
                    Next
                  </div>:null
                }
              </div>

            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default KYCVerificationForm;
