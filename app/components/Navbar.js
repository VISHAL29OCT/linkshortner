import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-16 bg-blue-400 flex justify-between px-4 items-center text-white">
      
      {/* LOGO */}
      <div className="logo font-bold text-lg">
        <Link href="/">SHORTLINK</Link>
      </div>

      {/* MENU */}
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact us</Link>
        </li>

        <li>
          <Link href="/generate">Short here</Link>
        </li>

        <li className="flex gap-2">
          <Link
            href="/generate"
            className="bg-blue-300 rounded-lg shadow-2xl p-2 font-bold"
          >
            TRY NOW
          </Link>

          <Link
            href="/dashboard"
            className="bg-blue-300 rounded-lg shadow-2xl p-2 font-bold"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
