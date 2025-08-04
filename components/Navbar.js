import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center text-white bg-purple-700 h-16 px-4'>
            <div className='logo font-bold text-2xl'>
                <Link href="/">BitLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href="/"> <li>Home </li></Link>
                <Link href="/about"> <li>About </li></Link>
                <Link href="/shorten"> <li>Shorten </li></Link>
                <Link href="/contact"> <li>Contact Us</li></Link>
                <li className='flex gap-4'>
                    <Link href="/shorten" className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold' > <button>Try Now</button></Link>
                    <Link href="https://github.com/ritchh12/" target='_blank' className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold'><button>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
