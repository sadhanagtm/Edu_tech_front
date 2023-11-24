import React, { useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import axios from "../../../HOC/Axios/Axios";

function InstructorInfo({ course_id }) {
  const [data, setData] = useState([]);
// alert({course_id})

  // useEffect(() => {
  //   try {
  //     const fetch = async () => {
  //       await axios
  //         .get(
  //           `${process.env.NEXT_PUBLIC_API}/instructor/byCourse/${course_id}`
  //         )
  //         .then((res) => {
  //           console.log(res.data.data);
  //            setData(res.data.data);
  //         });
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   fetch(" ");
  // }, [course_id]);
  
  const getData=()=>{
   try {
    axios.get(`/instructor/byCourse/${course_id}`).then((res)=>{
      
      console.log("instructorRes",res)
      setData(res.data.data);
    }).catch((err)=>{
      console.log(err)
    })
   } catch (error) {

    console.log("byCourseErr",error)
   }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {/* teacher */}
      <div className="bg-white shadow-md rounded-md md:mt-10 p-4 lg:px-8 lg:py-4">
        <p className="text-primary font-bold text-lg">Course Instructor</p>
        <hr className="my-2" />
        <div className="flex space-x-3 items-start my-4">
          <div
            style={{
              content: "",
              backgroundSize: "cover",
              // background: "lightgray",
            }}
            className=" w-14 h-14 relative rounded-full bg-white"
          >
            {data.profile_img ? (
              <Image
                alt={data?.first_name}
                src={data?.profile_img}
                objectPosition="top"
                layout="responsive"
                objectFit="cover"
height={40}
width={40}
                className="rounded-full"
              />
            ) : (
              <div className="uppercase h-full OpenSans font-semibold w-full flex justify-center items-center bg-gray-300 rounded-full">
                <CgProfile className="text-4xl" />
              </div>
            )}
          </div>
          <div className="text-gray-800">
            <p className="text-xl capitalize font-semibold">
              {data?.first_name} 
              &nbsp;
              {data?.last_name}
            </p>
            <div className="text-sm underline cursor-pointer transition hovertext">
              <Link href={`/Instructor/${data?.id}`}>Visit profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorInfo;
