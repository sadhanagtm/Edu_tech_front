import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";

import Image from "next/image";
import Inputs from "../../UI/Inputs/Inputs";
import Rating from "react-rating";
import image1 from "../../../public/kisan.jpg";
import image2 from "../../../public/nischaaal.jpg";
import image3 from "../../../public/homeImg 1.png";
import axios from "../../../HOC/Axios/Axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AvtarPlaceholder from "../../resources/images/avtarPlaceholder.png";
import { MdErrorOutline } from "react-icons/md";

function Review({cid}) {
  const [showMore, setShowMore] = useState(false);
  const [click, setClick] = useState(false);
  const [like, setLike] = useState("");
  const [id, setId] = useState(0);
  const [ids, setIds] = useState(0);
  const [rating, setRating] = useState();
  const [reviewMsg, setReviewMsg] = useState("");
  const Router = useRouter();
  const [loading, setLoading] = useState();
  const [errMsg, setErrorMsg] = useState("");

  const data = [
    {
      type: "select",
      usename: "rating",
      options: [
        { category: "rating" },
        { category: "5 star" },
        { category: "4 star" },
        { category: "3 star" },
        { category: "2 star" },
        { category: "1 star" },
        { category: "no star" },
      ],
    },
  ];
  const [review, setReview] = useState([]);
  const info = [
    {
      id: 1,
      image: image1,
      name: "kisan mahat",
      rating: "3",
      weeks: "3",
      desc: 'I am starting to get excited with this Course :D.. PLC Programming is Really Awesome! At first I was puzzled by all of this Tia Portal Interface. But After ending up a few lessons, I am starting to understand each of it.. Just be patient and always use "Ctrl+F1" on a instruction incase of struggle, this will be handy on your path of learning. Mr. Paul is a great instructor and well detail by sharing his experience. He will teach you the practical way of use in Programming. Now, I am very eager to learn all of those lessons and make experiment of each section of TIA Portal.. And Try my programs in the Simulator like Factory I/O or NX Mechatronics or any Virtual Commissioning Software :D',
    },
    {
      id: 2,
      image: image2,
      name: "nischal karki chhetri",
      rating: 2.5,
      weeks: "3",
      desc: "I amending to get excited with this Course :D.. PLC Programming is Really Awesome!  :D",
    },
    {
      id: 3,
      image: image3,
      name: "ashish khanal",
      rating: 5,
      weeks: "3",
      desc: 'I am lool to get excited with this Course :D.. PLC Programming is Really Awesome! At first I was puzzled by all of this Tia Portal Interface. But After ending up a few lessons, I am starting to understand each of it.. Just be patient and always use "Ctrl+F1" on a instruction incase of struggle, this will be handy on your path of learning. Mr. Paul is a great instructor and well detail by sharing his experience. He will teach you the practical way of use in Programming. Now, I am very eager to learn all of those lessons and make experiment of each section of TIA Portal.. And Try my programs in the Simulator like Factory I/O or NX Mechatronics or any Virtual Commissioning Software :D',
    },
  ];

  const showmore = (id) => {
    setId(id);
    setShowMore(false);
  };
  const showless = (id) => {
    setId(id);
    setShowMore(true);
  };
  const showLike = (id) => {
    setLike("BiLike");
    setIds(id);
  };
  const showBiDislike = (id) => {
    setLike("BiDislike");
    setIds(id);
  };

  const getReviews = async () => {
    try {
      await axios.get(`course-review/${cid}`).then((res) => {
        setReview(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createReview = async () => {
    try {
      setLoading(true);
      await axios
        .post(`course-review`, {
          stars: Number(rating),
          review_msg: reviewMsg,
          course:cid,
        })
        .then((res) => {
          setLoading(false);
          setReviewMsg("");
          setRating("");
          getReviews();
        }).catch(error=>{
          setLoading(false);
      setErrorMsg(error.response.data.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
        });
    } catch (error) {
      
    }
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <div className="h-148 scroll w-full  md:px-5  md:mx-auto">
        <div className=" ">
          <div className=" capitalize text-xl  py-3 font-openSansSeven">
            reviews
          </div>
          <div className=" flex items-center justify-between mb-4  capitalize">
            <div className="col-span-1 text-gray-600 font-openSansFive text-sm">
              {review && review.length} comments
            </div>

            <div className=" col-span-1 col-start-3">
              <select
                name=""
                id=""
                className="border pr-36 py-2 px-2 cursor-pointer outline-none"
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="" className="py-2">
                  Rating
                </option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Stars</option>
              </select>
            </div>
          </div>

          <div className=" ">
            <div className="w-full">
             {rating && <input
                placeholder="Add a comment ..."
                className={` px-2 ${
                  click
                    ? "border-b-2 border-black ease-in transition-all duration-75"
                    : null
                } outline-none border-b border-gray-400 p-3  w-full `}
                onClick={() => setClick(true)}
                onChange={(e) => setReviewMsg(e.target.value)}
              />}
            </div>

            {click && rating ? (
              <div className="flex  gap-2  mt-2  items-center flex-row-reverse">
                <div
                  className="bg-gray-200 flex cursor-pointer w-28 justify-center items-center h-10 uppercase text-gray-500 font-openSansFive "
                  onClick={() => createReview()}
                >
                  {loading === true ? <p>Loading...</p> : <p>Comment</p>}
                </div>
                <div
                  className="w-28 flex justify-center cursor-pointer items-center h-10 font-openSansFive text-gray-600  uppercase "
                  onClick={() => setClick(false)}
                >
                  cancel
                </div>
                {errMsg ? (
                  <div className="border border-red-400 text-red-600 p-2 rounded-md my-5 w-fit ">
                    <div className="flex items-center space-x-2 justify-right">
                      <MdErrorOutline />
                      <p>{errMsg}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className=" w-full  lg:w-10/12   px-1 lg:px-4  ">
          {review.map((val, i) => {
            console.log(val)
            return (
              <div key={i} className=" flex flex-col my-10 ">
                <div className="flex gap-2 lg:gap-5">
                  <div className="md:bg-gray-300 rounded-md h-fit">
                    <div className="w-10 md:w-14 ">
                      <Image
                        src={
                          val?.student?.profile_img
                            ? val?.student?.profile_img
                            : AvtarPlaceholder
                        }
                        alt="Loading Images"
                        height={30}
                        width={30}
                        layout="responsive"
                        blurDataURL={val?.student?.profile_img}
                        className=" rounded-full md:rounded-md "
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="font-openSansSix capitalize text-sm">
                      {val?.student?.first_name + " " + val?.student?.last_name}
                    </div>
                    <div className="flex gap-3 items-center ">
                      <div className="text-lg">
                        <Rating
                          emptySymbol={
                            <AiOutlineStar className="text-lg text-yellow-400" />
                          }
                          fullSymbol={
                            <AiFillStar className="text-lg text-yellow-400" />
                          }
                          fractions={2}
                          readonly
                          initialRating={parseInt(val?.stars)}
                          className="mt-1"
                        />
                      </div>
                      <div className="text-gray-400 text-xs">
                        {new Date(val?.createdAt).toDateString()}
                        {/* weeks ago */}
                      </div>
                    </div>
                    <div
                      className={` ${
                        showMore && id === val && val.id
                          ? ""
                          : " line-clamp-3  lg:line-clamp-4"
                      } text-xs md:text-sm text-justify  font-openSansFour`}
                    >
                      {val && val.review_msg}
                    </div>
                    {showMore && id === val && val.id ? (
                      <div
                        className="cursor-pointer flex text-sm items-center text-purple-900 font-openSansSeven gap-1 pt-2"
                        onClick={() => showmore(val && val.id)}
                      >
                        <div>Show less</div>
                        <div>
                          <IoIosArrowUp />
                        </div>
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer  flex text-sm items-center text-purple-900 font-openSansSeven gap-1 pt-2"
                        onClick={() => showless(val && val.id)}
                      >
                        <div>Show more</div>
                        <div>
                          <IoIosArrowDown />
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="text-xs  my-2">
                        {ids === val?.id && like === "BiLike" ? (
                          <div> Thank you for your feedback</div>
                        ) : ids === val?.id && like === "BiDislike" ? (
                          <div>Was this review helpful?</div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex gap-3  items-center mt-2">
                        <div>
                          <BiLike
                            className={`cursor-pointer
                          h-10 w-10 border  ${
                            ids === val?.id && like === "BiLike"
                              ? " bg-gray-900  text-white"
                              : null
                          } border-black p-2  rounded-full`}
                            onClick={() => {
                              showLike(val?.id);
                              // setLike("BiLike");
                            }}
                          />
                        </div>
                        <div>
                          <BiDislike
                            className={`cursor-pointer
                       h-10 w-10 border  ${
                         ids === val?.id && like === "BiDislike"
                           ? " bg-gray-900 text-white"
                           : null
                       } border-black p-2 rounded-full`}
                            onClick={() => {
                              // setLike("BiDislike");
                              showBiDislike(val?.id);
                            }}
                          />
                        </div>
                        <div className="text-xs cursor-pointer underline">
                          Report
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b  py-2 border-gray-300  h-1 "></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
