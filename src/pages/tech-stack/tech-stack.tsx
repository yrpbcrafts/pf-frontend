import { ArrowUpRight, Github, Linkedin, Twitter, User, Palette, Code, Zap } from 'lucide-react';

export const TechStack = () => {
    return (
              <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
                Tech Stack
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Backend",
                  icon: Code,
                  techs: ["Python", "PHP", "Java", "Node.js", "MySQL"]
                },
                {
                  category: "Frontend",
                  icon: Palette,
                  techs: ["React.js", "Angular.js", "React + Vite", "Tailwind CSS", "Bootstrap"]
                },
                {
                  category: "UI Libraries",
                  icon: Zap,
                  techs: ["Mantine", "Material UI", "React Components"]
                },
                {
                  category: "AWS & Tools",
                  icon: User,
                  techs: ["EC2", "Lambda", "SQS", "SES", "CodeCommit", "Figma", "Photoshop"]
                }
              ].map((stack, index) => (
                <div key={index} className="group bg-neutral-50/50 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                        <stack.icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">{stack.category}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {stack.techs.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                          <span className="text-sm text-neutral-600">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Featured Technologies */}
            <div className="mt-16">
              <h3 className="text-2xl font-light text-neutral-900 text-center mb-8">
                Featured Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python", "React.js", "AWS Lambda", "Node.js", "Tailwind CSS", 
                  "MySQL", "AWS EC2", "Figma", "Material UI", "Angular.js"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neutral-100/80 backdrop-blur-sm border border-neutral-200/60 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    );
}