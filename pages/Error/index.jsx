import React from 'react'
import Layout from '../../HOC/Layout/Layout';
import Tick from '../../public/tick.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import {ImCross} from 'react-icons/im'
export async function getServerSideProps(context) {
    // Fetch data from external API
    const { message,location } = context.query;
    // Pass data lto the page via props
    return { props: { location, message } };
  }
  
function Index({
    message,location
}) {
    const Router = useRouter()

    const Redirected=()=>{
        if(location.toLowerCase()==='home'){
            Router.push('/')
        }else{
            Router.push('/myCourses')
        }
    }
    console.log(message,location)
  return (
    <div>
        {/* <Layout> */}
            <div className='flex flex-col items-center py-16'>
                <div className='border-8 border-red-500 rounded-full p-6 mb-6'>
                <div className='w-44 h-44 relative flex justify-center items-center'>
                    <ImCross className='w-32 h-32 text-red-500' />
                </div>
                </div>
                <div className='text-red-500 w-80 text-center OpenSans font-bold '>{message}</div>
                <div className='py-8'>
                    <button onClick={()=>Redirected()} className='border-2 border-red-500 px-10 OpenSans font-bold py-3
                     text-red-500 hover:text-white hover:bg-red-500 rounded-sm uppercase'>Go to {location} </button>
                </div>
            </div>
        {/* </Layout> */}
    </div>
  )
}
export default Index
