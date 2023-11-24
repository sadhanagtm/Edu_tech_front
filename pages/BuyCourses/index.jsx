import dynamic from "next/dynamic";
import React from "react";

const CoursePaymentComponent = dynamic(() => import("./CoursePayment"), {
  ssr: false,
});
function Index() {
  return <CoursePaymentComponent />;
}

export default Index;
