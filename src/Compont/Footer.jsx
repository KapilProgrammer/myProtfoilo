import React from 'react';
import { IoCallSharp, IoMail } from "react-icons/io5";
import { FaMapLocationDot, FaHeart } from "react-icons/fa6";

export default function Footer() {
    const headerItem = [
        { name: "Home", id: "home", key: 1 },
        { name: "About", id: "about", key: 2 },
        { name: "Skill", id: "skills", key: 3 },
        { name: "Education", id: "education", key: 4 },
        { name: "Experience", id: "experience", key: 5 },
        { name: "Contact", id: "contact", key: 6 }
    ];

    const contactInfo = [
        { logo: <IoCallSharp />, info: "+91 XX-XXX-XX", key: 1 },
        { logo: <IoMail />, info: "kapilrayamjhi881@gmail.com", key: 2 },
        { logo: <FaMapLocationDot />, info: "Raipur, Chhattisgarh", key: 3 }
    ];

    return (
        <div className='py-10 bg-white'>
            <div className='flex justify-around flex-wrap gap-10 p-10'>
                {/* Portfolio Info */}
                <div className='max-w-md'>
                    <h1 className='text-2xl font-bold'>Kapil's Portfolio</h1>
                    <p className='py-5'>
                        Thank you for visiting my personal portfolio website. Connect with me over socials.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className='text-2xl font-bold mb-2'>Quick Links</h2>
                    {headerItem.map((item) => (
                        <p key={item.key} className='py-0.5 font-semibold'>
                            <a href={`#${item.id}`} className='hover:text-blue-600 transition'>{item.name}</a>
                        </p>
                    ))}
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className='text-2xl font-bold mb-2'>Contact Info</h2>
                    {contactInfo.map((item) => (
                        <div key={item.key} className='flex items-center gap-2 py-1'>
                            {item.logo}
                            <p>{item.info}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className='flex justify-center mt-6'>
                <div className='h-0.5 bg-blue-950 w-3/4'></div>
            </div>

            {/* Bottom Note */}
            <div className='flex justify-center mt-4'>
                <h1 className='text-xl flex items-center gap-1'>
                    Designed With <FaHeart className='text-red-600' /> By
                    <span className='text-amber-600 text-2xl px-2'>Kapil</span>
                </h1>
            </div>
        </div>
    );
}
