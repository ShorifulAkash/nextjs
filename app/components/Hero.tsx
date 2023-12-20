import React from 'react'

import bg from '../../public/img/hero.jpg'


export const Hero = (props) => {
    return (
        <div style={{ backgroundImage: `url(${bg.src})`, }} className="h-96 flex items-center justify-center bg-purple-400/30 bg-no-repeat bg-center bg-cover bg-blend-overlay">
            <div className="lg:container max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 mx-auto">
                <h1 className="text-5xl font-bold text-center">
                    {props.title}
                </h1>
                <p className="text-lg text-center max-w-5xl mx-auto mt-3">
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}
