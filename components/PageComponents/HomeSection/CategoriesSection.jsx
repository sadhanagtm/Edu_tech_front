import React, { useEffect } from "react";

import CategoriesCard from "./subcomponents/CategoriesCard";
import { FaCode } from "react-icons/fa";
import axios from "../../../HOC/Axios/Axios";
import { data } from "autoprefixer";

function CategoriesSection() {
  const [data, setData] = React.useState([]);
  console.log("data", data);

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios.get(`/category/withNum`).then((res) => {
          console.log(res);
          setData(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="bg-gray-100 pt-16 pb-20 w-full">
      {/* // <div> */}
      <div className="text-center">
        <div className="font-bold text-gray-700 text-4xl">Our Category</div>
        <p className="my-4 mx-3 text-xs md:text-base  lg:w-2/3 md:mx-auto ">
          Providing with multiple category of courses to learn keen interest
          skills
        </p>
      </div>
      <div
        className="mt-16 mx-auto   grid sm:grid-cols-2
       md:grid-cols-2 lg:grid-cols-3 lg:w-10/12 lg:gap-10 gap-4 sm:gap-8 w-11/12"
      >
        {data.map((item, i) => {
          let image = `${process.env.NEXT_PUBLIC_FILE}/images/${item.category_img}`;
          console.log(item);
          return (
            <CategoriesCard
              key={i}
              id={item.id}
              icon={item.category_img}
              category={item.category_name}
              courses={item.course}
            />
          );
        })}
      </div>
      {/* v2 */}
      {/* <div
        className="mt-16 mx-auto   grid sm:grid-cols-2
       md:grid-cols-2 lg:grid-cols-3 lg:w-10/12 lg:gap-10 gap-4 sm:gap-8 w-11/12"
      >
        {
          data.map((val,i)=>{
            return <div key={i} className='relative h-36 lg:h-44 w-full  
             text-sm border-2 transform-all duration-500
              delay-75 hover:scale-105 cursor-pointer hover:shadow-lg 
            border-gray-200   shadow-sm rounded-md  flex items-center
             justify-center '>
              <div 
              style={{
                backgroundImage:`url(${val.category_img})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'100%',
                backgroundPosition:"center",
                filter:`blur(1.8px)`,
                opacity:.8
                
                
              }} 
              className="h-44  w-full rounded-md  ">
              </div> 
                <div   className={`text-lg absolute top-0  space-x-3
                w-full h-full flex ${val?.category_name?.length>7?'flex-col':'flex-row'} justify-center font-bold
                 items-center categoryFilter z-50 capitalize`}>
                  <div>{val.category_name}
                  </div>
                  <div>({val.course} <span className="text-sm">course</span>)</div>
                </div>

            </div>
          })
        }
      </div> */}
    </div>
  );
}

export default CategoriesSection;
