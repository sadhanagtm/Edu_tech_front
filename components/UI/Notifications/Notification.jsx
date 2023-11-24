import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  export default function Notification({
      type
  }){
    //   const toasted =(type)=>{
    //       let val;
    // console.log(type)
    // switch(type){
    //     case 'sucess':
    //     val =toast.success('blah blah');
    //     break;
    //     case 'error':
    //         return toast('great work')
    //    break;
    //    default:
    //        val=toast.loading('loading')
    //        break;
    // }
    // return val;
// }
    return (
      <div>
          <div className='hidden'>
        {/* {toasted(type)} */}
        {/* {val} */}
          </div>
        <ToastContainer />
      </div>
    );
  }