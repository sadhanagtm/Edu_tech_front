import React from "react";
import { useEffect } from "react";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";

function CourseFilter({ title, data, clickSearch, checkActive }) {
  const [drop, setDrop] = React.useState(false);
  const [clicked, setClicked] = React.useState(6);
  const [showMore, setShowMore] = React.useState(false);
  const [remaining, setRemaining] = React.useState(0);
  // console.log(data);
  useEffect(() => {
    if (title === "Category") {
      setDrop(true);
    }
  }, [title]);
  useEffect(() => {
    remainingMore();
  }, [clicked, data]);
  const remainingMore = () => {
    let datas = data.length - 1;
    setRemaining(datas - clicked);
  };
  console.log(checkActive);
  return (
    <div className="bg-gray-100 py-1 ">
      <div
        className="p-2 flex items-center space-x-2 cursor-pointer"
        onClick={() => setDrop(!drop)}
      >
        <HiChevronRight
          className={`rotate-0 transition duration-500 text-xl ${
            drop && "rotate-90"
          }`}
        />
        <p className="font-medium text-gray-700 text-lg">{title}</p>
      </div>
      <div className="bg-gray-50">
        {data.map((item, i) => {
          // <Link href="/" key={i} passHref>
          // console.log(item);
          if (i <= clicked) {
            return (
              <div
                className={`${
                  drop
                    ? `visible block opacity-100 pl-4 text-base ${
                        checkActive === item.id ? "bg-primary text-white" : null
                      } lg:pl-8 py-2 transition-all duration-500 bg-gray-50`
                    : "invisible absolute opacity-0 transition-all duration-200 pl-6 py-2 bg-gray-50"
                } capitalize  hover:text-white hoverme cursor-pointer`}
                key={i}
                onClick={() => clickSearch(item.id)}
              >
                {item.filter_title}
              </div>
            );
          }

          // </Link>
        })}
        {remaining === 0 ? (
          clicked === 6 ? (
            <div
              onClick={() => setClicked(clicked + remaining)}
              className={`${
                drop
                  ? "visible block opacity-100 pl-4 text-base lg:pl-8 py-2 text-primary  transition-all duration-500 bg-gray-50"
                  : "invisible absolute opacity-0 transition-all duration-200 pl-6 py-2 bg-gray-50"
              } capitalize  hover:text-white hoverme cursor-pointer`}
            >
              View More (+{remaining})
            </div>
          ) : (
            <div
              onClick={() => setClicked(4)}
              className={`${
                drop
                  ? "visible block opacity-100 pl-4 text-base text-primary lg:pl-8 py-2  transition-all duration-500 bg-gray-50"
                  : "invisible absolute opacity-0 transition-all duration-200 pl-6 py-2 bg-gray-50"
              } capitalize  hover:text-white hoverme cursor-pointer`}
            >
              View less
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default CourseFilter;
