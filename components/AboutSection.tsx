import { User, Target, Award, Brain, Heart, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "以人为本",
      description: "尊重每个来访者的独特性，建立温暖、安全、信任的咨询关系。",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "专业科学",
      description: "基于心理学理论研究和临床实践经验，提供科学有效的心理干预。",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "卓越品质",
      description: "持续学习最新的心理学理论和技术，确保咨询服务的专业性和有效性。",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "教育引导",
      description: "帮助来访者掌握心理调适技能，提升自我认知和情绪管理能力。",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              个人介绍
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              专业心理咨询师 &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                心理学研究者
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              拥有8年以上心理咨询经验，专注于整合性心理咨询和子人格疗法的研究和实践。
              致力于帮助来访者实现心理成长，建立健康的心理模式。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-6">我的理念</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    我相信每个人都拥有自我治愈和成长的内在力量。心理咨询的核心在于创造一个安全、
                    温暖的空间，帮助来访者探索内心世界，识别并整合自我不同面向。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    每个人都是一个复杂而完整的存在，包含多个子人格。子人格疗法的目标是帮助个体
                    认识、接纳并整合这些不同面向，达到内心的和谐与平衡。
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">
                      心理咨询
                    </span>
                    <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                      子人格疗法
                    </span>
                    <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
                      情绪管理
                    </span>
                  </div>
                </div>
                <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
                <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700 dark:text-gray-300">个案咨询</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  200+
                </div>
                <div className="text-gray-700 dark:text-gray-300">团体工作坊</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
                  98%
                </div>
                <div className="text-gray-700 dark:text-gray-300">来访者满意度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}