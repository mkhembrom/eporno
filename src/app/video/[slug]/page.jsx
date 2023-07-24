"use client";

import { useGetEpornByIdQuery } from '@/app/(features)/epornSlice'
import React, { useState } from 'react'

const Video = ({ params }) => {

    const { data, isLoading, error } = useGetEpornByIdQuery(`${params.slug}`);

    const [toggle, setToggle] = useState(false);

    const toggleImages = () => {
        setToggle(!toggle);
    }

    return (
        <div>

            <div className='p-4 md:p-10'>
                <div className='mb-16'>
                    <a href='/' className='text-lg bg-black text-white px-4 py-2'>Go Back</a>

                </div>
                <h1 className='text-lg text-black dark:text-white'>{data?.title}</h1>
                <div className='py-4 w-full'>
                    <iframe className={`w-full h-[300px] lg:h-screen`} src={data?.embed} frameBorder="0"></iframe>
                </div>
                <div className='flex flex-row items-start space-x-6 border-b-2 border-emerald-400 pb-4 w-full'>
                    <div className='flex items-center break-all sm:break-words w-full h-full'>
                        {data?.keywords}
                    </div>
                    <button onClick={toggleImages} className=' text-md font-bold leading-6 text-white bg-emerald-400 px-6 py-3'>Gallery</button>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 my-4'>
                    {
                        toggle && (
                            data?.thumbs?.map((img, index) => (
                                <img className='w-full h-32 md:h-40 object-cover' key={index} src={img.src} alt={index} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Video