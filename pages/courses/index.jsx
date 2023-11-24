import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { BiFilter } from "react-icons/bi";
import BreakPointTest from "../../components/test/BreakPointTest";
import CategoryFilter from "../../components/PageComponents/Courses/CategoryFilter";
import CourseCard from "../../components/courseCard/CourseCard";
import EnrollmentFilter from "../../components/PageComponents/Courses/EnrollmentFilter";
import { FiSearch } from "react-icons/fi";
import Head from "next/head";
import { IoClose } from "react-icons/io5";
import Layout from "../../HOC/Layout/Layout";
import Pagination from "../../components/pagination/Pagination";
import PriceFilter from "../../components/PageComponents/Courses/PriceFilter";
import QuickSearch from "../../components/PageComponents/Courses/QuickSearch";
import RatingFilter from "../../components/PageComponents/Courses/RatingFilter";
import SearchModal from "../../components/UI/model/SearchModel";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../HOC/Axios/Axios";
import instructor from "../../components/resources/images/roxit.jpg";
import { set } from "react-hook-form";
import { useRouter } from "next/router";

function Courses() {
  const [filter, setFilter] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [Category, setCategory] = React.useState([]);
  // console.log("cat state", Category);
  const [SpinnerShow, setSpinner] = useState(false);

  const [showSearch, setShowSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showSearchbyprice, setShowSearchbyprice] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [ShowSearchCat, setShowSearchCat] = useState("");

  const [changePageClick, setChangePageClick] = useState("1");
  // console.log(process.env.NEXT_PUBLIC_API);
  const router = useRouter();
  console.log(router.query);
  const { category, course } = router.query;
  useEffect(() => {
    if (router.isReady) {
      setShowSearch(category ? category : "");
      setSearchInput(course ? course : "");
    }
  }, [router.isReady, showSearch, category, course, searchInput]);
  const getCategory = async () => {
    try {
      setSpinner(true);
      await axios
        .get(`/category/withNum`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setSpinner(false);
            setCategory(res.data.data);
          }
        })
        .catch((err) => {
          setSpinner(false);
        });
    } catch (error) {
      setSpinner(false);

      console.error(error);
    }
  };

  useEffect(() => {
    // alert(showSearch);
    const fetch = async () => {
      try {
        await axios
          .get(
            `/course?order=ASC&page=${changePageClick}&take=9&course_name=${searchInput}&category_id=${showSearch}&course_price=${showSearchbyprice}`
          )
          .then((res) => {
            console.log("course", res.data);
            setData(res.data.data);
            setMetaTag(res.data.meta);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [
    searchInput,
    router.isReady,
    showSearch,
    showSearchbyprice,
    changePageClick,
  ]);
  useEffect(() => {
    getCategory();
  }, []);

  const clickSearch = (id) => {
    setShowSearch(id);
    router.push({
      pathname: "/courses",
      query: {
        category: id,
      },
    });
  };
  const clickSearchbyprice = (id) => {
    setShowSearchbyprice(id);
  };
  const buttonPagination = (id) => {
    setChangePageClick(id);
  };
  const sideButton = (identifier) => {
    if (identifier === "previous" && metaTag?.hasPreviousPage) {
      let data = +metaTag?.page;
      setChangePageClick(data - 1);
    }
    if (identifier === "next" && metaTag?.hasNextPage) {
      let data = +metaTag?.page;
      setChangePageClick(data + 1);
    }
  };
  return (
    <div>
      <Head>
        <title className="">Sikka-i</title>
        {/* <!-- Primary Meta Tags --> */}
        <title>Courses -- Sikkai Learning Platform</title>
        <meta name="title" content="Courses -- Sikkai Learning Platform" />
        <meta
          name="description"
          content="Explore all the courses offered by Sikkainepal"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sikkainepal.com/courses" />
        <meta
          property="og:title"
          content="Courses -- Sikkai Learning Platform"
        />
        <meta
          property="og:description"
          content="Explore all the courses offered by Sikkainepal"
        />
        <meta
          property="og:image"
          content="https://sikkai-public-resources.s3.ap-south-1.amazonaws.com/banner+image-01.jpg"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://sikkainepal.com/courses"
        />
        <meta
          property="twitter:title"
          content="Courses -- Sikkai Learning Platform"
        />
        <meta
          property="twitter:description"
          content="Explore all the courses offered by Sikkainepal"
        />
        <meta
          property="twitter:image"
          content="https://sikkai-public-resources.s3.ap-south-1.amazonaws.com/banner+image-01.jpg"
        />{" "}
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className=" mx-auto  md:ml-3 w-full">
          {SpinnerShow ? <Spinner /> : null}

          {/* <BreakPointTest /> */}
          <div className="md:grid md:grid-cols-12 md:gap-8 relative">
            {/* left side starts  */}
            <div className=" md:p-0 md:col-span-4  w-full  lg:col-span-3">
              {/* for mobile device responsive design search bar section starts  */}
              <div className="flex items-center pt-12 md:hidden pb-2 px-4 space-x-4">
                <div
                  className="w-full"
                  // onClick={() => setShowSearch(true)}
                >
                  <div className="flex items-center border  w-full rounded-sm pl-2 space-x-2 ">
                    <div>
                      <FiSearch className=" text-gray-500 text-lg" />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        // name="searchInput"
                        id="input"
                        placeholder="Search ..."
                        className="w-full  py-2  "
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 rounded-md cursor-pointer flex items-center bg-gray-100 text-center py-2"
                  onClick={() => setFilter(!filter)}
                >
                  <p className="font-semibold mx-auto">Filter </p>
                  <BiFilter className="mx-auto" />
                </div>
              </div>
              {/* for mobile device responsive design search bar section starts  */}

              <div
                className={`${
                  filter
                    ? "block"
                    : "hidden md:flex flex-col  w-full h-full space-y-4 md:my-10 mx-2 sticky top-10"
                }`}
              >
                <div
                  className="hidden md:block "
                  // onClick={() => setShowSearch(true)}
                >
                  <div className="flex gap-2 items-center border  rounded-sm  pl-2  w-full py-1  ">
                    <div>
                      <FiSearch className="text-xl text-gray-500" />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        name="searchInput"
                        id="input"
                        placeholder="Search ..."
                        className="  py-2  w-full  "
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <CategoryFilter
                  checkActive={showSearch}
                  clickSearch={clickSearch}
                  category={Category}
                />
                <PriceFilter
                  checkActive={showSearchbyprice}
                  clickSearch={clickSearchbyprice}
                />
                {/* <RatingFilter />
                <EnrollmentFilter /> */}
              </div>
              {/* {mod} */}
            </div>
            {/* right side of grid starts  */}
            {data.length > 0 ? (
              <div className="md:col-span-8 lg:col-span-9 bg-gray-50 mt-4 w-full p-8">
                {/* top section starts  */}
                <div className="flex items-center justify-between ">
                  <h1 className="font-bold text-xl text-gray-600">
                    Our Courses
                  </h1>
                  {/* right section of flex  */}
                  <div className="flex items-center text-xl">
                    <BiChevronLeft
                      className="text-3xl cursor-pointer"
                      onClick={() => sideButton("previous")}
                    />
                    <div className="font-medium">
                      <span className="text-primary mr-1">{metaTag?.page}</span>
                      <span>/</span>
                      <span className="ml-1">{metaTag?.pageCount}</span>
                    </div>
                    <BiChevronLeft
                      className="rotate-180 text-3xl cursor-pointer"
                      onClick={() => sideButton("next")}
                    />
                  </div>
                </div>
                {/* top section ends  */}

                {/* course card section starts  */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-8">
                  {data.map((item, i) => {
                    let uploads = `${process.env.NEXT_PUBLIC_FILE}/images`;
                    return (
                      <CourseCard
                        key={i}
                        id={item.id}
                        category={item.category.category_name}
                        // tag={item.tag}
                        course_title={item.course_name}
                        // rating={item.rating}
                        course_thumbnail={item.thumbnail_img}
                        // ratingNo={item.ratingNo}
                        price={item.price}
                        RP={item.RP}
                        SP={item.SP}
                        discount={item.discount}
                        instructor_img={item.instructor.profile_img}
                        instructor_name={item.instructor?.first_name}
                        no_videos={item.course_content}
                        SpinnerShow={SpinnerShow}
                        setSpinner={setSpinner}
                      />
                    );
                  })}
                </section>

                {/* course card section ends  */}
                {/* pagination section  */}

                <Pagination
                  metaTag={metaTag}
                  changePageClick={
                    changePageClick.length === 0
                      ? metaTag?.page
                      : changePageClick
                  }
                  buttonPagination={buttonPagination}
                  sideButton={sideButton}
                />
              </div>
            ) : (
              <div className="md:col-span-8 lg:col-span-9 bg-gray-50 mt-4 w-full p-8">
                {/* <BreakPointTest /> */}
                <div className="capitalize text-base h-80 md:text-4xl text-gray-300 flex justify-center items-center  md:h-full ">
                  no courses are available !!!..
                  {/* {console.log(data)} */}
                  {/* {data.length} */}
                </div>
              </div>
            )}
          </div>
          {/* grid ends */}
        </div>
      </Layout>
    </div>
  );
}

// export const getStaticProps = wrapper.getStaticProps((store) => () => {
//   store.dispatch(getId())
// })

export default Courses;
