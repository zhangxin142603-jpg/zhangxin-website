"use client";

import { Heart, Brain, Users, Target, ArrowRight, Star, Sparkles } from "lucide-react";

const therapyPrinciples = [
  {
    icon: Heart,
    title: "自我接纳",
    description: "帮助来访者认识并接纳自己的各个子人格，消除内心的冲突与矛盾。",
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    icon: Brain,
    title: "内在整合",
    description: "协助不同子人格之间的对话与合作，建立和谐的内在关系。",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    icon: Users,
    title: "关系和谐",
    description: "通过内在子人格的整合，改善人际关系和社交能力。",
    color: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    icon: Target,
    title: "目标达成",
    description: "激活潜力子人格，帮助实现个人成长和人生目标。",
    color: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    icon: Star,
    title: "潜能开发",
    description: "发掘隐藏的子人格资源，提升创造力和问题解决能力。",
    color: "from-yellow-500 to-orange-500",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "灵性成长",
    description: "连接更深层的自我，实现心灵的整合与超越。",
    color: "from-indigo-500 to-blue-500",
    featured: false,
  },
];

export default function TherapySection() {
  return (
    <div className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              子人格疗法
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              探索内在世界的{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                整合之旅
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              子人格疗法是一种创新的心理咨询方法，帮助个体认识和整合内心不同面向，
              实现内在的和谐与平衡，促进心理成长和个人发展。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-6">什么是子人格疗法？</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    子人格疗法基于这样的理解：每个人内心都存在多个不同的"子人格"，
                    这些子人格代表了我们在不同情境下展现的不同面向。它们可能是保护者、
                    批评者、内在小孩、创造者等不同的角色。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    通过子人格疗法，来访者可以学习认识、接纳并整合这些不同的内在部分，
                    减少内心的冲突，增强自我意识和情绪调节能力，最终实现更加和谐、
                    完整的存在状态。
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">
                      创伤疗愈
                    </span>
                    <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                      情绪管理
                    </span>
                    <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
                      自我成长
                    </span>
                  </div>
                </div>
                <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
                <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {therapyPrinciples.slice(0, 4).map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${principle.color} mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{principle.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/20">内在探索</div>
                    </div>
                    {principle.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold flex items-center">
                        <Star className="h-3 w-3 mr-1" fill="white" />
                        核心理念
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${principle.color} mr-3`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {principle.description}
                    </p>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                  焦虑缓解
                </div>
                <div className="text-gray-700 dark:text-gray-300">通过子人格对话减轻内心冲突</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  情绪调节
                </div>
                <div className="text-gray-700 dark:text-gray-300">增强情绪意识和自我调节能力</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
                  自我成长
                </div>
                <div className="text-gray-700 dark:text-gray-300">发掘潜能，实现个人发展目标</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
              >
                了解更多关于子人格疗法
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}