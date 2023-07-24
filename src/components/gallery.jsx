import { useGetEpornQuery } from '@/app/(features)/epornSlice';
import { querySearch } from '@/app/(features)/pageSlice';
import Card from '@/app/card';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SyncLoader } from 'react-spinners';

const Gallery = () => {

    const dispatch = useDispatch();
    const itemList = ["Asian", "Cumshot", "Creampie", "Blowjob", "Bukkake", "HD Sex", "Handjob", "Homemade",
        "Hentai", "Hotel", "India",

        "Housewives", "Japanese", "Latina", "Massage", "Office", "Outdoor", "Students", "Teen", "Threesome", "Uniform"
        , "Vintage"];

    const page = useSelector((state) => state.currentPage.currentPage)
    const query = useSelector((state) => state.currentPage.currentKeyword)

    const { data, error, isLoading } = useGetEpornQuery({ page, query });


    if (isLoading) {
        return <div className='w-full h-full fixed indent-0 flex items-center justify-center'><SyncLoader color="#36d7b7" /></div>
    }

    return (
        <div className='flex p-4 md:p-10 w-full '>
            <div className='w-[200px] hidden md:flex sticky top-20 h-full'>
                <ul className='flex flex-col items-start w-[200px]'>
                    {
                        itemList.map((item, index) => (
                            <li key={index} onClick={() => dispatch(querySearch(item))} className='px-4 py-2 border-b cursor-pointer'>{item}</li>
                        ))
                    }

                </ul>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4" as="style">
                {
                    data?.videos.map((item) => (
                        <Card key={item.id} videos={item} />

                    ))
                }

            </div>
        </div>
    )
}

export default Gallery