import Image from "next/image";
import Link from "next/link";
import React from "react";

function InstructorProfileCard({ image, name, id,lastname }) {
  return (
    <div className="flex space-x-4 items-center my-5">
      <div className="w-14 h-14 rounded-full bg-white relative overflow-hidden shadow-md">
        {
          image?
          <Image
            alt=""
            placeholder="blur"
            blurDataURL={image}
            height={"100%"}
            width={"100%"}
            src={image}
            objectPosition="center"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
          :<div className="h-full w-full bg-gray-300 flex justify-center items-center uppercase ">
            {name[0]}{lastname[0]}
          </div>
        }
      </div>

      <div className="">
        <p className="text-lg font-bold text-gray-800 capitalize">{name}</p>
        <Link href={`Instructor/${id}`}>
          <a className="text-primary text-base font-semibold mt-1 transition hover:opacity-40">
            Visit Profile
          </a>
        </Link>
      </div>
    </div>
  );
}

export default InstructorProfileCard;
