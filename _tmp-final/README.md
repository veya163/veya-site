# Veya Official Website

Veya 官方网站独立工程。产品代码继续位于 `veya163/veya`，官网只位于 `veya163/veya-site`。

## Architecture

官网采用无构建依赖的静态模块架构：`index.html + assets/styles.css + assets/app.js`。这样 GitHub Pages 不依赖 npm/Vite/TypeScript，避免官网发布被工具链版本或 lockfile 阻塞。

## Pages

Home / Product / Student / Teacher / AI Harness / Learning Evidence / Solutions / Trust & Safety / Platform & Integration / Pilot & Outcomes / Work with Veya / About / Login / Register。

## Theme

默认 `auto`：访问者本地时间 07:00–19:00 使用浅色，其余时间深色；顶部可手动固定浅色或深色，选择保存在 localStorage。

## Product truth gate

官网只宣传 Veya 当前真实可使用能力；学生端和教师端分别完整介绍。产品截图只允许来自 Veya live runtime / verified snapshot，不使用生成式概念 Dashboard 冒充产品。

## Deployment

GitHub Pages 自动部署保持暂停。`.github/workflows/deploy-pages.yml` 仅支持手动 `workflow_dispatch`，完成验收后再触发。