import { FaFacebookF, FaQuoteLeft, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";

import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Layout from "../../HOC/Layout/Layout";
import ashish from "../../components/resources/images/ashish.jpg";
import icons from "../../components/resources/images/japan.jpg";
import mahesh from "../../components/resources/images/mahesh.jpg";
import nischal from "../../components/resources/images/nischaaal.jpg";
import Testonomials from "../../components/PageComponents/AboutUs/Testonomials";
import Logo from "../../public/sikkai1.webp";
import Link from "next/link";
import SikkaiNumbrs from "../../components/PageComponents/AboutUs/Cards/SikkaiNumbrs";
import MIssionVision from "../../components/PageComponents/AboutUs/MIssionVision";

function Index() {
  const data = [
    {
      name: "ashish khanal",
      title: "backend developer",
      comment: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. It was 
             popularised in the 1960s with the release of Letraset sheets 
             containing Lorem Ipsum passages, and more recently with desktop 
             publishing software like Aldus PageMaker including versions of 
             Lorem Ipsum`,
      image: ashish,
    },
    {
      name: "Mahesh gaire",
      title: "project manager",
      comment: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. It was 
             popularised in the 1960s with the release of Letraset sheets 
             containing Lorem Ipsum passages, and more recently with desktop 
             publishing software like Aldus PageMaker including versions of 
             Lorem Ipsum`,
      image: mahesh,
    },
    {
      name: "nischal karki",
      title: "frontend developer",
      comment: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. It was 
             popularised in the 1960s with the release of Letraset sheets 
             containing Lorem Ipsum passages, and more recently with desktop 
             publishing software like Aldus PageMaker including versions of 
             Lorem Ipsum`,
      image: nischal,
    },
    {
      name: "ashish kheral",
      title: "backend developer",
      comment: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. It was 
             popularised in the 1960s with the release of Letraset sheets 
             containing Lorem Ipsum passages, and more recently with desktop 
             publishing software like Aldus PageMaker including versions of 
             Lorem Ipsum`,
      image: icons,
    },
  ];
  const [HoverShow, setHoverShow] = useState("");
  return (
    <div>
      <Layout>
        <div className="bg-gray-100 flex flex-col justify-center items-center h-128 md:h-96">
          <div className="w-3/4">
            <h1 className="font-medium md:w-3/4 ml-2 flex space-x-3">
              {/* <FaQuoteLeft className="text-4xl mr-3 " /> */}
              <span>
                <span className="text-orange-400 font-bold">Educating</span> all
                understudies to accomplish today and tomorrow in a{" "}
                <span className="text-primary font-bold">
                  worldwide network
                </span>{" "}
                and economy
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-3/4">
            <div className="absolute -mt-16 bg-white px-5 w-36 h-28 rounded-md shadow-xl border-2 border-gray-100 hover:animate-bounce cursor-pointer">
              <Image
                src={Logo}
                alt="sikkai nepal"
                placeholder="blur"
                width={100}
                height={100}
                layout="responsive"
                quality={75}
                priority={true}
                sizes={"40vw"}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        {/* welcome to sikkai section starts  */}
        <div className="flex flex-col justify-center items-center mt-36 mb-24">
          <div className="grid md:grid-cols-5 gap-8 w-3/4">
            <div className="col-span-3">
              <h1 className="lg:-mt-2">
                <span className="text-gray-600 font-medium">Welcome to</span>{" "}
                <span className="text-primary"> Sikkai Nepal</span>
              </h1>
              {/* img for mobile screens  */}
              <div className="block md:hidden col-span-2">
                <img
                  src="https://preview.colorlib.com/theme/medino/assets/images/xwelcome.png.pagespeed.ic.pHmzXBmlhL.webp"
                  alt=""
                  srcSet=""
                  className="rounded-tr-3xl rounded-bl-3xl  transition transform hover:scale-105 hover:shadow-xl"
                />
              </div>
              <p className="text-justify md:text-left mt-4">
                The word SIKKA-I is derived from two Nepali words Sikka and
                sikaai. Here Sikka means money and sikaai means learning. We
                always wanted to serve people in learning and also with a great
                earning opportunity. To meet both learning and earning
                opportunities we came up with this unique and first time in
                Nepal project i.e. SIKKA-I.
                <br />
                <br />
                <p>
                  This project is focused on special skill-based non-academic
                  education for free learners. As this project is an online
                  learning and earning platform it will be launched all over
                  Nepal. It will be a great platform for people who seek
                  wonderful opportunities to learn and earn freely and pursue a
                  safe career inside the country. This will generate huge
                  learning and career development opportunities for youths.{" "}
                </p>
              </p>
              <button className="btn-primary mt-8 rounded-full">
                <Link href="/contact">Contact now ! </Link>
              </button>
            </div>
            <div className="hidden md:block col-span-2">
              <img
                src="https://preview.colorlib.com/theme/medino/assets/images/xwelcome.png.pagespeed.ic.pHmzXBmlhL.webp"
                alt=""
                srcSet=""
                className="rounded-tr-3xl rounded-bl-3xl  transition transform hover:scale-105 hover:shadow-xl"
              />
            </div>
          </div>
          {/* who we are section ends  */}
          {/* <div>sikkai nepal and its mission and vission</div> */}
        </div>
        {/* welcome to sikkai section ends  */}
        {/* sikkai in numbers section  */}
        <div className="flex flex-col justify-center items-center">
          <SikkaiNumbrs />
        </div>
        {/* sikai in number senction ends  */}

        <MIssionVision />

        {/* our team section starts  */}
        <div className="my-24">
          <div className="text-center space-y-2">
            <div className="text-white text-sm sm:text-xs lg:text-sm bg-gray-300 w-fit p-2 px-4 rounded-full mx-auto">
              Our Team
            </div>
            <div className="font-light mb-2 font-openSansSeven text-4xl">
              Meet Our Team
            </div>
            <div className="w-10/12 text-sm text-gray-300  lg:w-1/2 mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              facere saepe laborum voluptates, veritatis cumque eaque
              temporibus, accusamus reiciendis
            </div>
          </div>
          <div
            className=" pt-12 lg:py-12 grid 
                        grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                        gap-6 w-10/12 mx-auto"
          >
            {data?.map((val, i) => {
              return (
                <div
                  key={i}
                  onMouseOver={() => setHoverShow(i)}
                  onMouseLeave={() => setHoverShow("")}
                  className="flex cursor-pointer relative 
                                     flex-col justify-center items-center pb-4 transform duration-700 delay-75 hover:scale-105
                                     hover:shadow-xl
                                     "
                >
                  <div className="h-56 rounded-md lg:h-60 relative w-full">
                    <Image
                      src={val.image}
                      layout={"fill"}
                      objectFit="cover"
                      className="rounded-md"
                      objectPosition={"top"}
                      alt="name"
                    />
                  </div>
                  <div className="text-lg capitalize py-2 font-bold">
                    <div>{val.name}</div>
                    <div
                      className="text-gray-300 text-sm
                                         lg:text-base 
                                font-normal"
                    >
                      {val.title}
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <div className="h-8 w-8 text-base lg:h-8 lg:w-8 lg:text-lg  flex justify-center items-center rounded-full bg-gray-100">
                      <FaFacebookF />
                    </div>
                    <div className="h-8 w-8 text-base lg:h-8 lg:w-8 lg:text-lg  flex justify-center items-center rounded-full bg-gray-100">
                      <FaTwitter />
                    </div>
                    <div className="h-8 w-8 text-base lg:h-8 lg:w-8 lg:text-lg  flex justify-center items-center rounded-full bg-gray-100">
                      <AiFillInstagram />
                    </div>
                  </div>
                  {HoverShow === i ? (
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.5)",
                      }}
                      className="absolute text-xs px-2 
                                        transform-all duration-700 delay-100 
                                        text-justify text-white top-0 flex 
                                        justify-center items-center w-full h-56 lg:h-60 "
                    >
                      {val.comment}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* our team section ends  */}
        <div>
          <Testonomials />
        </div>
      </Layout>
    </div>
  );
}

export default Index;
