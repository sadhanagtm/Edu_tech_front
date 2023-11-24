import React from "react";
import Logo from "../../../../public/sikkai1.webp";
import Image from "next/image";
import Link from "next/link";

function PasswordToolbar() {
  return (
    <div>
      <div className=" p-3  block">
        <div className="w-24 cursor-pointer">
          <Link href={"/auth/login"} passHref>
            <Image
              alt="logo"
              src={Logo}
              width={100}
              height={50}
              sizes={"80vw"}
              quality={75}
              layout="responsive"
              objectFit="contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordToolbar;
