import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import PackagesCard from "./subcomponents/PackageCard";
import { UserInfoContext } from "../../../HOC/ContextApi/UserInfo";
import axios from "../../../HOC/Axios/Axios";
import { useRouter } from "next/router";
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Spinner from '../../../components/UI/Spinner/Spinner'
const styles = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

function Packages() {
  const [data, setData] = useState([]);
  const [showPackage, setShowPackage] = useState("");
  const [ID, setID] = useState("");
  const [Login, setLogin] = useState(false);
  const [Loader, setLoader] = useState(false);
  const router = useRouter();
  const {UserInfo} =useContext(UserInfoContext)
  const getPackages = () => {
    axios
      .get("/package")
      .then((res) => {
        console.log("res", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPackages();
  }, []);
  const buyPackage = (id) => {
    console.log(id,UserInfo.length)
    if(UserInfo.length>0){
      setShowPackage(id);
      router.push({
        pathname: "/BuyPackages",
        query: { id: id },
      });
    }else{
      setID(id);
      setLogin(true);
      // router.push({
      //   pathname:'/auth/login',
      //   query: { red:'yes',id: id },


      // })
    }
  };
  const goToLogin=()=>{
    setLoader(true);
    setLogin(false);
      router.push({
        pathname:'/auth/login',
        query: { red:'yes',id: ID },
      })
  }
  let html;
  if(Login){
    html=<div style={{
      background:'rgba(0,0,0,.6)',
      zIndex:1400
    }} className='fixed top-0 left-0 w-screen h-screen  flex justify-center items-center'>
      <StyleRoot>
      <div style={styles.zoomIn} className='bg-white p-6 rounded-md flex flex-col justify-center items-center relative'>
        <div 
        onClick={()=>setLogin(false)}
        className='absolute -top-4 -right-4 text-white rounded-full 
        bg-gray-300 cursor-pointer h-10 w-10 flex justify-center items-center 
        OpenSans font-bold text-xl'>X</div>
        <div className='my-2 OpenSans font-semibold text-lg'>You need to login to access this page</div>
        <div onClick={()=>goToLogin(ID)} className='my-1 border-b-2 border-primary text-sm text-primary cursor-pointer'>Click here to continue</div>
      </div>
      </StyleRoot>
    </div> 
  }


  return (
    <div className="bg-gray-100">
      {html}
      {Loader?<Spinner />:null}
      <div className="container mx-auto px-4 lg:px-8">
        {/* top section  */}
        <div className="pt-14 pb-7 ">
          <p className="text-center  capitalize font-bold text-gray-700 text-3xl sm:text-4xl my-2 ">
            life-time membership plans
          </p>
          <p className="text-gray-500 text-center my-8 md:w-3/4 mx-auto">
            The packages below help students to learn their keen interest skills
            in low price as well as help our affiliators to gain financial
            freedom and develop their own community of entrepreneurs.
          </p>
        </div>
        {/* package card section  */}
        <div className="pb-24 pt-5">
          <div className=" grid md:grid-cols-2 xl:flex xl:gap-6 2xl:gap-10      w-10/12  gap-10 sm:gap-5 xl:w-9/12 2xl:w-8/12  mx-auto">
            {/* Props section */}
            {data.map((val, i) => {
              return (
                <PackagesCard
                  key={i}
                  i={i}
                  id={val.id}
                  package_img={val.package_img}
                  packageFeature={val.packageFeature}
                  package_name={val.package_name}
                  SP={val.SP}
                  package_price={val.package_price}
                  RP={val.RP}
                  setShowPackage={setShowPackage}
                  showPackage={showPackage}
                  buyPackage={buyPackage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
