import { BiCurrentLocation } from "react-icons/bi";
import ContactForm from "../HOC/form/ContactForm";
import Head from "next/head";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Layout from "../HOC/Layout/Layout";
import React from "react";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        {/* primary meta tags  */}
        <meta name="title" content="Contact VIP GROUP PVT.LTD." />
        <meta
          name="description"
          content="Connect with us through PHONE : +977-9857074929 EMAIL : cvipgroup@gmail.com LOCATION:Butwal Rupandehi Nepal"
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipgroupnepal.com/Contact" />
        <meta property="og:title" content="Contact VIP Group Pvt. Ltd " />
        <meta
          property="og:description"
          content="Connect with us through PHONE : +977-9857074929 EMAIL : cvipgroup@gmail.com LOCATION:Butwal Rupandehi Nepal"
        />
        <meta
          property="og:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content="https://vipgroupnepal.com/Contact"
        />
        <meta property="twitter:title" content="Contact VIP Group Pvt. Ltd" />
        <meta
          property="twitter:description"
          content="Connect with us through PHONE : +977-9857074929 EMAIL : cvipgroup@gmail.com LOCATION:Butwal Rupandehi Nepal"
        />
        <meta
          property="twitter:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />
      </Head>
      <Layout>
        <div className="font-openSansFive ">
          {/* starting of top part of contact */}
          <div className="bg-primary h-64 w-full  py-1">
            <div className="text-center text-white ">
              <h1>CONTACT US</h1>
              <p className=" text-xs font-openSansFive md:text-sm w-11/12 md:w-10/12 lg:w-8/12 mx-auto lg:text-lg">
                Sikka-I is the learning platform for the people so we would like
                to hear from you. Write to us about your thoughts or any issues
                and we will endeavour to reply to your message as soon as
                possible.
              </p>
            </div>
          </div>
          {/*ending of  top part of contact */}

          {/* contact section div starts */}
          <div className="w-full lg:w-3/4 mx-auto -mt-16 lg:-mt-24 bg-white shadow-md">
            {/* grids starts here */}
            <div className="grid lg:grid-cols-2 gap-4   py-4 lg:py-8 my-8">
              {/* left sections starts here */}
              <div className="lg:border-r-2">
                <div className="p-4 lg:px-12">
                  <h1 className="font-openSansSeven text-lg md:text-xl  lg:text-2xl">
                    Contact Information
                  </h1>
                  <hr />
                  <div className="flex space-x-4 my-4 font-openSansFivelg:my-6 md:text-xl  items-center">
                    <IoCall />
                    <p>+977-9857074929</p>
                    <p></p>
                  </div>
                  <div className="flex  items-center space-x-4 my-4 font-openSansFive lg:my-6 md:text-xl  ">
                    <IoMdMail />
                    <a href="">info@sikkainepal.com</a>
                  </div>
                  <div className="flex space-x-4 my-4 lg:my-6 font-openSansFive md:text-xl  items-center">
                    <BiCurrentLocation />
                    <p>Kalinagar,Butwal(Near Concept Club)</p>
                  </div>
                </div>
              </div>
              {/* left sections ends here */}

              {/* right sections starts here */}
              <ContactForm />
              {/* right sections ends here */}
            </div>
            {/* grids ends here */}
          </div>
          {/* contact section div closed */}
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
