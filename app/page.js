import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="  flex flex-col gap-4 justify-center items-center ">
          
        <p className="font-bold text-3xl poppins-extrabold">The best URL shortner in the Market</p>
        <p className="px-32 text-center ">We are the most straightforward URL Shortner in the world. Most of the URL shortner will track you
          and ask for personal details and login. We understand your needs hence we have created this URL shortner.
        </p>
        <div className='flex gap-4'>
                    <Link href="/shorten" className='text-white bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold' > <button>Try Now</button></Link>
                    <Link href="https://github.com/ritchh12/" target='_blank'  className='text-white bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold'><button>GitHub</button></Link>
                </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" src="/vector.jpg" fill={true} alt="vector"/> 
        </div>
      </section>
    </main>
  )

}
