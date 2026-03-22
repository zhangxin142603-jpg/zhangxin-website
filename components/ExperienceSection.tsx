import { Calendar, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "独立执业心理咨询师",
    company: "个人工作室",
    period: "2021 - 至今",
    description: "提供个体心理咨询与意象对话治疗，专注于子人格疗法的临床实践与推广。",
  },
  {
    type: "work",
    title: "心理咨询师",
    company: "北京某心理咨询中心",
    period: "2018 - 2021",
    description: "从事心理咨询工作，积累了大量焦虑、抑郁、创伤等议题的临床经验。",
  },
  {
    type: "work",
    title: "心理治疗助理",
    company: "北京师范大学心理学部",
    period: "2016 - 2018",
    description: "参与心理辅导与研究工作，协助导师进行临床心理学研究。",
  },
  {
    type: "education",
    title: "临床心理学硕士",
    company: "北京师范大学",
    period: "2014 - 2016",
    description: "师从著名临床心理学家，专注于心理咨询与治疗方向。",
  },
  {
    type: "education",
    title: "心理学学士",
    company: "北京师范大学",
    period: "2010 - 2014",
    description: "系统学习心理学基础理论与研究方法。",
  },
];

const certifications = [
  { title: "国家二级心理咨询师", issuer: "人力资源和社会保障部" },
  { title: "意象对话珍珠级咨询师", issuer: "意象对话研究中心" },
  { title: "催眠治疗师认证", issuer: "中国心理学会" },
  { title: "创伤知情实践培训", issuer: "创伤治疗研究所" },
];

export default function ExperienceSection() {
  return (
    <div className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 text-sm font-medium mb-4 border border-green-100 dark:border-green-800">
              专业经历
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              我的{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                执业历程
              </span>
            </h2>
          </div>

          {/* 时间线 */}
          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const isEducation = exp.type === "education";
              return (
                <div
                  key={index}
                  className="relative flex gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isEducation 
                        ? "bg-orange-100 dark:bg-orange-900/30" 
                        : "bg-blue-100 dark:bg-blue-900/30"
                    }`}>
                      {isEducation ? (
                        <GraduationCap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      ) : (
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                      <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 资质证书 */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">专业资质</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-200 text-sm">{cert.title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
