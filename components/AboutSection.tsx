import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-100 dark:border-blue-800">
              关于我
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              张新
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">心理咨询师 · 子人格疗法（SPT）创始人</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* 左侧：个人照片 */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/zhangxin.jpg"
                  alt="张新 - 心理咨询师"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 右侧：个人简介 */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                我是一名执业心理咨询师，从业超<strong>10年</strong>。在长期的临床实践中，我融合精神分析、客体关系、认知行为疗法CBT、接纳承诺疗法ACT、内在家庭系统IFS、正念减压MBSR、钻石途径、禅宗、阳明心学等多种方法，发展出独特的<strong>子人格疗法（SPT）</strong>。
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>子人格疗法（SPT）</strong>是"巨人肩膀上开出的独特花朵"。疗法认为人的内心并非单一的整体，
                而是由一个"真我"（Self）和多个"子人格"（Sub-personalities/内心小人）共同组成的结构。
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                每一次内心的冲突背后，都藏着一个渴望被看见的自己。我的工作正是帮助这些内在部分重新建立联结，
                通过"虚拟满足，现实解脱"的转化逻辑，让真我的光芒自然显现，实现内心的和平与解脱。
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["焦虑与内耗", "社交恐惧", "拖延症", "亲密关系", "原生家庭创伤", "自我成长", "迷茫感"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm border border-gray-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 底部：基本信息和认证 */}
            <div className="lg:col-span-12 mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">基本信息</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: "学历", value: "心理学硕士" },
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
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-blue-100/50 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">疗法配套</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">·</span>
                      子人格疗法（SPT）创始人
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">·</span>
                      配套App《完美状态》
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">·</span>
                      微信：zhangxin_Self
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">·</span>
                      500+ 成功个案
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* App介绍 */}
            <div className="lg:col-span-12 mt-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">配套App《完美状态》</h3>
                    <p className="text-blue-100 mb-4">
                      疗法配套App，帮助你记录练习过程，跟踪内心成长。从学到练，让改变真正发生。
                    </p>
                    <ul className="space-y-2 text-sm text-blue-100">
                      <li>✓ 咨询师带领演练</li>
                      <li>✓ 个人自主练习</li>
                      <li>✓ 全程记录追踪</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-2xl mb-3">
                      <span className="text-4xl">📱</span>
                    </div>
                    <p className="text-sm text-blue-100">扫码下载 App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
