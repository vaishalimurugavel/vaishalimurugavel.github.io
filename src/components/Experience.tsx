import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = [
    {
      title: 'Software Developer',
      company: 'ManageEngine (Zoho Corporation)',
      location: 'Chennai, India',
      period: 'May 2021 - December 2024',
      description: [
        'Designed and implemented a high-throughput database schema for device health tracking of 20+ million simultaneous connections, enabling efficient and analytical insights.',
        'Automated weekly analysis reporting using Zoho Analytics, improving issue resolution by 30% by reducing latency to under 2 milliseconds while managing device traffic.',
        'Developed a network traffic load balancer to handle peak traffic during device registrations, reducing server load by 40% by distributing the request across 10+ internal products.',
        'Built a robust REST API communication layer for agent-server interaction, improving 5+ product and cross-functional team efficiency.',
        'Integrated cloud-based microservices such as Kafka, Redis cache, and CDN within a high-scale architecture to enhance system performance.',
        'Led the modularization of Cache, File Access, and Scheduler modules, refactoring monolithic codebase and improving 5+ product modularity, reusability.',
        'Collaborated with data analysts to create 10+ cross-functional documentation and high customer satisfaction.',
        'Used the Zoho Desk to manage support tickets, ensuring quick response and high customer satisfaction.',
        'Authored internal documentation, reviewing codebase for 10+ cross-functional teams and stakeholders.'
      ],
      technologies: ['Python', 'Java', 'REST APIs', 'Kafka', 'Redis', 'PostgreSQL', 'AWS', 'Zoho Analytics']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-6 mt-1">
                  <Briefcase size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <ChevronRight size={16} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                        >
                          {tech}
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

export default Experience;