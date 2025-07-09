import React from 'react';
import DotGrid from '../Animation/DotGrid.jsx';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen py-20" id="home">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#5227FF"
                    activeColor="#FFD700"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-5 md:px-10 lg:px-20 flex flex-col-reverse pt-25 lg:flex-row items-center justify-around gap-10 lg:gap-28">
                {/* Text Section */}
                <div className="flex flex-col gap-5 text-white text-center lg:text-left max-w-xl">
                    <h1 className="text-4xl sm:text-5xl font-bold text-green-400">Hi There,</h1>
                    <h2 className="text-3xl sm:text-4xl">
                        I am <span className="text-yellow-500">Kapil</span>
                    </h2>

                    {/* ✅ Only This Line Animates */}
                    {/* Typing Animation (Only text animates, layout fixed) */}
                    <div className="h-[40px] relative text-2xl sm:text-3xl text-blue-300 font-semibold">
                        <TypeAnimation
                            sequence={[
                                'I am a .NET Developer at TCS',
                                2000,
                                'I work with MERN stack',
                                2000,
                                'I love building UIs',
                                2000,
                                'I enjoy learning new tech',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="absolute top-0 left-0 w-full text-center lg:text-left"
                        />
                    </div>


                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1bWTyOQVzLkio7yGUBejJ9Pe9fKQXSSGZ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-900 hover:bg-blue-700 text-white w-[73%] my-12 hover:text-yellow-300 px-6 py-2 rounded-full text-lg transition duration-500 mx-auto lg:mx-0"
                    >
                        My Resume
                    </a>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src="/Images/myPhoto.png"
                        alt="Kapil"
                        className="w-60 sm:w-72 md:w-96 h-100 rounded-full shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
