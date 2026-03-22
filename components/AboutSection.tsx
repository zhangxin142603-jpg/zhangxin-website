export default function AboutSection() {
  return (
    <div className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-100 dark:border-blue-800">
              关于我
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              张新
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">心理咨询师 · 子人格疗法创始人</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* 左侧：个人简介 */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                我是一名执业心理咨询师，拥有北京师范大学心理学硕士学位，从事心理咨询工作逾八年。
                在长期的临床实践中，我逐渐发展出一套以"子人格"为核心概念的整合性心理疗法。
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                我的工作重心在于帮助来访者认识自己内心中那些被忽视、压抑或冲突的部分——
                我称之为"子人格"。通过温和而深入的对话，引导来访者与这些内在面向建立联结，
                最终实现真正意义上的自我整合。
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                我擅长处理焦虑、抑郁、自我认同困惑、亲密关系困境以及早年创伤等议题。
                我相信，每一次内心的冲突背后，都藏着一个渴望被看见的自己。
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["焦虑与抑郁", "自我认同", "亲密关系", "早年创伤", "情绪调节", "个人成长"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm border border-gray-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 右侧：基本信息 */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">基本信息</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "学历", value: "心理学硕士（北京师范大学）" },
                    { label: "资质", value: "国家二级心理咨询师" },
                    { label: "从业", value: "2016年至今" },
                    { label: "所在地", value: "北京" },
                    { label: "咨询方式", value: "线下 / 线上均可" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">专业认证</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">·</span>
                    国家二级心理咨询师
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">·</span>
                    中国心理学会会员
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">·</span>
                    IFS（内在家庭系统）认证培训
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">·</span>
                    正念认知疗法（MBCT）培训
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">·</span>
                    创伤知情实践认证
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
