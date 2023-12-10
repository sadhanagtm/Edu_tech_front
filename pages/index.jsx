import Axu from "../HOC/Axu/Axu";
import CategoriesSection from "../components/PageComponents/HomeSection/CategoriesSection";
import Features from "../components/PageComponents/HomeSection/Features";
import Head from "next/head";
import HomeSection from "../components/PageComponents/HomeSection/HomeSection";
import Layout from "../HOC/Layout/Layout";
import Packages from "../components/PageComponents/HomeSection/Packages";
import PopularAffiliator from "../components/PageComponents/HomeSection/PopularAffiliator";
import PopularCourses from "../components/PageComponents/HomeSection/PopularCourses";
import UserInfoContextApi from "../HOC/ContextApi/UserInfo";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title className="">Sikka-i</title>
        {/* <!-- Primary Meta Tags --> */}
        <title> Sikkai - Learning and Earning</title>
        <meta name="title" content=" Sikkai - Learning  and Earning" />
        <meta
          name="description"
          content="Sikkai is an e-learning platform which helps students to established their carrier in better way sikkainepal.com"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.sikkainepal.com" />
        <meta property="og:title" content="Sikkai - Learning  and Earning" />

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
        <meta property="twitter:url" content="www.sikkainepal.com" />
        <meta
          property="twitter:title"
          content="Sikkai - Learning  and Earning"
        />
        <meta
          property="twitter:description"
          content="Sikkai is an e-learning platform which helps students to established their carrier in better way sikkainepal.com"
        />
        <meta
          property="twitter:image"
          content="https://sikkai-public-resources.s3.ap-south-1.amazonaws.com/banner+image-01.jpg"
        />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Axu>

        <div className=" space-y-20 md:space-y-14 overflow-hidden ">

          {/* banner section */}
          <div className=" w-full">
            <HomeSection />
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <Features />
          </div>
          {/* <WhoWeAreSection /> */}

          <div className="">
            <CategoriesSection />
          </div>
          {/* <WhySikka /> */}
          <div className="container mx-auto px-4 lg:px-8">
            <PopularCourses />
          </div>
          {/* <div className="">
            <UserInfoContextApi>
              <Packages />
            </UserInfoContextApi>
          </div> */}
          <div className="container mx-auto pb-10">
            <PopularAffiliator />
          </div>
        </div>
      </Axu>
    </Layout>
  );
}
