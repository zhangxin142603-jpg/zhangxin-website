import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    period: "2022 - Present",
    description:
      "Leading frontend development for enterprise SaaS products. Implemented micro-frontend architecture, improved performance by 40%, and mentored junior developers.",
    highlights: [
      "Reduced bundle size by 35% through code splitting",
      "Implemented design system used by 50+ components",
      "Led migration from class components to React hooks",
    ],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver features on schedule.",
    highlights: [
      "Built real-time collaboration features using WebSockets",
      "Improved API response time by 60%",
      "Implemented comprehensive testing suite",
    ],
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description:
      "Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
    highlights: [
      "Delivered 30+ client projects on time",
      "Achieved 95+ Lighthouse scores",
      "Implemented SEO best practices",
    ],
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
  },
  {
    type: "education",
    title: "Master's in Computer Science",
    company: "University of Technology",
    period: "2016 - 2018",
    description:
      "Specialized in Software Engineering and Human-Computer Interaction. Thesis on progressive web applications.",
    highlights: [
      "Graduated with honors",
      "Published research paper on PWA performance",
      "Teaching assistant for web development course",
    ],
    icon: GraduationCap,
    color: "from-orange-500 to-red-500",
  },
  {
    type: "education",
    title: "Bachelor's in Information Systems",
    company: "State University",
    period: "2012 - 2016",
    description:
      "Focused on database systems and web technologies. President of Computer Science Club.",
    highlights: [
      "Dean's List all semesters",
      "Organized hackathons with 200+ participants",
      "Built campus event management system",
    ],
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-500",
  },
];

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Award,
  },
  {
    title: "Google UX Design Professional",
    issuer: "Google",
    year: "2022",
    icon: Award,
  },
  {
    title: "React Advanced Certification",
    issuer: "Meta",
    year: "2021",
    icon: Award,
  },
  {
    title: "TypeScript Mastery",
    issuer: "Microsoft",
    year: "2020",
    icon: Award,
  },
];

export default function ExperienceSection() {
  return (
    <div className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              EXPERIENCE & EDUCATION
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A timeline of my career progression, education, and professional achievements.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative lg:w-1/2 ${isLeft ? "lg:mr-auto lg:pr-12 lg:text-right" : "lg:ml-auto lg:pl-12"}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} z-10 ${
                        isLeft
                          ? "left-full lg:left-auto lg:right-0 lg:transform lg:translate-x-1/2"
                          : "right-full lg:right-auto lg:left-0 lg:transform lg:-translate-x-1/2"
                      }`}
                    />

                    <div
                      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 ${
                        isLeft ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} mr-4`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className={`flex-1 ${isLeft ? "lg:text-right" : ""}`}>
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <ul className={`space-y-2 ${isLeft ? "lg:text-right" : ""}`}>
                        {exp.highlights.map((highlight, hi) => (
                          <li
                            key={hi}
                            className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
                          >
                            {!isLeft && <div className="w-1 h-1 rounded-full bg-blue-500 mr-2" />}
                            <span className="flex-1">{highlight}</span>
                            {isLeft && <div className="w-1 h-1 rounded-full bg-blue-500 ml-2" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-12">
              Certifications &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Achievements
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group hover:-translate-y-1 transition-transform"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">{cert.year}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">Professional Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}