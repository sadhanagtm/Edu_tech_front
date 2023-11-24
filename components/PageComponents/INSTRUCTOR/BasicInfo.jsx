import { BsFacebook, BsTwitter } from "react-icons/bs";

import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import React from 'react'

function BasicInfo({
	InstructorInfo
}) {
	console.log(InstructorInfo)
	return (
		<div>
			{
				InstructorInfo.map((val, i) => {
					return <div key={i} className='h-96 flex flex-col'>
						<div className='flex-1 rounded-t-md mt-1 bg-gradient-to-r  from-[#ef3c23] to-[#02a8d9] relative'>
							<div className='absolute border-4 border-white -bottom-14 left-5 rounded-full'>
								<div className='relative h-32 w-32 rounded-full bg-white flex items-center justify-center overflow-hidden'>
									{
										val.profile_img  ?
											<Image
												src={val.profile_img}
												alt='name'
												objectFit='cover'
												layout='fill'
												loading="eager"
												objectPosition='top center'
											/> :
											<div className="bg-gray-400 h-full w-full flex items-center uppercase justify-center text-xl text-white">{val.first_name[0]}{val.last_name[0]}</div>
									}
								</div>
							</div>
						</div>
						<div className='flex-1 bg-white shadow-md shadow-gray-400 '>
							<div className='mt-16 mx-9 font-openSansSeven space-y-2 '>
								<div className='text-2xl capitalize '>{val.first_name} {" "} {val?.last_name}</div>
								<div className='text-gray-400 text-sm font-openSansSix '>{val.email}</div>
								<div className='font-openSansFive '>{val.address}</div>
								<div className=' font-openSansSix capitalize '>{val.course}+ courses</div>
								<div className='flex py-5 gap-3  items-center'>
									<div><BsFacebook className='w-5 h-5 cursor-pointer hover:scale-125 text-blue-600' /></div>
									<div><AiFillInstagram className='w-6 h-6 cursor-pointer hover:scale-125 text-orange-700' /></div>
									<div><BsTwitter className='w-5 h-5 cursor-pointer hover:scale-125 text-blue-400' /></div>
								</div>
							</div>
						</div>
					</div>
				})
			}
		</div>
	)
}

export default BasicInfo