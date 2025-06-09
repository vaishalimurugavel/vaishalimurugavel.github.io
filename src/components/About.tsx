import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'JavaScript', 'SQL'],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: 'Web Technologies',
      items: ['Django', 'Flask', 'REST APIs'],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: 'Cloud & Distributed Systems',
      items: ['Kafka', 'Redis', 'AWS'],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: 'Machine Learning & AI',
      items: ['NLP', 'TensorFlow', 'OpenCV'],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated software developer with over 3 years of experience building scalable web applications 
              and data-driven solutions. Currently pursuing my Master's in Computer Science at Northeastern University, 
              I'm passionate about leveraging technology to solve complex problems.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My experience at ManageEngine (Zoho Corporation) has given me deep expertise in backend development, 
              API design, and working with distributed systems. I enjoy working on projects that involve machine learning, 
              natural language processing, and cloud technologies.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, I love exploring new technologies, contributing to open-source projects, 
              and staying up-to-date with the latest developments in computer science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;