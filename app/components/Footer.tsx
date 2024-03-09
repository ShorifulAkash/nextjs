import Link from 'next/link';
import React from 'react'

export const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };

    return (
        <footer className="bg-gray-500 py-3">
            <div className="lg:container max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 mx-auto">
                <p className="text-base text-white text-center">
                    &copy; {getYear()} <Link href={'/'}>Akash</Link>.
                </p>
            </div>
        </footer>
    )
}
