import {
  ArrowUpRight, Github, ExternalLink, Calendar, Tag, Search,
  ShoppingCart
} from 'lucide-react';
import { useState } from 'react';
import typlyImg from '../../assets/images/typly.png';
import horizontalTimeline from '../../assets/images/horizontal-timeline.png';

export const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const showProjects = 'Y' as 'Y' | 'N';

  const projects = [
    {
      id: 1,
      title: "Typly - Blog Platform",
      description: "A modern blog platform built with React, Vite, Tailwind, TypeScript, and Zustand.",
      detailedDescription:
        "Typly is a clean and minimal blog platform designed for fast content publishing. It supports image posts, profiles, category filters, and modal-based post creation.",
      tech: ["React", "Vite", "Tailwind CSS", "TypeScript", "Zustand"],
      category: "Web Development",
      image: typlyImg,
      icon: <ShoppingCart className="w-6 h-6" />,
      date: "2024",
      status: "Completed",
      featured: true,
      website: "https://yrpbcrafts.github.io/typly/",
      github: "https://github.com/yrpbcrafts/typly"
    },
    {
      id: 2,
      title: "Horizontal Timeline",
      description: "A modern and professional timeline design built with HTML, CSS, AND JavaScript.",
      detailedDescription:
        "A professional, interactive timeline component designed to showcase company milestones, achievements, and growth progression. Built with pure HTML, CSS, and JavaScript, this timeline provides a clean, corporate-friendly way to display business history and key accomplishments.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      image: horizontalTimeline,
      icon: <ShoppingCart className="w-6 h-6" />,
      date: "2024",
      status: "Completed",
      featured: true,
      website: "https://yrpbcrafts.github.io/horizontal-timeline/",
      github: "https://github.com/yrpbcrafts/horizontal-timeline"
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="w-full px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6">
            Project Gallery
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore my complete portfolio of web applications, mobile apps, and design projects.
          </p>
          <div className="mt-8 flex items-center justify-center text-sm text-neutral-500">
            <span className="flex items-center space-x-2">
              <span>{showProjects === 'Y' ? projects.length : 0} Projects</span>
              <span>•</span>
              <span>{showProjects === 'Y' ? categories.length - 1 : 0} Categories</span>
              <span>•</span>
              <span>2023 - 2024</span>
            </span>
          </div>
        </div>

        {showProjects === 'Y' ? (
          <>
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeFilter === category
                          ? 'bg-neutral-900 text-white shadow-lg shadow-neutral-300'
                          : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 w-full lg:w-80"
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-500">
                {filteredProjects.length === projects.length
                  ? `Showing all ${projects.length} projects`
                  : `Showing ${filteredProjects.length} of ${projects.length} projects`}
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="group bg-white border border-neutral-200/60 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/40 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Completed'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                      {project.icon}
                    </div> */}

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                        >
                          <Github className="w-4 h-4 text-neutral-700" />
                        </a>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-neutral-700" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-800 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-xs text-neutral-500">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 mb-3">
                      <Tag className="w-3 h-3 text-neutral-400" />
                      <span className="text-sm text-neutral-500">{project.category}</span>
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tech.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-md border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-md border border-neutral-200">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 font-medium text-sm transition-all duration-200 group-hover:transform group-hover:translate-x-1"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-all duration-200" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">No projects found</h3>
                <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setActiveFilter('All');
                    setSearchTerm('');
                  }}
                  className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-2">No Projects to Display Yet</h3>
            <p className="text-neutral-600">Projects are currently hidden. Toggle to view them.</p>
          </div>
        )}
      </div>
    </section>
  );
};
