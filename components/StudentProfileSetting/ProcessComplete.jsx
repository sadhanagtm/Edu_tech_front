import React, { useContext } from "react";

import { ImCross } from "react-icons/im";
import Image from "next/image";
import { MdOutlinePendingActions } from "react-icons/md";
import Tick from "../../public/tick.svg";

function ProcessComplete({ setStatus, payment_status, IsVERIFIED,REMARK }) {

	return (
		<div className='py-16 px-10 flex flex-col items-center'>
			<div
				className={`w-48 h-48 border-4
			 ${
					IsVERIFIED === "rejected"
						? "border-red-500"
						: IsVERIFIED === "pending"
						? "border-orange-500"
						: "border-green-500"
				}

			 flex items-center justify-center rounded-full`}>
				<div className='w-36 h-36 flex items-center justify-center  relative'>
					{IsVERIFIED === "verified" ? (
						<Image src={Tick} alt='tick' layout='fill' objectFit='contain' />
					) : IsVERIFIED === "pending" ? (
						<MdOutlinePendingActions className='text-6xl text-orange-500' />
					) : (
						<ImCross className='text-5xl text-red-500' />
					)}
				</div>
			</div>
			<div className='Poppins flex flex-col justify-center items-center '>
				<div
					className={`text-xl uppercase text-center py-4
				${
					IsVERIFIED === "rejected"
						? "text-red-500"
						: IsVERIFIED === "pending"
						? "text-orange-500"
						: "text-green-500"
				}
				  font-semibold`}>
					{IsVERIFIED}
				</div>
				{console.log(REMARK)}
				{
					REMARK.length>0 && IsVERIFIED==='rejected'?<div 
					className={`text-sm uppercase text-center py-4
				${
					IsVERIFIED === "rejected"
						? "text-red-500"
						: IsVERIFIED === "pending"
						? "text-orange-500"
						: "text-green-500"
				}
				  font-semibold bg-gray-100 p-3`}
					>
							{REMARK}
							{/* {REMARK} */}
					</div>:null
				}
			</div>

			{/* next and previous button */}
			<div className='py-10 text-lg w-full flex justify-end space-x-6'>
				{IsVERIFIED === "rejected" || IsVERIFIED === "verified" ? (
					<button
						onClick={setStatus}
						className='bg-grayD text-white py-2 px-12'>
						Back
					</button>
				) : null}
			</div>
		</div>
	);
}

export default ProcessComplete;
