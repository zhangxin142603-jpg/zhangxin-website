"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "心理咨询",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟 API 调用
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", phone: "", type: "心理咨询", message: "" });

    // 5秒后重置成功提示
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "邮箱",
      value: "zhangxin@email.com",
      link: "mailto:zhangxin@email.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "电话",
      value: "138-0000-0000",
      link: "tel:13800000000",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "地址",
      value: "北京市朝阳区",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const consultationTypes = [
    { value: "心理咨询", label: "个体心理咨询" },
    { value: "疗法了解", label: "了解子人格疗法" },
    { value: "合作咨询", label: "转介/合作咨询" },
    { value: "其他", label: "其他" },
  ];

  return (
    <div className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-100 dark:border-blue-800">
              预约咨询
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              与我{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                建立联系
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              如果你想了解子人格疗法，或希望预约心理咨询，欢迎通过以下方式与我取得联系。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* 联系信息 */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-6">联系方式</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center group"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${info.color} mr-3`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{info.title}</div>
                          <div className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-100/50 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">咨询方式</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  我提供面对面咨询和视频咨询两种方式。
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>· 面对面：北京朝阳区</li>
                  <li>· 视频：微信/腾讯会议</li>
                  <li>· 每次咨询时长：50分钟</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">工作时间</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p>周二至周六</p>
                  <p>9:00 - 18:00</p>
                  <p className="text-xs text-gray-400 mt-2">* 周日、周一休息</p>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 lg:p-8">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-6">发送消息</h3>

                {isSubmitted ? (
                  <div className="text-center py-10">
                    <CheckCircle className="h-14 w-14 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">消息已发送</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      感谢你的留言。我会尽快回复，通常在24小时内处理。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          姓名
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                          placeholder="请输入你的姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          电话
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                          placeholder="请输入你的电话"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        咨询类型
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      >
                        {consultationTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        留言
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                        placeholder="请简单描述你的情况或想咨询的问题..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          发送中...
                        </>
                      ) : (
                        <>
                          发送消息
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <p className="text-xs text-gray-400 mt-6 text-center">
                  提交表单即表示你同意我根据你的留言与你取得联系。你的信息将严格保密，仅用于回复你的咨询请求。
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
