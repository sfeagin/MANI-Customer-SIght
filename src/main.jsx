import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, CheckCircle, Cpu, Database, Factory, Gauge, Network,
  Play, TrendingUp, Wrench, BarChart3, Users, Target,
  Zap, Mail, Phone, Layers, ClipboardCheck, LockKeyhole,
  BrainCircuit, Repeat, LineChart, CircleDollarSign, GitBranch, Truck,
  AlertTriangle, Package, Warehouse, UserCheck
} from 'lucide-react';
import './styles.css';
import platformPreview from "./mani-platform-preview.png";

const asset = (name) => new URL(`./${name}`, import.meta.url).href;

const navItems = [
  ['Why MANI', '#why'],
  ['How It Works', '#how'],
  ['Proof', '#proof'],
  ['Platform', '#platform'],
  ['Demo Access', '#contact'],
  ['Contact', '#contact']
];

function App() {
  return (
    <main className="site-shell">
      <Navigation />
      <Hero />
      <WhyWeWin />
      <Problem />
      <ReserveIntake />
      <ManufacturingBreakingPoint />
      <GapSection />
      <HowItWorks />
      <Proof />
      <Platform />
      <CommercialVideo />
      <WhoItsFor />
      <BuiltBy />
      <Deployment />
      <Contact />
      <Footer />
    </main>
  );
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <a className="brand brand-native" href="#home" aria-label="MANI home" onClick={closeMenu}>
        <img src={asset('mani-icon.png')} alt="" />
        <div className="brand-wordmark">
          <strong>MANI</strong>
          <span>Operational Intelligence</span>
        </div>
      </a>

      <button
        className={`burger-menu ${menuOpen ? 'open' : ''}`}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-grid">

        <div className="hero-copy reveal">
          <div className="eyebrow">
            <Network size={16}/> Manufacturing Automated Network Interface
          </div>

          <h1>
            Manufacturing runs on data. <span>MANI turns it into profit.</span>
          </h1>

          <p className="hero-sub">
            MANI connects machines, ERP, MES, quality, maintenance, logistics,
            inventory, workforce systems, and engineering into a single
            operational intelligence layer that identifies, prioritizes, and
            drives actions that improve EBITDA.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#contact">
              Reserve Facility Spot <ArrowRight size={18}/>
            </a>

            <a className="secondary-btn" href="#contact">
              Demo Request
            </a>

            <a className="secondary-btn" href="#contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-visual reveal delay">
          <ManiEntryAnimation />
        </div>

      </div>
    </section>
  );
}

function ManiEntryAnimation() {
  const [mousePoint, setMousePoint] = useState(null);

  const planets = [
    ['Operations', 'planet planet-ops', Factory],
    ['Quality', 'planet planet-quality', ClipboardCheck],
    ['Engineering', 'planet planet-engineering', Wrench],
    ['Logistics', 'planet planet-logistics', Truck],
    ['Finance', 'planet planet-finance', CircleDollarSign],
    ['HR', 'planet planet-hr', Users]
  ];

  const beadClusters = Array.from({ length: 1100 }, (_, i) => {
    const xNum = 2 + ((i * 37) % 96);
    const yNum = 3 + ((i * 53) % 94);

    return {
      id: i,
      xNum,
      yNum,
      x: `${xNum}%`,
      y: `${yNum}%`,
      size: `${1 + (i % 8)}px`,
      delay: `${(i % 24) * 0.08}s`,
      drift: `${6 + (i % 11) * 3}px`
    };
  });

  const updateMousePoint = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setMousePoint({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100
    });
  };

  return (
    <div
      className="mani-entry mani-galaxy mani-neon-network"
      aria-label="MANI operational intelligence network animation"
      onMouseMove={updateMousePoint}
      onMouseLeave={() => setMousePoint(null)}
    >
      <div className="entry-grid galaxy-grid" />

      <div className="bead-cluster-field" aria-hidden="true">
        {beadClusters.map(({ id, x, y, xNum, yNum, size, delay, drift }) => {
          const dx = mousePoint ? xNum - mousePoint.x : 0;
          const dy = mousePoint ? yNum - mousePoint.y : 0;
          const distance = mousePoint ? Math.sqrt(dx * dx + dy * dy) : 999;
          const active = distance < 9;
          const strength = active ? (1 - distance / 9) : 0;
          const safeDistance = distance || 1;
          const pushX = active ? (dx / safeDistance) * (20 * strength) : 0;
          const pushY = active ? (dy / safeDistance) * (20 * strength) : 0;

          return (
            <span
              className={active ? 'bead-near' : ''}
              key={id}
              style={{
                '--x': x,
                '--y': y,
                '--s': size,
                '--d': delay,
                '--drift': drift,
                '--push-x': `${pushX}px`,
                '--push-y': `${pushY}px`,
                '--near-opacity': `${0.36 + strength * 0.32}`,
                '--near-scale': `${1 + strength * 0.55}`
              }}
            />
          );
        })}
      </div>

      <svg
  className="entry-network-lines galaxy-lines neon-flow-lines"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  aria-hidden="true"
  style={{ zIndex: 9 }}
>
  <defs>
    <filter id="maniLineGlow" x="-35%" y="-35%" width="170%" height="170%">
      <feGaussianBlur stdDeviation="1.7" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <path className="neon-link link-ops" d="M50 34 L50 12.5" style={{ opacity: 1, stroke: '#fb6a00' }} />
  <path className="neon-link return-link link-ops" d="M50 12.5 L50 34" style={{ opacity: 1, stroke: '#fb6a00' }} />

  <path className="neon-link link-quality" d="M36 44 L29 44 L21 40" />
  <path className="neon-link return-link link-quality" d="M21 42 L29 46 L36 46" />

  <path className="neon-link link-engineering" d="M64 44 L71 44 L79 40" />
  <path className="neon-link return-link link-engineering" d="M79 42 L71 46 L64 46" />

  <path className="neon-link link-logistics" d="M36 64 L29 64 L21 70" />
  <path className="neon-link return-link link-logistics" d="M21 72 L29 66 L36 66" />

  <path className="neon-link link-finance" d="M64 64 L71 64 L79 70" />
  <path className="neon-link return-link link-finance" d="M79 72 L71 66 L64 66" />

  <path className="neon-link link-hr" d="M50 66 L50 91" style={{ opacity: 1, stroke: '#a855f7' }} />
  <path className="neon-link return-link link-hr" d="M50 91 L50 66" style={{ opacity: 1, stroke: '#a855f7' }} />

  <circle className="junction-dot dot-top" cx="50" cy="34" r=".95" />
  <circle className="junction-dot dot-ops-node" cx="50" cy="12.5" r=".95" />

  <circle className="junction-dot dot-left-top" cx="36" cy="45" r=".95" />
  <circle className="junction-dot dot-right-top" cx="64" cy="45" r=".95" />

  <circle className="junction-dot dot-left-bottom" cx="36" cy="65" r=".95" />
  <circle className="junction-dot dot-right-bottom" cx="64" cy="65" r=".95" />

  <circle className="junction-dot dot-bottom" cx="50" cy="66" r=".95" />
  <circle className="junction-dot dot-hr-node" cx="50" cy="91" r=".95" />
</svg>

      <div className="mani-planet-core">
        <div className="core-hex">
          <img src={asset('mani-icon.png')} alt="MANI" />
        </div>
        <h3>MANI</h3>
        <span>Operational Intelligence</span>
      </div>

      <div className="planet-layer">
        {planets.map(([label, className, Icon]) => (
          <div className={className} key={label}>
            <div className="planet-glow" />
            <div className="planet-surface">
              <div className="planet-content">
                <Icon size={28} />
                <strong>{label}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyWeWin() {
  return (
    <section id="why" className="section-pad image-section">
      <div className="section-heading compact">
        <p className="section-kicker">Why MANI wins</p>
        <h2>The operational intelligence layer for the entire facility.</h2>
        <p>
          Not another dashboard. Not another ERP module. MANI connects the
          fragmented plant environment and converts operational signals into
          financially prioritized execution.
        </p>
      </div>

      <div className="image-frame large clean-frame">
        <img
          src={asset('why-we-win.png')}
          alt="Why MANI wins comparison and operational intelligence flow"
        />
      </div>
    </section>
  );
}

function Problem() {
  const pains = [
    ['Production concerns arise in bunches', 'Some issues fall through the cracks, quick fixes win attention, and long-term root causes wait until the problem comes back.', Repeat],
    ['Scrap becomes a number, not a diagnosis', 'Scrap is measured, but rarely tied back to batch context, tooling conditions, process drift, or total production patterns.', BarChart3],
    ['Capacity is a market-educated guess', 'Planning depends on assumptions instead of a live view of real machine, labor, quality, and material capability.', LineChart],
    ['Management collects instead of directs', 'Leaders spend time chasing updates and troubleshooting instead of analyzing constraints and moving teams toward KPI attainment.', Target],
    ['Departments optimize separately', 'Quality, maintenance, logistics, engineering, operations, and finance may each be data-driven without working from one shared plant logic.', GitBranch],
    ['Data is locked behind permissions', 'Limited IT capacity, disconnected systems, and permission bottlenecks slow down engineers and operators who need answers now.', LockKeyhole],
    ['Plant knowledge is not centralized', 'Critical decisions, fixes, and operating context stay scattered across emails, meetings, notebooks, and individual employees.', Database],
    ['Predictive analytics never compounds', 'Plants collect millions of data points but rarely turn them into reusable models, live forecasts, or centralized intelligence.', BrainCircuit]
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="problem section-pad">
      <div className="split problem-split">
        <div className="problem-copy">
          <p className="section-kicker">The hidden cost of fragmentation</p>
          <h2>
            Manufacturers have more data than ever. Most facilities still run
            on meetings, Excel, and tribal knowledge.
          </h2>
          <p className="big-p">
            Machines know. Quality knows. Maintenance knows. Engineering knows.
            Finance knows. But none of them speak the same operational language.
          </p>
        </div>

        <div className="accordion-grid" role="list">
          {pains.map(([title, copy, Icon], index) => {
            const active = open === index;

            return (
              <button
                className={`accordion-card ${active ? 'active' : ''}`}
                key={title}
                type="button"
                onClick={() => setOpen(active ? -1 : index)}
                aria-expanded={active}
              >
                <div className="accordion-top">
                  <Icon size={22}/>
                  <strong>{title}</strong>
                  <span className="accordion-plus">{active ? 'ΓêÆ' : '+'}</span>
                </div>
                <div className="accordion-body">
                  <p>{copy}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function ReserveIntake() {
  return (
    <section className="section-pad reserve-intake-section">
      <div className="reserve-card reserve-card-standalone">
        <div>
          <p className="section-kicker">Selective facility intake</p>
          <h3>Reserve your facility's implementation spot.</h3>
          <p>
            MANI is currently onboarding a limited number of manufacturing
            facilities to protect deployment quality, architecture depth, and
            implementation support.
          </p>
        </div>

        <a className="primary-btn wide" href="#contact">
          Reserve Facility Spot <ArrowRight size={18}/>
        </a>
      </div>
    </section>
  );
}

function ManufacturingBreakingPoint() {
  const forces = [
    {
      title: 'More Data',
      className: 'blue',
      items: [
        'Industrial IoT',
        'Connected equipment',
        'ERP / MES expansion',
        'AI-driven analytics',
        'Quality and traceability requirements'
      ],
      note: 'Manufacturers generate more information than ever before.'
    },
    {
      title: 'Less Labor',
      className: 'orange',
      items: [
        'Aging workforce',
        'Skilled labor shortages',
        'Knowledge loss through turnover',
        'Faster employee rotation',
        'Increasing training requirements'
      ],
      note: 'The people who understand operations are becoming harder to replace.'
    },
    {
      title: 'Greater Traceability',
      className: 'green',
      items: [
        'Customer requirements',
        'Regulatory compliance',
        'Supply chain visibility',
        'Quality documentation',
        'Sustainability reporting'
      ],
      note: 'Every decision now requires more documentation and accountability.'
    }
  ];

  return (
    <section className="breaking-point section-pad">
      <div className="section-heading">
        <p className="section-kicker">Why manufacturing is reaching a breaking point</p>
        <h2>Three forces are converging across every facility.</h2>
        <p>
          Manufacturing does not have a data shortage. It has a coordination
          challenge that traditional systems were never designed to solve.
        </p>
      </div>

      <div className="breaking-grid">
        {forces.map(({ title, className, items, note }) => (
          <div className={`breaking-card ${className}`} key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}><CheckCircle size={16}/>{item}</li>
              ))}
            </ul>
            <p>{note}</p>
          </div>
        ))}
      </div>

      <div className="breaking-result">
        <strong>More Data</strong>
        <span>+</span>
        <strong>Less Labor</strong>
        <span>+</span>
        <strong>Greater Traceability</strong>
        <span>=</span>
        <strong>Operational Complexity</strong>
      </div>
    </section>
  );
}

function GapSection() {
  const invested = [
    ['Machines', Factory],
    ['Sensors', Gauge],
    ['ERP Systems', Database],
    ['MES Systems', Cpu],
    ['Quality Systems', ClipboardCheck],
    ['Traceability Platforms', GitBranch]
  ];

  const stillUses = [
    ['Spreadsheets', BarChart3],
    ['Email', Mail],
    ['Phone Calls', Phone],
    ['Daily Meetings', Users],
    ['Tribal Knowledge', BrainCircuit]
  ];

  return (
    <section className="gap-section section-pad">
      <div className="section-heading compact">
        <p className="section-kicker">The gap</p>
        <h2>Manufacturers invested in technology, but decisions are still coordinated manually.</h2>
        <p>
          Machines, sensors, ERP, MES, quality systems, and traceability
          platforms capture information. But daily operational decisions still
          depend on spreadsheets, email, phone calls, meetings, and tribal
          knowledge.
        </p>
      </div>

      <div className="gap-grid">
        <div className="gap-panel technology">
          <h3>Millions invested in digital infrastructure</h3>
          {invested.map(([label, Icon]) => (
            <div className="gap-row" key={label}>
              <Icon size={22}/>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="gap-vs">VS.</div>

        <div className="gap-panel manual">
          <h3>Decisions still coordinated through</h3>
          {stillUses.map(([label, Icon]) => (
            <div className="gap-row" key={label}>
              <Icon size={22}/>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="missing-layer">
        <div>
          <p className="section-kicker">The missing layer</p>
          <h3>Operational Intelligence</h3>
        </div>
        <p>
          The ability to connect information across departments and convert it
          into coordinated, measurable action.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const cards = [
    ['Connect', 'Machines, ERP, MES, SCADA, CMMS, quality, inventory, logistics, and engineering systems.', Database],
    ['Translate', 'Convert fragmented operating data into production risk, ROI, quality drivers, and workflow priorities.', Layers],
    ['Drive', 'Assign the right action to the right team with financial impact attached to the task.', Zap]
  ];

  return (
    <section id="how" className="section-pad how-section">
      <div className="section-heading">
        <p className="section-kicker">How MANI works</p>
        <h2>One operating language across the facility.</h2>
      </div>

      <div className="how-grid">
        {cards.map(([title, copy, Icon], i) => (
          <div className="how-card" key={title}>
            <div className="step">0{i + 1}</div>
            <Icon size={34}/>
            <h3>{title} everything.</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>

      <AnimatedProfitEngine />
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
        {cloudDots.map((i) => (
          <span
            key={`l-${i}`}
            style={{
              '--i': i,
              '--x': `${8 + ((i * 37) % 84)}%`,
              '--y': `${8 + ((i * 53) % 84)}%`,
              '--s': `${3 + (i % 5)}px`,
              '--d': `${(i % 9) * .23}s`
            }}
          />
        ))}
      </div>

      <div className="particle-cloud right-cloud" aria-hidden="true">
        {cloudDots.map((i) => (
          <span
            key={`r-${i}`}
            style={{
              '--i': i,
              '--x': `${6 + ((i * 41) % 86)}%`,
              '--y': `${7 + ((i * 47) % 84)}%`,
              '--s': `${3 + (i % 6)}px`,
              '--d': `${(i % 10) * .21}s`
            }}
          />
        ))}
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

          <filter id="glowBlue">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="glowGreen">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
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

      <div className="flow-caption flow-caption-left">Optimized Inputs</div>

      <div className="source-stack">
        {left.map(([label, Icon]) => (
          <div className="source-node" key={label}>
            <Icon size={30}/>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="mani-orb">
        <img src={asset('mani-icon.png')} alt="" />
        <strong>MANI</strong>
        <span>Operational Intelligence</span>
      </div>

      <div className="profit-orb">
        <CircleDollarSign className="profit-dollar" size={54}/>
        <strong>Profitability</strong>
      </div>

      <div className="outcome-stack">
        {right.map(([label, Icon]) => (
          <div className="outcome-node" key={label}>
            <Icon size={26}/>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function useCountUp(target, duration = 1500, restartKey = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    let startTime;
    setValue(0);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, restartKey]);

  return value;
}

function CountUpStat({ target, suffix = '' }) {
  const value = useCountUp(target, 1500, 0);

  return <>{value.toLocaleString()}{suffix}</>;
}

function StatValue({ value, label }) {
  if (label === 'machines connected') {
    return <CountUpStat target={945} />;
  }

  if (label === 'active plant users') {
    return <CountUpStat target={130} suffix="+" />;
  }

  return <>{value}</>;
}

function Proof() {
  const financialStats = [
    ['-3% → +6%', 'EBITDA improvement in one year', 'Margin moved from negative to positive during pilot period.'],
    ['$420K•$564K', 'annual tooling savings identified', 'Tooling usage became visible, comparable, and actionable.'],
    ['$1M+', 'scrap reduction opportunity identified', 'Quality losses translated into financial opportunity.']
  ];

  const operatingStats = [
    ['945', 'machines connected'],
    ['7', 'enterprise systems integrated'],
    ['130+', 'active plant users'],
    ['210', 'reporting hours eliminated weekly'],
    ['23%', 'engineering efficiency improvement'],
    ['85%', 'pilot user retention']
  ];

  return (
    <section id="proof" className="proof section-pad">
      <div className="section-heading">
        <p className="section-kicker">Proven in production</p>
        <h2>Built inside a live manufacturing environment.</h2>
        <p>
          MANI was developed inside a live plant environment with operational,
          engineering, quality, HR, logistics, maintenance, and controls users
          shaping the system.
        </p>
      </div>

      <div className="proof-groups">
        <div className="impact-header scale-header left-header">
          <p className="section-kicker">Operational scale</p>
          <h3>The pilot was used across real plant functions.</h3>
        </div>

        <div className="operational-grid">
          {operatingStats.map(([num, label]) => (
            <div className="operational-card" key={label}>
              <strong><StatValue value={num} label={label} /></strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="impact-header financial-header left-header">
          <p className="section-kicker">Financial impact</p>
          <h3>Executive outcomes buyers actually care about.</h3>
        </div>

        <div className="financial-grid">
          {financialStats.map(([num, label, note], index) => (
            <div className={`financial-card financial-${index}`} key={label}>
              <span className="metric-label">{label}</span>
              <strong>{num}</strong>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  const modules = [
    [
      'Operations Intelligence',
      'Operations Command Center • Production Attainment & Loss • Supervisor Task Delegation • Shift Handoff • Production Floor Visualization',
      Factory
    ],
    [
      'Engineering Intelligence',
      'Engineering Task Center • Machine Story • Asset Intelligence • ROI Queue • Controls Analytics • Tooling Intelligence • Maintenance Work Orders • Engineering Supervisor Delegation',
      Cpu
    ],
    [
      'Quality Intelligence',
      'MPI Reporting • Tooling Statistics • Quality Analytics • Scrap & Rework Orchestration •Specification Management • Material Intelligence • EBITDA Exposure Analysis',
      ClipboardCheck
    ],
    [
      'Logistics Intelligence',
      'Warehouse Intelligence • Material Traceability • Inventory Optimization • Shipment Visibility • Demand Planning',
      Truck
    ],
    [
      'Workforce Intelligence',
      'Attendance Intelligence • Workforce Planning • Labor Impact Analytics • Hiring Pipeline • Payroll Readiness • Clock-In / Clock-Out • Training • Coverage Planning',
      Users
    ],
    [
      'Executive Intelligence',
      'Financial Impact Dashboard • EBITDA Monitoring • Risk Prioritization • Operational ROI Engine • Cross-Department Performance Intelligence',
      TrendingUp
    ]
  ];

  return (
    <section id="platform" className="section-pad platform">
      <div className="section-heading">
        <p className="section-kicker">Complete Platform Modules</p>
        <h2>One platform. Five business functions. Fourteen core applications.</h2>
        <p>
          MANI provides a unified operational intelligence layer connecting
          operations, engineering, quality, logistics, human resources, and
          executive leadership into one financially aligned system.
        </p>
      </div>

      <div className="module-grid">
        {modules.map(([title, copy, Icon]) => (
          <div className="module-card" key={title}>
            <Icon size={26}/>
            <h3>{title}</h3>
            <p>{copy}</p>
            <a className="module-demo-btn" href="#contact">
              Book Demo <ArrowRight size={15}/>
            </a>
          </div>
        ))}
      </div>

      <div className="image-frame dashboard-frame clean-frame">
        <img
          src={platformPreview}
          alt="MANI Operational Intelligence Platform"
        />
      </div>
    </section>
  );
}

function CommercialVideo() {
  return (
    <section className="section-pad cinematic-preview commercial-video-section">
      <style>{`
        .commercial-video-section .video-placeholder{
          max-width:1120px;
          min-height:430px;
          margin:38px auto 0;
          border:1px solid rgba(40,217,255,.24);
          border-radius:32px;
          background:
            radial-gradient(circle at 24% 22%,rgba(40,217,255,.16),transparent 34%),
            radial-gradient(circle at 76% 72%,rgba(140,255,0,.10),transparent 30%),
            linear-gradient(145deg,rgba(8,17,31,.92),rgba(2,6,23,.98));
          box-shadow:0 28px 90px rgba(0,0,0,.36),inset 0 1px 0 rgba(255,255,255,.05);
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:18px;
          color:#e8f4ff;
          text-align:center;
          position:relative;
          overflow:hidden;
        }
        .commercial-video-section .video-placeholder:before{
          content:"";
          position:absolute;
          inset:24px;
          border:1px solid rgba(148,163,184,.12);
          border-radius:24px;
          pointer-events:none;
        }
        .commercial-video-section .video-placeholder svg{
          width:86px;
          height:86px;
          padding:22px;
          border-radius:999px;
          color:#28d9ff;
          background:rgba(40,217,255,.10);
          border:1px solid rgba(40,217,255,.35);
          box-shadow:0 0 44px rgba(40,217,255,.18);
        }
        .commercial-video-section .video-placeholder span{
          font-size:22px;
          font-weight:900;
          letter-spacing:-.03em;
        }
      `}</style>

      <div className="section-heading">
        <p className="section-kicker">Commercial Demonstration</p>
        <h2>See MANI in action.</h2>
        <p>
          Watch how operational intelligence connects machines, people, systems,
          and financial outcomes into one coordinated manufacturing environment.
        </p>
      </div>

      <div className="video-placeholder">
        <Play size={60} />
        <span>Commercial Video Coming Soon</span>
      </div>
    </section>
  );
}

function BuiltBy() {
  const contributorStats = [];

  const contributors = [
    ['9 Engineers', 'Tooling, senior engineering, manufacturing, controls, and automation expertise.'],
    ['5 Quality Technicians & Supervisors', 'Lab, inspection, defect, MPI, scrap, and rework workflow input.'],
    ['3 Controls Engineers', 'Machine signal, PLC, controls, and production data logic.'],
    ['2 Manufacturing Supervisors', 'Floor execution, attainment, downtime, and shift-level operating reality.'],
    ['2 HR Specialists', 'Attendance, workforce planning, coverage, training, and payroll readiness.'],
    ['2 Logistics Supervisors', 'Warehouse movement, inventory, traceability, WIP, and shipment workflows.'],
    ['2 Maintenance Specialists', 'Work orders, machine reliability, downtime, repair notes, and escalation logic.']
  ];

  const advisors = [
    'Senior Reservoir Engineer',
    'Economist',
    'Harvard Mathematics Professor',
    'Contracted Automation Engineers'
  ];

  return (
    <section className="section-pad built-by manufacturing-built">
      <div className="section-heading compact">
        <p className="section-kicker">Developed inside manufacturing</p>
        <h2>Built with the people who operate, improve, and manage the plant.</h2>
        <p>
          MANI was developed alongside the real users responsible for production,
          quality, controls, maintenance, HR, logistics, engineering, and plant
          leadership. The platform was shaped by operating reality, not by
          outside software assumptions.
        </p>
      </div>

      {contributorStats.length > 0 && (
        <div className="contributor-stat-grid">
          {contributorStats.map(([value, label]) => (
            <div className="contributor-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="contributor-grid">
        {contributors.map(([title, copy]) => (
          <div className="contributor-card" key={title}>
            <CheckCircle size={20}/>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="advisor-panel">
        <h3>Additional Strategic Support</h3>
        <div className="advisor-grid">
          {advisors.map((advisor) => (
            <div key={advisor}>{advisor}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const personas = [
    {
      title: 'Operators',
      copy: 'Execute production, resolve issues, and stay on plan.',
      image: asset('operator.jpg')
    },
    {
      title: 'Quality Teams',
      copy: 'Identify defects before they become scrap.',
      image: asset('Quality technicians.jpg')
    },
    {
      title: 'Engineering Teams',
      copy: 'Prioritize constraints, recover throughput, and convert machine issues into delegated action.',
      image: '/Assets/engineering teams.jpg'
    },
    {
      title: 'Logistics Teams',
      copy: 'Coordinate inventory, material flow, WIP, warehouse movement, and shipments.',
      image: '/Assets/Logistics team.jpg'
    },
    {
      title: 'Plant Leadership',
      copy: 'Monitor plant performance and assign priorities across departments.',
      image: asset('plant leadership.jpg')
    },
    {
      title: 'COO • CEO • CFO',
      copy: 'Track EBITDA impact, monitor operational risk, and delegate action across facilities.',
      image: asset('ceo.jpg')
    }
  ];

  const [activePersona, setActivePersona] = useState(0);
  const selected = personas[activePersona];

  const goToPersona = (direction) => {
    setActivePersona((current) => (
      direction === 'next'
        ? (current + 1) % personas.length
        : (current - 1 + personas.length) % personas.length
    ));
  };

  return (
    <section className="section-pad personas persona-carousel-section">
      <div className="section-heading compact">
        <p className="section-kicker">Built for</p>
        <h2>Built for the teams running manufacturing.</h2>
        <p>
          MANI gives operators, quality, engineering, and logistics teams the
          execution layer they need while giving managers and executives the
          visibility to monitor EBITDA and delegate high-impact work.
        </p>
      </div>

      <div className="persona-carousel">
        <button
          className="carousel-arrow carousel-prev"
          type="button"
          aria-label="Previous team"
          onClick={() => goToPersona('prev')}
        >
          ‹
        </button>

        <div className="persona-feature-card">
          <div className="persona-image-wrap">
            <img src={selected.image} alt={`${selected.title} using MANI`} />
            <div className="persona-image-overlay" />
          </div>

          <div className="persona-feature-copy">
            <span>Team {String(activePersona + 1).padStart(2, '0')}</span>
            <h3>{selected.title}</h3>
            <p>{selected.copy}</p>
          </div>
        </div>

        <button
          className="carousel-arrow carousel-next"
          type="button"
          aria-label="Next team"
          onClick={() => goToPersona('next')}
        >
          ›
        </button>
      </div>

      <div className="persona-carousel-track">
        {personas.map(({ title, copy, image }, index) => (
          <button
            type="button"
            className={`persona-thumb ${activePersona === index ? 'active' : ''}`}
            key={title}
            onClick={() => setActivePersona(index)}
            aria-label={`Show ${title}`}
          >
            <img src={image} alt="" />
            <div>
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Deployment() {
  const packages = [
    {
      title: 'Starter Infrastructure',
      tag: 'Foundation Package',
      icon: Database,
      copy:
        'We build the fundamental IoT and data infrastructure layer so your plant can access machine, ERP, CRM, MES, dashboard, Power BI, Tableau, or AI-ready data from one central location.',
      items: [
        'Machine connectivity',
        'ERP / CRM / MES connectivity',
        'Central data layer',
        'Power BI, Tableau, and AI-ready architecture',
        'Single source of truth for plant data'
      ]
    },
    {
      title: 'Growth Platform',
      tag: 'Most Popular',
      icon: TrendingUp,
      copy:
        'Growth adds the MANI interface on top of the infrastructure layer with task delegation, dashboards, ROI tracking, and pay-per-module expansion.',
      items: [
        'Everything in Starter',
        'MANI applications',
        'Operations, engineering, quality, logistics, and workforce modules',
        'Task delegation and workflow ownership',
        'ROI tracking and financial prioritization'
      ]
    },
    {
      title: 'Enterprise Intelligence',
      tag: 'Full Platform',
      icon: Network,
      copy:
        'Enterprise includes the full MANI operating system for facility-wide intelligence, cross-facility visibility, and advanced operational coordination.',
      items: [
        'Everything in Growth',
        'Full platform access',
        'Cross-facility visibility',
        'Operational intelligence network',
        'Interoperability and advanced coordination'
      ]
    },
    {
      title: 'Custom Deployment',
      tag: 'Custom Architecture',
      icon: Wrench,
      copy:
        'Only need selected connectivity or modules? Build a custom package around specific ERP, CRM, MES, machine, logistics, HR, quality, or executive workflows.',
      items: [
        'Selected ERP, CRM, or MES integration',
        'Machine connectivity only',
        'Module-specific deployment',
        'Targeted workflow buildout',
        'Custom implementation scope'
      ]
    }
  ];

  return (
    <section className="section-pad deployment package-section">
      <div className="section-heading compact">
        <p className="section-kicker">Deployment packages</p>
        <h2>Start with infrastructure. Scale into operational intelligence.</h2>
        <p>
          MANI deployments are structured around the facility's current digital
          maturity. Start with the foundation, add the MANI interface, or build
          a full operational intelligence network.
        </p>
      </div>

      <div className="package-grid">
        {packages.map(({ title, tag, icon: Icon, copy, items }) => (
          <div className="package-card" key={title}>
            <div className="package-icon"><Icon size={30}/></div>
            <span className="package-tag">{tag}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <ul>
              {items.map((item) => (
                <li key={item}><CheckCircle size={16}/>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad contact">
      <div className="contact-card">
        <div>
          <p className="section-kicker">Reserve your facility's spot</p>

          <h2>
            Ready to reserve your facility's MANI implementation spot?
          </h2>

          <p>
            Tell us about your facility, your role, and why you are reaching out.
            MANI is currently onboarding a limited number of facilities to ensure
            deployment quality.
          </p>

          <div className="contact-lines">
            <span>
              <Mail size={18}/>
              mani@manufacturingautomatednetworkinterface.com
            </span>

            <span>
              <Phone size={18}/>
              (843) 319-5373 — Google screening process
            </span>
          </div>
        </div>

        <form
          className="lead-form"
          action="https://formspree.io/f/xrevwkea"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New MANI Website Inquiry"
          />

          <select
            name="reason_for_booking"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Reason for booking
            </option>

            <option value="Reserve Facility Spot">
              Reserve Facility Spot
            </option>

            <option value="Book Demo">
              Book Demo
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          <input
            name="name"
            placeholder="Name"
            required
          />

          <input
            name="company"
            placeholder="Company"
            required
          />

          <input
            name="current_role"
            placeholder="Current Role / Title"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
          />

          <textarea
            name="ticket_information"
            placeholder="Number of machines, systems, package interest, and key challenges"
            rows="5"
            required
          />

          <button type="submit">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="brand-native footer-brand">
        <img src={asset('mani-icon.png')} alt=""/>
        <div className="brand-wordmark">
          <strong>MANI</strong>
          <span>Operational Intelligence</span>
        </div>
      </div>
      <p>©2026 MANI Operational Intelligence. Manufacturing Automated Network Interface.</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
