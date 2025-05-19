import React from 'react';

export default function QuoteSection() {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-end"
      style={{
        backgroundImage:
          "url('/homehand.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl p-6 mr-10 max-w-md shadow-md">
        <h2 className="text-2xl font-bold text-black mb-2">
          We know you want to learn more
        </h2>
        <p className="text-gray-700 mb-4">
          Talk to our expert and get clarity on your construction needs. We&apos;re
          here to guide you every step of the way.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
          Get a Quote
        </button>
      </div>
    </div>
  );
}
