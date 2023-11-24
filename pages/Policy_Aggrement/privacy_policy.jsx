import React from "react";
import PasswordToolbar from "../../components/PageComponents/HomeSection/subcomponents/PasswordToolbar";
import Footer from "../../HOC/Footer/Footer";

function PrivacyPolicy() {
  return (
    <div className="">
      <div className=" shadow-md shadow-gray-300">
        <PasswordToolbar />
      </div>
      <div className="py-10 px-10">
        <div className="text-3xl font-openSansSeven py-5 capitalize">
          privacy policy
        </div>
        <div className="font-openSansFive text-base">
          Sikka-I values privacy and transparency. Therefore, we recognize the
          importance of protecting all information we collect about you. We also
          want to be transparent about our policy. This privacy statement
          therefore helps you to understand what information we collect about
          you and how we use it. This policy applies to Sikka-I corporate
          website and other online services. The information collected online
          will be kept strictly confidential and will not be shared with third
          parties. A detailed explanation about how we safeguard your personal
          information is described below. If you are applying for a job at
          Sikka-I, this privacy policy is not applicable. A separate privacy
          policy for applicants can be found on our career site.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
