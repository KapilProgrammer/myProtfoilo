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
      <div className="bg-pink-200 rounded-4xl px-4 py-10">
        {/* Heading */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <img src="/Images/education.png" alt="education" width={70} />
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
              className="flex flex-col md:flex-row gap-6 items-center bg-amber-50 rounded-3xl px-6 py-4 w-full max-w-[700px] hover:scale-105 transition-transform duration-500 cursor-pointer shadow"
            >
              <img
                src={item.img}
                alt={item.institution}
                className="rounded-2xl shadow-md w-[120px] md:w-[200px]"
              />
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold text-blue-950">{item.institution}</h1>
                <p className="text-lg">{item.course}</p>
                <h2 className="text-xl text-green-900">{item.duration}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Resuable>
  );
}
