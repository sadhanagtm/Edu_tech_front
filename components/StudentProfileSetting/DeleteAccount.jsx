import Inputs from "../UI/Inputs/Inputs";
import Link from "next/link";
import ModelDeleteAccount from "../UI/model/ModelDeleteAccount";
import React from "react";

function DeleteAccount() {
  const [clicked, setClicked] = React.useState("deleted");
  const [show, setShow] = React.useState(false);
  const confirmPassword = [
    {
      label:
        " The page you are trying to visit requires that you re-enter your password.",
      placeholder: "password",
      useName: "old password",
      type: "text",
    },
  ];
  const showModel = () => {
    setShow(true);
  };
  let mod;
  if (show) {
    mod = (
      <ModelDeleteAccount>
        <form className="py-3">
          {confirmPassword.map((val, i) => {
            return (
              <div key={i} className=" my-4  ">
                <div className="text-gray-600 my-4 text-sm md:text-base">
                  <label>{val.label}</label>
                </div>
                <Inputs
                  type={val.type}
                  placeholder={val.placeholder}
                  usename={val.useName}
                />
              </div>
            );
          })}
          <div className="hover:underline text-sm md:text-base cursor-pointer font-openSansSix text-blue-600 capitalize">
            forgot password?
          </div>
          <div className="flex gap-3 items-center flex-row-reverse">
            <div className="btn-Add w-fit rounded-md ">
              <input
                type="submit"
                value="SUBMIT"
                className="font-openSansFive  md:px-3 py-1 cursor-pointer "
              />
            </div>
            <div
              className=" w-fit  px-4 py-3 rounded-md bg-gray-300 font-openSansFive cursor-pointer"
              onClick={() => setShow(false)}
            >
              Cancel
            </div>
          </div>
        </form>
      </ModelDeleteAccount>
    );
  }

  return (
    <div className='p-8'>
      <div className="text-gray-800 font-openSansFour text-xs md:text-base ">
        Deleting your account. If you want to permanently delete your account,
        let us know.
      </div>
      <div className="font-openSansSix capitalize pb-4"></div>
      <div className=" border-2 p-2 gap-1 rounded-lg md:py-2 md:px-3 flex  ">
        <input
          type="radio"
          checked={clicked === "deleted"}
          className="md:w-8   md:h-8  mt-1 md:mt-0"
        />
        <div className="flex flex-col md:mx-3 ">
          <div className="font-openSansSeven md:text-lg text-gray-800 text-sm">
            Delete account
          </div>
          <p className="font-openSansSix text-gray-700 text-xs md:text-base">
            This is permanent.
          </p>
          <p className="text-xs md:text-sm font-openSansFive text-gray-600 my-2">
            {
              " When you delete your account, you won't be able to retrieve the content and other information that you've shared. Your all data will be erased/deleted"
            }
          </p>
        </div>
      </div>
      <div className="border-b  border-gray-300 my-5 w-full h-1"></div>
      {/* for device sm se nichee */}
      <div className="flex gap-4 md:hidden flex-row-reverse justify-start">
        <div className="btn-Add  rounded-md" onClick={() => showModel()}>
          Continue
        </div>
        <Link href="/" passHref>
          <div className="w-fit items-center flex px-3 cursor-pointer font-openSansSix bg-gray-300 rounded-md ">
            Cancel
          </div>
        </Link>
        {mod}

        {/* for device md se upper */}
      </div>
      <div className="md:flex gap-4 hidden flex-row-reverse justify-start">
        <div className="btn-Add  rounded-md" onClick={() => showModel()}>
          Continue to account deletion
        </div>
        <Link href="/" passHref>
          <div className="w-fit items-center flex px-3 cursor-pointer font-openSansSix bg-gray-300 rounded-md ">
            Cancel
          </div>
        </Link>
        {mod}
      </div>
    </div>
  );
}

export default DeleteAccount;
