import "rsuite/dist/rsuite.min.css";

import React, { useEffect, useState } from "react";

import BasicInfo from "../../components/PageComponents/INSTRUCTOR/BasicInfo";
import Head from "next/head";
import Layout from "../../HOC/Layout/Layout";
import axios from "../../HOC/Axios/Axios";
import dynamic from "next/dynamic";

// import { Steps } from "rsuite";
// RecentCourses
const RecentCourses = dynamic(
  () => import("../../components/PageComponents/INSTRUCTOR/RecentCourses"),
  {
    ssr: false,
  }
);
// skills
const Skills = dynamic(
  () => import("../../components/PageComponents/INSTRUCTOR/Skills"),
  {
    ssr: false,
  }
);
// experience
const Experience = dynamic(
  () => import("../../components/PageComponents/INSTRUCTOR/Experience"),
  {
    ssr: false,
  }
);

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  return { props: { id } };
}

function Instructor({ id }) {
  const [InstructorInfo, setInstructorInfo] = useState([]);
  const [InstructorSkill, setInstructorSkill] = useState([]);
  const [InstructorExperience, setInstructorExperience] = useState([]);
  const [InstructorCourse, setInstructorCourse] = useState([]);
  // get Instructor
  const GetInstructor = () => {
    try {
      axios
        .get(`/instructor/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setInstructorInfo([res.data]);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // get skills
  const GetSkillsAndExperience = () => {
    try {
      axios
        .get(`/instructor-skills/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setInstructorSkill(res.data.skills);
            let exp = {
              exp: res.data?.data?.experience,
            };
            setInstructorExperience([exp]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const GetCourses = () => {
    try {
      axios
        .get(`/course/instructorRecentCourse/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setInstructorCourse(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetInstructor();
    GetSkillsAndExperience();
    GetCourses();
  }, [id]);

  return (
    <div className="">
      <Head>
        <title className="">Sikka-i</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-gray-50 min-h-screen  items-center py-6 px-4 mx-auto gap-5 justify-center md:justify-start md:items-start md:grid md:grid-cols-12">
          <div className="lg:container mx-auto w-full  xl:px-8 lg:col-span-8 col-span-7">
            {/* General Info */}
            <BasicInfo InstructorInfo={InstructorInfo} />
            {/* Skills */}
            <Skills InstructorSkill={InstructorSkill} />
            {/* Experience */}
            <Experience InstructorExperience={InstructorExperience} />
          </div>
          <div className="  lg:col-span-4 border-t shadow-md shadow-gray-400 rounded-sm p-4 md:col-span-5">
            <RecentCourses InstructorCourse={InstructorCourse} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Instructor;