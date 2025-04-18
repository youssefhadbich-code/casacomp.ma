import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Automotive Manufacturing',
    description: 'Complete compressed air system upgrade for major automotive manufacturer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    category: 'Manufacturing'
  },
  {
    title: 'Food Processing',
    description: 'Energy-efficient air system for food processing facility',
    image: 'https://images.unsplash.com/photo-1581091226825-c6a2a5aee158?auto=format&fit=crop&q=80',
    category: 'Food & Beverage'
  },
  {
    title: 'Pharmaceutical Production',
    description: 'Clean air system installation for pharmaceutical manufacturer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    category: 'Pharmaceutical'
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover how we've helped industries optimize their operations with our
              compressed air solutions.
            </p>
          </div>
          <button className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-semibold">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-semibold flex items-center group/btn">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-8 flex items-center justify-center text-blue-600 font-semibold">
          View All Projects
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Projects;