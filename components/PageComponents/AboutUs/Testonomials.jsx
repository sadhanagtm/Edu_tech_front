import React, { useState } from "react";

import Mahesh from "../../resources/images/mahesh.jpg";
import TestonomialCard from "./Cards/TestonomialCard";

function Testonomials() {
  const [Data, setData] = useState([
    {
      name: "Kisan Mahat",
      title: "fontend developer",
      image: Mahesh,
      comment: `What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
    },
    {
      name: "Mahesh Gaire",
      title: "fontend developer",
      image: Mahesh,
      comment: `What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
    },
    {
      name: "Nischal Karki",
      title: "fontend developer",
      image: Mahesh,
      comment: `What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
    },
  ]);
  return (
    <div className="bg-gray-50 py-8 pb-12">
      <div className="text-center space-y-2">
        <div
          className="font-light mb-1 font-openSansSeven
             text-4xl "
        >
          Testimonials
        </div>
        <div className="w-10/12 text-sm text-gray-300  lg:w-11/12 mx-auto">
          {`Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's 
             `}
        </div>
      </div>
      {/* testonomials card */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 w-11/12 gap-6 lg:gap-0 mx-auto pt-10 ">
        {Data.map((val, i) => {
          if (i < 2) {
            return (
              <TestonomialCard
                key={i}
                name={val.name}
                title={val.title}
                image={val.image}
                comment={val.comment}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Testonomials;
