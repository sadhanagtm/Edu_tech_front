import Image from "next/image";
import React from "react";
import PropTypes from "props-type";
function TestonomialCard({ name, title, comment, image }) {
  return (
    <div className="bg-primary h-full ml-10  rounded-md shadow-lg">
      <div
        className=" bg-white relative  rounded-md"
        style={{
          borderTopLeftRadius: "55%",
        }}
      >
        <div className="flex ml-14 py-4  pt-9 capitalize items-center">
          <div className="h-24 w-24 border border-gray-200 shadow-md relative rounded-full">
            <Image
              alt={name}
              src={image}
              objectFit="cover"
              objectPosition="top"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col mx-4">
            <div className="font-openSansSeven">{name}</div>
            <div className="font-openSansFive ">{title}</div>
          </div>
        </div>
        <div
          className="w-10/12 scroll h-72 text-base
          mx-auto text-justify"
        >
          {" "}
          {`" `}
          {comment} {`"`}
        </div>
      </div>
    </div>
  );
}
TestonomialCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
  image: PropTypes.object,
};

TestonomialCard.defaultProps = {
  name: "error occured",
  title: "error occured",
  comment: "error occured",
  image: "error occured",
};

export default TestonomialCard;
