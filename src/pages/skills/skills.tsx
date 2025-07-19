import { ArrowUpRight, Github, Linkedin, Twitter, User, Palette, Code, Zap } from 'lucide-react';

export const Skills = () => {
    return (
              <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
                What I Do
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                I specialize in creating digital experiences that make a difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Palette, title: 'Design', desc: 'Beautiful, intuitive interfaces' },
                { icon: Code, title: 'Development', desc: 'Clean, efficient code' },
                { icon: Zap, title: 'Strategy', desc: 'Data-driven solutions' }
              ].map((skill, index) => (
                <div key={index} className="group bg-neutral-50/50 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{skill.title}</h3>
                  <p className="text-neutral-600">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}