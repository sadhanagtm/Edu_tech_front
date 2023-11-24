import React from "react";

function WhySikka() {
  return (
    <div className="my-24 lg:my-44 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-5  gap-4 md:gap-10">
        <div className="col-span-3 py-10">
          <h1 className="text-3xl font-bold text-gray-700">
            Why sikkai-i is perfect for you ?
          </h1>
          <p className="text-gray-700 text-justify my-8">
            sikka-i is a platform that provides every individual with the
            opportunity of learning the desired skills , earning good income ,
            and owning the dream life. we work to uplift the life of youths by
            providing them multiple learning , earning and owning opportunities.
            sikka-i stands out to be best because :
          </p>
          <ul className="list-disc my-4">
            <li className="ml-8 my-2 list-item">we provide skillful courses</li>
            <li className="ml-8 my-2 list-item">
              Sed molestie diam mauris mauris sit. Sed condimentum sagittis quam
              adipiscing fusce mauris, nisi mi.
            </li>
            <li className="ml-8 my-2 list-item">
              Sed molestie diam mauris mauris sit.
            </li>
          </ul>
        </div>
        <div className="col-span-2  h-32 lg:h-full w-full">
          <div className="bg-gray-200 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default WhySikka;
