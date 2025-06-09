import React from 'react';
import { ChevronDown, User } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Photo Placeholder */}
          <div className="relative mx-auto w-40 h-40 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
              <User size={80} className="text-white" />
            </div>
            <div className="absolute inset-0 rounded-full ring-4 ring-white shadow-lg"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Vaishali Murugavel
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Software Developer & Computer Science Graduate Student
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable web applications and exploring cutting-edge technologies in machine learning and cloud computing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;