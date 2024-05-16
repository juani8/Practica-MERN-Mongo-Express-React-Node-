import React from 'react';
import upload from '../assets/cloud-arrow-up-solid.svg'

const AddPhoto = () => {
  return (
		<div className='grid grid-cols-4 max-[1050px]:flex max-[1050px]:flex-col pb-5 gap-3 justify-center animate__animated animate__pulse'>
			<div className='col-span-3 grid grid-cols-4 gap-4'>
				<input className='input__default col-span-3' type="text" placeholder='Add photo via link' />
				<button className='min-w-[100px] gap-2 px-2 col-span-1 rounded-xl border   text-black bg-gray-300'>Add&nbsp;photo</button>
			</div>
			<label className='inline-flex col-span-1 hover:cursor-pointer gap-2 p-2 border border-gray-400 rounded-lg m-auto' htmlFor="input_img">
				<img className='w-8' src={upload} alt="" />
				Upload from this device
				<input className='hidden' type="file" id="input_img" accept="image/png, image/gif, image/jpeg" />
			</label>	
			
		</div>
  )
};

export default AddPhoto;