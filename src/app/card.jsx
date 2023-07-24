import React, { useState } from 'react';



const Card = ({ videos: { id, title, thumbs, embed } }) => {

    return (
        <a href={`/video/${id}`} className='cursor-pointer'>
            <img className='object-cover ' src={thumbs[0].src} alt={title} />

            <div className='flex w-full'>
                <h1 className='text-sm font-bold text-black dark:text-white py-2 truncate md:text-ellipsis'>{title}</h1>
            </div>
        </a>
    )
}

export default Card