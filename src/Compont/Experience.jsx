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
      tech: "Graduate Trainee",
      duration: "Aug 2024 - Dec 2024",
      project: "",
      location: "Chennai"
    },
    {
      img: "/Images/ybi.png",
      tech: "Machine Learning & Python",
      duration: "Nov 2022 - Dec 2022",
      project: "Online Internship",
      location: "Raipur"
    }
  ];

  return (
    <Resuable id="experience">
      <div className="flex flex-col items-center px-4 py-10">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <img src="/Images/work.png" alt="work" width={50} />
          <h2 className="text-3xl text-white font-serif">Work Experience</h2>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col items-center gap-6">
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                  <div className="h-10 w-[2px] bg-gray-400"></div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-amber-100 p-5 rounded-3xl w-full max-w-[700px] shadow-md hover:scale-105 transition duration-300">
                <img
                  src={item.img}
                  alt={item.tech}
                  className="w-24 h-24 object-contain"
                />
                <div className="text-center sm:text-left text-sm sm:text-base font-semibold">
                  <h1 className="text-lg text-blue-950">{item.tech}</h1>
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
