import { ArrowUpRight, Github, Linkedin, Twitter, User, Palette, Code, Zap } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Projects() {
  const showProjects = 'N' as 'Y' | 'N';
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/project/gallery");
  }
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack modern e-commerce solution with real-time inventory and payment processing",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "from-blue-500 to-purple-600",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Design System & UI Kit",
      description: "Comprehensive design system with 100+ components for scalable product development",
      tech: ["Figma", "React", "Storybook"],
      image: "from-pink-500 to-rose-500",
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Performance Analytics Dashboard",
      description: "Real-time analytics platform processing millions of data points with interactive visualizations",
      tech: ["Vue.js", "D3.js", "Python"],
      image: "from-emerald-500 to-teal-600",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication and seamless UX",
      tech: ["React Native", "Firebase", "Stripe"],
      image: "from-orange-500 to-amber-600",
      icon: <User className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              A curated selection of projects that demonstrate my expertise in modern web development,
              user experience design, and technical problem-solving
            </p>
          </div>

          {showProjects === 'Y' && (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/40 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className={`aspect-video bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                        {project.icon}
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                            <Github className="w-4 h-4 text-neutral-700" />
                          </div>
                          <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-neutral-700" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-neutral-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 font-medium transition-all duration-200 group-hover:transform group-hover:translate-x-1">
                        <span>View case study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:w-5 group-hover:h-5 transition-all duration-200" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Projects Button */}
              <div className="text-center">
                <button onClick={handleNavigate} className="group inline-flex items-center space-x-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-0.5">
                  <span className="font-medium">View All Projects</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}