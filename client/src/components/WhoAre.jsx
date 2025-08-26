import React from 'react'
import logo from '../assets/logo.jpg'

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content Box */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
              <h2 className="text-4xl font-bold text-white mb-6">
                Who are we?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Nepal Tech Robotics is a leading technology company dedicated to
                advancing robotics education and innovation in Nepal. We specialize
                in creating cutting-edge robotic solutions and providing
                comprehensive training programs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to inspire the next generation of engineers and
                innovators through hands-on robotics education, workshops, and
                real-world applications that solve everyday problems.
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Big Logo */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={logo}
                alt="Nepal Tech Robotics Logo"
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-gray-700"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection