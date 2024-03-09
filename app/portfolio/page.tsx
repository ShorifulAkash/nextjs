import React from 'react'
import type { Metadata } from 'next'
import { Hero } from '../components/Hero'

export const metadata: Metadata = {
    title: 'Portfolio',
}

const PortfolioPage = () => {
    return (
        <>
            <Hero 
                title="Portfolio"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ducimus culpa placeat laudantium nostrum assumenda sit excepturi ullam perspiciatis! Facilis."
            />
        </>
    )
}

export default PortfolioPage