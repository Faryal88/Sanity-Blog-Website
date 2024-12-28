"use client";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="px-4 sm:px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
      <h1
        className="text-4xl font-bold mb-8 text-center"
      >
        ABOUT US
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="relative h-[200px] mb-6 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
              fill
              alt="Team"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to spreading knowledge and fostering connections through insightful content.
            Our mission began with a straightforward vision: simplify complex subjects for all to understand.
          </p>
        </div>

        <div
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We aim to build a space where innovation and knowledge converge,
            offering meaningful insights to our audience and fostering a
            community of passionate, lifelong learners.
          </p>

          <div className="bg-gray-400 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              {[
                "Curated by Industry Experts",
                "Comprehensive Insights",
                "Collaborative Community Focus",
                "Ongoing Evolution and Creativity"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2"
                >
                  <span className="h-2 w-2 bg-gray-600 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="mt-8 bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-black">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Alfred Brown", role: "Project Manager", imgId: 7 },
            { name: "Emily Davis", role: "UX Designer", imgId: 8 },
            { name: "Sophia Taylor", role: "Full Stack Developer", imgId: 9 },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-gray-500 overflow-hidden">
                <Image
                  src={`https://i.pravatar.cc/150?img=${member.imgId}`}
                  width={112}
                  height={112}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>


          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 