import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, CheckCircle, Cpu, Database, Factory, Gauge, Network,
  Play, TrendingUp, Wrench, BarChart3, Boxes, Users, Target,
  Zap, Mail, Phone, Layers, Activity, ClipboardCheck, LockKeyhole,
  BrainCircuit, Repeat, LineChart, CircleDollarSign, GitBranch, Truck
} from 'lucide-react';
import './styles.css';

const asset = (name) => new URL(`./${name}`, import.meta.url).href;

const navItems = [
  ['Platform', '#platform'],
  ['About', '#about'],
  ['Contact', '#contact']
];

function App() {
  return (
    <main className="site-shell">
      <Navigation />
      <Hero />
      <Proof />
      <PlatformShowcase />
      <CompleteArchitecture />
      <BuiltBy />
      <WhoItsFor />
      <MachineMemory />
      <WhyWeWin />
      <Deployment />
      <Contact />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <nav className="nav">
      <a className="brand brand-native" href="#home" aria-label="MANI home">
        <img src={asset('mani-icon.png')} alt="" />
        <div className="brand-wordmark">
          <strong>MANI</strong>
          <span>Operational Intelligence</span>
        </div>
      </a>
      <div className="nav-links">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </div>
      <a className="nav-cta" href="#contact">Start a conversation <ArrowRight size={16}/></a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero hero-photo section-pad">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="hero-dot" aria-hidden="true"/> Manufacturing Automated Network Interface</div>
          <h1>One operating language<br/>for the whole plant.</h1>
          <p className="hero-sub">
            MANI connects the systems you already run, translates what they say,<br className="desktop-break"/>
            {' '}and hands every team the next thing to do.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#platform">Explore the platform <ArrowRight size={18}/></a>
            <a className="secondary-btn" href="#proof">The Numbers</a>
          </div>
        </div>
      </div>
      <div className="hero-caption"><span className="hero-dot" aria-hidden="true"/> Operational intelligence layer <span className="caption-divider">|</span> Machine to enterprise</div>
      <a className="hero-scroll" href="#proof" aria-label="Scroll to production proof">↓</a>
    </section>
  );
}

function WhyWeWin() {
  return (
    <section id="why" className="section-pad image-section">
      <div className="section-heading compact">
        <p className="section-kicker">Why MANI wins</p>
        <h2>The operational intelligence layer for the entire facility.</h2>
        <p>Not another dashboard. Not another ERP module. MANI connects the fragmented plant environment and converts operational signals into financially prioritized execution.</p>
      </div>
      <div className="why-comparison-frame">
        <img src={asset('why-mani-wins-clean.png')} alt="Comparison showing MANI's facility focus, standardized deployment, universal user experience, operational intelligence, and faster time to value" />
      </div>
    </section>
  );
}

function AnimatedProfitEngine() {
  const left = [
    ['Machines', Factory],
    ['Systems', Database],
    ['People', Users],
    ['Processes', Wrench],
    ['Suppliers', Truck]
  ];
  const right = [
    ['Recurring revenue', CircleDollarSign],
    ['Operational leverage', TrendingUp],
    ['Customer expansion', Users],
    ['Long-term value', Target]
  ];
  const cloudDots = Array.from({ length: 58 }, (_, i) => i);
  const pathIds = ['p1','p2','p3','p4','p5','p6','p7','p8','p9'];

  return (
    <div className="flow-stage upgraded-flow" aria-label="Animated MANI operational intelligence flow">
      <div className="particle-cloud left-cloud" aria-hidden="true">
        {cloudDots.map((i) => <span key={`l-${i}`} style={{ '--i': i, '--x': `${8 + ((i * 37) % 84)}%`, '--y': `${8 + ((i * 53) % 84)}%`, '--s': `${3 + (i % 5)}px`, '--d': `${(i % 9) * .23}s` }} />)}
      </div>
      <div className="particle-cloud right-cloud" aria-hidden="true">
        {cloudDots.map((i) => <span key={`r-${i}`} style={{ '--i': i, '--x': `${6 + ((i * 41) % 86)}%`, '--y': `${7 + ((i * 47) % 84)}%`, '--s': `${3 + (i % 6)}px`, '--d': `${(i % 10) * .21}s` }} />)}
      </div>

      <svg className="flow-svg" viewBox="0 0 1500 610" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="blueFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(40,217,255,0)" />
            <stop offset="45%" stopColor="rgba(40,217,255,.9)" />
            <stop offset="100%" stopColor="rgba(40,217,255,0)" />
          </linearGradient>
          <linearGradient id="greenFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(140,255,0,0)" />
            <stop offset="50%" stopColor="rgba(140,255,0,.95)" />
            <stop offset="100%" stopColor="rgba(140,255,0,0)" />
          </linearGradient>
          <filter id="glowBlue"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="glowGreen"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        <path id="p1" className="flow-path blue" d="M190 96 C330 90, 300 210, 500 225 C610 235, 645 282, 748 298" />
        <path id="p2" className="flow-path blue" d="M190 208 C340 206, 430 250, 530 270 C620 288, 660 302, 748 305" />
        <path id="p3" className="flow-path blue" d="M190 305 C360 305, 460 305, 748 305" />
        <path id="p4" className="flow-path blue" d="M190 404 C330 398, 430 350, 540 342 C632 336, 680 318, 748 309" />
        <path id="p5" className="flow-path blue" d="M190 514 C365 512, 350 430, 520 390 C635 363, 670 333, 748 314" />

        <path id="p6" className="flow-path green" d="M820 285 C930 260, 990 220, 1105 195 C1190 178, 1240 162, 1320 128" />
        <path id="p7" className="flow-path green" d="M820 300 C955 296, 1050 293, 1320 260" />
        <path id="p8" className="flow-path green" d="M820 318 C965 344, 1070 382, 1320 405" />
        <path id="p9" className="flow-path green" d="M820 334 C940 404, 1030 458, 1130 506 C1215 548, 1264 522, 1320 508" />

        {pathIds.map((id, i) => (
          <circle className={`travel-dot ${i < 5 ? 'blue-dot' : 'green-dot'}`} r={i % 2 ? 4 : 6} key={id}>
            <animateMotion dur={`${2.4 + (i % 4) * .35}s`} repeatCount="indefinite" begin={`${i * .18}s`}>
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      <div className="source-stack">
        {left.map(([label, Icon]) => <div className="source-node" key={label}><Icon size={30}/><span>{label}</span></div>)}
      </div>

      <div className="mani-orb">
        <img src={asset('mani-icon.png')} alt="" />
        <strong>MANI</strong>
        <span>Operational Intelligence</span>
      </div>

      <div className="profit-orb">
        <TrendingUp size={58}/>
        <strong>Profitability</strong>
      </div>

      <div className="outcome-stack">
        {right.map(([label, Icon]) => <div className="outcome-node" key={label}><Icon size={26}/><span>{label}</span></div>)}
      </div>
    </div>
  );
}

function Proof() {
  const metrics = [
    ['147', 'machines connected'],
    ['7', 'enterprise systems integrated'],
    ['53', 'active plant users'],
    ['210 hrs', 'reporting eliminated weekly'],
    ['85%', 'pilot user retention'],
    ['-3% → +6%', 'EBITDA in one year'],
    ['$420K–$564K', 'annual tooling savings identified'],
    ['$1M+', 'scrap reduction opportunity identified']
  ];
  const [paused, setPaused] = useState(false);

  return (
    <section id="proof" className={`proof-ticker${paused ? ' is-paused' : ''}`} aria-label="Proven in production">
      <div className="proof-ticker-header">
        <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>
          {paused ? 'Resume motion' : 'Pause motion'}
        </button>
      </div>
      <div className="proof-ticker-window">
        <div className="proof-ticker-track">
          {[0, 1].map((copy) => (
            <ul className="proof-ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {metrics.map(([value, label]) => (
                <li key={label}><strong>{value}</strong><span>{label}</span><i aria-hidden="true">•</i></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformShowcase() {
  const views = [
    { name: 'System Map', kicker: 'Connected infrastructure', title: 'One connected system, from machine to enterprise', copy: 'Connect local and remote devices, gateways, databases, and clients through a shared operational infrastructure.', image: 'platform-system-map.png', alt: 'Architecture illustration showing local and remote SCADA sites, field devices, MQTT connections, databases, and a central Ignition gateway' },
    { name: 'Machine Story', kicker: 'Asset intelligence', title: 'A live operating picture for every machine', copy: 'Machine status, cycle time, quality, availability, and maintenance context—connected in one engineering diagnostic view.', image: 'platform-machine-story.png', alt: 'MANI Machine Story screen showing machine activity, spindle cycle-time distribution, and cycle-time performance' },
    { name: 'Task Center', kicker: 'Engineering execution', title: 'Turn operational signals into the next thing to do', copy: 'Rank issues by recoverable impact, review the evidence, and delegate work with clear priorities and ownership.', image: 'platform-task-center.png', alt: 'MANI ROI-ranked task queue and task detail with evidence, ownership, priority, and action delegation' }
  ];
  const [active, setActive] = useState(0);
  const view = views[active];
  const onTabKeyDown = (event, index) => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % views.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + views.length) % views.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = views.length - 1;
    else return;
    event.preventDefault(); setActive(next); document.getElementById(`platform-tab-${next}`).focus();
  };
  return (
    <section id="platform" className="section-pad platform-showcase">
      <div className="platform-intro">
        <p className="section-kicker">The MANI platform</p>
        <h2>See the operation as one<br className="desktop-break"/> connected system.</h2>
        <p>Move from department-level reporting to a facility-wide intelligence layer built around the decisions manufacturers make every day.</p>
      </div>
      <div className="platform-window">
        <div className="platform-window-bar"><span><b>M</b> MANI / Plant intelligence</span><span className="platform-status"><i aria-hidden="true"/> Systems synchronized</span></div>
        <div className="platform-window-body">
          <div className="platform-sidebar">
            <div className="platform-description"><p className="section-kicker">{view.kicker}</p><h3>{view.title}</h3><p>{view.copy}</p></div>
            <div className="platform-tabs" role="tablist" aria-label="Platform views" aria-orientation="vertical">
              {views.map((item, i) => <button type="button" role="tab" id={`platform-tab-${i}`} key={item.name} aria-selected={active === i} aria-controls={`platform-panel-${i}`} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={(event) => onTabKeyDown(event, i)}><span>{String(i + 1).padStart(2, '0')}</span>{item.name}</button>)}
            </div>
          </div>
          {views.map((item, i) => <div key={item.name} id={`platform-panel-${i}`} role="tabpanel" aria-labelledby={`platform-tab-${i}`} tabIndex={0} hidden={active !== i} className={`platform-image-panel platform-image-${i}`}><img src={asset(item.image)} alt={item.alt} loading="lazy"/></div>)}
        </div>
      </div>
    </section>
  );
}

function MachineMemory() {
  return (
    <section id="machine-story" className="section-pad machine-memory">
      <div className="machine-memory-grid">
        <div className="machine-memory-copy">
          <p className="section-kicker">Machine Story</p>
          <h2>Give the<br className="desktop-break"/> factory a<br className="desktop-break"/> shared<br className="desktop-break"/> memory.</h2>
          <p>Preserve what happened, why it happened, who responded, and what the event cost—at the machine, line, and facility level.</p>
          <ul>{['Live equipment and process context', 'Comments, actions, and ownership', 'Historical patterns tied to financial impact'].map((item) => <li key={item}><CheckCircle size={22}/><span>{item}</span></li>)}</ul>
        </div>
        <div className="machine-memory-visual" role="img" aria-label="Connected factory illustration with cycle drift, assembly OEE, and material replenishment context"/>
      </div>
    </section>
  );
}

function CompleteArchitecture() {
  const layers = [
    ['05', 'AI, robotics, and automated decisions', 'A governed foundation for what comes next'],
    ['04', 'Department applications', 'Operations · Engineering · Quality · Logistics · Workforce'],
    ['03', 'MANI operational intelligence', 'Predictive analytics · anomaly detection · forecasting · automated reporting and compliance'],
    ['02', 'Standardized facility data', 'A consistent data model for plug-and-play robotics, manufacturing equipment, and smart grids—across assets, events, people, and material'],
    ['01', 'Existing plant environment', 'Machines · PLCs · ERP · MES · SCADA · CMMS · databases']
  ];
  return (
    <section id="architecture" className="section-pad complete-architecture">
      <div className="architecture-heading">
        <p className="section-kicker">The complete architecture</p>
        <h2>Built above the systems you<br className="desktop-break"/> already trust.</h2>
        <p>MANI does not compete with the controls or enterprise systems running the plant. It makes them work as one operational environment.</p>
      </div>
      <ol className="architecture-stack architecture-pyramid" aria-label="Architecture layers, from decisions down to existing plant systems">
        {layers.map(([number, title, detail]) => <li key={number} className={number === '03' ? 'mani-layer' : ''}>
          <span className="architecture-number">{number}</span><div><h3>{title}</h3><p>{detail}</p></div><Layers size={24} aria-hidden="true"/>
        </li>)}
      </ol>
    </section>
  );
}

function BuiltBy() {
  return (
    <section id="about" className="section-pad built-by expertise-section" aria-label="Built by manufacturing experts">
      <div className="expertise-visual" tabIndex="0" aria-label="Manufacturing expert team composition chart; swipe horizontally on smaller screens">
        <img
          src={asset('manufacturing-experts.png')}
          alt="Built by manufacturing experts: 9 engineers, 5 quality technicians and supervisors, 3 controls engineers, and 2 each of manufacturing supervisors, HR specialists, logistics supervisors, and maintenance specialists, with additional strategic support from a senior reservoir engineer, economist, Harvard mathematics professor, and contracted automation engineers."
          loading="lazy"
        />
      </div>
    </section>
  );
}

const teamPhoto = (index, large = false) => {
  const crops = [[142,218,912,520], [228,992,173,120], [418,990,173,120], [606,986,173,120], [796,987,173,120], [986,994,173,120]];
  const [x, y, w, h] = crops[index];
  return { backgroundImage: `url(${asset('teams-reference.png')})`, backgroundSize: `${1194 / w * 100}% auto`, backgroundPosition: `${x / (1194 - w) * 100}% ${y / (1220 - h) * 100}%`, aspectRatio: large ? `${w} / ${h}` : '1.45' };
};

function WhoItsFor() {
  const teams = [
    ['Operators', 'Execute production, resolve issues, and stay on plan.'],
    ['Quality Teams', 'Identify defects before they become scrap.'],
    ['Engineering Teams', 'Prioritize constraints, recover throughput, and convert machine issues into delegated action.'],
    ['Logistics Teams', 'Coordinate inventory, material flow, WIP, warehouse movement, and shipments.'],
    ['Plant Leadership', 'Monitor plant performance and assign priorities across departments.'],
    ['COO · CEO · CFO', 'Track EBITDA impact, monitor operational risk, and delegate action across facilities.']
  ];
  const [active, setActive] = useState(0);
  const move = (step) => setActive((current) => (current + step + teams.length) % teams.length);
  return (
    <section id="teams" className="section-pad teams-section">
      <div className="section-heading">
        <h2>For the teams running manufacturing.</h2>
        <p>MANI gives operators, quality, engineering, and logistics teams the execution layer they need while giving managers and executives the visibility to monitor EBITDA and delegate high-impact work.</p>
      </div>
      <div className="teams-carousel" role="region" aria-label="Manufacturing teams carousel" aria-roledescription="carousel">
        <button className="team-arrow previous" onClick={() => move(-1)} aria-label="Previous team">❮</button>
        <article className="team-feature" aria-live="polite" aria-atomic="true">
          <div className="team-feature-photo" style={teamPhoto(active, true)} role="img" aria-label={`${teams[active][0]} at work`}/>
          <div className="team-feature-copy"><p className="section-kicker">Team {String(active + 1).padStart(2, '0')}</p><h3>{teams[active][0]}</h3><p>{teams[active][1]}</p></div>
        </article>
        <button className="team-arrow next" onClick={() => move(1)} aria-label="Next team">❯</button>
      </div>
      <div className="team-thumbnails">
        {teams.map(([name, copy], i) => <button key={name} className={`team-thumbnail${i === active ? ' selected' : ''}`} onClick={() => setActive(i)} aria-pressed={i === active} aria-label={`Show ${name}`}>
          <div className="team-thumb-photo" style={teamPhoto(i)} aria-hidden="true"/>
          <div className="team-thumb-copy"><strong>{name}</strong><span>{copy}</span></div>
        </button>)}
      </div>
    </section>
  );
}

function Deployment() {
  const packages = [
    [Database, 'Foundation package', 'Starter Infrastructure', 'We build the fundamental IoT and data infrastructure layer so your plant can access machine, ERP, CRM, MES, dashboard, Power BI, Tableau, or AI-ready data from one central location.', ['Machine connectivity', 'ERP / CRM / MES connectivity', 'Central data layer', 'Power BI, Tableau, and AI-ready architecture', 'Single source of truth for plant data']],
    [TrendingUp, 'Most popular', 'Growth Platform', 'Growth adds the MANI interface on top of the infrastructure layer with task delegation, dashboards, ROI tracking, and pay-per-module expansion.', ['Everything in Starter', 'MANI applications', 'Operations, engineering, quality, logistics, and workforce modules', 'Task delegation and workflow ownership', 'ROI tracking and financial prioritization']],
    [Network, 'Full platform', 'Enterprise Intelligence', 'Enterprise includes the full MANI operating system for facility-wide intelligence, cross-facility visibility, and advanced operational coordination.', ['Everything in Growth', 'Full platform access', 'Cross-facility visibility', 'Operational intelligence network', 'Interoperability and advanced coordination']],
    [Wrench, 'Custom architecture', 'Custom Deployment', 'Only need selected connectivity or modules? Build a custom package around specific ERP, CRM, MES, machine, logistics, HR, quality, or executive workflows.', ['Selected ERP, CRM, or MES integration', 'Machine connectivity only', 'Module-specific deployment', 'Targeted workflow buildout', 'Custom implementation scope']]
  ];
  return (
    <section id="deployment" className="section-pad deployment package-deployment" aria-label="Deployment models">
      <div className="section-heading package-heading"><h2>Subscription Packages</h2><p>Licenses are also available for each package type.</p></div>
      <div className="package-grid">
        {packages.map(([Icon, badge, name, copy, features], i) => <article className={`package-card${i === 1 ? ' popular' : ''}`} key={name}>
          <div className="package-icon"><Icon size={28}/></div>
          <span className="package-badge">{badge}</span><h3>{name}</h3><p>{copy}</p>
          <ul>{features.map((feature) => <li key={feature}><CheckCircle size={16}/><span>{feature}</span></li>)}</ul>
        </article>)}
      </div>
      <a className="primary-btn package-pricing" href="#contact">Request Pricing <ArrowRight size={18}/></a>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad contact">
      <div className="contact-card">
        <div>
          <p className="section-kicker">Schedule a demo</p>
          <h2>Ready to turn plant data into operational profit?</h2>
          <p>Tell us about your facility, machines, systems, and biggest operational bottleneck. We will map a deployment path and ROI opportunity.</p>
          <div className="contact-lines"><span><Mail size={18}/> contact@mani-ops.com</span><span><Phone size={18}/> Schedule a call</span></div>
        </div>
        <form className="lead-form">
          <input placeholder="Name" />
          <input placeholder="Company" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="Number of machines, systems, and key challenges" rows="5" />
          <button type="button">Request Demo</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div className="brand-native footer-brand"><img src={asset('mani-icon.png')} alt=""/><div className="brand-wordmark"><strong>MANI</strong><span>Operational Intelligence</span></div></div><p>© 2026 MANI Operational Intelligence. Manufacturing Automated Network Interface.</p></footer>;
}

createRoot(document.getElementById('root')).render(<App />);
