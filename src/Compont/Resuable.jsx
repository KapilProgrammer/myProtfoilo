import React from 'react';

export default function Resuable({ id, children }) {
  return (
    <section
      id={id}
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 md:py-20"
    >
      {children}
    </section>
  );
}
