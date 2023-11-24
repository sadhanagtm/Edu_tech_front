import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdDetails, MdEmail } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";

import Collapse from "@kunukn/react-collapse";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Layout from "../../../HOC/Layout/Layout";
import MoruImage from "../../../components/resources/images/moru.png";
import Table from "../../UI/table/Table";
import { UserInfoContext } from "../../../HOC/ContextApi/UserInfo";
import axios from "../../../HOC/Axios/Axios";
import cookie from "js-cookie";
import esewa from "../../../public/esewa.svg";
import khalti from "../../../public/khalti.svg";
import packageImage from "../../../public/v2.jpg";
import { useRef } from "react";
import { useRouter } from "next/router";

// import { MoruCheckout } from "moru-web-sdk";

function Payment({ PaymentChannel }) {
  const router = useRouter();
  console.log("router", router.query);

  const [showModel, setShowModel] = useState(false);
  const [ShowConfirmation, setShowConfirmation] = useState(false);
  const [ShowMoru, setShowMoru] = useState(false);
  const [PaymentErr, setPaymentErr] = useState(false);

  const [SelectedPackage, setSelectedPackage] = useState("");
  const [SelectedPackagePrice, setSelectedPackagePrice] = useState();
  const [Features, setFeatures] = useState([]);
  const [Tbody, setTbody] = useState([]);
  const [ID, setID] = useState("");
  // moru payment logic for client rendering
  const [moruPay, setMoruPay] = useState();
  const { UserInfo } = useContext(UserInfoContext);

  const getPackageFeaturesOfPackage_id = (id) => {
    axios
      .get(`/package-features/${id}`)
      .then((res) => {
        console.log(res);
        setFeatures(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPackage = (id) => {
    console.log("id", id);

    axios
      .get(`/package/${id}`)
      .then((res) => {
        setTbody([res.data.data]);
        setSelectedPackagePrice(res.data.data.package_price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      setID(id);
      console.warn(id);
      getPackage(id);
      getPackageFeaturesOfPackage_id(id);
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
  const data = [
    {
      name: "nischal karki",
      address: "butwal",
      phone: "9845623148",
      email: "nischalkarki@gmail.com",
    },
  ];

  const Khalti = (val) => {
    setShowModel(val);
    setSelectedPackage(val);
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
  console.log(Tbody);
  // for Moru

  const submit = () => {
    console.log(SelectedPackage);
    // SelectedPackage?
    // setShowConfirmation(true):setPaymentErr(true)
    if (SelectedPackage.toLocaleLowerCase() === "moru") {
      Moru();
    }
    // else {
    //   setPaymentErr(true);
    // }
  };
  const Moru = () => {
    // moruPay.open({ amount: SelectedPackagePrice });
    router.push({
      pathname: "/packagePurchase.html",
      query: {
        amt: SelectedPackagePrice,
        ID: router.query.id,
      },
    });
  };

  // conformation
  let model;
  if (ShowConfirmation) {
    model = (
      <div
        style={{ background: "rgba(0,0,0,.5)" }}
        className="fixed font-openSansFive text-gray-800  top-0 left-0 w-screen flex justify-center items-center h-screen z-50"
      >
        <div className="bg-white rounded-md text-xl p-6 w-fit h-fit">
          <div>Are you sure you want to continue?</div>
          <div className="flex mt-3 font-openSansFour text-sm capitalize justify-end space-x-3">
            <div
              onClick={() => setShowConfirmation(false)}
              className="px-5 py-2 cursor-pointer text-white rounded-md bg-red-500"
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
        style={{ background: "rgba(0,0,0,.5)" }}
        className="fixed font-openSansFive text-gray-800  top-0 left-0 w-screen flex justify-center items-center h-screen z-50"
      >
        <div className="bg-white rounded-md text-xl p-6 w-fit h-fit">
          <div>Please select payment type before procceding.</div>
          <div className="flex mt-3 font-openSansFour text-sm capitalize justify-end space-x-3">
            <div
              onClick={() => setPaymentErr(false)}
              className="px-5 py-2 cursor-pointertext-white rounded-md bg-red-500"
            >
              close
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Layout>
      {model}
      {ShowMoru ? Moru() : null}
      <div className="bg-gray-50 ">
        <div className="md:px-8 py-8 md:py-14 lg:py-16 grid grid-cols-1 lg:gap-5 md:w-11/12 lg:w-10/12 mx-auto lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
          <div className="bg-white shadow-md px-2 md:px-8 py-4 sm:w-7/12 md:w-full lg:w-full col-span-2 mx-auto lg:mx-0">
            <div className="mb-8">
              <div className="my-4 capitalize text-lg md:text-xl font-openSansSeven">
                order detail
              </div>
              <div className="w-full">
                <Table Thead={tHead} cellspacing="0px" cellpadding="0px">
                  {Tbody?.map((val, i) => {
                    return (
                      <tr key={i} className="text-center capitalize">
                        <td align="center" className="py-2">
                          <div className="relative w-12 h-12 rounded-full ml-4">
                            {Tbody ? (
                              <Image
                                src={val?.package_img}
                                alt={val?.package_name}
                                placeholder="blur"
                                blurDataURL={val?.package_img}
                                objectFit="cover"
                                layout="fill"
                                className="rounded-full"
                              />
                            ) : (
                              <div>{val?.package_name}</div>
                            )}
                          </div>
                        </td>
                        <td>{val.package_name}</td>
                        <td>{val.RP}</td>
                        <td>{val.SP}</td>
                        <td>{val.package_price}</td>
                      </tr>
                    );
                  })}
                </Table>
              </div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-openSansSeven">
                Package benefits
              </div>
              <div className=" pb-4  text-gray-700">
                <div className={` `}>
                  <div>
                    {Features?.map((val, i) => {
                      return (
                        <div
                          key={i}
                          className="w-full flex font-openSansSix gap-2 my-3 px-3 text-xs"
                        >
                          <div>
                            {" "}
                            <div className="w-2 h-2 bg-primary rounded-full my-1"></div>
                          </div>{" "}
                          <div className="text-sm">{val.feature}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-openSansSeven">
                Choose a payment method
              </div>
              <div className={`flex items-center gap-5 flex-wrap`}>
                {PaymentChannel.length > 0 &&
                  PaymentChannel.map((val, i) => {
                    return (
                      <div key={i} className={`m-2 flex`}>
                        <input
                          id={val.PaymentChannel}
                          type={"radio"}
                          onChange={() => {
                            Khalti(val.PaymentChannel);
                          }}
                        />
                        <label
                          htmlFor={val.PaymentChannel}
                          className="relative w-28 h-20 ml-2"
                        >
                          <Image
                            src={val.PaymentChannelImg}
                            width={40}
                            alt={"khalti"}
                            height={20}
                            layout="fill"
                            placeholder="blur"
                            blurDataURL={khalti}
                            className="cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                          />
                        </label>
                      </div>
                    );
                  })}
                {/* payment channels past one */}
                {/* payment channels old ends here */}
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
          <div className="sm:w-7/12 md:w-full shadow-md h-fit pt-4 lg:w-full mx-auto mt-14 md:mt-14 lg:my-0 bg-white  px-2 md:px-6 py-4">
            <div className="capitalize mt-6 mb-4 text-base md:text-lg font-openSansSeven">
              billing address :
            </div>
            <div>
              {UserInfo.length > 0 &&
                UserInfo.map((val, i) => {
                  return (
                    <div key={i} className="">
                      <div className="flex gap-3 my-3 ">
                        <BsFillPersonFill className="text-primary w-4 h-4 md:w-5 md:h-5" />
                        <div className="capitalize font-openSansFour text-xs md:text-base lg:text-sm">
                          {val.first_name} {val.last_name}
                        </div>
                      </div>
                      {val.address && (
                        <div className="flex gap-3 my-3 ">
                          <IoLocationSharp className="text-primary w-4 h-4 md:w-5 md:h-5" />
                          <div className="capitalize font-openSansFour text-xs md:text-base lg:text-sm">
                            {val.address}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3 my-3 ">
                        <BsFillTelephoneFill className="text-primary w-4 h-4 md:w-5 md:h-5" />
                        <div className="capitalize font-openSansFour text-xs md:text-base lg:text-sm">
                          {val.phone}
                        </div>
                      </div>
                      <div className="flex gap-3 my-3 ">
                        <MdEmail className="text-primary w-4 h-4 md:w-5 md:h-5" />
                        <div className=" font-openSansFour text-xs md:text-base lg:text-sm">
                          {val.email}
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="  mt-4 mb-2 capitalize text-lg font-openSansSeven">
                summary :
              </div>
              <div className="flex text-sm md:text-base  w-full  my-2">
                <div className="w-full ">
                  <div className="flex  justify-between my-1">
                    <div className=" capitalize font-openSansFive text-gray-500">
                      Original Price
                    </div>
                    <div className=" w-24 capitalize font-openSansFive text-gray-500">
                      rs.{Tbody[0]?.package_price}
                    </div>
                  </div>

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
                          <div className="capitalize font-openSansFive text-gray-500">
                            Package offer
                          </div>
                          <div className="w-24 capitalize font-openSansFive text-gray-500">
                            rs.{Tbody[0]?.offer_price}
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                  />
                </div>
              </div>
              <div className="border-b-2 border-gray-600 w-full "> </div>
              <div className="flex text-sm md:text-base lg:text-sm capitalize font-openSansSix my-2">
                <div className="w-full">
                  <div className="flex justify-between my-1">
                    <div>Total</div>
                    {Tbody[0]?.package_price &&
                    Tbody[0]?.offer_price &&
                    showModel === "packageImage" ? (
                      <div className="w-24">
                        {" "}
                        rs.
                        {parseInt(Tbody[0]?.package_price) +
                          parseInt(Tbody[0]?.offer_price)}
                      </div>
                    ) : (
                      <div className="w-24">
                        rs.
                        {parseInt(Tbody[0]?.package_price)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-xs md:text-sm lg:text-xs">
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

export default Payment;
