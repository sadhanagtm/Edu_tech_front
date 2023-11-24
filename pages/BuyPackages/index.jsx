import { useEffect, useState } from "react";

import Payment from "../../components/PageComponents/BuyPackage/Payment";
import UserInfoContextApi from "../../HOC/ContextApi/UserInfo";
import axios from "../../HOC/Axios/Axios";

function Index() {
  const [PaymentChannel, setPaymentChannel] = useState([])

  // get payment channels
  const GetPaymentChannels=()=>{
    try{
      axios.get('/payment-channels').then(res=>{
        console.log(res);
        if(res.status===200){
          setPaymentChannel(res.data.data)
        }
      }).catch(err=>{
        console.log(err);
      })
    }catch(err){
      console.log(err);
    }
  }

useEffect(() => {
  GetPaymentChannels();
}, [])

  return (
    <div>
      <UserInfoContextApi>
      <Payment PaymentChannel={PaymentChannel} />
      </UserInfoContextApi>
    </div>
  );
}

export default Index;
