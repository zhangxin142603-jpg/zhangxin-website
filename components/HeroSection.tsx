"use client";

import { ArrowRight, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "心理咨询师",
  "子人格疗法创始人",
  "内在整合研究者",
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
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-900/10 dark:to-purple-900/10" />
      <div className="absolute top-32 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-700/10" />
      <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-700/10" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 mb-8 border border-blue-100 dark:border-blue-800">
            <Brain className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">子人格疗法 · 内在整合</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            你好，我是{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              张新
            </span>
          </h1>

          <div className="h-12 mb-8 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            我相信每个人内心都住着不止一个自己。通过认识、接纳并整合这些内在的不同面向，
            我们可以找到真正的平静与力量。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#therapy"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              了解子人格疗法
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              预约咨询
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-12 text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">500+</div>
              <div className="text-sm mt-1">个案咨询</div>
            </div>
            <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">8年</div>
              <div className="text-sm mt-1">从业经验</div>
            </div>
            <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">子人格</div>
              <div className="text-sm mt-1">疗法创始人</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
