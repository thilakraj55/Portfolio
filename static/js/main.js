// Global Theme Management
function setTheme(theme) {
  document.body.className = '';
  document.body.classList.add('theme-' + theme);
  
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('data-theme') === theme) {
      dot.classList.add('active');
    }
  });
  
  localStorage.setItem('tron-portfolio-theme', theme);
}

// Global initialization functions
function initThemePicker() {
  const activeTheme = localStorage.getItem('tron-portfolio-theme') || 'cyan';
  const activeDot = document.querySelector(`.theme-dot[data-theme="${activeTheme}"]`);
  if (activeDot) activeDot.classList.add('active');
}

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initFlickerEffect() {
  const links = document.querySelectorAll('.tron-link');
  setInterval(() => {
    links.forEach((a, i) => {
      if (Math.random() < 0.08) a.classList.add('flicker');
      setTimeout(() => a.classList.remove('flicker'), 120 + (i % 3) * 40);
    });
  }, 1200);
}

// Hero Subtitle Typewriter Effect
function initTypewriter() {
  const typingText = document.getElementById('typing-text');
  if (!typingText) return;

  const roles = [
    'Computer Science Student',
    'Python Backend Developer',
    'Software Engineer',
    'Problem Solver'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
}

// Terminal Mock Console
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const outputContainer = document.getElementById('terminal-output-container');
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalInput || !outputContainer || !terminalBody) return;

  const printOutput = (text, className = '') => {
    const line = document.createElement('div');
    line.className = 'terminal-output ' + className;
    line.innerHTML = text;
    outputContainer.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  };

  const commands = {
    help: () => {
      printOutput('Available protocols:', 'neon');
      printOutput('  <span class="neon">about</span>    - Scroll to Biography and Timeline');
      printOutput('  <span class="neon">skills</span>   - List technical skills and strengths');
      printOutput('  <span class="neon">projects</span> - Scroll to featured dev projects');
      printOutput('  <span class="neon">contact</span>  - Scroll to communication dashboard');
      printOutput('  <span class="neon">clear</span>    - Clear terminal buffer');
      printOutput('  <span class="neon">secret</span>   - Access secondary grid protocols');
    },
    about: () => {
      printOutput('Redirecting viewport to About Me section...');
      const target = document.getElementById('about');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },
    skills: () => {
      printOutput('SKILLSET MATRIX:', 'neon');
      printOutput('  Python & Flask [■■■■■■■■□□] 80%');
      printOutput('  HTML / CSS     [■■■■■■■■■□] 90%');
      printOutput('  JavaScript     [■■■■■■■□□□] 70%');
      printOutput('  SQL & Git      [■■■■■■■■□□] 80%');
    },
    projects: () => {
      printOutput('Redirecting viewport to Projects section...');
      const target = document.getElementById('projects');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },
    contact: () => {
      printOutput('Redirecting viewport to Contact section...');
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },
    clear: () => {
      outputContainer.innerHTML = '';
    },
    secret: () => {
      printOutput('ACCESS GRANTED. Welcome to the grid network.', 'success');
      printOutput('Loading data...', 'muted');
      setTimeout(() => {
        printOutput('System warning: Neon overload imminent.', 'neon');
      }, 400);
    }
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const inputVal = terminalInput.value.trim().toLowerCase();
      terminalInput.value = '';

      if (inputVal === '') return;

      printOutput(`<span class="terminal-prompt">&gt;_</span> ${inputVal}`);

      if (commands[inputVal]) {
        commands[inputVal]();
      } else {
        printOutput(`Error: Protocol "${inputVal}" unrecognized. Type <span class="neon">help</span> for assistance.`, 'error');
      }
    }
  });

  const widget = document.querySelector('.terminal-widget');
  if (widget) {
    widget.addEventListener('click', () => {
      terminalInput.focus();
    });
  }
  
  const observerTerminal = new MutationObserver(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
  observerTerminal.observe(outputContainer, { childList: true });
}

// Skills Bar Animation on Scroll
function initSkillsObserver() {
  const skillsCard = document.querySelector('.skills-matrix-card');
  if (!skillsCard) return;

  const observerSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar').forEach(bar => {
          const val = bar.getAttribute('data-value');
          bar.style.width = val + '%';
        });
        observerSkills.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observerSkills.observe(skillsCard);
}

// Project Category Filtering
function initProjectFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.project-card');
  if (tabs.length === 0 || cards.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const categories = card.getAttribute('data-categories').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'block';
          void card.offsetWidth;
          card.classList.remove('fade-out');
        } else {
          card.classList.add('fade-out');
          setTimeout(() => {
            if (card.classList.contains('fade-out')) {
              card.style.display = 'none';
            }
          }, 250);
        }
      });
    });
  });
}

// Contact Form Submission Simulator
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  if (!contactForm || !submitBtn || !btnText || !btnIcon) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.75';
    submitBtn.style.cursor = 'not-allowed';
    btnIcon.classList.add('spin');

    const states = [
      'ENCRYPTING DATAGRAM...',
      'TRANSMITTING PACKETS...',
      'CONFIRMING HANDSHAKE...'
    ];
    
    let index = 0;
    btnText.textContent = states[index];

    const interval = setInterval(() => {
      index++;
      if (index < states.length) {
        btnText.textContent = states[index];
      } else {
        clearInterval(interval);
        
        btnText.textContent = 'TRANSMISSION SUCCESSFUL';
        submitBtn.style.background = 'linear-gradient(90deg, rgba(57,255,136,.15), rgba(57,255,136,.65))';
        submitBtn.style.borderColor = 'var(--lime)';
        btnIcon.classList.remove('spin');
        
        if (window.lucide) {
          btnIcon.setAttribute('data-lucide', 'check-circle');
          window.lucide.createIcons();
        }

        alert('Transmission simulation complete: Packets successfully logged!');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.cursor = 'pointer';
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
          btnText.textContent = 'Send Message';
          if (window.lucide) {
            btnIcon.setAttribute('data-lucide', 'send');
            window.lucide.createIcons();
          }
        }, 3500);
      }
    }, 1200);
  });
}

// ----------------- MODULAR COMPONENT LOADER -----------------
function loadSection(elementId, htmlContent) {
  const element = document.getElementById(elementId);
  if (element && htmlContent) {
    element.innerHTML = htmlContent;
  }
}

// Load all section fragments, then wire their behaviors
function initializeApp() {
  const isShellPage = document.getElementById('hero-section') !== null;
  
  if (!isShellPage) {
    // If not the shell page (e.g., login.html), only initialize core header/theme logic
    initThemePicker();
    initLucideIcons();
    initFlickerEffect();
    return;
  }

  // Load standard page blocks from local JS variables (No CORS fetch errors!)
  loadSection('hero-section', window.heroSectionHtml);
  loadSection('about-section', window.aboutSectionHtml);
  loadSection('projects-section', window.projectsSectionHtml);
  loadSection('contact-section', window.contactSectionHtml);

  // Wire behaviors and styles once the DOM elements exist
  initThemePicker();
  initLucideIcons();
  initFlickerEffect();
  initTypewriter();
  initTerminal();
  initSkillsObserver();
  initProjectFilters();
  initContactForm();
}

// Trigger load once shell DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
