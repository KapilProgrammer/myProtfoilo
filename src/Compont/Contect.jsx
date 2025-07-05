import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Resuable from './Resuable';

export default function Contect() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fdxgs4x', 'template_e8yizwm', form.current, '0WjS5SCl0wmhFPV31')
            .then((result) => {
                alert('Message Sent Successfully!');
            }, (error) => {
                alert('Failed to send: ' + error.text);
            });
    };

    return (
        <Resuable id="contact">
            <div className="px-4 py-10">
  <div className="max-w-6xl mx-auto bg-pink-100 p-6 rounded-2xl">
    <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-md">
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="../Images/contactMe.png" alt="Contact" className="max-w-[250px] w-full" />
      </div>

      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 flex flex-col gap-4">
        <input type="text" name="user_name" placeholder="Name" className="w-full border h-10 rounded-sm bg-gray-300 p-3" required />
        <input type="email" name="user_email" placeholder="Email" className="w-full border h-10 rounded-sm bg-gray-300 p-3" required />
        <input type="text" name="phone" placeholder="Phone No" className="w-full border h-10 rounded-sm bg-gray-300 p-3" />
        <textarea name="message" placeholder="Message" className="h-32 resize-none w-full border rounded-sm bg-gray-300 p-3" required />
        <input type="submit" value="Send" className="bg-blue-900 px-5 py-2 rounded-2xl text-xl text-white cursor-pointer" />
      </form>
    </div>
  </div>
</div>
        </Resuable>
    );
}
