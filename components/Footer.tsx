import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800 dark:text-gray-200">张新</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">心理咨询师 · 子人格疗法</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              首页
            </a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              关于
            </a>
            <a href="#therapy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              疗法
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              联系
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:zhangxin@email.com"
              className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} 张新. 保留所有权利.</p>
          <p>京ICP备xxxxxxxx号</p>
        </div>
      </div>
    </footer>
  );
}
