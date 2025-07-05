import React from 'react';
import Resuable from './Resuable';

export default function Experience() {
    const experience = [
        {
            img: "/Images/tcs.png",
            tech: ".NET Developer",
            duration: "Jan 2025 - Present",
            project: "WebLoc Project",
            location: "Chennai"
        },
        {
            img: "/Images/tcs.png",
            tech: "",
            duration: "Aug 2024 - Dec 2024",
            project: "Graduate Trainee",
            location: "Chennai"
        },
        {
           img: "/Images/ybi.png",
            tech: "Machine Learning & Python",
            duration: "Nov 2022 - Dec 2022",
            project: "Online Intenship",
            location: "Raipur"  
        }
    ];

    return (
        <Resuable id="experience">
            <div className='flex flex-col items-center'>
                {/* Title */}
                <div className='flex gap-2 items-center py-18'>
                    <img src="/Images/work.png" alt="work" width={50} />
                    <h2 className='text-3xl text-white font-serif'>Work Experience</h2>
                </div>

                {/* Timeline */}
                <div className='flex flex-col items-center gap-4'>
                    {experience.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Only show circle & line if it's NOT the first item */}
                            {index !== 0 && (
                                <>
                                    <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                                    <div className='h-10 bg-gray-400 w-[2px]'></div>
                                    <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                                </>
                            )}

                            {/* Experience Card */}
                            <div className='flex items-center gap-10 bg-amber-100 w-110 justify-center p-3.5 rounded-4xl cursor-pointer hover:scale-105 duration-500'>
                                <img src={item.img} alt={item.tech} width={100} />
                                <div className='text-[15px] font-bold'>
                                    <h1>{item.tech}</h1>
                                    <h2>{item.duration}</h2>
                                    {item.project && <h2>{item.project}</h2>}
                                    <h2>{item.location}</h2>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </Resuable>
    );
}
