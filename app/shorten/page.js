"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl , setShorturl ] = useState("")
    const [generated, setGenerated] = useState("")
    
    const generate=() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "url": url,
          "shorturl": shorturl
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
            setUrl("")
            setShorturl("")
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            alert(result.message)
            console.log(result)
        })
          .catch((error) => console.error(error));
    }
    
  return (
    <div className='flex flex-col mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg gap-5'>
    <h1 className='font-bold text-2xl text-center'>Generate Your Short URLs</h1>

    <div className='flex flex-col p-4 gap-5 ' >
        <input type="text" 
        value={url}
        className='focus:outline-purple-600 p-2 rounded-lg'
        placeholder='Enter your URL'
        onChange={e=>{setUrl(e.target.value)}}
        />

        <input type="text" 
        value={shorturl}
        className='focus:outline-purple-600 p-2 rounded-lg'
        placeholder='Enter the desired name'
        onChange={e=>{setShorturl(e.target.value)}}
         />

         <button onClick={generate} className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'> Generate</button>
         {generated && <code>Your link: 
            <Link className='text-red-500' href={generated} target='_blank'>
            {generated}
            </Link>
            </code>}
    </div>
    </div>
  )
}

export default shorten
