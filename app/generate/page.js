"use client"
export const dynamic = "force-dynamic";

import Link from 'next/link'
import React, { useState } from 'react'

const Generate = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

const generate = () => {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl":shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setUrl("")
    setShorturl("")
    console.log(result)
  alert(result.message)
  })
  .catch((error) => console.error(error));
}


  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 text-red-500'>
      <h1 className='font-bold text-3xl'>
        Short Your URL Here
      </h1>

      <div className='flex flex-col gap-2'>
        <input
          type="text"
          value={url}
          className='bg-white p-2 text-black'
          placeholder='Enter your URL here'
          onChange={e => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className='py-2 px-4 rounded:md bg-white text-black p-2 focus:outline-purple-500'
          placeholder='Enter your preferred short URL here'
          onChange={e => setShorturl(e.target.value)}
        />

        <button onClick={generate}
        
        className='bg-blue-300 text-white my-3 rounded-lg shadow-2xl p-2 font-bold cursor-pointer'
        >
          GENERATE
        </button>
      </div>
     { generated &&  <> <span className='font-bold text-lg'>YOUR  Link</span> <code> <Link target="_blank" href={generated}>{generated}</Link>
      </code></>} 
    </div>
  )
}

export default Generate
