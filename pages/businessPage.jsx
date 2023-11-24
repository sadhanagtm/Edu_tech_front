import React from "react";
import Head from "next/head";
import Packages from "../components/PageComponents/HomeSection/Packages";
import BusinessBanner from "../components/PageComponents/HomeSection/subcomponents/BusinessBanner";
import BusinessCategory from "../components/PageComponents/HomeSection/subcomponents/BusinessCategory";
import BusinessTeams from "../components/PageComponents/HomeSection/subcomponents/BusinessTeams";
import BusinessVideo from "../components/PageComponents/HomeSection/subcomponents/BusinessVideos";
import GettingIntoBusiness from "../components/PageComponents/HomeSection/subcomponents/GettingIntoBusiness";
import Layout from "../HOC/Layout/Layout";
import businessBG from "../public/business page Bg.jpg";
import BusinessBannerSection from "../components/PageComponents/SikkaiBusiness/BusinessBannerSection";
import AboutSikkaiBusiness from "../components/PageComponents/SikkaiBusiness/AboutSikkaiBusiness";
import UserInfoContextApi from "../HOC/ContextApi/UserInfo";
function BusinessPage() {
  return (
    <div>
      <Head>
        <title className="">Sikka-i For Business</title>
        <meta
          name="description"
          content="Sikkai is a platform that provides every individual with the opportunity of learning the desired skills, earning good income and owning the dream life."
        />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <BusinessBannerSection />
        <AboutSikkaiBusiness />
        {/* <BusinessBanner /> */}
        {/* <BusinessCategory /> */}
        {/* <GettingIntoBusiness /> */}
        <div className="mt-12">
        <UserInfoContextApi>
          <Packages />
          </UserInfoContextApi>
        </div>
        {/* <BusinessTeams /> */}
        {/* <BusinessVideo /> */}
      </Layout>
    </div>
  );
}

export default BusinessPage;
