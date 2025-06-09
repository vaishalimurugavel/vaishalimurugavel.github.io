import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Northeastern University',
      location: 'Boston, MA',
      period: 'Expected May 2027',
      description: 'Focusing on advanced topics in software engineering, machine learning, and distributed systems.',
      gpa: '4.0',
      coursework: ['Algorithms & Data Structures', 'Machine Learning', 'Database Systems', 'Software Engineering']
    },
    {
      degree: 'Bachelor of Technology in Information Technology',
      school: 'Anna University',
      location: 'Chennai, Tamil Nadu, India',
      period: 'May 2021',
      description: 'Strong foundation in computer science fundamentals with hands-on experience in software development.',
      gpa: '8.5/10',
      coursework: ['Data Structures', 'Operating Systems', 'Computer Networks', 'Software Engineering']
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold">{edu.school}</h4>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{edu.description}</p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;