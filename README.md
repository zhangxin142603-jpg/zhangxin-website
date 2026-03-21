# 张欣 - 个人作品集网站

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

基于 Next.js 15、TypeScript 和 Tailwind CSS 构建的现代化、响应式个人作品集网站。具有时尚的设计、深色/浅色模式、交互式组件和平滑动画。

## ✨ 功能特性

- 🎨 **现代设计** - 简洁、专业的设计，带有渐变点缀
- 🌓 **深色/浅色模式** - 自动主题检测，支持手动切换
- 📱 **完全响应式** - 针对所有屏幕尺寸进行优化
- ⚡ **快速性能** - 基于 Next.js 15 构建，实现最佳性能
- 🎯 **交互式组件** - 动画元素和平滑过渡
- 🔍 **SEO 优化** - 正确的元数据和语义化 HTML
- 📄 **多部分内容** - 主页、关于、项目、技能、经验、联系

## 🚀 在线演示

[![Vercel](https://img.shields.io/badge/View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://zhangxin-website.vercel.app)

## 📋 先决条件

- Node.js 18.17 或更高版本
- npm、yarn、pnpm 或 bun

## 🛠️ 开始使用

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/zhangxin-website.git
cd zhangxin-website

# 安装依赖
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 开发

```bash
# 启动开发服务器
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 生产环境构建

```bash
# 构建应用程序
npm run build

# 启动生产服务器
npm start

# 或预览生产构建
npm run preview
```

### 其他命令

```bash
# 代码检查
npm run lint

# 类型检查
npm run type-check

# 使用 Prettier 格式化代码
npm run format

# 清理构建产物
npm run clean
```

## 📁 项目结构

```
zhangxin-website/
├── app/                    # Next.js 应用目录
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚组件
│   ├── HeroSection.tsx    # 主页首屏
│   ├── AboutSection.tsx   # 关于部分
│   ├── ProjectsSection.ts # 项目展示
│   ├── SkillsSection.tsx  # 技能展示
│   ├── ExperienceSection. # 经验时间轴
│   └── ContactSection.tsx # 联系表单
├── public/                # 静态资源
├── .github/workflows/     # GitHub Actions 工作流
├── .prettierrc            # Prettier 配置
└── tailwind.config.ts     # Tailwind CSS 配置
```

## 🎨 自定义

1. **更新个人信息**：在每个组件文件中编辑内容
2. **更改颜色**：在组件文件中修改渐变颜色
3. **更新项目**：在 `ProjectsSection.tsx` 中编辑您的项目
4. **修改技能**：在 `SkillsSection.tsx` 中更新您的技能
5. **更改社交链接**：更新 `Navbar.tsx` 和 `Footer.tsx` 中的链接

## 🌐 部署

### 在 Vercel 上部署（推荐）

最简单的部署方式是使用 [Vercel](https://vercel.com)：

1. 将代码推送到 GitHub
2. 在 Vercel 上导入您的仓库
3. Vercel 会自动检测 Next.js 并部署

### 手动部署

1. 构建项目：`npm run build`
2. 启动服务器：`npm start`
3. 网站将在 `http://localhost:3000` 上可用

## 📄 许可证

本项目基于 MIT 许可证 - 详见 LICENSE 文件。

## 🙏 致谢

- [Next.js](https://nextjs.org) - React 框架
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- [Lucide React](https://lucide.dev) - 漂亮的图标
- [Vercel](https://vercel.com) - 托管平台

---

由张欣用心制作
