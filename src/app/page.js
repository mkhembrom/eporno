"use client"

import Nav from "@/components/nav";
import Gallery from "@/components/gallery";
import PageButton from "@/components/pageButton";
import { useGetEpornQuery } from "./(features)/epornSlice";
import { SyncLoader } from "react-spinners";

export default function Home() {
  const { data, error, isLoading } = useGetEpornQuery({ page: 1, query: '' });


  return (


    <main className="flex min-h-screen flex-col w-full ">
      <Nav />
      <PageButton />
      {
        isLoading ? (<div className='w-full h-full fixed indent-0 flex items-center justify-center'><SyncLoader color="#36d7b7" /></div>) : (<Gallery />)
      }


    </main>

  )
}
