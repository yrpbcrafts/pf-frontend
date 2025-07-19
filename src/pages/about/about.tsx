import profileImg from '../../assets/images/profile.jpeg';
import resumeFile from '../../assets/resumes/RESUME_YVESREYBADAN.pdf';
export const About = () => {
    return (
        <section id="about" className="py-24 bg-neutral-50">
            <div className="w-full px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900">
                                About Me
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                I'm a passionate designer and developer with over 5 years of experience creating digital solutions that drive results. I believe in the power of good design to solve real problems.
                            </p>
                            <div className="flex items-center space-x-4">
                                <a 
                                    href="/resumes/RESUME_YVESREYBADAN.pdf"
                                    download
                                    className="px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 inline-block text-center"
                                >
                                    Download CV
                                </a>
                                <button 
                                    onClick={() => {
                                        const aboutSection = document.getElementById('about');
                                        aboutSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-full font-medium hover:bg-neutral-100 transition-all duration-300"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src={profileImg} 
                                    alt="Profile photo"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neutral-900 rounded-full opacity-10"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neutral-400 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}