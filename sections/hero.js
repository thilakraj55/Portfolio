window.heroSectionHtml = `
<section class="hero" id="home">
  <div class="hero-text">
    <h1 class="hero-title" style="margin-bottom: 10px;">Thilak Raj</h1>
    <h2 class="neon" style="font-size: 1.4rem; margin: 0 0 15px 0; font-family: 'Orbitron', sans-serif; min-height: 2.2rem; display: flex; align-items: center; gap: 4px;">
      &gt; <span id="typing-text"></span><span class="typing-cursor">_</span>
    </h2>
    <p class="hero-sub" style="margin-top: 0; font-size: 1.05rem; line-height: 1.6;">
      Building efficient, scalable software and highly interactive interfaces. Specializing in Python, backend workflows, and modern web architectures.
    </p>

    <div class="hero-actions" style="margin-bottom: 25px;">
      <a class="btn btn--primary" href="#projects">
        <i data-lucide="eye" style="width: 18px; height: 18px;"></i> View Projects
      </a>
      <a class="btn btn--ghost" href="#contact">
        <i data-lucide="mail" style="width: 18px; height: 18px;"></i> Contact Me
      </a>
    </div>

    <!-- Interactive Cyber Terminal -->
    <div class="terminal-widget" title="Click to interact with terminal">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="terminal-dot terminal-dot--red"></span>
          <span class="terminal-dot terminal-dot--yellow"></span>
          <span class="terminal-dot terminal-dot--green"></span>
        </div>
        <div class="terminal-title">TRON_MAIN_FRAME_v2.06</div>
        <div style="width: 42px;"></div>
      </div>
      <div class="terminal-body" id="terminal-body">
        <div class="terminal-welcome">Initializing neural handshake... Connected.</div>
        <div>Welcome to Thilak Raj's system terminal.</div>
        <div>Type <span class="neon">help</span> to view available system protocols.</div>
        <div id="terminal-output-container"></div>
        <div class="terminal-input-line">
          <span class="terminal-prompt">&gt;_</span>
          <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" placeholder="Type a command..." />
        </div>
      </div>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; gap: 20px;">
    <!-- Hero Panel with stats -->
    <div class="hero-panel" role="status" aria-live="polite">
      <div class="panel-title" style="display: flex; align-items: center; gap: 8px; font-size: 1.1rem; margin-bottom: 15px;">
        <i data-lucide="cpu" class="neon" style="width: 20px; height: 20px;"></i> SYSTEM OVERVIEW
      </div>

      <div class="panel-row"><span class="k">Developer Focus</span><span class="v">Python / Backend</span></div>
      <div class="panel-row"><span class="k">Web Framework</span><span class="v">Flask / Jinja2</span></div>
      <div class="panel-row"><span class="k">Status</span><span class="v" style="color: var(--lime); text-shadow: 0 0 10px rgba(57,255,136,.5);">ONLINE</span></div>
      
      <div class="panel-bar"><span class="panel-bar__fill" style="width: 85%"></span></div>
      <div class="panel-hint" style="display: flex; align-items: center; gap: 6px;">
        <i data-lucide="info" style="width: 14px; height: 14px; color: var(--muted);"></i>
        <span>Core subsystems fully loaded. Ready.</span>
      </div>
    </div>

    <!-- Quick stats/links card -->
    <div class="card card--glow">
      <h3 class="card-title" style="display: flex; align-items: center; gap: 8px; font-size: 1.05rem;">
        <i data-lucide="git-branch" style="color: var(--magenta); width: 18px; height: 18px;"></i> RECENT ACTIVITY
      </h3>
      <div class="contact-lines" style="font-size: 0.9rem; margin-top: 12px;">
        <div class="line"><span class="key">Open Source</span><span class="val">Active GitHub contributor</span></div>
        <div class="line"><span class="key">Certificates</span><span class="val">Python Development</span></div>
        <div class="line"><span class="key">Locations</span><span class="val">Karnataka, India</span></div>
      </div>
    </div>
  </div>
</section>
`;
