export default function QualificationsSection() {
  return (
    <div className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 text-sm font-medium mb-4 border border-orange-100 dark:border-orange-800">
              资质与受训
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              专业{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                背景
              </span>
            </h2>
          </div>

          {/* 学历与资质 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">学历</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">·</span>
                  <span className="text-gray-700 dark:text-gray-300">北京师范大学 · 临床心理学硕士（2016）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">·</span>
                  <span className="text-gray-700 dark:text-gray-300">北京师范大学 · 心理学学士（2014）</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">专业资质</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">·</span>
                  <span className="text-gray-700 dark:text-gray-300">国家二级心理咨询师</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">·</span>
                  <span className="text-gray-700 dark:text-gray-300">中国心理学会会员</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">·</span>
                  <span className="text-gray-700 dark:text-gray-300">意象对话珍珠级咨询师</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 培训经历 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">持续专业培训</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                "意象对话疗法（珍珠级培训）",
                "精神分析取向心理治疗",
                "认知行为疗法（CBT）培训",
                "催眠治疗技术",
                "创伤后应激障碍（PTSD）治疗",
                "正念认知疗法（MBCT）",
                "内在家庭系统（IFS）培训",
                "沙盘游戏治疗"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1">
                  <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
