import React,{createContext, useState} from 'react'

export const PageLoadContext=createContext();


export default function PageLoadConextProvider({children}){
    const [isAnimating, setIsAnimating] = useState(false);
    const ChangeIsAnimation=(value)=>{
        setIsAnimating(value)
    }
    // const [state, setstate] = useState('');
    return <PageLoadContext.Provider value={{isAnimating,ChangeIsAnimation}}>
        {children}
    </PageLoadContext.Provider>
} 