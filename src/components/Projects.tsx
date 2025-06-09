import React from 'react';
import { Code2, ExternalLink, Github, Database, Cloud, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'High-Throughput Device Monitoring System',
      description: 'Architected a scalable database schema and analytics pipeline for monitoring 20+ million simultaneous device connections. Implemented real-time health tracking with automated reporting capabilities.',
      technologies: ['Python', 'PostgreSQL', 'Kafka', 'Redis', 'Zoho Analytics'],
      category: 'Backend Systems',
      icon: <Database className="w-6 h-6" />,
      highlights: [
        'Handled 20+ million simultaneous connections',
        'Reduced latency to under 2 milliseconds',
        'Improved issue resolution by 30%'
      ]
    },
    {
      title: 'Network Traffic Load Balancer',
      description: 'Developed an intelligent load balancing solution to distribute network traffic across multiple servers during peak device registration periods, significantly improving system reliability.',
      technologies: ['Java', 'REST APIs', 'AWS', 'Microservices'],
      category: 'Cloud Architecture',
      icon: <Cloud className="w-6 h-6" />,
      highlights: [
        'Reduced server load by 40%',
        'Distributed requests across 10+ products',
        'Enhanced system reliability during peak traffic'
      ]
    },
    {
      title: 'AI-Powered Document Analysis Tool',
      description: 'Built a machine learning pipeline for automated document processing and analysis using natural language processing techniques. Implemented text extraction, classification, and insights generation.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Flask'],
      category: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      highlights: [
        'Automated document classification',
        'Real-time text processing',
        'Advanced NLP techniques'
      ]
    },
    {
      title: 'Microservices Communication Layer',
      description: 'Designed and implemented a robust REST API communication framework for agent-server interactions, improving cross-functional team efficiency and system modularity.',
      technologies: ['Python', 'REST APIs', 'Docker', 'Redis'],
      category: 'API Development',
      icon: <Code2 className="w-6 h-6" />,
      highlights: [
        'Improved 5+ product efficiency',
        'Enhanced system modularity',
        'Streamlined team collaboration'
      ]
    }
  ];

  const categoryColors = {
    'Backend Systems': 'bg-blue-100 text-blue-700',
    'Cloud Architecture': 'bg-green-100 text-green-700',
    'Machine Learning': 'bg-purple-100 text-purple-700',
    'API Development': 'bg-orange-100 text-orange-700'
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic & Personal Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A showcase of technical projects demonstrating my expertise in software development, 
            system architecture, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                  {project.icon}
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Github size={16} />
                  View Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/vaishalimurugavel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;