"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "识别子人格",
    description:
      "通过引导性对话，帮助来访者觉察内心中不同的声音与反应模式——那个总是自我批评的声音、那个渴望被爱的内在小孩、那个习惯保护自己的防御者……",
  },
  {
    number: "02",
    title: "建立联结",
    description:
      "以好奇而非评判的态度，与每一个子人格建立真实的对话关系。理解它们存在的原因，看见它们背后未被满足的需求。",
  },
  {
    number: "03",
    title: "化解冲突",
    description:
      "当不同子人格之间存在对立与冲突时，引导它们相互理解，找到共同的立场，减少内耗，恢复内在的协调与平衡。",
  },
  {
    number: "04",
    title: "整合成长",
    description:
      "随着各子人格逐渐被接纳与整合，来访者会体验到更稳定的自我感、更清晰的边界感，以及更真实的情感表达能力。",
  },
];

const applications = [
  { title: "焦虑与内耗", desc: "内心不同声音的持续冲突往往是焦虑的根源，子人格疗法直接处理这一核心机制。" },
  { title: "自我价值感低", desc: "识别并疗愈那个长期自我批评的子人格，重建健康的自我认知。" },
  { title: "亲密关系困境", desc: "内在关系模式决定外在关系质量，整合内在才能真正改变关系。" },
  { title: "早年创伤", desc: "温和地接触并疗愈那些在创伤中形成的保护性子人格。" },
  { title: "身份认同困惑", desc: "帮助来访者在多元的内在面向中找到稳定的自我核心。" },
  { title: "情绪失调", desc: "理解情绪背后的子人格需求，从根本上提升情绪调节能力。" },
];

export default function TherapySection() {
  return (
    <div className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* 标题 */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 text-sm font-medium mb-4 border border-purple-100 dark:border-purple-800">
              子人格疗法
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              认识你内心的{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                每一个自己
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              子人格疗法是我在多年临床实践中发展出的整合性心理疗法，
              核心理念是：我们每个人内心都不是单一的，而是由多个"子人格"共同构成的复杂系统。
            </p>
          </div>

          {/* 核心理念 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-10 mb-16 border border-blue-100/50 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">什么是子人格？</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              子人格是我们在成长过程中，为了应对不同情境和需求而形成的内在角色。
              它们可能是一个严苛的内在批评者、一个渴望认可的讨好者、一个习惯逃避的保护者，
              或是一个从未被允许长大的内在小孩。
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              这些子人格本身并无好坏之分——它们都是在特定时期为了保护我们而诞生的。
              问题在于，当它们之间缺乏沟通与协调时，就会产生内耗、冲突和痛苦。
              子人格疗法的目标，正是帮助这些内在部分重新建立联结，走向整合。
            </p>
          </div>

          {/* 疗法步骤 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">疗法流程</h3>
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-6 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
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

        </div>
      </div>
    </div>
  );
}
