import React from 'react'
import style from '../../../styles/Spinner.module.css'

function Spinner() {
    return (
        <div style={{
            background:'rgba(0,0,0,.7)'
        }} className='fixed top-0 left-0 w-full h-full z-50  flex justify-center items-center'>
            <div className={style.loader}>Loading...</div>
        </div>
    )
}

export default Spinner 
