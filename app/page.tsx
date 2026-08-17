const projects = [
  {
    index: "01",
    name: "Nern",
    type: "Private CRM",
    description:
      "A private, local-first relationship workspace that turns scattered contacts and account activity into a clear revenue picture.",
    tags: ["CRM", "Revenue", "Local-first"],
    href: "https://nudge-crm-d4667.web.app/app.html?release=50#revenue",
    className: "nern",
  },
  {
    index: "02",
    name: "Glēw",
    type: "Student workspace",
    description:
      "A focused command center for students to manage goals, applications, projects, and saved opportunities in one private place.",
    tags: ["Education", "Goals", "Opportunities"],
    href: "https://glew-app.web.app/app",
    className: "glew",
  },
  {
    index: "03",
    name: "JARVIS",
    type: "Personal AI system",
    description:
      "A voice-first personal interface for asking, creating, planning, seeing, and remembering — built as an explorable knowledge graph.",
    tags: ["AI", "Voice", "Knowledge graph"],
    href: "http://localhost:8765/",
    className: "jarvis",
  },
  {
    index: "04",
    name: "Mochan Mini Bot",
    type: "Animated companion robot",
    description:
      "A 3D-printed ESP32-C3 robot with expressive OLED eyes, dual gear motors, and a compact rechargeable power system. Twelve watertight parts turn code into a character you can hold.",
    tags: ["ESP32-C3", "Arduino", "12 STL parts"],
    href: "https://chatgpt.com/c/6a76b13e-1638-83e8-820c-572e841b7195",
    linkLabel: "Open build process",
    className: "mochan",
  },
  {
    index: "05",
    name: "JARVIS Necklace",
    type: "Wearable AI interface",
    description:
      "A press-to-talk wearable that connects over Bluetooth to a phone bridge and the local JARVIS brain. Light, vibration, and voice make personal AI available without opening a screen.",
    tags: ["ESP32-S3", "Bluetooth LE", "Haptics"],
    href: "https://chatgpt.com/c/6a72e41c-7b4c-83e8-acbb-8b2c05948541",
    linkLabel: "Open blueprint chat",
    className: "necklace",
  },
  {
    index: "06",
    name: "Kemet",
    type: "Interactive 3D encyclopedia",
    description:
      "A guided world atlas that turns history, geography, and culture into explorable expeditions—complete with narrated environments, field notes, hotspots, and 60 destinations across six regions.",
    tags: ["3D Worlds", "Education", "60 Destinations"],
    href: "https://worlds-to-explore-2026.pavanpasumarthy.chatgpt.site/",
    linkLabel: "Begin exploring",
    className: "kemet",
  },
];

function ProductPreview({ project }: { project: (typeof projects)[number] }) {
  if (project.className === "nern") {
    return (
      <div className="preview nern-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>Revenue overview</span></div>
        <div className="nern-grid">
          <div className="mini-nav"><b>N</b><i /><i /><i /><i /></div>
          <div className="mini-main">
            <span className="eyebrow">PIPELINE</span><strong>$284,500</strong>
            <div className="bars"><i /><i /><i /><i /><i /><i /></div>
            <div className="stat-row"><span>Active accounts</span><b>24</b><span>Win rate</span><b>38%</b></div>
          </div>
        </div>
      </div>
    );
  }
  if (project.className === "glew") {
    return (
      <div className="preview glew-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>Student workspace</span></div>
        <div className="glew-inner">
          <div className="glew-logo">G</div><span className="eyebrow">THIS WEEK</span>
          <strong>Keep your momentum.</strong>
          <div className="goal"><i /><span><b>Portfolio refresh</b><small>3 of 5 steps</small></span><em>60%</em></div>
          <div className="goal"><i /><span><b>Summer applications</b><small>8 opportunities saved</small></span><em>08</em></div>
        </div>
      </div>
    );
  }
  if (project.className === "mochan") {
    return (
      <div className="preview mochan-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>MOCHAN // HELLO</span></div>
        <div className="mochan-inner">
          <span className="bot-signal">READY TO HELP</span>
          <div className="bot-antenna"><i /></div>
          <div className="bot-head"><i /><i /><span /></div>
          <div className="bot-body"><b>M</b><small>MINI 01</small></div>
          <div className="bot-shadow" />
        </div>
      </div>
    );
  }
  if (project.className === "necklace") {
    return (
      <div className="preview necklace-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>JARVIS // WEARABLE</span></div>
        <div className="necklace-inner">
          <span className="wearable-note note-one">VOICE<br />ONLINE</span>
          <span className="wearable-note note-two">12 HR<br />BATTERY</span>
          <div className="chain" />
          <div className="pendant"><i /><b>J</b><small>LISTENING</small></div>
          <p>Intelligence,<br />within reach.</p>
        </div>
      </div>
    );
  }
  if (project.className === "kemet") {
    return (
      <div className="preview kemet-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>KEMET // EXPEDITION 01</span></div>
        <div className="kemet-inner">
          <div className="sun-disc" />
          <div className="pyramid pyramid-back" /><div className="pyramid pyramid-front" />
          <div className="obelisk"><i /></div>
          <div className="kemet-horizon" />
          <span className="kemet-label">THE COLLECTION / VOL. 1</span>
          <h3>Ancient<br /><em>Egypt</em></h3>
          <p>THE NILE VALLEY · 01</p>
          <div className="hotspot hot-one">+</div><div className="hotspot hot-two">+</div>
          <div className="atlas-count"><b>60</b><small>PLACES<br />IN THE ARCHIVE</small></div>
        </div>
      </div>
    );
  }
  return (
    <div className="preview jarvis-preview" aria-hidden="true">
      <div className="window-bar"><i /><i /><i /><span>JARVIS // LIVE</span></div>
      <div className="jarvis-inner">
        <span className="node node-a">VISION</span><span className="node node-b">MEMORY</span>
        <span className="node node-c">PLAN</span><span className="node node-d">MEDIA</span>
        <div className="orb"><b>JARVIS</b><small>TAP TO TALK</small></div>
        <div className="command">Ask, create, play, plan, or show me… <b>↵</b></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav>
        <a className="brand" href="#top" aria-label="Back to top"><span>DP</span> DEEPESH / MAKER</a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a className="nav-cta" href="mailto:hello@example.com">Let&apos;s talk ↗</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" /> Available for ambitious builds <em>SF / 11:42 PM</em></div>
        <h1>I make useful<br />things for <span>real life.</span></h1>
        <p className="hero-copy">Independent product maker exploring the space between ambitious software and everyday problems.</p>
        <a className="scroll-link" href="#work">Scroll to see the work <span>↓</span></a>
        <div className="hero-stamp" aria-hidden="true"><span>06</span><small>PRODUCTS<br />SHIPPED</small></div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><span>SELECTED BUILDS</span><span>2025—2026</span></div>
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <div className="project-copy">
              <div className="project-number">/{project.index}</div>
              <p className="project-type">{project.type}</p>
              <h2>{project.name}</h2>
              <p className="description">{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{"linkLabel" in project ? project.linkLabel : "Open the build"} <span>↗</span></a> : <span className="project-link project-status">In development <span>●</span></span>}
            </div>
            {project.href ? <a className="preview-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ProductPreview project={project} /></a> : <div className="preview-link"><ProductPreview project={project} /></div>}
          </article>
        ))}
      </section>

      <section className="about" id="about">
        <p className="section-label">/ ABOUT THE MAKER</p>
        <div>
          <h2>I build at the intersection of <span>systems, instinct, and a little obsession.</span></h2>
          <p>I care about software that earns its place in someone&apos;s day: calm enough to understand, capable enough to keep, and opinionated enough to feel like something.</p>
          <a href="mailto:hello@example.com">Start a conversation ↗</a>
        </div>
      </section>

      <footer><a className="brand" href="#top"><span>DP</span> DEEPESH / MAKER</a><p>Made with intent. Shipped on GitHub.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
