'use client';

import { useEffect, useState } from 'react';

const videos = [
  { id: 1, url: 'https://www.youtube.com/embed/qXU3WujYuqw' },
  { id: 2, url: 'https://www.youtube.com/embed/XVSRm80WzZk' },
  { id: 3, url: 'https://www.youtube.com/embed/CHpA5NP4pdk' },
  { id: 4, url: 'https://www.youtube.com/embed/C5a5lBTcF7I' },
];

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    location: 'Delhi',
    rating: 5,
    comment: 'Professional work with timely delivery!',
  },
  {
    id: 2,
    name: 'Priya Jain',
    location: 'Pune',
    rating: 4,
    comment: 'The quality of construction was excellent.',
  },
  {
    id: 3,
    name: 'Ravi Mehta',
    location: 'Mumbai',
    rating: 5,
    comment: 'Trusted team and great project management.',
  },
  {
    id: 4,
    name: 'Karan Patel',
    location: 'Ahmedabad',
    rating: 5,
    comment: 'Delivered exactly what was promised!',
  },
];

export default function ProjectSlider() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % Math.ceil(videos.length / 2));
    }, 4000);
    return () => clearInterval(videoInterval);
  }, []);

  useEffect(() => {
    const testiInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testiInterval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 bg-gray-50">
      {/* Videos Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Watch Our Project Videos</h2>
        <p className="text-gray-600 mb-4">What our clients have to say about us</p>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${videoIndex * 100}%)`,
              width: `${Math.ceil(videos.length / 2) * 100}%`,
            }}
          >
            {Array.from({ length: Math.ceil(videos.length / 2) }).map((_, i) => (
              <div className="grid grid-cols-2 gap-4 w-full shrink-0 px-1" key={i}>
                {videos.slice(i * 2, i * 2 + 2).map((video) => (
                  <iframe
                    key={video.id}
                    src={`${video.url}?controls=0&modestbranding=1&rel=0`}
                    className="w-full h-40 rounded-xl shadow border border-gray-300"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots for video */}
        <div className="flex justify-center mt-2 space-x-2">
          {Array.from({ length: Math.ceil(videos.length / 2) }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === videoIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
{/* Testimonials Section */}
<div>
  <h2 className="text-2xl font-bold mb-2">Client Testimonials</h2>
  <p className="text-gray-600 mb-4">What our clients say about us</p>

  <div className="overflow-hidden relative h-60">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(-${testimonialIndex * 100}%)`,
        width: `${testimonials.length * 100}%`,
      }}
    >
      {testimonials.map((t) => (
        <div key={t.id} className="w-full shrink-0 px-2">
          <div className="bg-white p-4 rounded-xl shadow h-60 flex flex-col justify-center">
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.location}</p>
            <div className="flex items-center my-1 text-yellow-500 text-lg">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <p className="text-gray-700 text-sm">{t.comment}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Dots for testimonials */}
  <div className="flex justify-center mt-2 space-x-2">
    {testimonials.map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i === testimonialIndex ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      ></div>
    ))}
  </div>
</div>
    </div>
  );
}
