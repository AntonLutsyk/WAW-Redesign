// Web Art Work site content + preview router + theme. Content mirrors webart.work (audited 28 Oct 2026).
(function () {
  if (!document.getElementById('waw-font-override')) {
    const st = document.createElement('style'); st.id = 'waw-font-override';
    st.textContent = 'html:root,html[data-mode]{--font-mono:"Poppins",system-ui,-apple-system,"Segoe UI",sans-serif;--ls-label:.1em;--ls-meta:.06em}' +
      'html:root:not([data-mode="light"]){--bg:#121314;--bg-sunken:#0d0e0f;--surface-1:#18191b;--surface-2:#1e1f21;--surface-hover:#1c1d1f;--surface-featured:#1c1c17;--surface-header:rgba(14,15,16,.82);--border:#2a2b2e;--border-strong:#3a3b3f;--hero-veil:6,6,8}' +
      'html:root:not([data-mode="light"]) body{background:#121314}';
    (document.head || document.documentElement).appendChild(st);
  }
  (function grid() { const g = document.createElement('style'); g.textContent = 'html:root{--container:1600px;--gx:max(var(--page-margin),calc((100% - var(--container)) / 2))}'; (document.head || document.documentElement).appendChild(g); })();
  (function cursor() {
    return;
    if (window.__wawCursor || !window.matchMedia || !matchMedia('(pointer:fine)').matches) return;
    window.__wawCursor = true;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = () => {
      const css = document.createElement('style');
      css.textContent = 'html.waw-cur,html.waw-cur *{cursor:none!important}html.waw-cur input,html.waw-cur textarea,html.waw-cur [contenteditable]{cursor:text!important}' +
        '.waw-c{position:fixed;left:0;top:0;width:44px;height:44px;margin:-22px 0 0 -22px;pointer-events:none;z-index:2147483646;mix-blend-mode:difference}' +
        '.waw-c i{position:absolute;inset:0;border-radius:50%;background:#d7d71d;transform:scale(.5);transition:transform .45s cubic-bezier(.16,1,.3,1),opacity .25s}' +
        '.waw-c.hot i{transform:scale(1.35)}.waw-c.down i{transform:scale(.42)}.waw-c.hot.down i{transform:scale(1.1)}.waw-c.off i{opacity:0;transform:scale(0)}';
      document.head.appendChild(css);
      const el = document.createElement('div'); el.className = 'waw-c off'; el.setAttribute('aria-hidden', 'true'); const dot = document.createElement('i'); dot.innerHTML = "<svg viewBox=\"0 0 444 516\" width=\"62%\" height=\"62%\" style=\"position:absolute;left:19%;top:17%;fill:#0b0b0f\"><path d=\"M183.422 235.176C183.422 235.176 196.392 215.506 207.221 205.54C217.169 196.41 221.501 194.163 222.143 193.853C222.81 194.163 227.117 196.41 237.065 205.54C247.894 215.506 260.865 235.176 260.865 235.176C260.865 235.176 291.042 220.692 291.042 179.25C291.042 137.807 264.387 116.417 264.387 116.417C295.802 170.693 265.791 204.369 265.791 204.369C265.791 204.369 259.841 203.413 249.132 190.53C241.114 181.532 232.072 173.511 222.191 166.631V166.511V166.631C212.284 173.469 203.21 181.45 195.155 190.411C184.469 203.293 178.495 204.249 178.495 204.249C178.495 204.249 148.46 170.574 179.876 116.297C179.876 116.297 153.244 137.568 153.244 179.13C153.244 220.692 183.422 235.176 183.422 235.176Z\"/><path d=\"M191.989 254.176C189.895 270.906 199.319 277.717 199.319 277.717C199.426 273.778 199.944 269.861 200.866 266.03C202.104 262.398 209.03 254.08 216.193 254.08H228.093C235.233 254.08 242.182 262.302 243.443 266.03C244.349 269.863 244.86 273.78 244.966 277.717C244.966 277.717 254.486 270.906 252.32 254.176C250.345 238.426 225.165 216.988 222.286 214.574V214.335H222.143H222V214.574C219.12 216.988 193.941 238.426 191.989 254.176Z\"/><path d=\"M266.815 282.019C262.198 291.814 254.331 299.69 244.562 304.294C244.562 304.294 223.286 274.658 222.238 273.75V273.607V273.75C221.191 274.658 199.938 304.294 199.938 304.294C190.09 299.731 182.142 291.851 177.472 282.019C170.713 266.341 177.472 246.17 177.472 246.17C171.57 251.571 159.242 282.019 172.712 305.776C176.638 312.738 182.069 318.727 188.606 323.302C195.143 327.877 202.618 330.921 210.482 332.209C210.482 332.209 205.936 325.422 209.744 314.261C211.86 307.802 216.275 302.356 222.143 298.965C228.011 302.356 232.426 307.802 234.543 314.261C238.374 325.422 233.805 332.209 233.805 332.209C241.692 330.927 249.192 327.882 255.75 323.298C262.308 318.715 267.757 312.71 271.693 305.728C285.045 281.828 272.717 251.523 266.934 246.122C266.815 246.17 273.693 266.341 266.815 282.019Z\"/><path d=\"M115.356 186.826C118.569 191.773 159.218 245.548 159.218 245.548C159.218 245.548 167.143 230.276 159.86 221.146C152.578 212.017 132.896 186.42 129.183 180.373C126.114 175.021 124.337 169.021 123.995 162.854C123.543 157.811 117.64 90.1506 117.64 90.1506C122.695 71.5531 130.734 53.9069 141.44 37.9053C150.121 24.6051 159.728 11.9384 170.189 0C170.189 0 142.082 19.8609 125.994 44.669C116.45 59.2199 108.931 75.0126 103.646 91.6085C103.646 91.6085 107.383 151.191 108.168 162.902C108.416 171.375 110.896 179.63 115.356 186.826Z\"/><path d=\"M117.736 364.689C117.736 364.689 117.736 354.221 124.09 336.535C130.444 318.849 152.649 278.984 152.649 278.984L154.339 250.663L149.936 244.544C149.936 244.544 117.759 232.116 104.717 225.114C91.6754 218.111 88.2483 216.199 88.2483 216.199C83.3215 206.758 79.136 196.945 75.7298 186.85C69.0184 168.041 66.3529 159.484 66.3529 159.484C64.8824 141.104 64.5089 122.653 65.2343 104.228C66.3529 72.3691 68.0189 62.1399 68.0189 62.1399C68.0189 62.1399 59.9985 73.7553 56.4286 100.762C52.8587 127.769 52.0971 161.325 52.0971 161.325L72.1837 224.922C72.1837 224.922 88.8433 236.394 110.429 248.297C117.311 252.254 124.596 255.459 132.158 257.857L76.7532 266.437L24.1329 311.847C15.5324 329.302 9.13637 347.769 5.09345 366.816C-1.71316 398.723 0.333583 433.569 0.333583 433.569C0.333583 433.569 8.61575 398.723 18.4449 367.462C28.274 336.201 36.7227 321.669 36.7227 321.669L84.3214 284.625L122.02 281.016L92.9367 355.105C92.9367 355.105 92.6749 364.665 96.8398 386.175C101.005 407.685 118.807 464.83 118.807 464.83L164.216 516L168.595 515.211L134.324 458.353L117.736 364.689Z\"/><path d=\"M326.359 90.1506C326.359 90.1506 320.457 157.74 319.981 162.854C319.639 169.021 317.862 175.021 314.793 180.373C311.104 186.444 291.398 211.993 284.116 221.146C276.833 230.3 284.758 245.548 284.758 245.548C284.758 245.548 325.431 191.773 328.644 186.826C333.089 179.635 335.553 171.387 335.784 162.926C336.593 151.215 340.33 91.6324 340.33 91.6324C335.033 75.0411 327.515 59.2499 317.982 44.6929C301.918 19.8609 273.811 0 273.811 0C284.309 11.9321 293.948 24.5992 302.655 37.9053C313.321 53.9171 321.326 71.5618 326.359 90.1506Z\"/><path d=\"M438.956 366.745C434.919 347.695 428.523 329.228 419.916 311.775L367.272 266.365L311.772 257.809C319.327 255.41 326.603 252.205 333.477 248.249C355.158 236.299 371.747 224.875 371.747 224.875L391.809 161.277C391.809 161.277 391.048 127.817 387.478 100.738C383.908 73.6597 376.03 62.1399 376.03 62.1399C376.03 62.1399 377.696 72.3452 378.815 104.204C379.526 122.629 379.152 141.08 377.696 159.46C377.696 159.46 374.983 168.017 368.343 186.826C364.937 196.921 360.752 206.734 355.825 216.175C355.825 216.175 352.398 218.063 339.356 225.09C326.314 232.116 294.137 244.52 294.137 244.52L289.734 250.639L291.4 278.96C291.4 278.96 313.676 318.825 319.959 336.511C326.242 354.197 326.314 364.665 326.314 364.665L309.654 458.329L275.359 515.211L279.738 516L325.171 464.878C325.171 464.878 342.949 407.805 347.138 386.223C351.327 364.642 351.041 355.153 351.041 355.153L321.958 281.063L359.633 284.672L407.231 321.717C407.231 321.717 415.704 336.248 425.533 367.51C435.362 398.771 443.644 433.617 443.644 433.617C443.644 433.617 445.786 398.651 438.956 366.745Z\"/></svg>"; el.appendChild(dot);
      document.body.appendChild(el); document.documentElement.classList.add('waw-cur');
      let x = -100, y = -100, cx = x, cy = y, seen = false;
      addEventListener('pointermove', e => {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        x = e.clientX; y = e.clientY; if (!seen) { seen = true; cx = x; cy = y; }
        const t = e.target.closest ? e.target : null;
        el.classList.toggle('hot', !!(t && t.closest('a,button,[role="button"],label,select,summary')));
        el.classList.toggle('off', !!(t && t.closest('input,textarea')));
      }, { passive: true });
      document.addEventListener('mouseleave', () => el.classList.add('off'));
      document.addEventListener('mouseenter', () => el.classList.remove('off'));
      addEventListener('pointerdown', () => el.classList.add('down'));
      addEventListener('pointerup', () => el.classList.remove('down'));
      const cv = document.createElement('canvas'); cv.setAttribute('aria-hidden', 'true');
      cv.style.cssText = 'position:fixed;left:0;top:0;pointer-events:none;z-index:2147483645';
      document.body.appendChild(cv);
      const ctx = cv.getContext('2d'); let dpr = 1;
      const fit = () => { const W = document.documentElement.clientWidth, H = innerHeight; dpr = Math.min(2, devicePixelRatio || 1); cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
      fit(); addEventListener('resize', fit);
      const pts = [], LIFE = 350, GAP = 7;
      addEventListener('pointermove', e => { if (reduce || (e.pointerType && e.pointerType !== 'mouse')) return; const l = pts[pts.length - 1]; if (!l || Math.hypot(e.clientX - l.x, e.clientY - l.y) > 2) pts.push({ x: e.clientX, y: e.clientY, t: performance.now() }); if (pts.length > 160) pts.shift(); }, { passive: true });
      const draw = now => {
        while (pts.length && now - pts[0].t > LIFE) pts.shift();
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        if (pts.length < 2) return;
        const path = pts.concat([{ x: cx, y: cy, t: now }]);
        ctx.lineWidth = .8; ctx.strokeStyle = 'rgba(225,228,215,.22)'; ctx.beginPath(); ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y);
        ctx.stroke();
        let acc = 0;
        for (let i = path.length - 1; i > 0; i--) {
          const p = path[i], q = path[i - 1], dx = q.x - p.x, dy = q.y - p.y, d = Math.hypot(dx, dy); if (!d) continue;
          let s = (GAP - acc) % GAP;
          for (; s < d; s += GAP) {
            const u = s / d, bx = p.x + dx * u, by = p.y + dy * u, age = (now - (p.t + (q.t - p.t) * u)) / LIFE;
            const f = Math.max(0, 1 - age), r = 1.1 + f * 1.6;
            ctx.fillStyle = 'rgba(232,234,222,' + (f * .75).toFixed(3) + ')'; ctx.beginPath(); ctx.arc(bx, by, r, 0, 6.283); ctx.fill();
          }
          acc = (acc + d) % GAP;
        }
      };
      const loop = now => { const k = reduce ? 1 : .22; cx += (x - cx) * k; cy += (y - cy) * k; el.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px)'; if (!reduce) draw(now || performance.now()); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    };
    if (document.body) run(); else document.addEventListener('DOMContentLoaded', run);
  })();
  let qa = false; try { qa = sessionStorage.getItem('waw-qa') === '1'; } catch (e) {}
  if (qa && !window.__wawErrs) {
    window.__wawErrs = [];
    const ce = console.error.bind(console);
    console.error = function (...a) { try { window.__wawErrs.push(a.map(x => x instanceof Error ? x.message + ' | ' + (x.stack || '').split('\n').slice(0, 3).join(' / ') : typeof x === 'object' ? (() => { try { return JSON.stringify(x) + ' ' + Object.prototype.toString.call(x) + ' ' + (x && x.constructor && x.constructor.name); } catch (e) { return String(x); } })() : String(x)).join(' ')); } catch (e) {} ce(...a); };
    window.addEventListener('error', e => { window.__wawErrs.push('onerror: ' + (e.message || (e.target && (e.target.src || e.target.href)) || 'unknown')); }, true);
    window.addEventListener('unhandledrejection', e => { window.__wawErrs.push('rejection: ' + String(e.reason && (e.reason.message || e.reason))); });
  }
  const S = {};
  S.contact = {
    phone: '+38 097 18 62 487', tel: '+380971862487',
    address: 'Ohiyenka Street, 63, Kamianets-Podilskyi, Khmelnytskyi Region, 32301',
    hours: 'Mon–Fri, 9–18', weekend: 'Weekend support available'
  };
  S.social = [
    ['LinkedIn', 'https://www.linkedin.com/company/wawjs?utm_source=webart.work'],
    ['Upwork', 'https://www.upwork.com/agencies/webartwork/?utm_source=webart.work'],
    ['Instagram', 'https://www.instagram.com/webart.work/?utm_source=webart.work'],
    ['GitHub', 'https://github.com/WebArtWork/webart.work']
  ];
  S.stats = [['150+', 'IT professionals mentored'], ['50+', 'Startups accelerated'], ['10+', 'Years of experience']];
  S.pillars = [
    ['Custom Development', 'Tailored digital products delivered with modern frameworks and clean engineering.'],
    ['Global Reach', 'Remote-first collaboration for founders, teams, and growing companies worldwide.'],
    ['Lightning Fast', 'Short feedback loops, pragmatic delivery, and production-ready implementation.']
  ];
  S.serviceCategories = [
    { id: 'development', name: 'Product development' },
    { id: 'infrastructure', name: 'Infrastructure & quality' },
    { id: 'consulting', name: 'Consulting & teams' },
    { id: 'marketing', name: 'Marketing & growth' }
  ];
  const sv = (id, cat, name, desc, tags) => ({ id, cat, name, desc, tags: tags.split('|') });
  S.services = [
    sv('web-development', 'development', 'Web Development', 'Full-stack websites and web apps built for scale, speed, and maintainability.', 'Angular|Ngrx|React|Next.js|Vue|Nuxt.js|TypeScript|SSR|PWA'),
    sv('mobile-development', 'development', 'Mobile Development', 'Cross-platform mobile products with polished UX and reliable delivery pipelines.', 'Ionic|Capacitor|React Native|Flutter|Java|Kotlin|C#|Swift|PWA'),
    sv('back-end-development', 'development', 'Back-End Development', 'Robust server-side systems, APIs, and database layers built for reliability and growth.', 'Node.js|NestJS|Express.js|Python|PHP|MongoDB|PostgreSQL'),
    sv('ui-ux-design', 'development', 'UI/UX Design', 'Interfaces that stay clear, conversion-focused, and technically feasible.', 'Figma|Wireframing|Prototyping|Design Systems|User Flows|Usability'),
    sv('smart-contract-development', 'development', 'Smart Contract Development', 'Secure contract logic and on-chain business flows tailored for tokens, apps, and automated transactions.', 'Solidity|EVM|ERC-20|ERC-721|Hardhat|Foundry|Web3.js'),
    sv('blockchain-solutions', 'development', 'Blockchain Solutions', 'Custom blockchain products and chain infrastructure for teams building beyond standard Web3 integrations.', 'Cosmos SDK|Custom Chains|Validators|RPC Nodes|Wallet Integration|dApps'),
    sv('unity-development', 'development', 'Unity Development', 'Immersive 2D and 3D product builds for apps, prototypes, and interactive platforms.', 'Unity|C#|2D|3D|Shader Graph|Multiplayer'),
    sv('augmented-virtual-reality-solutions', 'development', 'Augmented / Virtual Reality Solutions', 'Interactive real-time experiences for training, demos, and product storytelling.', 'Unity|ARKit|ARCore|WebXR|WebGL|3D Modeling'),
    sv('devops-cloud-infrastructure', 'infrastructure', 'DevOps / Cloud Infrastructure', 'Cloud environments, deployment pipelines, and infrastructure operations built for stable releases and scalable growth.', 'AWS|Google Cloud|Azure|Docker|Kubernetes|CI/CD|Nginx|Monitoring'),
    sv('system-integration', 'infrastructure', 'System Integration', 'Bridging CRMs, APIs, payments, analytics, and back-office tools into one flow.', 'REST|GraphQL|Webhooks|CRM|ERP|Payment Gateways'),
    sv('data-solutions', 'infrastructure', 'Data Solutions', 'Dashboards, reporting, and storage architecture that turns raw data into decisions.', 'Power BI|Tableau|ETL|Data Warehousing|Analytics|Reporting'),
    sv('cybersecurity', 'infrastructure', 'Cybersecurity', 'Practical security hardening for apps, access flows, and delivery processes.', 'OWASP|Penetration Testing|IAM|SSO|Hardening|DevSecOps'),
    sv('quality-assurance', 'infrastructure', 'Quality Assurance', 'Manual and structured QA that keeps product quality visible throughout delivery.', 'Manual Testing|Regression Testing|UAT|Test Cases|Bug Reporting|Cross-Browser'),
    sv('technical-support-services', 'infrastructure', 'Technical Support Services', 'Operational support, bug fixing, upgrades, and steady release management.', 'Monitoring|Incident Response|SLA|Maintenance|Bug Fixing|Upgrades'),
    sv('business-analysis-strategy', 'consulting', 'Business Analysis / Strategy', 'Scoping, product thinking, and backlog shaping before costly implementation starts.', 'Discovery Workshops|Requirements|Roadmapping|User Stories|Backlog|MVP'),
    sv('it-consulting', 'consulting', 'IT Consulting', 'Clear technical direction for teams that need clear decisions.', 'Architecture Review|Code Audit|Tech Stack|Scaling Strategy|Delivery Audit|Team Setup'),
    sv('chief-technology-officer-services', 'consulting', 'Chief Technology Officer Services', 'Hands-on leadership for architecture, hiring, delivery structure, and execution.', 'Technical Leadership|Architecture|Hiring|Team Scaling|Process Design|Roadmaps'),
    sv('client-onboarding-implementation', 'consulting', 'Client Onboarding / Implementation', 'Structured onboarding flows that turn signed clients into operational delivery quickly.', 'Kickoff|Account Setup|Data Migration|Configuration|Enablement|Training'),
    sv('human-resource', 'consulting', 'Human Resource', 'HR support for growing teams that need stronger hiring processes, candidate screening, and team development.', 'Talent Sourcing|Technical Screening|Interview Process|Candidate Evaluation|Team Hiring|Recruitment Ops'),
    sv('corporate-training-development', 'consulting', 'Corporate Training / Development', 'Team upskilling programs designed to improve delivery maturity and technical depth.', 'Workshops|Mentoring|Technical Training|Leadership Training|Upskilling|Team Development'),
    sv('digital-marketing', 'marketing', 'Digital Marketing', 'Technical growth support for launch pages, campaigns, and measurable visibility.', 'Google Ads|Meta Ads|Email Marketing|Funnels|Landing Pages|Analytics'),
    sv('search-engine-optimization', 'marketing', 'Search Engine Optimization', 'Search visibility improvements driven by technical structure, content planning, and intent.', 'Technical SEO|On-Page SEO|Keyword Research|Link Building|Core Web Vitals|Schema'),
    sv('social-media-marketing', 'marketing', 'Social Media Marketing', 'Platform-specific campaigns and content systems that keep brand communication active.', 'Instagram|Facebook|LinkedIn|TikTok|Content Calendars|Community Management'),
    sv('influencer-marketing', 'marketing', 'Influencer Marketing', 'Partnership-driven promotion strategies designed for authentic reach and measurable lift.', 'Creator Outreach|Campaign Strategy|UGC|Brand Partnerships|Audience Matching|Tracking')
  ];
  S.featuredServices = ['web-development', 'mobile-development', 'back-end-development', 'ui-ux-design'];
  // Six structured sections — audited for web-development only.
  S.serviceSections = {
    'web-development': {
      solution: 'website', solutionLabel: 'See how we build websites',
      sections: [
        ['Delivery / Workflow', 'We move from discovery and UX alignment into interface design, component implementation, integrations, QA, and staged release.'],
        ['Problem / Solution', 'Companies need modern web products that load fast, scale cleanly, and support business growth without constant rewrites.'],
        ['Value / Benefits', 'You get faster launches, cleaner user journeys, stronger conversion paths, and a frontend foundation that remains maintainable over time.'],
        ['Scope / Process', 'Typical scope includes architecture, responsive UI, CMS or API integration, performance tuning, SEO basics, and deployment setup.'],
        ['Support & Maintenance', 'After launch we handle fixes, enhancements, dependency updates, and iterative improvements based on user feedback and analytics.'],
        ['Risks & Assumptions', 'Good outcomes depend on clear goals, stable requirements, and timely content, design, and stakeholder feedback during delivery.']
      ],
      related: ['back-end-development', 'devops-cloud-infrastructure', 'smart-contract-development']
    }
  };
  S.snapshot = [['Focus', 'Delivery, quality, and durable technical choices'], ['Output', 'Clear scope, visible execution, and production-ready outcomes'], ['Fit', 'Founders, product teams, and companies with real delivery needs']];

  S.solutions = [
    { id: 'website', name: 'Websites', desc: 'Landing pages and company sites, from $200.', price: '$200', pricing: true },
    { id: 'market', name: 'Marketplaces & e-commerce', desc: 'Online stores, B2B platforms and multi-vendor marketplaces.', price: '$1,200' },
    { id: 'crm', name: 'CRM & business software', desc: 'Custom CRM, automation and business operating systems.', price: '$2,000' },
    { id: 'virtual-tour', name: '360° virtual tours', desc: 'Let customers walk through your space online before they visit.', price: '$250' },
    { id: 'app', name: 'Mobile apps', desc: 'One codebase for iOS, Android and web with Capacitor.', price: '$800' },
    { id: 'unity', name: 'Unity games and 3D', desc: 'Games, 3D configurators and VR for web, mobile and Meta Quest.', price: '$1,000' },
    { id: 'ai', name: 'AI & automation', desc: 'AI agents, chatbots, knowledge assistants and workflow automation.', price: '$600' },
    { id: 'blockchain', name: 'Blockchain development', desc: 'Smart contracts, dApps, wallets and custom Cosmos SDK networks.', price: '$1,500' },
    { id: 'quantum', name: 'Quantum computing', desc: 'IBM Quantum in our startups and in client projects on request.', price: null }
  ];
  S.crm = {
    title: 'Run your entire business from one connected system',
    lead: 'Software built around how your business works. We design, develop, integrate and maintain custom CRM and business-management software: customers, sales, employees, jobs, scheduling, billing, reporting and your existing applications in one workflow.',
    proof: ['10+ years in software', '7 years contributing to ArboStar', 'Angular and full-stack engineering', 'Web and mobile interfaces', 'Long-term support'],
    moreLead: 'A contact database alone cannot run a complex company. We build CRM systems that can evolve into broader Business Operating Systems: start with the processes that matter most, then add operational modules without unnecessary duplication.',
    more: ['Pipelines, estimates and sales reporting', 'Calendars, dispatch and job tracking', 'Field job information for crews', 'Invoices, balances and financial dashboards', 'Reliable management reporting', 'Automation without removing human oversight', 'Room to grow into a full business operating system'],
    platforms: [
      ['Sales CRM', 'Contacts, companies, leads, opportunities, pipelines, proposals, follow-ups and sales analytics, connected to web forms, email and other lead sources.'],
      ['Service & field operations CRM', 'Customer inquiries connected to quotes, appointments, dispatch, crews, work orders, photos, job completion, invoices and service history.'],
      ['Enterprise CRM & business operating systems', 'Departments, branches, permissions, approvals, resources, finance-related workflows, documents, dashboards and custom operational modules in one platform.'],
      ['Industry-specific CRM', 'Terminology and workflows adapted for hospitality, manufacturing, construction, property services, logistics, wholesale and professional services.'],
      ['SaaS & white-label CRM', 'Subscription software for multiple customer organizations with tenant isolation, onboarding, feature management, billing integrations and configurable roles.'],
      ['Franchise & multi-location systems', 'Central management and branch-specific operations with organizational hierarchies, access controls, brand configurations and local versus consolidated reports.']
    ],
    arbostar: {
      kicker: 'Arboriculture & field services',
      body: 'Members of our team have contributed approximately seven years of development to ArboStar, a sophisticated CRM and operations platform serving tree-care businesses, spanning customer relationships, leads, estimates, scheduling, dispatching, field jobs, employees, equipment, invoices and business intelligence.',
      note: 'Important attribution: ArboStar is an independent product developed with multiple contributors. We do not claim sole authorship, ownership or development of every module.',
      href: 'https://arbostar.com/'
    },
    modules: [
      ['Customers & companies', 'Profiles, contacts, histories, notes, files, segments, custom fields, duplicate handling, import/export and search.'],
      ['Sales & estimates', 'Lead sources, ownership, pipeline stages, quotations, pricing and tax rules, PDF documents, approvals, reminders and sales reporting.'],
      ['Scheduling & jobs', 'Calendars, availability, appointments, dispatch, tasks, work orders, crews, checklists, status tracking and completion evidence.'],
      ['Employees & resources', 'Teams, roles, shifts, assignment rules, attendance where required, equipment, warehouses, stock and resource availability.'],
      ['Financial operations', 'Invoices, payment statuses, expenses, customer balances, receivables aging, financial dashboards and accounting integrations.'],
      ['Documents & reporting', 'Attachments, versioning, generated files, audit histories, dashboards, KPIs, filtered exports and scheduled reports.'],
      ['Communication', 'Email, SMS, notifications, templates, task reminders and communication histories through supported providers.']
    ],
    automation: ['Automatically assign an incoming lead', 'Send an estimate reminder', 'Update a job after an approval', 'Notify a crew about a schedule change', 'Prepare a payment reminder', 'Generate a weekly management report'],
    surfaces: [
      ['Web CRM', 'Detailed tables, forms, calendars and dashboards for office teams.'],
      ['Mobile apps', 'Focused workflows for sales representatives, managers and field employees on iOS and Android.'],
      ['Customer portals', 'Requests, booking details, estimates, documents and service history.'],
      ['Partner portals', 'Controlled access for contractors, suppliers, franchisees or B2B customers.'],
      ['Offline workflows', 'Selected data entry and synchronization when supported and explicitly planned.']
    ],
    integrations: [
      ['Websites & lead forms', 'Existing websites and lead sources connected to your pipeline.'],
      ['Email & messaging', 'Email, SMS and messaging providers for communication and reminders.'],
      ['ERP & accounting', 'Financial systems synced with invoices, balances and expenses.'],
      ['Payment providers', 'Payment status and collections connected to customer accounts.'],
      ['Inventory & maps', 'Stock systems, mapping and e-commerce or analytics platforms.'],
      ['Third-party APIs & migration', 'Existing spreadsheets, legacy CRMs or databases assessed and migrated.']
    ],
    techLead: 'Our core strength is Angular and TypeScript, supported by modern backend engineering. We choose the stack to fit the problem.',
    tech: [['Frontend', 'Angular, React, Vue, TypeScript'], ['Backend', 'Node.js, Express, NestJS, Python, PHP'], ['Data', 'MongoDB, PostgreSQL, MySQL'], ['Architecture', 'Modular services, queues, background jobs, audit logs, role-based permissions, tenant isolation']],
    roadmap: ['Customers, companies, leads and accounts.', 'Pipelines, communication, estimates and follow-ups.', 'Scheduling, jobs, employees and resources.', 'Invoices, reports, financial workflows and management dashboards.', 'Automation, integrations, mobile applications and advanced SaaS or multi-company capabilities.'],
    delivery: [
      ['Discovery', 'Understand business processes, users, existing tools and measurable goals.'],
      ['Planning', 'Agree on scope, architecture, milestones, budget and responsibilities.'],
      ['UI/UX design', 'Design practical dashboards, data tables, workflows, forms and mobile screens.'],
      ['Development & QA', 'Build iteratively and test logic, permissions, data, integrations and regression scenarios.'],
      ['Deployment & onboarding', 'Prepare production, migrate agreed data, configure users and hand over documentation.'],
      ['Support & evolution', 'Maintain reliability, implement updates and extend the platform as needed.']
    ],
    why: [
      ['Seven years contributing to ArboStar', 'Relevant experience with a complex, real-world industry platform.'],
      ['10+ years of broader engineering', 'Frontend, backend, integrations, mobile, testing and infrastructure under one agency.'],
      ['Transparent milestones', 'Real operations and maintainability prioritized over feature lists without business value.'],
      ['A long-term partner', 'From a focused CRM to a full business operating system, with the same team.']
    ],
    faq: [
      ['What is the difference between CRM and BOS?', 'CRM focuses on customer relationships and sales. A Business Operating System connects a wider set of company operations, which may include CRM, scheduling, staff, jobs, invoices and reporting.'],
      ['Did WAW build ArboStar?', 'Members of our team contributed for approximately seven years. ArboStar is an independent platform involving multiple contributors; we do not claim to have built or to own it entirely.'],
      ['Can you build something similar to ArboStar?', 'We can design a new industry-specific system with independently developed and appropriately scoped CRM, estimating, scheduling, field operations, invoicing and reporting functionality.'],
      ['Can you build a CRM from scratch or improve an existing one?', 'Yes. We offer greenfield development, MVPs, feature extensions, modernization, integration and maintenance after an initial technical review.'],
      ['Can the CRM support multiple branches, companies or customers?', 'Yes. We can plan role permissions, organization hierarchies and multi-tenant or multi-company isolation around your business model.'],
      ['Can employees use it on mobile or offline?', 'Yes. Supported mobile platforms and selected offline workflows can be included when the project requires them.'],
      ['Can you connect websites, accounting, payments and third-party tools?', 'Yes, subject to available APIs, permissions and provider requirements. Migration from an existing system is also possible after data assessment.'],
      ['Can you add AI to the CRM?', 'Yes, for suitable tasks such as search, summarization, classification, document processing and assistance, with safeguards and cost review.'],
      ['How much will it cost and how long will it take?', 'It depends on modules, roles, business rules, integrations, data migration, design and security. We define phased estimates and milestones after discovery.'],
      ['Who owns the resulting software and can WAW maintain it?', 'Source-code ownership, IP, infrastructure accounts, licensing and handover are specified in the contract. Ongoing maintenance and development can be provided separately.']
    ],
    related: [['Websites', '/website'], ['Mobile apps', '/app'], ['Marketplaces & e-commerce', '/market'], ['Back-End Development', '/service/back-end-development'], ['UI/UX Design', '/service/ui-ux-design'], ['System Integration', '/service/system-integration']],
    closeTitle: "Let's build your business management system",
    closeLead: 'Whether you are replacing spreadsheets, modernizing an existing CRM, building a SaaS product, or unifying departments, we can help assess the opportunity and deliver a practical development plan.'
  };

  // Case-study copy and outbound links verified on webart.work/partner/<id>, 28 Oct 2026.
  const pt = (id, name, kicker, links, about, role, scope, aboutName) => ({ id, name, kicker, img: 'https://webart.work/partner/' + id + '.png', links: links.map(([k, v, href]) => ({ k, v, href })), about, role, scope, aboutName: aboutName || name });
  const IG = h => ['Instagram', '@' + h, 'https://instagram.com/' + h];
  S.partners = [
    pt('demchuk-denys', 'Demchuk Denys', 'Custom kitchen & furniture workshop', [['Website', 'demchukdenys.com', 'https://demchukdenys.com'], IG('demchuk_denys'), ['Location', 'Google Maps', 'https://maps.app.goo.gl/mbz6eWD6n89nspTg7']],
      'Demchuk Denys is a premium custom kitchen and furniture workshop. We specialize in creating tailored furniture solutions for your home: kitchens, wardrobes, walk-in closets, dressers, and furniture for living rooms and bedrooms. We provide precise measurements, develop a unique design project, manufacture with quality materials, and ensure professional installation. We work in Kamianets-Podilskyi and across Ukraine. By ordering from us, you get more than furniture: you get style, comfort, and top-level service.',
      'Web Art Work is the technology partner of Demchuk Denys workshop. We are responsible for creating a modern website, setting up a CRM system for order processing and workflow automation, and supporting marketing through social media promotion, SEO optimization, and branding. Our goal is the client business digital transformation for sales growth and better service.',
      ['Website', 'CRM & workflow automation', 'Social media', 'SEO', 'Branding']),
    pt('silver-virgi', 'Silver Virgi', 'Stretch ceilings', [IG('silvervirgipotolok')],
      'Silver Virgi creates custom stretch ceilings for modern interiors. We manufacture and install stretch ceilings of any complexity: classic, multi-level, and illuminated. We offer tailored solutions for apartments, private houses, offices, and commercial spaces. We guarantee precise measurements, material selection, visualization, professional installation, and long-lasting results. Silver Virgi stands for aesthetics, quality, and reliability that stay with you for years.',
      'Web Art Work is the technology partner of Silver Virgi. We built an effective website for the company that manufactures and installs stretch ceilings, aimed at different market segments from private clients to interior designers and developers. The site presents a wide range of solutions, examples of completed projects, and collaboration benefits while keeping ordering and communication convenient. We integrated a CRM system, automated leads, and support the business in marketing through SEO, advertising, and social media strategy. Our goal is to help Silver Virgi scale and become a leader in modern ceiling solutions.',
      ['Website', 'CRM integration', 'Lead automation', 'SEO & advertising', 'Social media strategy']),
    pt('panianka', 'Panianka', 'Bridal fashion boutique', [IG('panianka_kp'), ['Location', 'Google Maps', 'https://maps.app.goo.gl/yL6kQfJwj5SyVnGD8']],
      'Panianka is a space for bridal fashion, fabrics, and accessories created for people who value style, aesthetics, and individuality. We offer refined wedding dresses that highlight life special moments, along with a large selection of lace, fabrics, and decorative accessories for creating unique garments, accessories, and original pieces. We work with brides, designers, and sewing professionals across Ukraine. Here you will find more than materials or a dress: you will find inspiration, professionalism, and impeccable service.',
      'Web Art Work is the technology partner of the bridal fashion boutique. We delivered a full website with a product catalog, integrated a CRM system for smooth client work, and automated order accounting and processing. In addition, we support the business marketing side through advertising setup, SMM strategy, SEO optimization, and visual branding. Our goal is to strengthen the brand digitally while combining aesthetics, functionality, and profitability.',
      ['Website & product catalog', 'CRM integration', 'Order automation', 'Advertising & SMM', 'SEO', 'Visual branding']),
    pt('tpotier', 'Tpotier', 'Bridal & couture textiles', [['Website', 'tpotier.com', 'https://tpotier.com'], IG('t.potier_official')],
      'Tpotier is a studio of bridal and couture textiles for designers, ateliers, and brides who value sophistication, individuality, and high craftsmanship. We offer carefully selected fabrics, delicate lace, and elegant decorative accessories for creating wedding dresses, accessories, and unique designer clothing. Our collection combines classic European aesthetics with modern trends to meet international market expectations. We work with designers, workshops, and brides from around the world, providing inspiration, quality, and professional support at every stage.',
      'Web Art Work is the technology partner of Tpotier. We created a modern website aimed at the international market, with a multilingual product catalog adapted to the needs of designers, ateliers, and brides from around the world. We integrated a CRM system for convenient order handling and client communication, and automated business processes for efficient management. We also support the project in marketing through visual style development, SEO optimization, targeted advertising, and social media presence strategy. Our goal is to scale the Tpotier brand through digital tools that support quality, image, and sales.',
      ['Multilingual website & catalog', 'CRM integration', 'Process automation', 'Visual style', 'SEO & advertising', 'Social media strategy']),
    pt('vr-arena', 'VR Arena', 'Virtual reality venue', [['Website', 'vrarena.webart.work', 'https://vrarena.webart.work'], IG('vrarenakp'), ['Location', 'Google Maps', 'https://maps.app.goo.gl/zuxjVXVd59htKcwT9']],
      'VR Arena is a space for virtual entertainment for children, teenagers, and adults. Here you can immerse yourself in virtual reality using modern VR headsets and controllers. Shooters, adventures, racing, quests, and horrors are available for one or several players. We welcome individual visitors, groups of friends, and families. We explain, help, and guide you, so it works even for beginners. VR Arena is about new emotions, active leisure, and a memorable technology experience.',
      'Web Art Work is the technology partner of VR Arena. We built a website for the virtual reality venue that combines entertainment, technology, and convenient booking for gaming sessions. The site is aimed at individual visitors, groups of friends, families, and event organizers, from birthdays to corporate events. It presents the game catalog, visit conditions, event photos, and booking options. We integrated a CRM system for order handling, automated processes, launched advertising campaigns, and developed a digital strategy. Our goal is to help VR Arena scale, broaden its audience, and become a leading player in the virtual entertainment market.',
      ['Website & booking', 'Game catalog', 'CRM integration', 'Process automation', 'Advertising', 'Digital strategy']),
    pt('salon-leather', 'Salon leather', 'Leather goods workshop · Jack Hoker', [['Website', 'salon-leather.com', 'https://salon-leather.com'], IG('jack_hoker')],
      'Jack Hoker is a leather goods workshop with more than 20 years of experience. We create bags, wallets, belts, backpacks, and accessories from genuine leather, combining handcrafted tradition with contemporary design. Every product carries the quality of trusted materials, attention to detail, and a distinctive style. We make items that last for years and gain even more character over time. We work for people who value functionality, authenticity, and craftsmanship proven by time.',
      'Web Art Work is the technology partner of Jack Hoker. We created a modern website for the leather goods brand that combines handcrafted authenticity with a relevant digital experience. The interface is adapted for clients who value quality, craftsmanship, and concise style. We implemented an online ordering system optimized for convenient communication and request processing, and connected a CRM for effective order management. We promote the brand through SEO, visual strategy, targeted advertising, and social media content. Our goal is to expand the Jack Hoker audience and strengthen the brand image built around the value of time, tradition, and quality.',
      ['Website', 'Online ordering', 'CRM integration', 'SEO', 'Visual strategy', 'Advertising & social content'], 'Jack Hoker'),
    pt('potier-cake', 'Potier Cake', 'Cake, dessert & candy-bar studio', [['Website', 'potiercake.webart.work', 'https://potiercake.webart.work'], IG('potiercake')],
      'PORTIER CAKE is a premium cake, dessert, and candy-bar studio. We specialize in creating refined sweets from natural ingredients: wedding cakes, custom desserts, and festive candy bars. We work with individual wishes, choose stylish presentation, and care about the flawless taste of every product. We prepare everything with love and attention to detail in Kamianets-Podilskyi. When you order from us, you get more than a dessert: you get emotion, aesthetics, and sweet pleasure at the highest level.',
      'Web Art Work is the technology partner of PORTIER CAKE. We created a modern website so clients can conveniently browse the assortment, place orders, and get up-to-date information. We also configured a CRM system for order tracking and client communication and automated part of the business processes. Alongside technical support, we support the project in marketing. Our goal is to help the brand grow online as elegantly as its desserts look and taste.',
      ['Website & ordering', 'CRM configuration', 'Process automation', 'Marketing support']),
    pt('ua-code', 'UA Code', 'Educational mobile app', [['Website', 'uacode.webart.work', 'https://uacode.webart.work'], IG('ua.code'), ['iOS', 'App Store', 'https://apps.apple.com/ua/app/ua-code/id6744689084?l=uk']],
      'UA Code is a mobile application for learning programming in Ukrainian. We created a convenient platform for people who want to learn programming from scratch using Ukrainian-language syntax and clear explanations. The app combines theory, practical tasks, and interactive examples. It also includes a study book for systematic learning. UA Code is a first step into IT for school students, university students, and everyone who wants to grow in the technology space without losing touch with their native language. Learn code in your own language and shape your own future.',
      'Web Art Work is the technology partner of the educational project UA Code. We developed a mobile application for learning programming in Ukrainian and built the learning structure with interactive exercises, tests, and theory blocks. We delivered the full cycle from UI/UX design to development and marketplace publication. We also support the project in marketing, SEO, and branding. Our goal is to make digital education accessible, high-quality, and genuinely Ukrainian.',
      ['UI/UX design', 'Mobile development', 'Exercises, tests & theory', 'App Store publication', 'Marketing & SEO', 'Branding'])
  ];
  S.meta = function (title, desc) {
    if (title && document.title !== title) document.title = title;
    if (!desc) return;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    if (m.getAttribute('content') !== desc) m.setAttribute('content', desc);
  };

  const st = (id, group, name, tagline, desc, url) => ({ id, group, name, tagline, desc, url });
  S.startupGroups = [
    { id: 'product', name: 'Platforms & products' },
    { id: 'regional', name: 'Regional IT spaces' },
    { id: 'ecosystem', name: 'WAW ecosystem' }
  ];
  S.startups = [
    st('agriculture', 'product', 'Agriculture', 'From Land to Buyer, Connected', 'A full agriculture operating ecosystem connecting land, farms, crops, work, equipment, supplies, workers, harvest, storage, buyers, and money into one network.', 'https://agriculture.webart.work'),
    st('bodycare', 'product', 'Body Care', 'Care That Feels Personal', 'A body care marketplace for finding trusted studios, specialists, treatments, and wellbeing services in one thoughtful place.', 'https://bodycare.webart.work'),
    st('healthcare', 'product', 'Health Care', 'Care You Can Trust', 'A healthcare marketplace for discovering trusted clinics, specialists, services, and the information needed to make confident care decisions.', 'https://healthcare.webart.work'),
    st('fashion', 'product', 'Fashion', 'Find Your Personal Style', 'A fashion marketplace for discovering boutiques, designers, collections, and style services that make every look feel personal.', 'https://fashion.webart.work'),
    st('conference', 'product', 'Conference', 'Your Talk, Live and Interactive', 'A live companion for conferences, talks, workshops, and webinars. Visitors follow along, ask questions, join polls and quizzes, and react per chapter, all from a single link with no account required.', 'https://conference.webart.work'),
    st('meetka', 'product', 'Meetka', 'Social Meetups Over Coffee', 'A social app that turns coffee shops into meeting points: discover meetups, nearby cafés, and baristas, and build real connections over coffee.', 'https://meetka.webart.work'),
    st('kp-sup-kp', 'product', 'KP - SUP - KP', 'SUP Adventures on the Dniester', 'Guided SUP adventures on the Dniester with transfers from Kamianets-Podilskyi, curated routes, challenges, booking, maps, and groups up to four.', 'https://kp-sup-kp.itkamianets.com'),
    st('neryxomka', 'product', 'Neryxomka', 'Digital History for Real Estate', "A real estate platform for discovering properties, listings, agents and developers while preserving each property's long-term records and history.", null),
    st('waiter-cloud', 'product', 'Waiter Cloud', 'Food, People, Places, Opportunities', 'A food industry platform for recipes, restaurants, cooking schools, professionals, jobs, contracts, reviews, discovery, and cooking ideas.', null),
    st('robotics', 'product', 'Robotics', 'One Platform for Every Robot', 'A cross-industry robotics platform for drones, ground robots, autonomous vehicles, robotic arms, and inspection robots, with a marketplace, missions, and a robot passport for telemetry, maintenance, and history that stays with the unit across owners.', 'https://robotics.webart.work'),
    st('play', 'product', 'WAW Play', 'Discover Worlds, Play Together', "A discovery and community platform for WAW's games and fictional worlds: find worlds, follow content, play, watch short-form video, compare rankings, and socialize.", 'https://play.webart.work'),
    st('todo', 'product', 'ToDo', 'Boards Meet Structure', 'A project/task management app sitting between lightweight boards and structured issue tracking, organized around tags, projects, tasks, sprints, and releases.', 'https://todo.webart.work'),
    st('vinhub', 'product', 'Vinhub', 'Digital History for Every Vehicle', 'A vehicle industry platform for discovering cars, listings, dealers, and ownership records while preserving each vehicle’s long-term history.', 'https://vinhub.webart.work'),
    st('legal', 'product', 'Legal', 'Every Legal Matter, One Place', 'A full legal services operating platform connecting clients, consultations, cases, documents, contracts, lawyers, law firms, and notaries in one system.', 'https://legal.webart.work'),
    st('finance', 'product', 'Finance', 'Every Number, One Place', 'A full personal and business finance operating platform connecting accounts, goals, investments, loans, assets, financial reports, funding, and portfolios in one system.', 'https://finance.webart.work'),
    st('sports', 'product', 'Sports', 'From Training to Trophy', 'A full sports management ecosystem connecting athletes, training, competitions, rankings, teams, clubs, venues, and bookings in one platform.', 'https://sports.webart.work'),
    st('pets', 'product', 'Pets', 'Every Pet, One Record', 'A pet care operating platform connecting owners, pets, health records, appointments, specialists, shelters, adoption, and pet products and services in one system.', 'https://pets.webart.work'),
    st('energy', 'product', 'Energy', 'Your Whole Energy Footprint', 'A full energy management ecosystem connecting consumers, energy systems, meters and usage, installers, equipment, producers, generation facilities, suppliers, and tariffs in one platform.', 'https://energy.webart.work'),
    st('ternopil-space', 'regional', 'Ternopil Space', 'Digital services for Ternopil', 'Ternopil Space builds websites, CRM systems, portals, and automation tools for local businesses, students, and community projects.', 'https://ternopil.space'),
    st('uman-it-space', 'regional', 'Uman IT Space', 'IT portal for Uman', 'Uman IT Space provides websites, CRM systems, booking tools, and automation for local businesses, students, and community projects.', 'https://umanit.space'),
    st('volyn-it-space', 'regional', 'Volyn IT Space', 'Regional digital infrastructure', 'Volyn IT Space builds regional websites, CRM systems, portals, and automation tools for businesses, students, and communities.', 'https://volynit.space'),
    st('vinnytsia-it-space', 'regional', 'Vinnytsia IT Space', 'Digital products for Vinnytsia', 'Vinnytsia IT Space creates websites, CRM systems, portals, and automation tools for local businesses, students, and community projects.', 'https://vinnytsiait.space'),
    st('frankivsk-space', 'regional', 'Frankivsk Space', 'IT services for Frankivsk', 'Frankivsk Space builds websites, CRM systems, portals, and automation tools for Ivano-Frankivsk businesses, students, and communities.', 'https://frankivsk.space'),
    st('chernivtsi-space', 'regional', 'Chernivtsi Space', 'Digital growth for Chernivtsi', 'Chernivtsi Space provides websites, CRM systems, local portals, and automation tools for businesses, students, and community projects.', 'https://chernivtsi.space'),
    st('london-it-space', 'regional', 'London IT Space', 'Digital services for London', 'London IT Space creates websites, CRM systems, portals, and automation tools for London businesses, startups, and community projects.', 'https://londonit.space'),
    st('greece-it-space', 'regional', 'Greece IT Space', 'IT services for Greece', 'Greece IT Space builds websites, CRM systems, business portals, and automation tools for Greek companies, startups, and communities.', 'https://greeceit.space'),
    st('team', 'ecosystem', 'Web Art Work Esports', 'More Than a Game', 'The esports chapter of Web Art Work. Meet our teams, follow the matches, and discover a community rooted in Ukraine and connected by the game.', 'https://team.webart.work'),
    st('uag', 'ecosystem', 'UAG', 'Money That Works in Ukraine', 'A digital economic ecosystem for Ukrainians, businesses, and the growth of the domestic economy.', 'https://uag.webart.work'),
    st('coin', 'ecosystem', 'wCoin', 'One Coin. Every WAW World.', 'The shared digital currency for WAW games, digital products, and online services.', 'https://coin.webart.work')
  ];

  S.tech = [
    ['Frontend', 'Wjst, Angular, React, Next.js, Vue, Tailwind, TypeScript, SCSS, WebGL'],
    ['Backend', 'Node.js, NestJS, Python, Django, FastAPI, PHP, Java, .NET, GraphQL'],
    ['Databases', 'MongoDB, PostgreSQL, MySQL, SQLite, MariaDB, Redis, Elasticsearch'],
    ['Cloud & DevOps', 'CI/CD, AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform, Nginx'],
    ['Mobile', 'Capacitor, Cordova, Ionic, React Native, Flutter, Swift, Kotlin, PWA'],
    ['Tools & Services', 'Git, GitHub, Jira, Trello, Figma, Canva, Postman, Swagger, Sentry']
  ];
  S.philosophy = [
    ['Innovation First', 'We choose modern tools when they materially improve delivery, quality, or leverage.', 'assets/philosophy-1.png'],
    ['Scalable Architecture', 'Every decision is shaped around growth, maintainability, and pragmatic future changes.', 'assets/philosophy-2.png'],
    ['Security by Design', 'Secure defaults are part of the delivery process from day one.', 'assets/philosophy-3.png']
  ];
  S.process = [
    ['Project Communication', 'We align on the business context, constraints, desired outcome, and success signals.', 'Initial discovery|Needs review|Risk mapping'],
    ['Planning & Estimate', 'Scope is turned into a practical roadmap with delivery stages and technical options.', 'Feature breakdown|Cost estimate|Execution plan'],
    ['Development', 'Implementation runs in short iterations with visible progress and constant review.', 'Agile cycles|Peer review|Regular demos'],
    ['Testing & QA', 'We verify product behavior, edge cases, and readiness before shipping to users.', 'Manual QA|Regression pass|Acceptance checks'],
    ['Deployment', 'Release is handled with environment checks, monitoring, and rollback awareness.', 'Release prep|Infrastructure check|Launch support'],
    ['Support & Growth', 'After launch we keep refining performance, adding features, and maintaining stability.', 'Post-launch support|Optimisation|Next iterations']
  ];
  S.footer = {
    solutions: S.solutions.map(s => [s.name, '/' + s.id]),
    company: S.social
  };

  // Production routes stay in markup; in this preview they resolve to the DC files.
  const SOL = S.solutions.map(s => s.id);
  S.route = function (href) {
    const m = href.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
    let p = (m[1] || '/').replace(/\/+$/, '') || '/';
    let q = m[2] || '', h = m[3] || '';
    const add = (k, v) => (q ? q + '&' : '?') + k + '=' + encodeURIComponent(v);
    let seg = p.split('/').filter(Boolean);
    if (p === '/') return 'Home.dc.html' + q + h;
    if (p === '/services') return 'Services.dc.html' + q + h;
    if (seg[0] === 'service' && seg[1]) return 'Service.dc.html' + add('id', seg[1]) + h;
    if (p === '/solutions') return 'Solutions.dc.html' + q + h;
    if (seg.length === 1 && SOL.includes(seg[0])) return 'Solution.dc.html' + add('id', seg[0]) + h;
    if (p === '/partners') return 'Partners.dc.html' + q + h;
    if (seg[0] === 'partner' && seg[1]) return 'Partner.dc.html' + add('id', seg[1]) + h;
    if (p === '/startups') return 'Startups.dc.html' + q + h;
    if (seg[0] === 'startup' && seg[1]) return 'Startup.dc.html' + add('id', seg[1]) + h;
    if (p === '/pricing') return 'Pricing.dc.html' + q + h;
    return 'https://webart.work' + href;
  };
  S.param = k => new URLSearchParams(location.search).get(k);
  (function pageMeta() {
    const file = (location.pathname.split('/').pop() || '').replace(/%20/g, ' ');
    const id = new URLSearchParams(location.search).get('id');
    const find = (list, key) => (list || []).find(x => x.id === key);
    let title = '', desc = '';
    if (/^Service\.dc/.test(file)) { const x = find(S.services, id) || (S.services || [])[0]; if (x) { title = x.name + ' Services | Web Art Work'; desc = x.desc; } }
    if (/^Startup\.dc/.test(file)) { const x = find(S.startups, id) || (S.startups || [])[0]; if (x) { title = x.name + ': ' + (x.tagline || 'Startup') + ' | Web Art Work'; desc = x.desc; } }
    if (/^Partner\.dc/.test(file)) { const x = find(S.partners, id) || (S.partners || [])[0]; if (x) { title = x.name + ' Case Study | Web Art Work'; desc = x.kicker ? x.name + ': ' + x.kicker + '. A Web Art Work partner project.' : ''; } }
    if (/^Solution\.dc/.test(file)) { const sid = id || new URLSearchParams(location.search).get('s'); const x = find(S.solutions, sid) || (S.solutions || [])[0]; if (x) { title = x.name + (x.price ? ' from ' + x.price : '') + ' | Web Art Work'; desc = x.desc; } }
    const apply = () => {
      if (title) document.title = title;
      const head = document.head; if (!head) return;
      const meta = (attr, key, val) => { if (!val) return; let m = head.querySelector('meta[' + attr + '="' + key + '"]'); if (!m) { m = document.createElement('meta'); m.setAttribute(attr, key); head.appendChild(m); } m.setAttribute('content', val); };
      if (desc) meta('name', 'description', desc);
      const d = (head.querySelector('meta[name="description"]') || {}).content || '';
      meta('property', 'og:title', document.title); meta('property', 'og:description', d); meta('property', 'og:type', 'website'); meta('name', 'twitter:card', 'summary_large_image');
      if (!head.querySelector('link[rel="icon"]')) { const l = document.createElement('link'); l.rel = 'icon'; l.type = 'image/svg+xml'; l.href = 'assets/logo.svg'; head.appendChild(l); }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
  })();

  S.theme = {
    get() { return 'dark'; },
    set(m) { document.documentElement.setAttribute('data-mode', m); try { localStorage.setItem('waw-mode', m); } catch (e) {} }
  };
  document.documentElement.setAttribute('data-mode', S.theme.get());

  if (!window.__wawRouter && !/webart\.work$/.test(location.hostname)) {
    window.__wawRouter = true;
    document.addEventListener('click', e => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href[0] !== '/' || href[1] === '/') return;
      e.preventDefault();
      const to = S.route(href);
      if (/^https?:/.test(to)) window.open(to, '_blank', 'noopener'); else location.href = to;
    }, true);
  }
  window.WAW_SITE = S;
})();
