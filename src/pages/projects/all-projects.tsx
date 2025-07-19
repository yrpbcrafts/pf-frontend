import {
  ArrowUpRight, Github, ExternalLink, Calendar, Tag, Filter, Search,
  Code, Palette, Zap, User, Globe, Smartphone, Database,
  ShoppingCart, BarChart3, Camera
} from 'lucide-react';
import { useState } from 'react';

export const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
//   const [showProjects, setShowProjects] = useState<'Y' | 'N'>('Y');

const showProjects = 'N' as 'Y' | 'N';
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      detailedDescription: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment integration with Stripe, order tracking, and analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "Web Development",
      image: "from-blue-500 to-purple-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      date: "2024",
      status: "Completed",
      featured: true
    },
    {
      id: 2,
      title: "Design System & UI Kit",
      description: "Comprehensive design system with 100+ components for scalable product development across multiple platforms.",
      detailedDescription: "A complete design system featuring reusable components, design tokens, documentation site, and implementation across web and mobile platforms.",
      tech: ["Figma", "React", "Storybook", "TypeScript", "Styled Components"],
      category: "Design",
      image: "from-pink-500 to-rose-500",
      icon: <Palette className="w-6 h-6" />,
      date: "2024",
      status: "Ongoing",
      featured: true
    },
    {
      id: 3,
      title: "Performance Analytics Dashboard",
      description: "Real-time analytics platform processing millions of data points with interactive visualizations and automated reporting.",
      detailedDescription: "Enterprise-grade analytics platform with real-time data processing, custom dashboard creation, automated alerts, and comprehensive reporting tools.",
      tech: ["Vue.js", "D3.js", "Python", "Redis", "Docker"],
      category: "Web Development",
      image: "from-emerald-500 to-teal-600",
      icon: <BarChart3 className="w-6 h-6" />,
      date: "2024",
      status: "Completed",
      featured: true
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication, seamless UX, and comprehensive financial management tools.",
      detailedDescription: "Full-featured banking app with account management, transaction history, bill payments, budget tracking, and advanced security features.",
      tech: ["React Native", "Firebase", "Stripe", "TouchID", "FaceID"],
      category: "Mobile Development",
      image: "from-orange-500 to-amber-600",
      icon: <Smartphone className="w-6 h-6" />,
      date: "2023",
      status: "Completed",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
      detailedDescription: "Fully responsive portfolio site with project showcase, blog integration, contact forms, and optimized performance.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Web Development",
      image: "from-violet-500 to-purple-600",
      icon: <Globe className="w-6 h-6" />,
      date: "2024",
      status: "Ongoing",
      featured: false
    },
    {
      id: 6,
      title: "Task Management System",
      description: "Collaborative task management platform with team features, project tracking, and productivity analytics.",
      detailedDescription: "Enterprise task management solution with team collaboration, project timelines, resource allocation, and performance metrics.",
      tech: ["Angular", "Node.js", "MongoDB", "Socket.io", "JWT"],
      category: "Web Development",
      image: "from-cyan-500 to-blue-600",
      icon: <Code className="w-6 h-6" />,
      date: "2023",
      status: "Completed",
      featured: false
    },
    {
      id: 7,
      title: "Photography Portfolio",
      description: "Elegant photography portfolio with image galleries, client management, and booking system for professional photographers.",
      detailedDescription: "Professional photography website with portfolio galleries, client proofing system, booking calendar, and payment integration.",
      tech: ["WordPress", "PHP", "MySQL", "Lightbox", "WooCommerce"],
      category: "Design",
      image: "from-slate-500 to-gray-600",
      icon: <Camera className="w-6 h-6" />,
      date: "2023",
      status: "Completed",
      featured: false
    },
    {
      id: 8,
      title: "Data Visualization Tool",
      description: "Interactive data visualization platform for creating custom charts, graphs, and dashboards from various data sources.",
      detailedDescription: "Powerful data visualization tool supporting multiple data sources, custom chart creation, real-time updates, and collaborative dashboards.",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "Web Development",
      image: "from-indigo-500 to-blue-600",
      icon: <Database className="w-6 h-6" />,
      date: "2023",
      status: "Completed",
      featured: false
    }
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
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6">
              Project Gallery
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Explore my complete portfolio of web applications, mobile apps, and design projects. 
              Each project represents a unique challenge and creative solution.
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
                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
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

                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent w-full lg:w-80"
                    />
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-neutral-500">
                  {filteredProjects.length === projects.length 
                    ? `Showing all ${projects.length} projects`
                    : `Showing ${filteredProjects.length} of ${projects.length} projects`
                  }
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="group bg-white border border-neutral-200/60 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/40 transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Project Visual */}
                    <div className={`aspect-video bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                        {project.icon}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                            <Github className="w-4 h-4 text-neutral-700" />
                          </button>
                          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                            <ExternalLink className="w-4 h-4 text-neutral-700" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
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

                      <button className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 font-medium text-sm transition-all duration-200 group-hover:transform group-hover:translate-x-1">
                        <span>View project details</span>
                        <ArrowUpRight className="w-4 h-4 transition-all duration-200" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
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
      </div>
    </section>
  );
};
