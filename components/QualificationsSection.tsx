import { GraduationCap, Award, Book, Heart, Brain, Users } from "lucide-react";

const qualificationCategories = [
  {
    icon: GraduationCap,
    title: "学历教育",
    color: "from-blue-500 to-cyan-500",
    qualifications: [
      { name: "临床心理学硕士", level: 95 },
      { name: "心理学学士", level: 90 },
      { name: "心理咨询师认证", level: 98 },
      { name: "精神病理学培训", level: 85 },
      { name: "心理测量学", level: 88 },
      { name: "发展心理学", level: 90 },
    ],
  },
  {
    icon: Award,
    title: "专业认证",
    color: "from-purple-500 to-pink-500",
    qualifications: [
      { name: "国家二级心理咨询师", level: 95 },
      { name: "心理治疗师认证", level: 90 },
      { name: "创伤治疗认证", level: 88 },
      { name: "家庭治疗师认证", level: 85 },
      { name: "催眠治疗认证", level: 80 },
      { name: "艺术治疗培训", level: 75 },
    ],
  },
  {
    icon: Book,
    title: "理论基础",
    color: "from-green-500 to-emerald-500",
    qualifications: [
      { name: "人本主义心理学", level: 95 },
      { name: "认知行为疗法", level: 90 },
      { name: "精神分析理论", level: 85 },
      { name: "存在主义心理学", level: 88 },
      { name: "系统家庭治疗", level: 82 },
      { name: "积极心理学", level: 92 },
    ],
  },
  {
    icon: Heart,
    title: "临床专长",
    color: "from-orange-500 to-red-500",
    qualifications: [
      { name: "子人格疗法", level: 98 },
      { name: "焦虑障碍咨询", level: 95 },
      { name: "抑郁情绪干预", level: 90 },
      { name: "创伤后应激障碍", level: 88 },
      { name: "人际关系咨询", level: 92 },
      { name: "情绪管理训练", level: 94 },
    ],
  },
  {
    icon: Brain,
    title: "治疗方法",
    color: "from-indigo-500 to-blue-500",
    qualifications: [
      { name: "对话式治疗", level: 96 },
      { name: "认知重构技术", level: 90 },
      { name: "情绪焦点疗法", level: 88 },
      { name: "沙盘游戏治疗", level: 75 },
      { name: "正念冥想引导", level: 92 },
      { name: "角色扮演技术", level: 85 },
    ],
  },
  {
    icon: Users,
    title: "群体服务",
    color: "from-yellow-500 to-orange-500",
    qualifications: [
      { name: "个体心理咨询", level: 98 },
      { name: "夫妻关系咨询", level: 90 },
      { name: "家庭治疗", level: 85 },
      { name: "团体工作坊", level: 88 },
      { name: "企业心理辅导", level: 80 },
      { name: "心理健康讲座", level: 95 },
    ],
  },
];

export default function QualificationsSection() {
  return (
    <div className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              专业资质
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              心理咨询{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                专业资质
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              拥有全面的心理学教育背景和丰富的临床经验，持续学习和实践最新的心理咨询理论和技术。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualificationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color} mr-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.qualifications.map((qualification, qIndex) => (
                      <div key={qIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {qualification.name}
                          </span>
                          <span className="text-blue-600 dark:text-blue-400 font-bold">
                            {qualification.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${qualification.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">持续学习与专业发展</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                我相信心理咨询是一个需要终身学习的专业。我定期参加国内外心理学研讨会，
                阅读最新的心理学研究文献，不断更新和提升自己的专业能力。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                  神经心理学进展
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                  文化心理学研究
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                  数字化心理干预
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                  跨文化心理咨询
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                  心理创伤研究
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}