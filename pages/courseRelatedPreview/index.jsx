import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Player, { VideoJS } from "../../components/VideoPlayer/VideoJS";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { AiFillHome } from "react-icons/ai";
import CourseInfoData from "../../components/PageComponents/CoursePreview/CourseInfoData";
import FAQ from "../../components/PageComponents/CoursePreview/FAQ";
import Layout from "../../HOC/Layout/Layout";
import Link from "next/link";
import Modal from "../../components/UI/model/Modal";
import OverView from "../../components/PageComponents/CoursePreview/OverView";
import RelatedCourses from "../../components/PageComponents/CoursePreview/RelatedCourses";
import Review from "../../components/PageComponents/CoursePreview/Review";
import Spinner from "../../components/UI/Spinner/Spinner";
import Syallabus from "../../components/PageComponents/CoursePreview/Syallabus";
import axios from "../../HOC/Axios/Axios";
import { useRouter } from "next/router";
import InstructorInfo from "../../components/PageComponents/CoursePreview/InstructorInfo";
import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreakPointTest from "../../components/test/BreakPointTest";
import cookie from "js-cookie";
// This gets called on every request
// export async function getServerSideProps(context) {
// Fetch data from external API
// const { id } = context.query;
// const res = await fetch(
//   `${process.env.NEXT_PUBLIC_API}/course/single_course_details/${id}`
// );

// const data = await res.json();

// Pass data lto the page via props
//   return { props: { data, id } };
// }

function CoursePreview() {
  const router = useRouter();
  const [SpinnerShow, setSpinner] = useState(false);
  const [Login, setLogin] = useState(false);
  const [Enroll, setEnroll] = useState(false);
  const [Active, setActive] = useState("overview");
  const [timer, setTimer] = useState(5);
  const [body, setBody] = useState([]);
  const [ID, setID] = useState("");
  // const [course] = useState();
  // console.log("data", data);
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: body?.overview_video,
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // You can handle player events here, for example:
    player.on("waiting", () => {
      // player.log("player is waiting");
    });
    player.on("ended", () => {
      // alert("khoi");
    });
  };
  const CheckAuth = () => {
    // alert("working");
    if (process.browser) {
      // console.log(typeof id, data);
      // console.warn(localStorage.getItem("sikkai"));
      if (cookie.get("token")) {
        try {
          setSpinner(true);
          axios
            .post("/enrolled", {
              course: id,
              student: "a4f743bc-6f51-4b70-ab5d-e255f76d660b",
              status: "learning",
              redirection: "/",
            })
            .then((res) => {
              if (res.status === 201) {
                toast.success("Enroll Successful");
                progrssBegin();
                router.push("/myCourses");
                setSpinner(false);
              } else {
                setSpinner(false);
              }
              console.log(res);
            })
            .catch((err) => {
              setSpinner(false);
              if (err.response.data.message === "Unauthorized") {
                setLogin(true);
              } else {
                alert(err.response.data.message);
              }
              console.log(err.response.data);
            });
        } catch (err) {
          setSpinner(false);
        }
        // setEnroll(true)
      } else {
        setLogin(true);
      }
    }
    // console.log(cookie.get("token"));
  };
  console.log(router.query.id);
  const getData = (id) => {
    console.log(id);
    axios
      .get(`/course/single_course_details/${id}`)
      .then((res) => {
        console.log(res);
        setBody(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(ID);
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      console.log(id);
      setID(id);
      getData(id);
    }
  }, [router.isReady]);

  let modal;
  if (Login) {
    modal = (
      <Modal>
        <div className="  flex flex-col gap-10 text-center justify-center  h-full w-full   ">
          <div className="bg-red-00 h-40 bg-primary  text-white   flex flex-col items-center justify-center">
            <div className=" sm:text-3xl text-wite">
              You need to login first !
            </div>
            <div className=" sm:text-xl  my-2 text-center text-hite">
              Please login to visit our Site !!!
            </div>
          </div>
          <div className="flex justify-center my-5">
            <CountdownCircleTimer
              isPlaying
              duration={3}
              colors={["#004777", "#A30000", "#A30000"]}
              colorsTime={[3, 2, 1]}
              onComplete={() => {
                router.push({ pathname: "/auth/login", query: { r: "y" } });
              }}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
          <Link
            href={{
              pathname: "/auth/login",
              query: {
                r: "y",
              },
            }}
            passHref
          >
            <div className="flex justify-end w-11/12 mt-20 ">
              <div
                className="cursor-pointer  font-openSansFive capitalize  rounded-md transition-all duration-200 hover:scale-105 hover:bg-opacity-80 text-white bg-primary w-fit px-7 py-2"
                // onClick={() => closed()}
              >
                skip
              </div>
            </div>
          </Link>
        </div>
      </Modal>
    );
  }
  // useEffect(() => {
  //   let use = () =>
  //     setInterval(() => {
  //       setLogin(false);
  //       router.push({
  //         pathname: "/auth/login",
  //         query: {
  //           r: "y",
  //         },
  //       });
  //     }, 5000);
  //   clearInterval(use());
  // }, [Login]);

  // if(Enroll){
  //   modal=<Modal>
  //     <div className=" p-4">
  //     <div className=" font-openSansFour text-base pb-4">
  //     Are you sure you want to enroll?
  //     </div>
  //     <div className="flex   space-x-2">
  //       <Link href={'/auth/login'} passHref>
  //       <div className="bg-primary  cursor-pointer
  //        py-1 px-4 text-sm text-white rounded-md">
  //          Enroll now
  //        </div>
  //       </Link>P
  //       <div onClick={()=>setEnroll(false)} className="bg-secondary cursor-pointer  py-1 px-4 text-sm text-white rounded-md">cancel</div>
  //     </div>
  //     </div>
  //   </Modal>

  // }
  // console.log(id);

  return (
    <div>
      {console.log(body)}
      <Head>
        <title className="">Sikka-i</title>
        {/* <meta name="title" content={data.data[0].course_name} /> */}
        {/* <meta name="description" content="Sikkai - Learning and Earning" /> */}
        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://sikkainepal.com/course_preview/${id}`}
        /> */}
        {/* <meta property="og:title" content={data.data[0].course_name} />
        <meta
          property="og:description"
          content="Sikkai - Learning and Earning"
        /> */}
        {/* <meta property="og:image" content={data.data[0].thumbnail_img} /> */}
        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://sikkainepal.com/courses"
        />
        <meta property="twitter:title" content={data.data[0].course_name} />
        <meta
          property="twitter:description"
          content="Sikkai - Learning and Earning"
        />
        <meta property="twitter:image" content={data.data[0].thumbnail_img} />{" "}
         */}
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-gray-50">
          {modal}
          {SpinnerShow ? <Spinner /> : null}
          <div className="lg:container mx-auto px-4 xl:px-8">
            <div className="flex items-center text-sm font-openSansSix space-x-4 text-gray-500 pt-8">
              <AiFillHome className="h-4 w-6 " />
              <span> Home</span>
              <IoIosArrowForward className="" />
              <span> Course Preview</span>
              <IoIosArrowForward className="" />
              <span>Course</span>
            </div>
            {/* grid section starts  */}
            <div className=" grid md:grid-cols-12 md:gap-4 xl:gap-10">
              <div className="md:col-span-8 lg:col-span-8 xl:col-span-8">
                {/* top title section starts  */}
                <div className="my-8">
                  <div className="text-primary break-all  sm:w-full h-fit sm:text-2xl md:text-3xl lg:text-4xl  tracking-wide font-openSansSeven capitalize fold:text-base">
                    {body?.course_name}
                  </div>
                </div>
                {/* top title section ends  */}
                <div className="">
                  <div className="">
                    <VideoJS
                      className="w-full"
                      options={videoJsOptions}
                      onReady={handlePlayerReady}
                      // poster="https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />{" "}
                  </div>
                  <div className="md:hidden">
                    <CourseInfoData
                      id={body?.id}
                      enrolled={body?.enrolled}
                      meEnrolled={Enroll}
                      price={body?.price}
                      last_updated={body?.updatedAt}
                      duration={body?.duration}
                      duration_type={body?.duration_type}
                      chapters={body?.course_section}
                      videos={body?.course_content}
                      CheckAuth={CheckAuth}
                      discount={body?.discount}
                      setSpinner={setSpinner}
                    />
                  </div>
                  {/* kam chalau responsive paxi gara kta ho width talako milaera  */}
                  <div className="my-7">
                    <div className="fold:w-64 sm:w-full  flex items-center  justify-between md:justify-start  sm:space-x-4 overflow-x-auto">
                      <div
                        onClick={() => setActive("overview")}
                        className={`OverViewButton p-4 text-sm lg:text-base ${
                          Active === "overview" ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        Overview
                      </div>
                      <div
                        onClick={() => setActive("syallabus")}
                        className={`OverViewButton p-4 text-sm lg:text-base ${
                          Active === "syallabus" ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        Syallabus
                      </div>
                      <div
                        onClick={() => setActive("FAQ")}
                        className={`OverViewButton p-4 text-sm lg:text-base ${
                          Active === "FAQ" ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        FAQ
                      </div>
                      <div
                        onClick={() => setActive("review")}
                        className={`OverViewButton p-4 text-sm lg:text-base ${
                          Active === "review" ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        Review
                      </div>
                    </div>
                    <div className="bg-white py-6">
                      {Active === "overview" ? (
                        <OverView corsesDetail={body?.course_description} />
                      ) : Active === "syallabus" ? (
                        <Syallabus id={body?.id} />
                      ) : Active === "review" ? (
                        <Review />
                      ) : Active === "FAQ" ? (
                        <FAQ id={body?.id} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              {/* <Axu> */}
              <div
                className="mt-7 pt-1 w-full 
            md:col-span-4 lg:col-span-4 xl:col-span-4 place-content-end "
              >
                {/* price and course cards */}
                <div className="hidden md:block">
                  <CourseInfoData
                    id={body?.id}
                    enrolled={body?.enrolled}
                    meEnrolled={Enroll}
                    price={body?.price}
                    last_updated={body?.updatedAt}
                    duration={body?.duration}
                    duration_type={body?.duration_type}
                    chapters={body?.course_section}
                    videos={body?.course_content}
                    CheckAuth={CheckAuth}
                    discount={body?.discount}
                    setSpinner={setSpinner}
                  />
                </div>
                <InstructorInfo course_id={body?.id} />
              </div>
              {/* </Axu> */}
            </div>
            {/* related courses section  */}
            <div className="my-12">
              {console.log(body)}
              <RelatedCourses id={body?.category?.id} />
            </div>
            <ToastContainer />
            {/* related courses section ends  */}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CoursePreview;
