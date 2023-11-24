import React, { useState } from "react";
import Image from "next/image";
import Images from "../../components/resources/images/japan.jpg";
function ModifiedCourseCard(props) {
  console.log(props);
  let icon = [];
  for (icon = 0; icon > 5; icon++) {
    data = icon.props.icon;
  }
  const [changeReviewColor, setChangeReviewColor] = useState(false);
  const tags = () => {
    setChangeReviewColor(true);
  };
  return (
    <div className=" mt-10">
      <div className="  justify-end flex  relative z-20 text-sm text-white ">
        <div
          className={`   w-fit flex items-center px-5 capitalize font-semibold h-7 ${
            props.tags === "best review"
              ? "bg-secondary"
              : props.tags === "popular review"
              ? "bg-primary"
              : props.tags === "best seller"
              ? "bg-green-500"
              : props.tags === "most viewed"
              ? "bg-orange-600"
              : null
          }`}
          style={{
            borderRadius: "25px 0px 0px 2px ",
          }}
        >
          {props.tags}
        </div>
      </div>
      <div className="border shadow-md  capitalize -mt-14 z-10">
        <div className=" ">
          <Image
            placeholder="blur"
            src={props?.image}
            alt="images"
            layout="responsive"
            width={270}
            height={200}
          />
        </div>
        <div className="    flex items-center  ">
          {/* <div className="text-yellow-400  ">{props.icon}</div> */}
          <div className="h-20 w-20 font-semibold rounded-full shadow-md -mt-9 lg:-mt-11 mx-5 overflow-hidden border-2 border-white">
            <Image
              placeholder="blur"
              src={props?.image2}
              alt="images"
              width={100}
              height={100}
              layout="responsive"
              className=""
            />
          </div>
          <div className="text-gray-700 text-base  font-semibold">
            {props.name}
          </div>
        </div>
        <div className="   bg-white -mt-7 pt-10 md:pt-12 md:pb-4 pb-2  ">
          <div className="w-9/12 md:w-10/12 mx-auto space-y-3">
            <div className="text-gray-600  text-xs font-semibold ">
              {props.courseTitle}
            </div>
            <div className="font-bold text-xs md:text-base">{props.course}</div>

            <div
              className={`${
                props.discountPrice
                  ? "flex  items-center flex-row-reverse justify-end "
                  : " flex  items-center"
              }   `}
            >
              <div className="text-primary font-bold text-sm md:text-md md:text-lg ">
                {props.price}
              </div>
              <div
                className={`text-gray-400 
                font-bold text-xs md:text-base line-through mr-3 md:mr-2 lg:mr-3 `}
              >
                {props.discountPrice}
              </div>
            </div>
            <div className="border bg-gray-400"></div>
            <div className="grid md:grid-cols-8  md:items-center space-y-2 md:space-y-0  flex-col md:flex-row ">
              <div className="flex    col-span-2 col-start-1  ">
                <div className="text-yellow-400  ">{props.icon}</div>
                <div className="text-yellow-400  ">{props.icon}</div>
                <div className="text-yellow-400  ">{props.icon}</div>
                <div className="text-yellow-400  ">{props.icon}</div>
                <div className="text-yellow-400  ">{props.icon}</div>

                <div className="text-gray-500 text-xs col-span-1 mx-1 font-semibold">
                  {props.totalPointsRated}
                </div>
              </div>
              <div className="flex items-center col-span-5 col-start-5 gap-1  md:place-content-end ">
                <div className="text-secondary ">{props.icon2}</div>
                <div className=" text-gray-600 text-xs font-semibold">
                  {props.total}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifiedCourseCard;
