/* @ds-bundle: {"format":4,"namespace":"WebArtWorkDesignSystem_3241df","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"CompareTable","sourcePath":"components/compare/CompareTable.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"InlineList","sourcePath":"components/content/InlineList.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"SolutionCard","sourcePath":"components/content/SolutionCard.jsx"},{"name":"Step","sourcePath":"components/content/Step.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"LangSwitch","sourcePath":"components/navigation/LangSwitch.jsx"},{"name":"MobileTabBar","sourcePath":"components/navigation/MobileTabBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"ThemeToggle","sourcePath":"components/navigation/ThemeToggle.jsx"},{"name":"Badge","sourcePath":"components/pricing/Badge.jsx"},{"name":"FeatureList","sourcePath":"components/pricing/FeatureList.jsx"},{"name":"PriceChip","sourcePath":"components/pricing/PriceChip.jsx"},{"name":"PriceLabel","sourcePath":"components/pricing/PriceLabel.jsx"},{"name":"PricingCard","sourcePath":"components/pricing/PricingCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"0820308b8015","components/actions/IconButton.jsx":"7fcaaa7054ee","components/compare/CompareTable.jsx":"88d2a5480f00","components/content/Accordion.jsx":"ae63f078320e","components/content/InlineList.jsx":"d243129c138d","components/content/SectionHeader.jsx":"ce8a255970a1","components/content/SolutionCard.jsx":"ec0f08874ed7","components/content/Step.jsx":"0c61196a2b29","components/icons/Icon.jsx":"2c3e3413f9d7","components/navigation/LangSwitch.jsx":"94dcda56c04d","components/navigation/MobileTabBar.jsx":"2867c1a4efaf","components/navigation/SiteFooter.jsx":"7990aa681af2","components/navigation/SiteHeader.jsx":"89c6a1b4e0f0","components/navigation/ThemeToggle.jsx":"2731518cc4e4","components/pricing/Badge.jsx":"e21499ca5c68","components/pricing/FeatureList.jsx":"d88dc7f54751","components/pricing/PriceChip.jsx":"a6fb78a1a6a5","components/pricing/PriceLabel.jsx":"ff9d989d46fe","components/pricing/PricingCard.jsx":"43ec1838003b","data/pricing.js":"611bf1cc2697"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WebArtWorkDesignSystem_3241df = window.WebArtWorkDesignSystem_3241df || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
// Native <details>/<summary>; first item open by default.
function Accordion({
  items = [],
  defaultOpen = 0,
  numbered = true,
  onToggle,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'waw-acc' + (className ? ' ' + className : '')
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "waw-acc__item",
    open: i === defaultOpen ? true : undefined,
    onToggle: onToggle ? e => onToggle(i, e.currentTarget.open) : undefined
  }, /*#__PURE__*/React.createElement("summary", {
    className: "waw-acc__q"
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-acc__index"
  }, numbered ? String(i + 1).padStart(2, '0') : ''), /*#__PURE__*/React.createElement("span", {
    className: "waw-acc__title"
  }, it.q), /*#__PURE__*/React.createElement("span", {
    className: "waw-acc__toggle",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "waw-acc__a"
  }, it.a))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/InlineList.jsx
try { (() => {
function InlineList({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: 'waw-inline' + (className ? ' ' + className : '')
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t)));
}
Object.assign(__ds_scope, { InlineList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InlineList.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  layout = 'split',
  level = 2,
  className = ''
}) {
  const H = level === 1 ? 'h1' : 'h2';
  return /*#__PURE__*/React.createElement("header", {
    className: 'waw-sechead waw-sechead--' + layout + (level === 1 ? ' waw-sechead--h1' : '') + (className ? ' ' + className : '')
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "waw-sechead__eyebrow"
  }, index ? /*#__PURE__*/React.createElement("b", null, index) : null, /*#__PURE__*/React.createElement("span", null, eyebrow)) : null, /*#__PURE__*/React.createElement(H, {
    className: "waw-sechead__title"
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "waw-sechead__lead"
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Step.jsx
try { (() => {
function Step({
  number,
  title,
  description,
  duration,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'waw-step' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-step__num"
  }, number), /*#__PURE__*/React.createElement("h3", {
    className: "waw-step__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "waw-step__desc"
  }, description) : null, duration ? /*#__PURE__*/React.createElement("span", {
    className: "waw-step__dur"
  }, duration) : null);
}
Object.assign(__ds_scope, { Step });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Step.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Bespoke Web Art Work glyph set — 20×20 grid, 1.5 stroke, square caps, mitred joins.
const P = {
  'arrow-up-right': 'M6 14L14 6M7.5 6H14V12.5',
  'arrow-right': 'M3.5 10H16M11 5l5 5-5 5',
  'arrow-down': 'M10 3.5V16M5 11l5 5 5-5',
  'check': 'M4.5 10.5l3.75 3.5L15.5 6',
  'dash': 'M6 10h8',
  'plus': 'M10 4.5v11M4.5 10h11',
  'chevron-down': 'M6 8l4 4 4-4',
  'menu': 'M3.5 7h13M3.5 13h13',
  'close': 'M5.5 5.5l9 9M14.5 5.5l-9 9',
  'moon': 'M15.5 12.4A6.5 6.5 0 1 1 7.6 4.5a5.2 5.2 0 0 0 7.9 7.9Z',
  'sun': 'M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M4.7 15.3l1.4-1.4M13.9 6.1l1.4-1.4M13.2 10a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0Z',
  'services': 'M4 4h5v5H4zM11 4h5v5h-5zM4 11h5v5H4zM11 11h5v5h-5z',
  'solutions': 'M10 3.5l6.5 3.5L10 10.5 3.5 7 10 3.5ZM3.5 10.5l6.5 3.5 6.5-3.5M3.5 14l6.5 3.5 6.5-3.5',
  'partners': 'M12 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM17 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
  'startups': 'M3.5 16l5-6 3 3 5-7.5M12 5.5h4.5V10',
  'pricing': 'M3.5 3.5h7l6 6-7 7-6-6v-7ZM7.5 7.5h.01'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  title,
  className = '',
  style
}) {
  const d = P[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", {
    className: 'waw-icon ' + className,
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    "aria-hidden": title ? undefined : 'true',
    role: title ? 'img' : undefined,
    style: style
  }, title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const ICON_NAMES = Object.keys(P);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ARROW = {
  'up-right': 'arrow-up-right',
  right: 'arrow-right',
  down: 'arrow-down'
};
function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  href,
  block = false,
  split = false,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['waw-btn', 'waw-btn--' + variant, size !== 'md' && 'waw-btn--' + size, block && 'waw-btn--block', split && 'waw-btn--split', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "waw-btn__label"
  }, children), arrow ? /*#__PURE__*/React.createElement("span", {
    className: "waw-btn__icon",
    "data-dir": arrow
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ARROW[arrow],
    size: size === 'sm' ? 16 : 18
  })) : null);
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: disabled ? undefined : href,
      "aria-disabled": disabled || undefined
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  bare = false,
  size = 20,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: 'waw-iconbtn' + (bare ? ' waw-iconbtn--bare' : '') + (className ? ' ' + className : ''),
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangSwitch.jsx
try { (() => {
const DEFAULT = [{
  code: 'EN',
  label: 'English'
}, {
  code: 'UA',
  label: 'Українська',
  disabled: true,
  note: 'Soon'
}];
function LangSwitch({
  languages = DEFAULT,
  value = 'EN',
  onChange,
  defaultOpen = false,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const off = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', off);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', off);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'waw-lang' + (className ? ' ' + className : ''),
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "waw-lang__btn",
    "aria-haspopup": "menu",
    "aria-expanded": open,
    "aria-label": 'Language: ' + value,
    onClick: () => setOpen(o => !o)
  }, value, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })), open ? /*#__PURE__*/React.createElement("ul", {
    className: "waw-lang__menu",
    role: "menu"
  }, languages.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.code,
    role: "none"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitemradio",
    "aria-checked": l.code === value,
    className: "waw-lang__opt",
    disabled: l.disabled,
    onClick: () => {
      onChange && onChange(l.code);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-lang__code"
  }, l.code), /*#__PURE__*/React.createElement("span", null, l.label), l.note ? /*#__PURE__*/React.createElement("span", {
    className: "waw-lang__note"
  }, l.note) : l.code === value ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }) : /*#__PURE__*/React.createElement("span", null))))) : null);
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileTabBar.jsx
try { (() => {
const TABS = [{
  label: 'Services',
  href: '/services',
  icon: 'services'
}, {
  label: 'Solutions',
  href: '/solutions',
  icon: 'solutions'
}, {
  label: 'Partners',
  href: '/partners',
  icon: 'partners'
}, {
  label: 'Startups',
  href: '/startups',
  icon: 'startups'
}, {
  label: 'Pricing',
  href: '/pricing',
  icon: 'pricing'
}];
function MobileTabBar({
  current = 'Pricing',
  items = TABS,
  fixed = true,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: 'waw-tabbar' + (fixed ? '' : ' waw-tabbar--static') + (className ? ' ' + className : ''),
    "aria-label": "Main navigation"
  }, items.map(t => /*#__PURE__*/React.createElement("a", {
    key: t.label,
    href: t.href,
    "aria-current": t.label === current ? 'page' : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  }), t.label)));
}
Object.assign(__ds_scope, { MobileTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const D = {
  about: 'Weaving digital solutions that connect, capture, and deliver results. Your trusted partner for comprehensive IT services.',
  phone: '+38 097 18 62 487',
  address: 'Ohiyenka Street, 63, Kamianets-Podilskyi, Khmelnytskyi Region, 32301',
  services: ['Web Development', 'Mobile Development', 'Unity Development', 'Business Analysis / Strategy', 'Client Onboarding / Implementation', 'Corporate Training / Development', 'Quality Assurance', 'IT Consulting'],
  technologies: ['Wjst / Angular / React / Vue', 'Capacitor / Cordova / Flutter', 'Node.js / Python / PHP / Java / .NET', 'MongoDB / MySQL', 'AWS / Google Cloud / Azure'],
  solutions: [['Websites', '/pricing'], ['Marketplaces & e-commerce', '/market'], ['CRM & business software', '/crm'], ['360° virtual tours', '/virtual-tour'], ['Mobile apps', '/app'], ['Unity games and 3D', '/unity'], ['AI & automation', '/ai'], ['Blockchain development', '/blockchain'], ['Quantum computing', '/quantum']],
  company: [['LinkedIn', '#'], ['Upwork', '#'], ['Instagram', '#'], ['GitHub', '#']]
};
function SiteFooter({
  logoSrc = 'assets/logo.svg',
  email,
  phone = D.phone,
  address = D.address,
  about = D.about,
  services = D.services,
  technologies = D.technologies,
  solutions = D.solutions,
  company = D.company,
  year = 2026,
  className = ''
}) {
  const tel = 'tel:' + phone.replace(/[^+\d]/g, '');
  return /*#__PURE__*/React.createElement("footer", {
    className: 'waw-footer' + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__about"
  }, /*#__PURE__*/React.createElement("a", {
    className: "waw-brand",
    href: "/",
    "aria-label": "Web Art Work \u2014 home"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    width: "30",
    height: "35"
  }), /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__text",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__name"
  }, "Web Art Work"), /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__sub"
  }, "IT Solutions"))), /*#__PURE__*/React.createElement("p", {
    className: "waw-footer__desc"
  }, about), /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__contacts"
  }, email ? /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email
  }, email) : null, /*#__PURE__*/React.createElement("a", {
    href: tel
  }, phone), /*#__PURE__*/React.createElement("span", {
    className: "waw-footer__addr"
  }, address))), /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__col"
  }, /*#__PURE__*/React.createElement("h3", null, "Services"), /*#__PURE__*/React.createElement("ul", null, services.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("a", {
    href: "/services"
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__col waw-footer__tech"
  }, /*#__PURE__*/React.createElement("h3", null, "Technologies"), /*#__PURE__*/React.createElement("ul", null, technologies.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__col"
  }, /*#__PURE__*/React.createElement("h3", null, "Solutions"), /*#__PURE__*/React.createElement("ul", null, solutions.map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: h
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__col"
  }, /*#__PURE__*/React.createElement("h3", null, "Company"), /*#__PURE__*/React.createElement("ul", null, company.map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    rel: "noopener"
  }, l, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 14
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "waw-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Web Art Work"), /*#__PURE__*/React.createElement("span", null, "Kamianets-Podilskyi, Ukraine"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ThemeToggle.jsx
try { (() => {
// Shows the icon of the CURRENT mode; label announces the switch target.
function ThemeToggle({
  mode = 'dark',
  onToggle,
  className = ''
}) {
  const next = mode === 'dark' ? 'light' : 'dark';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'waw-iconbtn' + (className ? ' ' + className : ''),
    "aria-label": 'Switch to ' + next + ' mode',
    onClick: () => onToggle && onToggle(next)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: mode === 'dark' ? 'moon' : 'sun',
    size: 20
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const NAV = [{
  label: 'Services',
  href: '/services'
}, {
  label: 'Solutions',
  href: '/solutions'
}, {
  label: 'Partners',
  href: '/partners'
}, {
  label: 'Startups',
  href: '/startups'
}, {
  label: 'Pricing',
  href: '/pricing'
}];
function SiteHeader({
  current = 'Pricing',
  items = NAV,
  logoSrc = 'assets/logo.svg',
  mode = 'dark',
  onModeChange,
  quoteHref = '#contact',
  forceMobile = false,
  sticky = true,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'waw-header' + (forceMobile ? ' waw-header--mobile' : '') + (className ? ' ' + className : ''),
    style: sticky ? undefined : {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-header__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "waw-brand",
    href: "/",
    "aria-label": "Web Art Work \u2014 home"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    width: "30",
    height: "35"
  }), /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__name"
  }, "Web Art Work"), /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__sub"
  }, "IT Solutions")), /*#__PURE__*/React.createElement("span", {
    className: "waw-brand__page"
  }, current)), /*#__PURE__*/React.createElement("nav", {
    className: "waw-nav",
    "aria-label": "Main navigation"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href,
    "aria-current": it.label === current ? 'page' : undefined
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "waw-header__tools"
  }, /*#__PURE__*/React.createElement(__ds_scope.LangSwitch, null), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    mode: mode,
    onToggle: onModeChange
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    className: "waw-header__quote",
    size: "sm",
    variant: "primary",
    href: quoteHref
  }, "Get a quote"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/pricing/Badge.jsx
try { (() => {
function Badge({
  tone = 'accent',
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'waw-badge waw-badge--' + tone + (className ? ' ' + className : '')
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/Badge.jsx", error: String((e && e.message) || e) }); }

// components/pricing/FeatureList.jsx
try { (() => {
// items: string | { label, included?: boolean, inherit?: boolean }
function FeatureList({
  items = [],
  dense = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: 'waw-features' + (dense ? ' waw-features--dense' : '') + (className ? ' ' + className : '')
  }, items.map((it, i) => {
    const f = typeof it === 'string' ? {
      label: it
    } : it;
    const off = f.included === false;
    const cls = 'waw-features__item' + (off ? ' waw-features__item--off' : '') + (f.inherit ? ' waw-features__item--inherit' : '');
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: cls
    }, /*#__PURE__*/React.createElement("span", {
      className: "waw-features__mark"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: off ? 'dash' : f.inherit ? 'plus' : 'check',
      size: 16,
      strokeWidth: 1.75
    })), /*#__PURE__*/React.createElement("span", null, f.label, off ? /*#__PURE__*/React.createElement("span", {
      className: "u-sr"
    }, " (not included)") : null));
  }));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PriceChip.jsx
try { (() => {
function PriceChip({
  amount,
  prefix = 'From',
  neutral = false,
  className = ''
}) {
  if (amount == null) return /*#__PURE__*/React.createElement("span", {
    className: 'waw-chip waw-chip--neutral ' + className
  }, "On request");
  return /*#__PURE__*/React.createElement("span", {
    className: 'waw-chip' + (neutral ? ' waw-chip--neutral' : '') + (className ? ' ' + className : '')
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "waw-chip__pre"
  }, prefix) : null, /*#__PURE__*/React.createElement("span", null, amount));
}
Object.assign(__ds_scope, { PriceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PriceChip.jsx", error: String((e && e.message) || e) }); }

// components/content/SolutionCard.jsx
try { (() => {
function SolutionCard({
  index,
  name,
  description,
  price,
  href = '#',
  state,
  onClick,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: 'waw-scard' + (className ? ' ' + className : ''),
    href: href,
    "data-state": state,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-scard__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-scard__index"
  }, index), /*#__PURE__*/React.createElement(__ds_scope.PriceChip, {
    amount: price
  })), /*#__PURE__*/React.createElement("div", {
    className: "waw-scard__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "waw-scard__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "waw-scard__desc"
  }, description)), /*#__PURE__*/React.createElement("span", {
    className: "waw-scard__arrow"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 20
  })));
}
Object.assign(__ds_scope, { SolutionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SolutionCard.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PriceLabel.jsx
try { (() => {
function PriceLabel({
  amount,
  currency = '$',
  term = 'one-time',
  size = 'lg',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'waw-price' + (size === 'sm' ? ' waw-price--sm' : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-price__cur"
  }, currency), /*#__PURE__*/React.createElement("span", {
    className: "waw-price__amt"
  }, amount), term ? /*#__PURE__*/React.createElement("span", {
    className: "waw-price__term"
  }, term) : null);
}
Object.assign(__ds_scope, { PriceLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PriceLabel.jsx", error: String((e && e.message) || e) }); }

// components/compare/CompareTable.jsx
try { (() => {
// plans: [{ name, price, featured }]
// groups: [{ title, rows: [{ label, values: [true | false | string, ...] }] }]
function CompareTable({
  plans = [],
  groups = [],
  layout = 'auto',
  defaultPlan,
  stickyTop,
  className = ''
}) {
  const fi = plans.findIndex(p => p.featured);
  const [active, setActive] = React.useState(defaultPlan ?? (fi >= 0 ? fi : 0));
  const cell = v => v === true ? /*#__PURE__*/React.createElement("span", {
    className: "waw-cmp__yes"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18,
    strokeWidth: 1.75
  }), /*#__PURE__*/React.createElement("span", {
    className: "u-sr"
  }, "Included")) : v === false || v == null ? /*#__PURE__*/React.createElement("span", {
    className: "waw-cmp__no"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dash",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "u-sr"
  }, "Not included")) : v;
  const colCls = i => ['is-active', plans[i] && plans[i].featured && 'is-featured'].filter((c, k) => k === 0 ? i === active : c).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: 'waw-cmp waw-cmp--' + layout + (className ? ' ' + className : ''),
    style: stickyTop != null ? {
      '--sticky-top': stickyTop
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-cmp__tabs",
    role: "tablist",
    "aria-label": "Choose a package"
  }, plans.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.name,
    type: "button",
    role: "tab",
    className: "waw-cmp__tab",
    "aria-selected": i === active,
    onClick: () => setActive(i)
  }, p.name, /*#__PURE__*/React.createElement("small", null, "$", p.price)))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "waw-cmp__c0"
  }), plans.map((p, i) => /*#__PURE__*/React.createElement("col", {
    key: i,
    "data-col": i + 1,
    className: i === active ? 'is-active' : ''
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col",
    "data-col": "0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-cmp__corner"
  }, "Features")), plans.map((p, i) => /*#__PURE__*/React.createElement("th", {
    key: p.name,
    scope: "col",
    "data-col": i + 1,
    className: colCls(i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-cmp__plan"
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-cmp__plan-name"
  }, p.name, p.featured ? /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "Popular") : null), /*#__PURE__*/React.createElement(__ds_scope.PriceLabel, {
    amount: p.price,
    size: "sm",
    term: ""
  })))))), groups.map(g => /*#__PURE__*/React.createElement("tbody", {
    key: g.title
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "colgroup",
    colSpan: plans.length + 1
  }, g.title)), g.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.label
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    "data-col": "0"
  }, r.label), r.values.map((v, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    "data-col": i + 1,
    className: colCls(i)
  }, cell(v)))))))));
}
Object.assign(__ds_scope, { CompareTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/compare/CompareTable.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingCard.jsx
try { (() => {
function PricingCard({
  index,
  name,
  description,
  price,
  term = 'one-time',
  launch,
  pages,
  features = [],
  featured = false,
  badge,
  ctaLabel,
  ctaHref = '/#contact',
  onCta,
  compareHref = '#compare',
  state,
  className = ''
}) {
  const label = ctaLabel || 'Start with ' + name;
  return /*#__PURE__*/React.createElement("article", {
    className: 'waw-pcard' + (featured ? ' waw-pcard--featured' : '') + (className ? ' ' + className : ''),
    "data-state": state,
    "aria-label": name + ' package'
  }, /*#__PURE__*/React.createElement("div", {
    className: "waw-pcard__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "waw-pcard__index"
  }, index), featured || badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge || 'Most Popular') : null), /*#__PURE__*/React.createElement("h3", {
    className: "waw-pcard__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "waw-pcard__desc"
  }, description), /*#__PURE__*/React.createElement(__ds_scope.PriceLabel, {
    className: "waw-pcard__price",
    amount: price,
    term: term
  }), /*#__PURE__*/React.createElement("dl", {
    className: "waw-pcard__meta"
  }, /*#__PURE__*/React.createElement("dt", null, "Launch"), /*#__PURE__*/React.createElement("dd", null, launch), /*#__PURE__*/React.createElement("dt", null, "Pages"), /*#__PURE__*/React.createElement("dd", null, pages)), /*#__PURE__*/React.createElement("div", {
    className: "waw-pcard__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'secondary',
    block: true,
    split: true,
    arrow: "up-right",
    href: ctaHref,
    onClick: onCta
  }, label)), /*#__PURE__*/React.createElement(__ds_scope.FeatureList, {
    className: "waw-pcard__features",
    items: features
  }), compareHref ? /*#__PURE__*/React.createElement("div", {
    className: "waw-pcard__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    size: "sm",
    arrow: "down",
    href: compareHref
  }, "Compare all features")) : null);
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// data/pricing.js
try { (() => {
// Single source of truth for Pricing content (cards, compare table, solutions, FAQ, Schema.org).
// Copy taken verbatim from webart.work/pricing (Oct 2026) + the redesign spec. Items marked // UNVERIFIED need confirmation.
window.WAW_PRICING = {
  packages: [{
    id: 'basic',
    index: '01',
    name: 'Basic',
    price: 200,
    description: 'A fast start on a proven layout',
    launch: 'A few days',
    pages: '1 page',
    // UNVERIFIED: Basic page count
    features: ['Ready-made design', 'Your photos and texts', 'Basic SEO setup', 'Mobile-friendly version', 'Contact form connected to your inbox']
  }, {
    id: 'pro',
    index: '02',
    name: 'Pro',
    price: 500,
    featured: true,
    description: 'A site built around your business',
    launch: '1–3 weeks',
    pages: 'Up to 6 pages',
    features: [{
      label: 'Everything in Basic',
      inherit: true
    }, 'Custom design matched to your brand', 'Up to 5 extra pages', 'Structure and sections built around your content', 'Application and inquiry forms']
  }, {
    id: 'extended',
    index: '03',
    name: 'Extended',
    price: 900,
    description: 'Turn your site into a growth tool',
    launch: '1–3 weeks',
    pages: 'Up to 6 pages, 3 languages',
    features: [{
      label: 'Everything in Pro',
      inherit: true
    }, 'Multilingual, up to 3 languages', 'Online booking or scheduling', 'Advanced integrations: CRM, payments and more', 'Ongoing support included']
  }],
  extrasNote: 'Domain, hosting, paid third-party services, content production and custom features beyond a package may cost extra.',
  compare: [
  // UNVERIFIED: draft matrix from spec §5
  {
    title: 'Design',
    rows: [{
      label: 'Design',
      values: ['Ready-made', 'Custom to your brand', 'Custom to your brand']
    }, {
      label: 'Mobile-friendly version',
      values: [true, true, true]
    }]
  }, {
    title: 'Pages & content',
    rows: [{
      label: 'Pages',
      values: ['1 (landing)', '+ up to 5 extra', '+ up to 5 extra']
    }, {
      label: 'Structure built around your content',
      values: [false, true, true]
    }, {
      label: 'Multilingual',
      values: [false, false, 'Up to 3 languages']
    }]
  }, {
    title: 'SEO & performance',
    rows: [{
      label: 'Basic SEO setup',
      values: [true, true, true]
    }]
  }, {
    title: 'Forms & integrations',
    rows: [{
      label: 'Contact form to your inbox',
      values: [true, true, true]
    }, {
      label: 'Application and inquiry forms',
      values: [false, true, true]
    }, {
      label: 'Online booking or scheduling',
      values: [false, false, true]
    }, {
      label: 'Integrations: CRM, payments',
      values: [false, false, true]
    }]
  }, {
    title: 'Support',
    rows: [{
      label: 'Ongoing support',
      values: [false, false, true]
    }, {
      label: 'Launch time',
      values: ['A few days', '1–3 weeks', '1–3 weeks']
    }]
  }],
  solutions: [{
    name: 'Marketplaces & e-commerce',
    description: 'Online stores, B2B platforms and multi-vendor marketplaces.',
    price: '$1,200',
    href: '/market'
  }, {
    name: 'CRM & business software',
    description: 'Custom CRM, automation and business operating systems.',
    price: '$2,000',
    href: '/crm'
  }, {
    name: '360° virtual tours',
    description: 'Let customers walk through your space online before they visit.',
    price: '$250',
    href: '/virtual-tour'
  }, {
    name: 'Mobile apps',
    description: 'One codebase for iOS, Android and web with Capacitor.',
    price: '$800',
    href: '/app'
  }, {
    name: 'Unity games and 3D',
    description: 'Games, 3D configurators and VR for web, mobile and Meta Quest.',
    price: '$1,000',
    href: '/unity'
  }, {
    name: 'AI & automation',
    description: 'AI agents, chatbots, knowledge assistants and workflow automation.',
    price: '$600',
    href: '/ai'
  }, {
    name: 'Blockchain development',
    description: 'Smart contracts, dApps, wallets and custom Cosmos SDK networks.',
    price: '$1,500',
    href: '/blockchain'
  }, {
    name: 'Quantum computing',
    description: 'IBM Quantum in our startups and in client projects on request.',
    price: null,
    href: '/quantum'
  }],
  faq: [{
    q: 'How do I choose between the Basic, Pro, and Extended packages?',
    a: 'Pick Basic if you need a working website fast and can adapt to a proven layout. Pick Pro if you want the structure, sections, and pages built around your business. Pick Extended if you also need booking, deeper integrations, and ongoing support.'
  }, {
    q: 'Can I upgrade my package later?',
    a: 'Yes, you can start with Basic or Pro and upgrade later. We will credit part of your original payment toward the difference.'
  }, {
    q: 'What do I need to provide to get started?',
    a: 'Your logo (if you have one), your brand colors, your photos, and the texts for your pages. If you do not have texts or photos yet, we can help you prepare them for an additional fee.'
  }, {
    q: 'How long does it take to build a website?',
    a: 'A Basic package typically launches within a few days. Pro and Extended packages usually take one to three weeks, depending on scope and how quickly content is provided.'
  }, {
    q: 'What about marketplaces, CRM, mobile apps or other solutions?',
    a: 'Those are priced separately from the website packages above, since scope varies far more widely. The figures shown are a realistic starting point; after a short discovery call we provide a fixed estimate for your specific project.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "data/pricing.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CompareTable = __ds_scope.CompareTable;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.InlineList = __ds_scope.InlineList;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SolutionCard = __ds_scope.SolutionCard;

__ds_ns.Step = __ds_scope.Step;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.MobileTabBar = __ds_scope.MobileTabBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.PriceChip = __ds_scope.PriceChip;

__ds_ns.PriceLabel = __ds_scope.PriceLabel;

__ds_ns.PricingCard = __ds_scope.PricingCard;

})();
