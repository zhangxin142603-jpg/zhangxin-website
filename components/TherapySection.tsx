"use client";

import { ArrowRight, Eye, Search, Sparkles, Sun } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "觉察",
    subtitle: "Awareness",
    description: "敏锐捕捉内心的负面感受或不良行为，通过自我询问发现当前状态偏离了「轻松、自在、无所畏惧」的基准线，从而锁定需要改变的心理卡点。",
    core: "核心评判标准：经常询问自己「我现在是否感到轻松、自在和无畏？」。如果感受到任何压力、顾虑或不适，意味着真我已被某个特定的子人格所遮蔽。",
  },
  {
    number: "02",
    icon: Search,
    title: "内观",
    subtitle: "Introspection",
    description: "闭目向内探索并具象化地识别出主导当前情绪的「子人格」形象（如其年龄、着装、表情及内心想法），并以友善好奇的态度与其建立联结。",
    core: "关键要点：将抽象情绪转化为活生生、具象化的个体形象。意识到「既然我能看到他，那么他就不是我」「他是他，我是我」。",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "转变",
    subtitle: "Transformation",
    description: "在头脑的理想世界中极致满足子人格的匮乏需求，使其负面情绪释放并转化为正向状态，从而交出意识舞台的主导权。",
    core: "核心逻辑：虚拟满足，现实解脱。打破现实限制，利用天马行空的想象。满足要追求「充分」甚至「加倍」，让子人格感受到「爽」或彻底的释然。",
  },
  {
    number: "04",
    icon: Sun,
    title: "真我",
    subtitle: "Self",
    description: "子人格被安抚后回归到本自具足的清明状态，表现为以轻松、自信且充满智慧的「观察者」视角主导现实生活，实现内心的和平与解脱。",
    core: "真我本身是完整、圆满且不匮乏的，天然具备自信、清晰和智慧等特质。这就像「拨开云雾见太阳」，让原本就存在于内心的光芒自然呈现。",
  },
];

const applications = [
  { title: "焦虑与内耗", desc: "内心不同声音的持续冲突往往是焦虑的根源，子人格疗法直接处理这一核心机制。" },
  { title: "自我价值感低", desc: "识别并疗愈那个长期自我批评的子人格，重建健康的自我认知。" },
  { title: "亲密关系困境", desc: "内在关系模式决定外在关系质量，整合内在才能真正改变关系。" },
  { title: "原生家庭创伤", desc: "通过「时空穿越」找回小时候受伤的自己，重新养育，获得疗愈。" },
  { title: "身份认同困惑", desc: "帮助来访者在多元的内在面向中找到稳定的自我核心。" },
  { title: "拖延与迷茫", desc: "理解拖延背后的子人格需求，从根本上改变行为模式。" },
];

const faqs = [
  {
    q: "如何在头脑中满足子人格的需求？",
    a: "头脑是一个充满想象力的空间，在其中你可以不受现实世界物理规则的限制。你可以大胆构思各种场景，给予子人格他们渴望的事物。例如，为害怕社交的孩子构建一个友善的世界，或让失恋的子人格在平行世界中获得理想伴侣的爱护。"
  },
  {
    q: "为什么虚拟构想的场景能让子人格快速平复？",
    a: "当我们将子人格视为独立且真实的个体时，他们的需求也是真实的。满足这些需求的最佳方式是直接提供他们渴望的东西，而不是讲道理。这好比面对哭闹的饥饿孩子，给他一片面包比任何说教都有效。"
  },
  {
    q: "这种做法是否属于「阿Q精神」？",
    a: "两者有本质区别。「阿Q精神」是自我认同了那个受害者身份并进行自我麻痹，而子人格疗法强调「他是他，我是我」。你是在帮助内心的「小人」获得满足，从而让「真我」从负面情绪中剥离出来，以更清晰的头脑应对现实。"
  },
  {
    q: "总是忍不住想分析情绪的来源，会影响效果吗？",
    a: "分析（理智思考）和练习（情感转化）是两条路。过度分析会成为障碍。核心建议是「先解渴再研究」：闭上眼直接对话并安抚它，等内心平静、真我显现后，再去反思这个小人的成因和模式。"
  },
];

export default function TherapySection() {
  return (
    <div className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* 标题 */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 text-sm font-medium mb-4 border border-purple-100 dark:border-purple-800">
              子人格疗法 SPT
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              认识你内心的{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                每一个自己
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              子人格疗法（SPT）是融合心理疗法与修行方法并进行创新的整合性心理疗法，
              核心理念是「1+N」多重自我模型——1个真我 + N个子人格。
            </p>
          </div>

          {/* 核心理念 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-10 mb-16 border border-blue-100/50 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">核心观点</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>「1+N」多重自我模型：</strong>疗法认为人的内心并非单一的整体，而是由一个「真我」（Self）和多个「子人格」（Sub-personalities/内心小人）共同组成的结构。
              </p>
              <p>
                <strong>「金尘模型」：</strong>真我就像发光的金砖，天然具备平静、自信、清晰和慈悲等优良品质；而子人格则如同覆盖在黄金上的泥土、沙子或灰尘。心理问题的根源在于真我被特定的子人格所「淹没」或遮蔽。
              </p>
              <p>
                <strong>「虚拟满足，现实解脱」：</strong>这是疗法的精髓。主张不与子人格讲道理或强行压抑，而是在头脑的理想世界中充分、甚至极致地满足子人格的匮乏需求。当子人格在内在世界感到充盈、安全并「功成身退」时，真我的光芒自然会重新显现。
              </p>
            </div>
          </div>

          {/* 疗法四步 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">四步疗法</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{step.number}</span>
                      </div>
                      <div className="ml-auto">
                        <span className="text-sm text-gray-400">{step.subtitle}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{step.core}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 适用场景 */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">适用议题</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((app) => (
                <div
                  key={app.title}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:border-blue-200 dark:hover:border-blue-700 transition-colors"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{app.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline group"
              >
                想了解更多，欢迎预约初次咨询
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 问答集锦 */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">问答集锦</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-medium text-gray-800 dark:text-gray-200 pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
