const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=$('#app');
const student=[
['Today / Next Step','基于 learner state 与当前任务，给出此刻最值得完成的下一步。'],
['Courses','组织课程目标、知识节点、任务与证据，而不是只存内容。'],
['Tasks','把教师意图与学生执行连接到 evidence 闭环。'],
['Learning Session','记录尝试、求助、反馈与再尝试的真实学习过程。'],
['Ask Veya','提供分级提示与解释，帮助理解而不是代做。'],
['Challenge / Discover','通过挑战与探索形成新的可验证证据。'],
['Learning Map','可视化知识节点、掌握状态与下一步方向。'],
['Learning Evidence','沉淀可追溯学习事实，支撑 learner model 与行动。']
];
const teacher=[
['Command Center','聚合今日教学、班级注意事项、风险与待处理动作。'],
['Student Insight','查看 learner model、证据、误区与完整学习上下文。'],
['Learner Model','从持续 evidence 形成可解释的学生学习状态。'],
['Evidence Review','教师可审核、确认或失效证据，AI 不直接制造事实。'],
['Intervention','从问题发现进入教师干预、学生执行与再次验证。'],
['Teaching Policy','教师定义 AI 的教学边界、帮助方式与行为策略。'],
['Content Studio','围绕真实教学流程组织内容与资源。'],
['Task Workspace','创建、管理任务并跟踪执行与后续 evidence。'],
['Class Management','班级、学生与教学上下文进入统一控制面。'],
['Pilot Results','汇总试点、学习结果与闭环证据。']
];
const advantages=[
['Evidence-first','关键学习事实来自 Evidence，不来自 AI 猜测。'],
['Teacher in control','教师审核证据、调整策略、发起干预并决定边界。'],
['Closed-loop learning','建议之后仍继续执行、跟踪、复核与再验证。'],
['Student + Teacher','学生 Learning Life OS 与教师 Control Plane 共享真实学习上下文。'],
['Governed Harness','Models、Skills、Tools 经 Harness 与 Policy 进入教育工作流。'],
['Provider-neutral','不锁死单一模型，保留多模型与运行时演进空间。']
];
const grid=(items,cls='cap-grid')=>`<div class="${cls}">${items.map(([t,c],i)=>`<article class="cap-card"><small>${String(i+1).padStart(2,'0')}</small><h3>${t}</h3><p>${c}</p></article>`).join('')}</div>`;
const title=(k,t,c='')=>`<div class="section-title"><span>${k}</span><h2>${t}</h2>${c?`<p>${c}</p>`:''}</div>`;
const hero=(k,t,c)=>`<section class="page-hero"><span class="kicker">${k}</span><h1>${t}</h1><p>${c}</p></section>`;
const shot=(file,label,source)=>`<figure class="screenshot-frame"><img src="./assets/product-shots/${file}" alt="Veya 真实产品截图：${label}"><figcaption class="screenshot-caption"><span><b class="verified-dot">●</b> Verified Veya runtime · ${label}</span><span>${source}</span></figcaption></figure>`;
const cta=()=>`<section class="cta"><span class="kicker">START WITH REAL LEARNING</span><h2>让 AI 服务学习，而不是绕开学习。</h2><p>从学生每一次尝试，到教师每一次判断，Veya 把证据、行动与结果连接起来。</p><div><a class="btn" href="#/register">开始体验 →</a><a class="btn secondary" href="#/pricing">联系 Veya</a></div></section>`;
const journey=a=>`<div class="journey-line">${a.map((x,i)=>`<div><span>${i+1}</span><b>${x}</b></div>`).join('')}</div>`;
const architecture=a=>`<div class="architecture">${a.map((x,i)=>`${i?'<span>→</span>':''}<div>${x[0]}<br><b>${x[1]}</b></div>`).join('')}</div>`;
const pages={
home:()=>`<section class="home-hero"><div class="hero-copy"><span class="kicker">AI-NATIVE TEACHING & LEARNING OS</span><h1>让每个学习旅程<br><em>被看见、被理解、被支持</em></h1><p>Veya 基于真实 Learning Evidence 连接学生学习、教师教学与 governed AI Harness。不是 AI 工具箱，而是一套持续运行的 Teaching & Learning OS。</p><div class="hero-actions"><a class="btn" href="#/register">开始体验 →</a><a class="btn secondary" href="#/product">了解 Veya</a></div><div class="truth">✓ 产品画面只使用 Veya live runtime / verified snapshot。</div></div><div class="hero-visual"><div class="device-window teacher"><img src="./assets/product-shots/teacher-home.webp" alt="教师端真实截图"><span class="verified">Live runtime · Teacher</span></div><div class="device-window student-mobile"><img src="./assets/product-shots/student-home.webp" alt="学生端真实截图"><span class="verified">Live runtime · Student</span></div></div></section>
<section class="trust-strip">${['Evidence-first','Teacher in control','Closed loop','Student + Teacher','Governed Harness'].map(x=>`<span>${x}</span>`).join('')}</section>
<section class="duo"><div>${title('FOR STUDENTS','Learning Life OS','从 Today、Session、Ask Veya 到 Evidence 与 Learning Map，形成连续学习旅程。')}${grid(student.slice(0,4))}<a class="btn secondary" href="#/student">查看学生端 →</a></div>${shot('student-home.webp','学生端 · Today','Student Gate 32110896989')}</section>
<section class="duo reverse">${shot('teacher-home.webp','教师端 · Command Center','Teacher Gate 32111479637')}<div>${title('FOR TEACHERS','Teacher Control Plane','从发现问题、审核证据，到干预与再次验证，教师始终掌握教学判断。')}${grid(teacher.slice(0,4))}<a class="btn secondary" href="#/teacher">查看教师端 →</a></div></section>
<section class="harness-section">${title('VEYA AI HARNESS','把模型能力变成受治理的教育能力','Models、Skills、Tools 通过 Harness、Teaching Policy 与 Evidence 进入真实教育工作流。')}<div class="flow">${['Models','Skills','Tools','Harness','Policy','Evidence','Next Action'].map((x,i)=>`<div><small>${String(i+1).padStart(2,'0')}</small><b>${x}</b></div>`).join('')}</div></section>
<section>${title('WHY VEYA','竞争力不在功能数量，而在闭环质量')}${grid(advantages,'adv-grid')}</section>${cta()}`,
product:()=>`${hero('PRODUCT','一套系统，连接<span>学习、教学与 AI</span>','Student Learning Life OS、Teacher Control Plane、Learning Evidence 与 AI Harness 是同一个教育闭环的不同控制面。')}<section>${title('PRODUCT MAP','Veya 产品全貌')}${architecture([['Student','Learning Life OS'],['Learning','Evidence'],['Learner','Model'],['Teacher','Control Plane'],['Governed','AI Harness']])}</section><section>${title('SHIPPED CAPABILITIES','当前真实可使用能力','只呈现真实进入产品工作流的能力，不把 roadmap 写成已发布。')}<div class="two-columns"><div><h3>学生端</h3>${grid(student)}</div><div><h3>教师端</h3>${grid(teacher)}</div></div></section>${cta()}`,
student:()=>`${hero('STUDENT · LEARNING LIFE OS','学习不是交作业，<span>而是一段可理解的旅程。</span>','Today、Courses、Tasks、Learning Session、Ask Veya、Challenge、Learning Map 与 Learning Evidence 连成连续学习体验。')}<section class="shot-gallery single-shot">${shot('student-home.webp','学生端 · Today','Student Gate 32110896989')}</section><section>${title('STUDENT CAPABILITIES','学生端完整能力','每个入口都服务于真实学习状态，而不是互不相干的 AI 小工具。')}${grid(student)}</section><section>${title('LEARNING JOURNEY','从下一步，到下一次成长')}${journey(['Today','Task / Session','Ask / Challenge','Evidence','Learner State','Learning Map','Next Action'])}</section>${cta()}`,
teacher:()=>`${hero('TEACHER · CONTROL PLANE','AI 提供能力，<span>教师掌握教学。</span>','教师看到的不只是分数，而是学生是谁、为什么卡住、证据是什么、下一步是什么，以及干预之后是否真正改善。')}<section class="shot-gallery single-shot">${shot('teacher-home.webp','教师端 · Command Center','Teacher Gate 32111479637')}</section><section>${title('TEACHER CAPABILITIES','教师端完整能力','注意力、洞察、证据、策略、内容、任务、管理与结果位于同一控制面。')}${grid(teacher)}</section><section>${title('TEACHING LOOP','从发现问题，到验证干预结果')}${journey(['Attention','Evidence','Misconception','Next Action','Teacher Review','Intervention','Follow-up Evidence','Outcome'])}</section>${cta()}`,
harness:()=>`${hero('AI HARNESS','AI 不直接接管教育，<span>它被教育目标约束。</span>','Veya Harness 把模型、Skills、Tools、教学策略、学习上下文与 Evidence 组合成可治理运行上下文。')}<section>${title('RUNTIME FLOW','从模型能力到教学行动')}${architecture([['01','Models'],['02','Skills'],['03','Tools'],['04','Harness'],['05','Teaching Policy'],['06','Evidence']])}</section><section>${title('DESIGN PRINCIPLES','Harness 的教育原则')}${grid([['Policy before autonomy','能力越强，越需要教学边界。'],['Evidence before state','AI 判断不能直接成为掌握事实。'],['Teacher override','教师可审核、修改、失效与干预。'],['Context-aware','结合课程、任务、学生状态与会话。'],['Tool-governed','工具调用经过能力解析与策略。'],['Model-neutral','模型升级不重写教育闭环。']],'adv-grid')}</section>${cta()}`,
evidence:()=>`${hero('LEARNING EVIDENCE','不是 AI 觉得你学会了，<span>而是证据证明你学会了。</span>','Evidence 是 Veya 的关键产品边界。学习活动形成可追溯事实，再进入 learner model、教学判断与下一步行动。')}<section class="evidence-flow">${[['01','Learning Activity','任务、会话、挑战、回答与再尝试。'],['02','Evidence','形成可追溯学习事实。'],['03','Learner State','综合证据形成可解释状态。'],['04','Next Action','生成学生与教师的可执行下一步。'],['05','Reverification','干预后通过新证据验证改善。']].map(x=>`<div><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</section><section>${title('WHY IT MATTERS','Evidence 让 AI 教育从“看起来聪明”走向“可以负责”')}${grid([['可追溯','判断可以回到学习行为与证据。'],['可审核','教师可确认、否定或失效证据。'],['可解释','Learner Model 的变化可以解释。'],['可验证','干预后用新证据验证效果。'],['可治理','AI 不直接制造关键学习事实。'],['可积累','跨会话形成持续学习历史。']],'adv-grid')}</section>${cta()}`,
solutions:()=>`${hero('SOLUTIONS','不是买一个 AI 按钮，<span>而是建立学习闭环。</span>','面向学校、教师团队与教育组织，把 AI 能力嵌入已有教学目标与真实学习过程。')}<section>${title('WHO VEYA SERVES','围绕教育组织进入真实工作流')}${grid([['K12 学校','连接日常教学、学生学习、证据与教师干预。'],['高校与职业教育','围绕课程目标、学习过程与能力证据形成持续闭环。'],['教育机构','用统一学生上下文与教师控制面承载规模化个性化教学。'],['教师团队','把 AI 从零散工具变成受 Teaching Policy 约束的工作伙伴。']],'solution-grid')}</section><section class="dark-panel">${title('DEPLOYMENT PRINCIPLE','先从一个真实闭环开始，再逐步扩展','选择真实课程或班级，从学生学习、Evidence、教师干预与结果复核开始。')}</section>${cta()}`,
trust:()=>`${hero('TRUST · SAFETY · GOVERNANCE','教育 AI 的能力，<span>必须伴随边界。</span>','身份权限、Tenant scope、Evidence 审核、Teaching Policy、审计与教师控制都是产品能力。')}<section>${grid([['Identity & Tenant','身份、角色与租户范围进入请求上下文，越权默认 fail-closed。'],['Teacher control','教师保留 Evidence Review、Policy 与 Intervention 的最终控制。'],['Evidence integrity','关键学习状态不允许由模型直接写入。'],['Auditability','重要动作围绕真实状态与可追踪操作设计。'],['Privacy by design','尽量减少不必要的数据扩散。'],['No fake capability','不可用菜单、概念 UI、roadmap 不冒充真实能力。']],'adv-grid')}</section>${cta()}`,
platform:()=>`${hero('PLATFORM & INTEGRATION','连接模型、能力与教育系统，<span>不把自己锁死。</span>','Veya 以 provider-neutral 架构组织 Models、Skills、Agents、Tools、MCP 与外部系统连接。')}<section>${title('CAPABILITY CENTER','模型之外，还有 Skills、Agents、Tools 与 MCP')}${grid([['Models','配置适合的模型能力。'],['Skills','把可复用教育方法封装成能力。'],['Agents','围绕明确角色组织持续工作。'],['Tools','连接真实数据与执行能力。'],['MCP','以标准协议扩展外部工具与资源。'],['Integrations','逐步连接学校现有平台与渠道。']],'platform-grid')}</section>${cta()}`,
customers:()=>`${hero('PILOT & OUTCOMES','先证明学习闭环，<span>再谈规模化。</span>','Pilot 关注 Evidence、教师行动、再次验证与真实结果，而不是只统计 AI 调用了多少次。')}<section>${grid([['Evidence','学习事实是否持续产生。'],['Action','学生与教师是否获得可执行下一步。'],['Intervention','教师干预是否真正进入工作流。'],['Outcome','后续证据是否证明改善。']],'metrics')}</section><section>${title('CASE STUDY POLICY','官网不伪造客户背书','在真实案例获得明确授权前，不使用虚构学校 Logo、教师头像或评价。')}</section>${cta()}`,
pricing:()=>`${hero('WORK WITH VEYA','从一个真实教学闭环开始。','现阶段采用合作 / Pilot 模式，根据学校、班级、课程与集成范围确定实施方案。')}<section class="pricing-cards"><article class="pricing-card featured"><span>PILOT</span><h3>学校 / 教师团队试点</h3><p>从真实课程和班级完成学习、Evidence、教师干预与结果复核。</p><ul><li>Student Learning Life OS</li><li>Teacher Control Plane</li><li>Evidence & Learner Model</li><li>AI Harness / Teaching Policy</li><li>Pilot Results</li></ul><a class="btn" href="#/register">申请 Pilot</a></article><article class="pricing-card"><span>PLATFORM</span><h3>教育组织与平台合作</h3><p>面向更大范围部署、治理、模型能力接入与平台集成。</p><ul><li>Identity / Tenant governance</li><li>Capability Center</li><li>Skills / Agents / Tools / MCP</li><li>Platform integration</li><li>长期产品共创</li></ul><a class="btn secondary" href="#/register">联系我们</a></article></section>`,
about:()=>`${hero('ABOUT VEYA','我们想解决的不是“怎么用 AI”，<span>而是“怎么让学习真正发生”。</span>','Veya 从 Learning Evidence、教师控制与持续学习上下文出发，构建 AI-native Teaching & Learning OS。')}<section class="manifesto"><p>教育不缺更多生成内容的按钮。</p><p>真正困难的是知道学生会什么、不会什么、为什么卡住，以及下一步什么行动最值得做。</p><p>同样困难的是让教师在 AI 时代仍拥有教学判断、边界与责任。</p><p>因此 Veya 把 Evidence、Learner Model、Teaching Policy、Intervention 与 AI Harness 放在同一个系统里。</p></section><section>${title('PRODUCT PRINCIPLES','Veya 坚持的几件事')}${grid(advantages,'adv-grid')}</section>${cta()}`,
login:()=>auth(false),register:()=>auth(true)
};
function auth(reg){return `<section class="auth-page"><div class="auth-card"><div class="auth-copy"><span class="brand-mark">V</span><span class="kicker">VEYA ACCOUNT</span><h1>${reg?'创建 Veya 账户':'欢迎回来'}</h1><p>${reg?'开始你的 Veya 学习与教学旅程。':'登录学生端或教师端，继续真实学习闭环。'}</p><div class="auth-note"><b>认证说明</b><span>正式认证将连接 Veya Auth API，在接通前不会伪造“登录成功”。</span></div></div><form id="authForm"><label>邮箱 / 账号<input required></label>${reg?'<label>姓名<input required></label>':''}<label>密码<input required type="password"></label>${reg?'<label>身份<select><option>学生</option><option>教师</option></select></label>':''}<button class="btn">${reg?'注册':'登录'}</button><p class="switch-auth"><a href="#/${reg?'login':'register'}">${reg?'已有账户？登录':'还没有账户？注册'}</a></p></form></div></section>`}
const routes={'/':'home','/product':'product','/student':'student','/teacher':'teacher','/ai-harness':'harness','/learning-evidence':'evidence','/solutions':'solutions','/trust':'trust','/platform':'platform','/customers':'customers','/pricing':'pricing','/about':'about','/login':'login','/register':'register'};
function route(){const p=(location.hash.slice(1)||'/').split('?')[0], key=routes[p]||'home';app.innerHTML=pages[key]();$$('#mainNav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${p}`));$('#mainNav').classList.remove('open');scrollTo(0,0);setTimeout(()=>{$('#authForm')?.addEventListener('submit',e=>{e.preventDefault();alert('认证 UI 已完成；正式登录/注册将在 Veya Auth API 接通后启用。')})},0)}
function resolved(m){if(m!=='auto')return m;const h=new Date().getHours();return h>=7&&h<19?'light':'dark'}
let mode=localStorage.getItem('veya-theme')||'auto';
function theme(){document.documentElement.dataset.theme=resolved(mode);$$('[data-theme-mode]').forEach(b=>b.classList.toggle('on',b.dataset.themeMode===mode));localStorage.setItem('veya-theme',mode)}
$$('[data-theme-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.themeMode;theme()}));
$('#mobileMenu').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
addEventListener('hashchange',route);setInterval(()=>mode==='auto'&&theme(),60000);theme();route();