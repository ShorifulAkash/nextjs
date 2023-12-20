import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="bg-gray-400 py-4">
        <div className="lg:container max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 mx-auto">
            <div className="flex items-center justify-between gap-10">
                <div className="">
                    <Link href="/">Logo</Link>
                </div>
                <ul className="text-base text-gray-100 font-medium flex items-center gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="">
                    <Link href="/discover">Discover</Link>
                </div>
            </div>
        </div>
    </header>
  )
}
