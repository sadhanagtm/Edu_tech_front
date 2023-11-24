import React, { createContext, useEffect, useState,useCallback } from "react";

import axios from '../Axios/Axios'

export const UserInfoContext = createContext();

function UserInfoContextApi({ children }) {
    const [UserInfo, setUserInfo] = useState([]);
    const [UserInfoShow, setUserInfoShow] = useState(false);
	const [progress, setProgressd] = useState(0);
    const getUserInfo=useCallback(
      async() => {
        try{
            axios.get('/student/loggedIn/details').then(res=>{
                if(res.status===200){
                    setUserInfo([res.data])
                }
            }).catch(err=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
      },[progress]);

    useEffect(() => {
        getUserInfo()
    }, [])
    const ChangeVal=()=>{
        setProgressd(!progress)
    }
	return (
		<UserInfoContext.Provider value={{UserInfo,ChangeVal}}>
            {children}
        </UserInfoContext.Provider>
	);
}

export default UserInfoContextApi;
