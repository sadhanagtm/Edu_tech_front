import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function ConfirmMessageNotLoginVerified() {
  const router = useRouter();
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    if (redirect === "student") {
      router.push({
        pathname: "/auth/signup",
        query: { user: "student" },
      });
    } else if (redirect === "instructor") {
      router.push({
        pathname: "https://instructor.sikkainepal.com/auth/signup",
        query: { user: "instructor" },
      });
    }
  }, [redirect]);

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
          src="/custom_rubber_stamp_12869_expired.gif"
          alt="/custom_rubber_stamp_12869_expired.gif"
          height={100}
          width={100}
          quality={100}
          // placeholder="blur"
          layout="responsive"
          // blurDataURL="/custom_rubber_stamp_12869_expired.gif"
        />
        <div className=" text-center font-openSansSix text-red-500 text-xl sm:text-2xl mt-4 lg:mt-8">
          Your link has been expired. please signup again..
        </div>
      </div>
    </div>
  );
}

export default ConfirmMessageNotLoginVerified;
