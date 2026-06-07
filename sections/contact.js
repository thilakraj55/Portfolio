window.contactSectionHtml = `
<section class="section" id="contact" style="margin-top: 60px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 50px; margin-bottom: 50px;">
  <h2 class="section-title" style="display: flex; align-items: center; gap: 10px;">
    <i data-lucide="send" class="neon" style="width: 24px; height: 24px;"></i> CONTACT METRICS
  </h2>

  <div class="grid-2" style="margin-top: 20px;">
    <!-- Left Column: Form -->
    <div class="card card--glow">
      <h3 class="card-title" style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
        <i data-lucide="message-square-plus" style="color: var(--cyan); width: 18px; height: 18px;"></i> Broadcast Message
      </h3>
      
      <form class="form" id="contact-form">
        <label class="label" for="name">Name</label>
        <input class="input" id="name" type="text" placeholder="Your designation/name" required />

        <label class="label" for="email">Email Address</label>
        <input class="input" id="email" type="email" placeholder="you@example.com" required />

        <label class="label" for="message">Message Data</label>
        <textarea class="textarea" id="message" rows="5" placeholder="Type your transmission message here..." required></textarea>

        <button class="btn btn--primary btn--full" type="submit" id="submit-btn">
          <span id="btn-text">Send Message</span>
          <i data-lucide="send" id="btn-icon" style="width: 18px; height: 18px;"></i>
        </button>
      </form>
    </div>

    <!-- Right Column: Direct details & Socials -->
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div class="card card--glow">
        <h3 class="card-title" style="display: flex; align-items: center; gap: 8px; margin-bottom: 18px;">
          <i data-lucide="link" style="color: var(--magenta); width: 18px; height: 18px;"></i> Direct Communication Channels
        </h3>
        
        <div class="contact-lines" style="gap: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.04); padding-bottom: 10px;">
            <span class="key" style="display: flex; align-items: center; gap: 8px;">
              <i data-lucide="mail" style="color: var(--cyan); width: 16px; height: 16px;"></i> Email
            </span>
            <span class="val"><a href="mailto:thilakrajkc@gmail.com" class="neon">thilakrajkc@gmail.com</a></span>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.04); padding-bottom: 10px;">
            <span class="key" style="display: flex; align-items: center; gap: 8px;">
              <i data-lucide="phone" style="color: var(--cyan); width: 16px; height: 16px;"></i> Phone
            </span>
            <span class="val" style="color: #fff;">+91 95917 58419</span>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 4px;">
            <span class="key" style="display: flex; align-items: center; gap: 8px;">
              <i data-lucide="map-pin" style="color: var(--cyan); width: 16px; height: 16px;"></i> Location
            </span>
            <span class="val" style="color: #fff;">Karnataka, India</span>
          </div>
        </div>
      </div>

      <!-- Social Connections -->
      <div class="card card--glow">
        <h3 class="card-title" style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
          <i data-lucide="globe" style="color: var(--cyan); width: 18px; height: 18px;"></i> External Grid Nodes
        </h3>
        <p class="card-text muted" style="margin-bottom: 15px; font-size: 0.9rem;">
          Find and connect with me across these developmental registries:
        </p>
        <div class="chips">
          <a href="https://github.com" target="_blank" class="chip" style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="github" style="width: 14px; height: 14px;"></i> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" class="chip" style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="linkedin" style="width: 14px; height: 14px;"></i> LinkedIn
          </a>
          <a href="mailto:thilakrajkc@gmail.com" class="chip" style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="mail" style="width: 14px; height: 14px;"></i> Email Node
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
