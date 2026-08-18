# Veya Official Website

Veya 官网独立工程。产品代码位于 `veya163/veya`，官网只在 `veya163/veya-site` 开发。

## 产品事实边界
- 只宣传 Veya 当前真实 shipped、可操作、连接真实状态并形成闭环的能力。
- 学生端与教师端分别完整介绍，不把 Veya 简化成 AI Chat。
- 产品截图必须来自 Veya live runtime / product snapshots，不使用生成式概念 UI 冒充产品。
- Roadmap 能力不得写成当前已发布功能。

## 页面
`/`、`/product`、`/student`、`/teacher`、`/ai-harness`、`/learning-evidence`、`/solutions`、`/trust`、`/platform`、`/customers`、`/pricing`、`/about`、`/login`、`/register`。

## 主题
支持 `auto / light / dark`。默认 `auto` 根据访问者本地时间切换：07:00–19:00 浅色，其余时间深色；自动模式运行期间每分钟检查跨时段切换。用户可在顶部手动固定主题，选择保存在浏览器本地。

## 本地运行与生产构建
```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## GitHub Actions 策略
开发阶段优先本地构建和静态检查，不为每个小提交触发 Actions。只有形成有意义批次或发布前才运行集中 CI，以节省 Actions 配额。

## 认证说明
官网提供登录/注册入口与 UI，但在 Veya 正式 Auth API 接通前不会伪造认证成功状态。

详细产品事实、截图映射和发布门禁见 `docs/`。
