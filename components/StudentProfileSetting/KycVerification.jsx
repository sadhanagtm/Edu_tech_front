import React, { useContext, useEffect, useState } from "react";

import { BiArrowBack } from "react-icons/bi";
import FormValue from "./FormData.json";
import Image from "next/image";
import KYCVerificationForm from "./Form";
import UserInfoContextApi, { UserInfoContext } from "../../HOC/ContextApi/UserInfo";
import axios from "../../HOC/Axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import ProcessComplete from "./ProcessComplete";
import KYCVerificationFormUpdate from "./UpdateForm";

function KYCVerification({ KYCDATA, GetKycData,Status,setStatus }) {
  console.log(FormValue);
  const [Percentage, setPercentage] = useState(0);
  const [IsVERIFIED, setIsVERIFIED] = useState("notStarted");
  const [REMARK, setREMARK] = useState("notStarted");
  const [CurrentPlace, setCurrentPlace] = useState("kyc");
  const [Countries, setCountries] = useState([]);
  const [PaymentChannel, setPaymentChannel] = useState([]);


  const { UserInfo } = useContext(UserInfoContext);
  // get country
  const GetCountry = () => {
    try {
      axios
        .get("https://restcountries.com/v2/all?fields=name,alpha3Code")
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            setCountries(res.data);
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
    GetCountry();
    GetKycData();
  }, []);

  const SubmitKYC = (values) => {
    try {
      let formData = new FormData();

      formData.append("full_name", values.full_name);
      formData.append("Gender", values.Gender);
      formData.append("father_or_husband_name", values.father_or_husband_name);
      formData.append("guardian_type", values.guardian_type);
      formData.append(
        "grand_father_or_father_in_law",
        values.grand_father_or_father_in_law
      );
      formData.append("citizenship_no", values.citizenship_no);
      formData.append("marital_status", values.marital_status);
      formData.append("issue_date", values.issue_date);
      formData.append("issue_district", values.issue_district);
      formData.append("issued_country", values.issued_country);
      formData.append("current_country", values.current_country);
      formData.append("current_address", values.current_address);
      formData.append("permanent_country", values.permanent_country);
      formData.append("permanent_address", values.permanent_address);
      formData.append("doc_img_first", values.doc_img_first);
      formData.append("doc_img_second", values.doc_img_second);
      //for  request
      console.log(formData);
      axios
        .post("/student-kyc", formData, {})
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
            setCurrentPlace("payment");
            setPercentage(50);
            GetKycData();
            toast.success(res?.data?.message);
          }
          console.log(res);
        })
        .catch((err) => {
          toast.error(err.response?.data?.message);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex ">
      <main className="w-full">
        <ToastContainer />
        {
          console.log(KYCDATA)
        }
        {KYCDATA && Status?
        <UserInfoContextApi>
        <ProcessComplete
        IsVERIFIED={KYCDATA && KYCDATA[0]?.isKycVerified}
        setStatus={setStatus}
        REMARK={KYCDATA && KYCDATA[0].remarks?KYCDATA[0].remarks:''}
        />
        </UserInfoContextApi>
        :KYCDATA?
          <KYCVerificationFormUpdate
            KYCDATA={KYCDATA}
            IsVERIFIED={KYCDATA && KYCDATA[0]?.isKycVerified}
            SubmitKYC={SubmitKYC}
            Status={Status}
            setStatus={setStatus}
            btnName={'Re-submit'}
            Countries={Countries}
          />
        :null}
        {!KYCDATA && (
          <KYCVerificationForm
            KYCDATA={KYCDATA}
            IsVERIFIED={IsVERIFIED}
            Status={null}
            SubmitKYC={SubmitKYC}
            Countries={Countries}
          />
        )}
      </main>
    </div>
  );
}

export default KYCVerification;
