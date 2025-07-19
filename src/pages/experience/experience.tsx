export const Experience = () => {
  return (
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
                company: "Nityo InfoTech Services Philippines Inc.",
                position: "JavaScript AWS Developer",
                period: "2024 - Present",
                location: "Makati City, PH",
                description: "Responsible for Maintening and DeveResponsible for developing and maintaining web applications and frontend microsites using existing API libraries. Tasks include API integration, enhancing and documenting APIs, deploying applications via CI/CD pipelines, and ensuring code quality and security. Collaborates with team members to meet user requirements while following established coding standards and ensuring scalability and reusability of solutions.",
                achievements: [
                  "Handle development of different applications",
                  "Handle integrations of API",
                  "Maintenance enhance of existing API library",
                  "Create Frontend Microsites and Pages that will use the existing API Library",
                  "MAssist and facilitate the deployment of the applications using the existing CI/CD Framework",
                  "Ensure quality build as well as enforce remediation to vulnerabilities",
                  "Provide proper documentation to the application and API",
                  "Learn the existing code guidelines and frameworks to ensure quality is at par with existing applications",
                  "Collaborate with other team members in delivering the application to the specification of the users",
                  "Raise concerns to the infrastructure head, development head and digitalization head when necessary",
                  "Ensure scalability and reusability of functionalities/applications"
                ]
              },
              {
                company: "NTEK Systems Inc.",
                position: "Web Developer",
                period: "2023 - 2024",
                location: "Quezon City, PH",
                description: "Designed user-centered solutions for SaaS products, collaborated with cross-functional teams, and conducted user research to drive product decisions.",
                achievements: [
                  "Build and maintain Web Server",
                  "Developed RESTful API’s for IoT Projects",
                  "Integration of API’s to IoT Projects and POS Systems / Terminals",
                  "Conducted Web Server Trainings to Clients",
                  "Conducted Demo for clients",
                  "Network configuration for Web Server connections and IoT Project",
                  "Cloud Deployment using Amazon EC2",
                  "Developed Payment Mobile and Traditional POS Terminal",
                  "Optimized applications for both mobile terminals and traditional POS systems.",
                  "Build AI Chatbot for Library Management Systems for user books inquiry",
                  "Build HR AI using Machine Learning, Langchain, Ollama, Llama"
                ]
              },
              {
                company: "BeWell Nutraceuticals Corporation",
                position: "Intern Trainee - Programer",
                period: "2023 - 2023",
                location: "Quezon City, PH",
                description: "Created visual designs for brand campaigns, developed marketing materials, and supported senior designers on client projects.",
                achievements: [
                  "Developed in house Stock Monitoring using Angular, SailsJS, MSSQL",
                  "Collaboration to other Development Team in Development of a Mobile Application Receipt Extraction using Java and OCR",
                  "Responsible for Database SQL Scripting",
                  "Trained for Front-End / Back-End Development"
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