import React from "react";

function HowToStart() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="my-8 flex flex-col justify-center items-center">
        <h1 className="uppercase">How to Start ? </h1>
        <p className="px-4 md:px-0 text-center">
          You can follow following steps to become a Guru for Sikkai
        </p>

        <section className="w-3/4 lg:w-1/2 grid md:grid-cols-2 gap-8 my-8">
          <div className="card rounded-md p-2">
            <div className="border rounded-md p-8">
              <h4>Register on sikkai</h4>
              <p className="font-semibold text-sm text-justify">
                Click on start now button above and sign up with your details.
                After email verification your Guru ID will be created and then
                proceed to login.
              </p>
              <p className="text-4xl font-bold mt-5 text-orange-500">01</p>
            </div>
          </div>

          <div className="card rounded-md p-2">
            <div className="border rounded-md p-8">
              <h4>Verify your account</h4>
              <p className="font-semibold text-sm text-justify">
                Go to{" "}
                <span className="capitalize">
                  <b>my profile</b>
                </span>{" "}
                section and submit your KYC details. KYC will be verified within
                72 hours. After verification you will be able to publish your
                course.
              </p>
              <p className="text-4xl font-bold mt-5 text-blue-500">02</p>
            </div>
          </div>

          <div className="card rounded-md p-2">
            <div className="border rounded-md p-8">
              <h4>Create your course</h4>
              <p className="font-semibold text-sm text-justify">
                Go to{" "}
                <span>
                  <b>Courses</b>
                </span>{" "}
                section then click on{" "}
                <span className="capitalize">
                  <b>plus icon</b>
                </span>{" "}
                and start creating your course. Now your course overview will be
                created. To publish your course follow next step.
              </p>
              <p className="text-4xl font-bold mt-5 text-pink-800">03</p>
            </div>
          </div>

          <div className="card rounded-md p-2">
            <div className="border rounded-md p-8">
              <h4>Publish Course</h4>
              <p className="font-semibold text-sm text-justify">
                Add{" "}
                <span>
                  <b>section</b>
                </span>
                , upload{" "}
                <span>
                  <b>content</b>
                </span>{" "}
                and publish them. There will be verification for safety, quality
                content and betterment of the platform. You will be notified
                after course verification.
              </p>
              <p className="text-4xl font-bold mt-5 text-green-500">04</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HowToStart;
