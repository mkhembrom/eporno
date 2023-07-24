"use client";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, pageJump, prevPage } from '@/app/(features)/pageSlice';
import { useGetEpornQuery } from '@/app/(features)/epornSlice';
import { SyncLoader } from 'react-spinners';

const PageButton = () => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.currentPage.currentPage)
    const { data, isLoading } = useGetEpornQuery({ page, query: "" });
    console.log(data)

    const [pageToJump, setPageToJump] = useState('');

    const handlePageJump = (e) => {

        if (e.target.value !== '') {
            dispatch(pageJump(e.target.value));
        }

        setPageToJump(e.target.value)
    }

    if (isLoading) {
        return <div className='w-full h-full fixed indent-0 flex items-center justify-center'><SyncLoader color="#36d7b7" /></div>
    }

    return (
        <div className='flex divide-x justify-around my-6 items-center max-w-[250px] w-full mx-auto space-x-4'>
            <button className={`px-4 py-2  ${page > 1 ? 'bg-black text-white' : 'bg-slate-400 text-black'}`} onClick={() => dispatch(prevPage())}>Prev</button>

            <div className='flex items-center justify-evenly space-x-4'>
                <input id='num' className='border-2 text-md font-bold text-black rounded-md w-16 text-center' type="text" placeholder={pageToJump} value={page} onChange={handlePageJump} />
                <h1 className='text-md font-bold text-black'> /</h1>
                <h1 className='text-md font-bold text-black'> {data?.total_pages}</h1>
            </div>
            <button className='px-4 py-2 bg-black text-white' onClick={() => dispatch(nextPage())}>Next</button>

        </div>
    )
}

export default PageButton