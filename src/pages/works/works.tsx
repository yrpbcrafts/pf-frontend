export const Works = () => {
    return(
      <section id="experience" className="py-24 bg-white">
        <div className="w-full px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
                Work Experience
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                My professional journey in creating digital experiences
              </p>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  company: "Digital Innovation Studio",
                  position: "Senior UI/UX Designer",
                  period: "2022 - Present",
                  location: "San Francisco, CA",
                  description: "Leading design initiatives for enterprise clients, managing a team of 3 designers, and establishing design systems that improved development efficiency by 40%.",
                  achievements: [
                    "Redesigned flagship product increasing user engagement by 35%",
                    "Implemented design system used across 12+ products",
                    "Mentored junior designers and led design workshops"
                  ]
                },
                {
                  company: "TechFlow Solutions",
                  position: "Product Designer",
                  period: "2020 - 2022",
                  location: "New York, NY",
                  description: "Designed user-centered solutions for SaaS products, collaborated with cross-functional teams, and conducted user research to drive product decisions.",
                  achievements: [
                    "Launched 3 major product features with 95% user satisfaction",
                    "Reduced user onboarding time by 50% through UX improvements",
                    "Conducted 50+ user interviews and usability tests"
                  ]
                },
                {
                  company: "Creative Agency Co.",
                  position: "Junior Designer",
                  period: "2019 - 2020",
                  location: "Los Angeles, CA",
                  description: "Created visual designs for brand campaigns, developed marketing materials, and supported senior designers on client projects.",
                  achievements: [
                    "Designed campaigns for 20+ clients across various industries",
                    "Improved design workflow efficiency by 25%",
                    "Won 'Rising Talent' award for exceptional creativity"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="lg:w-1/3 space-y-2">
                      <div className="inline-flex items-center space-x-2 bg-neutral-100 rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
                        <span className="text-sm font-medium text-neutral-700">{job.period}</span>
                      </div>
                      <p className="text-sm text-neutral-500">{job.location}</p>
                    </div>
                    
                    <div className="lg:w-2/3 bg-neutral-50/50 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-8 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-neutral-900 mb-1">{job.position}</h3>
                          <p className="text-lg text-neutral-600 font-medium">{job.company}</p>
                        </div>
                        
                        <p className="text-neutral-600 leading-relaxed">{job.description}</p>
                        
                        <div className="space-y-3">
                          <h4 className="font-medium text-neutral-900">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-neutral-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden lg:block absolute left-[16.66%] top-full w-px h-12 bg-gradient-to-b from-neutral-300 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}