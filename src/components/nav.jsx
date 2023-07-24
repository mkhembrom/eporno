import { querySearch } from '@/app/(features)/pageSlice';
import useDebounce from '@/lib/debounce';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Nav = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500)

    useEffect(() => {
        if (debouncedSearch) {
            dispatch(querySearch(debouncedSearch))
        }
    }, [debouncedSearch, dispatch])

    const handleChange = e => {
        setSearch(e.target.value);
    }
    return (
        <nav className='w-full px-4 md:px-10 pt-4 md:pt-10 flex items-center justify-between flex-col md:flex-row'>
            <a href='/' className='bg-red-800 text-lg text-white font-bold px-4 py-2 uppercase leading-5 mb-4 md:mb-0'>EPorno</a>

            <input className='w-full md:w-[600px] p-4 border rounded-full pl-10' placeholder='search' value={search} onChange={handleChange} />

        </nav>
    )
}

export default Nav