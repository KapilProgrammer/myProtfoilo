import React from 'react';
import Resuable from './Resuable';

export default function Skills() {
  const skills = [
    { name: 'React Js', logo: '/Images/react.png', key: 1 },
    { name: 'JavaScript', logo: '/Images/javascript.png', key: 2 },
    { name: 'Tailwind CSS', logo: '/Images/tailwent.png', key: 3 },
    { name: 'Dot Net MVC', logo: '/Images/dotnet.png', key: 4 },
    { name: 'Node Js', logo: '/Images/node.png', key: 5 },
    { name: 'Java', logo: '/Images/java.png', key: 6 },
    { name: 'Bootstrap', logo: '/Images/bootstrap.png', key: 7 },
    { name: 'CSS', logo: '/Images/css.png', key: 8 },
    { name: 'Microsoft SQL', logo: '/Images/mssql.png', key: 9 },
    { name: 'Mongo DB', logo: '/Images/mongo.png', key: 10 },
  ];

  return (
    <Resuable id="skills">
      <div className="bg-purple-900 rounded-2xl py-10 px-4">
        {/* Heading */}
        <div className="flex justify-center pb-10">
          <div className="flex items-center gap-3 flex-wrap text-center">
            <img src="/Images/skill.png" alt="skill" width={60} />
            <h2 className="text-3xl text-purple-400 font-semibold">
              Skills & <span className="text-yellow-500">Ability</span>
            </h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {skills.map((item) => (
            <div
              key={item.key}
              className="flex flex-col justify-center items-center gap-4 sm:gap-6 bg-purple-950 p-4 rounded-2xl w-[130px] sm:w-[150px] md:w-[170px] h-[130px] sm:h-[150px] md:h-[170px] hover:bg-pink-400 hover:scale-105 duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-[40px] sm:w-[50px] md:w-[60px] h-auto object-contain"
              />
              <span className="text-white text-center text-[14px] sm:text-[15px] md:text-[16px] font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Resuable>
  );
}
