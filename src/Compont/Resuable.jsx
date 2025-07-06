import React from 'react';

export default function Resuable({ id, children }) {
  return (
    <section
      id={id}
      className="w-full px-0 sm:px-5 md:px-8 lg:px-10 py-20"
    >
      {children}
    </section>
  );
}
