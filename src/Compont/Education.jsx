import React from 'react';
import Resuable from './Resuable';

export default function Education() {
  const education = [
    {
      img: '/Images/sastra.jpg',
      institution: 'Sastra University',
      course: 'MCA (Online)',
      duration: '2024–2026 | Pursuing',
    },
    {
      img: '/Images/kalinga.png',
      institution: 'Kalinga University',
      course: 'BCA',
      duration: '2021–2024',
    },
    {
      img: '/Images/school.png',
      institution: 'Pt. Harishankar Shukla School',
      course: 'Nursery – Class 12',
      duration: 'Completed',
    },
  ];

  return (
    <Resuable id="education">
      <div className="bg-pink-200 rounded-3xl px-4 py-10">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center justify-center mb-8 text-center gap-3 md:flex-row md:gap-4">
            <img src="/Images/education.png" alt="education" width={70} className="mx-auto" />
            <div className="text-3xl text-amber-400 font-bold">
              My <span className="text-green-600">Education</span>
            </div>
          </div>

        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-8 items-center">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-5 items-center bg-white rounded-2xl px-6 py-6 w-full max-w-[800px] shadow hover:scale-105 transition duration-300"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.institution}
                  className="w-28 sm:w-40 h-auto rounded-xl object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-blue-900">{item.institution}</h1>
                <p className="text-lg text-gray-800">{item.course}</p>
                <h2 className="text-md text-green-700">{item.duration}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Resuable>
  );
}
