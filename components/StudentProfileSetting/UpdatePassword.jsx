import React from "react";
import { UpdatePasswordSchema } from "../Schema/StudentProfileSchema";
import Inputs from "../UI/Inputs/Inputs";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

function UpdatePassword() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdatePasswordSchema),
  });
  const submit = (data) => {
    console.log(data);
  };
  const passwordForm = [
    {
      label: "old password",
      placeholder: "password",
      useName: "old password",
      type: "text",
    },
    {
      label: "new password",
      placeholder: "password",
      useName: "new password",
      type: "text",
    },
    {
      label: "confirm password",
      placeholder: "password",
      useName: "confirm password",
      type: "text",
    },
  ];
  return (
    <div>
      <div className="font-openSansSix px-6 capitalize py-4">
        <div className="md:text-2xl py-2 text-lg">update password</div>
        <div className="text-secondary text-sm">Not updated</div>
        <form className="py-3">
          {passwordForm.map((val, i) => {
            return (
              <div key={i} className=" my-4  ">
                <div className="text-gray-600 my-1">
                  <label>{val.label}</label>
                </div>
                <Inputs
                  type={val.type}
                  placeholder={val.placeholder}
                  usename={val.useName}
                  register={register}
                  errors={errors[val.useName]}
                />
                <span className="text-red-500">
                  {errors[val.useName]?.message}
                </span>
              </div>
            );
          })}
          <div className="btn-Add  w-fit rounded-md px-4 py-2">
            <input
              type="submit"
              value="SUBMIT"
              className="font-openSansFour  cursor-pointer "
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
