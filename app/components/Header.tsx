'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export const Header = () => {
    const pathname = usePathname()

    return (
        <header className="bg-gray-400 py-4">
            <div className="lg:container max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 mx-auto">
                <div className="flex items-center justify-between gap-10">
                    <div className="">
                        <Link href="/">Logo</Link>
                    </div>
                    <ul className="text-base text-gray-100 font-medium flex items-center gap-4">
                        <li>
                            <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className={`link ${pathname === '/portfolio' ? 'active' : ''}`}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={`link ${pathname === '/blog' ? 'active' : ''}`}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="">
                        <Link href="/discover" className={`link ${pathname === '/discover' ? 'active' : ''}`}>
                            Discover
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
