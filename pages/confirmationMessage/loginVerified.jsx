import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
function ConfirmMessageLoginVerified() {
  //   const [Login, setLogin] = useState("");
  const [Redirect, setRedirect] = useState("");

  const router = useRouter();
  useEffect(() => {
    console.log(Redirect);
    // setInterval(() => {
    if (Redirect === "student") {
      router.push({
        pathname: "/auth/login",
        query: {
          user: "student",
        },
      });
    } else if (Redirect === "instructor") {
      router.push({
        pathname: "https://instructor.sikkainepal.com/auth/login",
        query: {
          user: Redirect,
        },
      });
    }
    // }, 4000);
  }, [Redirect]);

  useEffect(() => {
    if (router.isReady) {
      const { user } = router.query;
      setRedirect(user);
    }
  }, [router.isReady]);
  return (
    <div className="flex  justify-center h-screen bg-gray-50 items-center">
      <div className=" w-full sm:w-8/12 lg:w-4/12 ">
        <Image
          src="/check-mark-verified.gif"
          alt="check-mark-verified.gif"
          height={100}
          width={100}
          quality={100}
          // placeholder="blur"
          layout="responsive"
          // blurDataURL="/check-mark-verified.gif"
        />
        <div className=" text-center font-openSansSix text-green-700 text-xl sm:text-2xl mt-4 lg:mt-8">
          Your email has been verified. Please proceed to login.
        </div>
      </div>
    </div>
  );
}

export default ConfirmMessageLoginVerified;
