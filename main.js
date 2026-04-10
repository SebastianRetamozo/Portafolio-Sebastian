// ====== CONFIG ======
// Cambia esto por tu número real (formato internacional):
// Perú: +51 999888777  -> "51999888777"
const WHATSAPP_NUMBER = "51935270506";

// Mensaje base
const WA_MESSAGE = "Hola Sebas! Quiero cotizar una página web para mi negocio. ¿Me ayudas?";

function buildWhatsAppLink(text = WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ====== THEME TOGGLE (dark/light) ======
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-theme", theme);

  const isLight = theme === "light";
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
    themeToggle.querySelector(".theme-toggle__icon").textContent = isLight ? "☀️" : "🌙";
    themeToggle.querySelector(".theme-toggle__text").textContent = isLight ? "Light" : "Dark";
  }

  // theme-color meta (opcional, pero pro en mobile)
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", isLight ? "#ffffff" : "#0b0f17");

  localStorage.setItem("theme", theme);
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
    return;
  }

  // Preferencia del sistema
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
})();

if (themeToggle) {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function toggleTheme() {
    document.documentElement.classList.add('is-theme-switching');

    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);

    // Update aria-pressed for accessibility
    themeToggle.setAttribute('aria-pressed', String(next === 'light'));

    if (prefersReduced) {
      document.documentElement.classList.remove('is-theme-switching');
      return;
    }

    // Remove switching flag after transition ends (with timeout fallback)
    const done = () => {
      document.documentElement.classList.remove('is-theme-switching');
      document.documentElement.removeEventListener('transitionend', done);
      clearTimeout(fallback);
    };

    const fallback = setTimeout(done, 400);
    document.documentElement.addEventListener('transitionend', done);
  }

  themeToggle.addEventListener('click', toggleTheme);
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Ensure ARIA attributes and keyboard focusability
  const initIsLight = root.getAttribute('data-theme') === 'light';
  themeToggle.setAttribute('aria-pressed', String(initIsLight));
  if (!themeToggle.hasAttribute('role')) themeToggle.setAttribute('role', 'button');
  if (!themeToggle.hasAttribute('tabindex')) themeToggle.setAttribute('tabindex', '0');

}

// ====== NAV (mobile) ======
const toggleBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(open));
  });

  navMenu.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.classList && t.classList.contains("nav__link")) {
      navMenu.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// ====== Smooth scroll buttons ======
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-scroll]");
  if (!btn) return;

  const target = btn.getAttribute("data-scroll");
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ====== Reveal on scroll ======
const reveals = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => io.observe(el));

// ====== WhatsApp links ======
const waLink = buildWhatsAppLink();

["whatsHeader","whatsHero","whatsServices","whatsContact","whatsFloating","whatsPricingPro","whatsBrand","whatsAbout"]
.forEach((id) => {
  const a = document.getElementById(id);
  if (a) a.href = waLink;
});

const brandBtn = document.getElementById("whatsBrand");
if (brandBtn) {
  brandBtn.href = buildWhatsAppLink(
    "Hola Sebas! Soy pequeña empresa y quiero el paquete Brand + Web (logo + paleta + web). ¿Me das info y precio final?"
  );

// ====== Copy email ======
const copyBtn = document.getElementById("copyEmail");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.getAttribute("data-email") || "";
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = "¡Copiado!";
      setTimeout(() => (copyBtn.textContent = "Copiar email"), 1200);
    } catch {
      const temp = document.createElement("input");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      copyBtn.textContent = "¡Copiado!";
      setTimeout(() => (copyBtn.textContent = "Copiar email"), 1200);
    }
  });
}

// ====== Contact form (abre WhatsApp con mensaje) ======
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const business = form.business.value.trim();
    const message = form.message.value.trim();

    if (!name || !business || !message) {
      statusEl.textContent = "Completa los campos para enviar.";
      return;
    }

    const finalMsg =
      `Hola Sebas! Soy ${name}. Mi negocio es: ${business}. ` +
      `Necesito: ${message}`;

    window.open(buildWhatsAppLink(finalMsg), "_blank", "noopener,noreferrer");
    statusEl.textContent = "Abriendo WhatsApp con tu mensaje…";
    form.reset();
  });
}

// ====== Footer year ======
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// ====== FAQ Accordion (solo 1 abierto a la vez) ======
document.querySelectorAll("[data-accordion]").forEach((acc) => {
  const items = acc.querySelectorAll("details");
  items.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (!d.open) return;
      items.forEach((other) => {
        if (other !== d) other.removeAttribute("open");
      });
    });
  });
});

// ===== Subtle parallax for dark background =====
const glow = document.querySelector(".bg-glow");

if (glow) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    glow.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
}
}
