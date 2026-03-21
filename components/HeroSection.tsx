"use client";

import { ArrowRight, Heart, Sparkles, Brain, Users } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "专业心理咨询师",
  "子人格疗法创始人",
  "心理健康专家",
  "心理治疗研究者",
  "情绪管理导师",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < role.length) {
      timer = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === role.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl dark:bg-blue-700/20" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl dark:bg-purple-700/20" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="lg:w-7/12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">可预约心理咨询</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                你好，我是{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  张欣
                </span>
              </h1>

              <div className="h-16 mb-8">
                <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                  我是一名{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-400">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </p>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
                我专注于提供专业、温暖的心理咨询服务，帮助来访者探索内心世界，建立健康心理模式。
                作为一名专业心理咨询师和子人格疗法创始人，我相信每个人都有能力实现自我成长和治愈。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#therapy"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  了解子人格疗法
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  预约咨询
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-gray-600 dark:text-gray-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-sm">个案咨询</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">8+</div>
                  <div className="text-sm">从业年限</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
                  <div className="text-sm">来访者满意度</div>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 mt-16 lg:mt-0">
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-2xl">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 mb-8">
                    <Heart className="h-16 w-16 text-white mx-auto" />
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className={`h-3 rounded-full ${i === 1 ? 'bg-blue-500 w-32' : i === 2 ? 'bg-purple-500 w-28' : 'bg-green-500 w-24'}`} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {i === 1 ? '心理咨询' : i === 2 ? '子人格疗法' : '情绪管理'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-400/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}