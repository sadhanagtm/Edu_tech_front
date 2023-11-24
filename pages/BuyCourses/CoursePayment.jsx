import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdDetails, MdEmail } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";

import Collapse from "@kunukn/react-collapse";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Layout from "../../HOC/Layout/Layout";
// import { MoruCheckout } from "moru-web-sdk";
import MoruImage from "../../components/resources/images/moru.png";
import Table from "../../components/UI/table/Table";
import axios from "../../HOC/Axios/Axios";
import cookie from "js-cookie";
import esewa from "../../public/esewa.svg";
import khalti from "../../public/khalti.svg";
import packageImage from "../../public/v2.jpg";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";

function CoursePayment() {
  const router = useRouter();
  console.log("router", router.query);

  const [showModel, setShowModel] = useState(false);
  const [ShowConfirmation, setShowConfirmation] = useState(false);
  const [ShowMoru, setShowMoru] = useState(false);
  const [PaymentErr, setPaymentErr] = useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [SelectedPackage, setSelectedPackage] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [Features, setFeatures] = useState([]);
  const [Tbody, setTbody] = useState([]);
  const [ID, setID] = useState("");

  const getCourse = (id) => {
    console.log("id", id);
    axios
      .get(`/course/${id}`)
      .then((res) => {
        setTbody([res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserDetails = useCallback(() => {
    axios
      .get(`/student/loggedIn/details`)
      .then((res) => {
        console.log("user details", res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        toast.error(
          err.response.data.message || "Problem in fetching user details!"
        );
      });
  }, []);
  const getPaymentChannels = () => {
    axios
      .get(`/payment-channels`)
      .then((res) => {
        setPaymentData(res.data.data);
        console.log("resssssssssttt", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPaymentChannels();
    if (router.isReady) {
      const { id } = router.query;
      // localStorage.setItem("package_id", id);
      setID(id);
      console.warn(id);
      getCourse(id);
      getUserDetails();
      // getPackageFeaturesOfPackage_id(id);
    }
  }, [router.isReady]);

  const khaltiDetails = [
    {
      title:
        "Login to your Khalti account using your Khalti  ID and your Password.",
    },
    {
      title:
        "Ensure your Khalti account is active  and has sufficient balance.",
    },
    {
      title:
        "Enter OTP (one time password) sent to your registered mobile number.",
    },
  ];
  const eSewadetails = [
    {
      title:
        "Login to your eSewa account using your eSewa  ID and your Password.",
    },
    {
      title: "Ensure your eSewa account is active  and has sufficient balance.",
    },
    {
      title:
        "Enter OTP (one time password) sent to your registered mobile number.",
    },
  ];

  const packageFeature = [
    { feature: "opportunity to gain skills worth Rs.2500 at Rs2000" },
    { feature: "gateway to multipleincome opportunity of sikka-i" },
    { feature: "providing 100 pank point & 200 sikka point" },
    { feature: "1 month free access" },
  ];
  const tHead = [
    { title: "Image" },
    { title: "Name" },
    { title: "R.P" },
    { title: "S.P" },
    { title: "Price" },
  ];
  const tBody = [
    {
      image: "image1",
      name: "basic package",
      rp: "100",
      sp: "200",
      price: "2000",
    },
  ];

  const Khalti = () => {
    setShowModel("Khalti");
    setSelectedPackage("khalti");
  };

  const Esewa = () => {
    setShowModel("Esewa");
    setSelectedPackage("esewa");
  };
  const packageOffers = () => {
    setShowModel("moru");
    setSelectedPackage("moru");
  };
  // const toggle = () => {
  //   setShowModel(!showModel);
  // };

  let mod;
  if (showModel === "Khalti") {
    mod = (
      <div className="bg-gray-300 px-4 py-8 font-openSansFive text-gray-600">
        <div className="text-sm md:text-base">
          You will be redirected to your Khalti account to complete your
          payment:
        </div>
        <div className="">
          {khaltiDetails.map((val, i) => {
            return (
              <div
                key={i}
                className="my-4  text-xs md:text-sm font-openSansFive flex items-center gap-2"
              >
                <div>{i + 1}.</div>
                <div>{val.title}</div>
              </div>
            );
          })}
        </div>
        <div className="text-sm md:text-base">
          *** Login with your eSewa Mobile and Password (not MPin) ***
        </div>
      </div>
    );
  }
  if (showModel === "Esewa") {
    mod = (
      <div className="bg-gray-300 px-4 py-8 font-openSansFive text-gray-600">
        <div className="text-sm md:text-base">
          You will be redirected to your eSewa account to complete your payment:
        </div>
        <div>
          {eSewadetails.map((val, i) => {
            return (
              <div
                key={i}
                className="my-4  text-xs md:text-sm font-openSansFive flex items-center gap-2"
              >
                <div>{i + 1}.</div>
                <div>{val.title}</div>
              </div>
            );
          })}
        </div>
        <div className="text-sm md:text-base">
          *** Login with your KHalti Mobile and Password (not MPin) ***
        </div>
      </div>
    );
  }
  // // for Moru
  const options = {
    access_key:
      "live_6b97e099b774463482e03ca3e6719594f6a9c8be0dd04f77b19211d3aa1640e1",
    transaction_id: "1",
    additional_fields: {
      purchaseType: "Course",
      purchaseItemId: `${router.query.id}`,
    },
    callback_handler: {
      onSuccess: (response) => {
        console.log(response);
        router.push("/myCourses");
        axios
          .post(
            "/moru-payment/moru-payment",
            {
              moru_txn_identifier: response.moru_txn_identifier,
            },
            {
              headers: {
                Authorization: `Bearer ${cookie.get("token")}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            setShowMoru(false);
          })
          .catch((err) => {
            console.log(err);
            setShowMoru(false);
          });
        // call your api
      },
      onError: (error) => {
        console.log(error);

        alert("failure");
      },
      onClose: (error) => {
        console.log(error);
        setShowMoru(false);
      },
    },
  };
  // const checkout = new MoruCheckout(options);

  const submit = () => {
    // console.log(SelectedPackage)
    // SelectedPackage?
    // setShowConfirmation(true):setPaymentErr(true)
    if (SelectedPackage === "moru") {
      Moru();
    }
    //  else {
    //   setPaymentErr(true);
    // }
  };
  const Moru = () => {
    // alert("moru");
    console.log("clicked");
    router.push({
      pathname: "/coursePurchase.html",
      
      query: {
        amt:  Tbody[0]?.price && Tbody[0]?.discount !== "0" ? (
          
            parseInt(Tbody[0]?.price) -
              parseInt(Tbody[0]?.discount)
         
        ) : (
          
           
            parseInt(Tbody[0]?.price)
          
        )
        // amt:Tbody[0]?.price
        ,
        ID: router.query.id,
      },
    });
    // // setShowConfirmation(false)
    // try {
    //   checkout.open({ amount: Tbody[0].price });
    // } catch (err) {
    //   setShowMoru(false);
    //   alert(err);
    // }
  };

  // conformation
  let model;
  if (ShowConfirmation) {
    model = (
      <div
        style={{
          background: "rgba(0,0,0,.5)",
        }}
        className="fixed font-openSansFive text-gray-800  top-0 left-0 w-screen flex justify-center items-center h-screen z-50"
      >
        <div className="bg-white rounded-md text-xl p-6 w-fit h-fit">
          <div>Are you sure you want to continue?</div>
          <div className="flex mt-3 font-openSansFour text-sm capitalize justify-end space-x-3">
            <div
              onClick={() => setShowConfirmation(false)}
              className="px-5 py-2 cursor-pointer 
        text-white rounded-md bg-red-500"
            >
              no
            </div>
            <div
              onClick={() => {
                setShowConfirmation(false);
                setShowMoru(true);
              }}
              className="px-5 py-2 cursor-pointer text-white rounded-md bg-green-500"
            >
              yes
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (PaymentErr) {
    model = (
      <div
        style={{
          background: "rgba(0,0,0,.5)",
        }}
        className="fixed font-openSansFive text-gray-800  top-0 left-0 w-screen flex justify-center items-center h-screen z-50"
      >
        <div className="bg-white rounded-md text-xl p-6 w-fit h-fit">
          <div>Please select payment type before procceding.</div>
          <div className="flex mt-3 font-openSansFour text-sm capitalize justify-end space-x-3">
            <div
              onClick={() => setPaymentErr(false)}
              className="px-5 py-2 cursor-pointer 
        text-white rounded-md bg-red-500"
            >
              close
            </div>
          </div>
        </div>
      </div>
    );
  }
  const Pay = (val) => {
    setShowModel(val);
    setSelectedPackage(val);
  };
  return (
    <Layout>
      <ToastContainer />
      {model}
      {ShowMoru ? Moru() : null}
      <div className="bg-gray-50 ">
        <div className=" md:px-8  py-8 md:py-14 lg:py-16   grid grid-cols-1  lg:gap-5  md:w-11/12 lg:w-10/12 mx-auto lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
          <div
            className="bg-white   shadow-md px-2  sm:px-5  md:px-8
           py-4 sm:w-7/12 md:w-full  lg:w-full col-span-2 mx-auto lg:mx-0"
          >
            <div className=" mb-8">
              <div className="  my-4 capitalize text-lg md:text-xl font-openSansSeven">
                order detail
              </div>
              <div className="w-full">
                <Table Thead={tHead} cellspacing="0px" cellpadding="0px">
                  {Tbody?.map((val, i) => {
                    return (
                      <tr key={i} className="text-center capitalize">
                        <td className="h-24">
                          <div
                            className=" relative w-20 h-20 rounded-full sm:w-16 sm:h-16 md:w-16
                               ml-4 lg:ml-14 xl:ml-6 2xl:ml-7 xl:h-16 xl:w-16 xxl:h-16 xxl:w-16"
                          >
                            {Tbody ? (
                              <Image
                                src={val?.thumbnail_img}
                                alt={val?.course_name}
                                placeholder="blur"
                                blurDataURL={val?.thumbnail_img}
                                objectFit="cover"
                                layout="fill"
                                className="rounded-full"
                              />
                            ) : (
                              <div>{val?.course_name}</div>
                            )}
                          </div>
                        </td>
                        <td align="center">
                          <div className="line-clamp-2   flex items-center justify-center">
                            {val.course_name}
                          </div>
                        </td>
                        <td>{val.RP}</td>
                        <td>{val.SP}</td>
                        <td>
                        {Tbody[0]?.price && Tbody[0]?.discount !== "0" ? (
                      <div className="w-24">
                        {" "}
                        rs.
                        {parseInt(Tbody[0]?.price) -
                          parseInt(Tbody[0]?.discount)}
                      </div>
                    ) : (
                      <div className="w-24">
                        rs.
                        {parseInt(Tbody[0]?.price)}
                      </div>
                    )}
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            </div>
            <div>
              <div className=" capitalize text-lg md:text-xl font-openSansSeven">
                select payment method:
              </div>
              <div className={`flex  items-center  gap-5 mt-3 `}>
                <div
                  className={` cursor-not-allowed  w-full grid grid-cols-4 
                   `}
                >
                  {paymentData.length > 0 &&
                    paymentData.map((val, i) => {
                      return (
                        <div key={i} className="   w-full">
                          <div className="  flex w-24  lg:w-32 xl:w-32 xxl:w-32">
                            <input
                              id={val.PaymentChannel}
                              type={"radio"}
                              onChange={() => {
                                Pay(val.PaymentChannel);
                              }}
                            />

                            <label
                              htmlFor={val.PaymentChannel}
                              className="relative w-64 h-20 ml-2"
                            >
                              <Image
                                src={val.PaymentChannelImg}
                                width={100}
                                alt={"loading..."}
                                height={100}
                                objectFit="contain"
                                layout="fill"
                                placeholder="blur"
                                blurDataURL={val.PaymentChannelImg}
                                className="cursor-pointer  hover:drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                              />
                            </label>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {/* <div
                  className={` cursor-not-allowed  w-20 sm:w-28 md:w-32 ${
                    showModel === "Esewa" ? "bg-gray-300 rounded-sm " : ""
                  }  `}
                >
                  <Image
                    src={esewa}
                    width={40}
                    alt={"esewa"}
                    height={20}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={esewa}
                    className="cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div
                  className={`w-20 sm:w-28 md:w-32 ${
                    SelectedPackage === "moru"
                      ? "bg-gray-300 p-2 rounded-sm "
                      : ""
                  }  `}
                  onClick={() => packageOffers()}
                >
                  <Image
                    src={MoruImage}
                    width={25}
                    alt={"Moru"}
                    height={10}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={MoruImage}
                    className="cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div> */}
              </div>
              <Collapse
                isOpen={showModel === "Esewa" || showModel === "Khalti"}
                className={
                  "app__collapse app__collapse--gradient " +
                  (showModel
                    ? "app__collapse--active  z-50 right-3 lg:right-1 "
                    : " right-3 lg:right-1  z-50")
                }
                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                aria-hidden={showModel ? "false" : "true"}
                elementType="article"
                render={() => <React.Fragment>{mod}</React.Fragment>}
              />
            </div>
          </div>
          <div
            className=" sm:w-7/12 md:w-full shadow-md h-fit pt-4 
          lg:w-full mx-auto mt-14 md:mt-14 lg:my-0 bg-white px-2 sm:px-5
          md:px-8 py-4"
          >
            <div
              className={`${
                SelectedPackage
                  ? "bg-blue-50 text-primary rounded-md drop-shadow-sm"
                  : "bg-red-100 text-red-700 rounded-md drop-shadow-sm"
              } my-4 
              flex items-center
               justify-center  text-white text-center p-1
                text-base md:text-sm  font-openSansFive h-12 w-full`}
            >
              {SelectedPackage ? (
                <div className="capitalize font-semibold">
                  {`Proceeding checkout with ${SelectedPackage}....`}
                </div>
              ) : (
                <div className="capitalize font-semibold">
                  Please select a Payment Method to proceed.
                </div>
              )}
            </div>
            <div className="capitalize mt-6 mb-4 text-base md:text-lg font-openSansSeven">
              billing address :
            </div>
            <div>
              <div className="">
                <div className="flex gap-3 my-3 ">
                  <BsFillPersonFill className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  <div className="capitalize font-openSansFour text-xs md:text-base lg:text-sm">
                    {userDetails.first_name} {userDetails.last_name}
                  </div>
                </div>

                <div className="flex gap-3 my-3 ">
                  <IoLocationSharp className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  <div className="capitalize font-openSansFour text-xs md:text-base lg:text-sm">
                    {userDetails.address || "N/A"}
                  </div>
                </div>

                <div className="flex gap-3 my-3 ">
                  <BsFillTelephoneFill className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  <div className="capitalize font-openSansFour text-xs md:text-base lg:text-sm">
                    {userDetails.phone || "N/A"}
                  </div>
                </div>
                <div className="flex gap-3 my-3 ">
                  <MdEmail className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  <div className=" font-openSansFour text-xs md:text-base lg:text-sm">
                    {userDetails.email || "N/A"}
                  </div>
                </div>
              </div>
              <div className="  mt-4 mb-2 capitalize text-lg md:text-xl  font-openSansSix">
                order summary :
              </div>
              <div className="flex text-sm md:text-base  w-full  my-2">
                <div className="w-full ">
                  <div className="flex  justify-between my-1">
                    <div className=" capitalize font-openSansFive text-gray-500">
                      Original Price
                    </div>
                    <div className=" w-24 capitalize font-openSansFive text-gray-500">
                      rs.{Tbody[0]?.price}
                    </div>
                  </div>
                  <div className="flex  justify-between my-1">
                    <div className=" capitalize font-openSansFive text-gray-500">
                      Discount Amount
                    </div>
                    <div className=" w-24 capitalize font-openSansFive text-gray-500">
                      rs.{Number(Tbody[0]?.discount).toFixed(0)}
                    </div>
                  </div>
                  {/* {Tbody[0]?.offer_price ? (
                    <div className="flex  justify-between my-1">
                      <div className=" capitalize font-openSansFive text-gray-500">
                        
                      </div>
                      <div className=" w-24 capitalize font-openSansFive text-gray-500">
                        rs.500
                      </div>
                    </div>
                  ) : (
                    ""
                  )} */}
                  <Collapse
                    isOpen={showModel === "packageImage"}
                    // state ko value yeha change huni raicha like true or false
                    className={
                      "app__collapse app__collapse--gradient " +
                      (showModel
                        ? "app__collapse--active  z-50 right-3 lg:right-1 "
                        : " right-3 lg:right-1  z-50")
                    }
                    transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                    aria-hidden={showModel ? "false" : "true"}
                    elementType="article"
                    render={() => (
                      <React.Fragment>
                        <div className="flex justify-between my-1">
                          <div className=" capitalize font-openSansFive text-gray-500">
                            Package offer
                          </div>
                          <div
                            className=" w-24 capitalize 
                          font-openSansFive text-gray-500"
                          >
                            rs.{Tbody[0]?.offer_price}
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                  />
                </div>
              </div>
              <div className="   border-b-2 border-gray-600 w-full "> </div>
              <div className="flex text-sm md:text-base lg:text-sm capitalize font-openSansSix   my-2">
                <div className="w-full">
                  <div className="flex justify-between my-1">
                    <div>Total</div>
                    {Tbody[0]?.price && Tbody[0]?.discount !== "0" ? (
                      <div className="w-24">
                        {" "}
                        rs.
                        {parseInt(Tbody[0]?.price) -
                          parseInt(Tbody[0]?.discount)}
                      </div>
                    ) : (
                      <div className="w-24">
                        rs.
                        {parseInt(Tbody[0]?.price)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-xs md:text-sm lg:text-xs lg:tracking-tighter">
                  By completing this process you agree to these{" "}
                  <span className="text-primary font-openSansSix">
                    {" "}
                    Term and Conditions
                  </span>
                </div>
                <button
                  onClick={() => submit()}
                  className="btn-primary bg-primary my-4 w-full h-14"
                  disabled={SelectedPackage.length < 1}
                >
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CoursePayment;
