import React from 'react'

export default function Resuable({ id, children }) {
  return (
    <section id={id} className="w-full px-10 py-20 lg:px-0">
      {children}
    </section>
  );
}
