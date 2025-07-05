import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import Resuable from './Resuable';

export default function About() {
    return (
        <Resuable id="about">
            {/* Section Title */}
            <div className="text-white flex justify-center mb-6">
                <div className="flex items-center rounded-3xl cursor-pointer gap-2 text-2xl px-4 py-2 bg-amber-500 hover:bg-green-600 transition duration-500">
                    <IoPersonSharp className="text-2xl" />
                    <span className="font-bold flex gap-2">
                        About <span className="text-purple-800">Me</span>
                    </span>
                </div>
            </div>

            {/* About Content */}
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 px-4">
                {/* Profile Image */}
                <div className="cursor-pointer hover:scale-95 transition duration-500">
                    <img
                        src="../Images/me.png"
                        alt="Kapil"
                        className="rounded-3xl shadow-md shadow-gray-500 hover:shadow-amber-400 transition duration-700 w-[250px] md:w-[300px]"
                    />
                </div>

                {/* Description */}
                <div className="text-white max-w-xl">
                    <h1 className="text-3xl font-semibold">
                        I'm <span className="text-amber-400">Kapil</span>
                    </h1>
                    <p className="text-[17px] leading-8 pt-3">
                        A passionate and dedicated <span className="text-amber-400">Developer</span> currently working at
                        <span className="text-amber-400"> Tata Consultancy Services (TCS)</span>. I specialize in building robust, scalable, and efficient web applications.
                        My journey in software development is fueled by curiosity and a constant desire to learn new technologies.
                    </p>
                    <div className="pt-5 text-xl space-y-2">
                        <p><span className="text-purple-500">Email :</span> kapilrayamjhi881@gmail.com</p>
                        <p><span className="text-purple-500">Place :</span> Raipur (C.G)</p>
                    </div>
                </div>
            </div>
        </Resuable>
    );
}
