# Veya Website

Veya 官方网站独立工程。产品代码继续位于 `veya163/veya`，官网只位于本仓库。

## 当前站点范围

完整页面：Home、Product、Student Learning Life OS、Teacher Control Plane、AI Harness、Learning Evidence、Solutions、Trust & Safety、Platform & Integration、Pilot & Outcomes、Work with Veya、About、Login、Register。

## 产品真实性门禁

官网只可以宣称 Veya 当前真实 shipped capability。产品画面只允许来自 Veya live runtime 或 verified product snapshots。禁止生成式 Dashboard、概念 UI 或 roadmap 功能冒充已发布产品。

学生端当前官网覆盖：Today / Next Step、Courses、Tasks、Learning Session、Ask Veya、Challenge / Discover、Learning Map、Learning Evidence。

教师端当前官网覆盖：Command Center、Student Insight、Learner Model、Evidence Review、Intervention、Teaching Policy、Content Studio、Task Workspace、Class Management、Pilot Results。

## 主题

默认 `auto`：访问者本地时间 07:00–19:00 使用浅色，其余时间使用深色。顶部支持手动固定浅色或深色。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署状态

GitHub Pages 自动 push 部署已暂停。只有手工触发 `Deploy Veya Website` workflow 才会部署。完成代码和真实产品截图验收后再开启正式发布。
