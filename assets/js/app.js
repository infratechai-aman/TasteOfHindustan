const page = document.body.dataset.page || "home";

const navItems = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "experience.html", label: "Experience", key: "experience" },
  { href: "gallery.html", label: "Gallery", key: "gallery" },
  { href: "packages.html", label: "Packages", key: "packages" },
  { href: "apply.html", label: "Apply", key: "apply" }
];

const regionData = [
  { id: "punjab", title: "Punjab", cuisine: "Butter Chicken, Kulcha, Tandoor Smoke", tagline: "North India in velvet, fire, and deep comfort.", description: "From slow-charred tandoor notes to butter-rich gravies, Punjab brings big-hearted hospitality and bold celebratory flavour to the TasteOfHindustan stage.", notes: ["Live tandoor theatre", "Celebration platters", "Luxury hospitality"], image: "assets/images/chicken-butter-garlic.png", position: { top: "24%", left: "31%" }, markerClass: "label-left" },
  { id: "delhi", title: "Delhi", cuisine: "Kebabs, Chaat, Street-to-Royal Contrast", tagline: "A city of swagger, smoke, and unforgettable first bites.", description: "Delhi moves from royal kitchens to late-night streets in a single breath. Its kebabs and grills bring a magnetic, theatrical energy perfect for spotlight moments.", notes: ["Fire-led grills", "Street-luxury reinterpretation", "High-impact starters"], image: "assets/images/chicken-tikka-kebab.png", position: { top: "31%", left: "42%" }, markerClass: "label-left" },
  { id: "awadh", title: "Awadh", cuisine: "Nihari, Korma, Shorba", tagline: "Refined slow-cooking with royal gravitas.", description: "Awadhi cuisine is about patience, aroma, and layered richness. Expect silk-textured gravies, perfumed broths, and courtly detail.", notes: ["Dum techniques", "Regal broths", "Court-inspired plating"], image: "assets/images/aab-gosht-shorba.png", position: { top: "38%", left: "50%" }, markerClass: "label-right" },
  { id: "bengal", title: "Bengal", cuisine: "Mishti, Mustard, Literary Table Culture", tagline: "Poetry at the table, then dessert that lingers.", description: "Bengal balances delicacy, intellect, and indulgence. It gives the festival a softer, elegant arc with refined sweets and expressive flavour pairings.", notes: ["Dessert-led finishes", "Cultural storytelling", "Artful presentation"], image: "assets/images/arabian-pudding.png", position: { top: "48%", left: "68%" }, markerClass: "label-right" },
  { id: "hyderabad", title: "Hyderabad", cuisine: "Biryani, Haleem, Saffron Rice", tagline: "Decadence carried by spice, steam, and fragrance.", description: "Hyderabad adds grandeur through dum cooking, saffron depth, and rich banquet appeal. It turns aroma into a dramatic entrance.", notes: ["Banquet-worthy rice courses", "Nizami influence", "Statement aromas"], image: "assets/images/veg-persian-special-rice.png", position: { top: "67%", left: "44%" }, markerClass: "label-below" },
  { id: "kerala", title: "Kerala", cuisine: "Coastal Curries, Coconut, Spice Routes", tagline: "The sea, spice routes, and polished Southern warmth.", description: "Kerala brings coastal elegance and spice-market complexity. Coconut depth and glossy curry finishes make it cinematic and sensorial.", notes: ["Coastal refinement", "Spice-route storytelling", "Silky curry profiles"], image: "assets/images/chicken-thai-curry.png", position: { top: "87%", left: "34%" }, markerClass: "label-below" }
];

const experienceData = [
  { kicker: "Arrival", title: "Red Carpet And Flashline Entry", description: "A velvet-lit arrival corridor, branded step-and-repeat, and curated photography moments designed for premium social capture.", bullets: ["Host-led guest reception", "Photographer pit and interviews", "VIP concierge escort"], image: "assets/images/chicken-tikka-kebab.png" },
  { kicker: "Coverage", title: "Media, Press And Storytelling", description: "Create moments that journalists, creators, and local media can package instantly. This feels like a cultural premiere, not a standard expo.", bullets: ["Press-room content drops", "Interview nooks", "Live social reels"], image: "assets/images/aab-gosht-shorba.png" },
  { kicker: "Networking", title: "Founder Tables And Brand Mixers", description: "A premium networking layer for restaurateurs, chefs, hospitality investors, and sponsors to move from applause to partnership.", bullets: ["Curated roundtables", "Private tasting lounges", "Partnership concierge"], image: "assets/images/chicken-tikka-oriental-rice.png" },
  { kicker: "Showtime", title: "Awards Reveal And Signature Plating", description: "Sound, lighting, and plated hero shots combine for a reveal sequence that feels closer to cinema than ceremony.", bullets: ["Stage cue choreography", "Chef spotlight moments", "Signature plating capture"], image: "assets/images/chicken-jujeh-kebab.png" }
];

const galleryItems = [
  { title: "Kebab Prelude", category: "Food Portraits", description: "Fire-char, lacquered glaze, and hero-plating detail.", image: "assets/images/chicken-tikka-kebab.png", type: "image" },
  { title: "Royal Broth", category: "Heritage Courses", description: "Slow-cooked depth under warm cinematic light.", image: "assets/images/aab-gosht-shorba.png", type: "image" },
  { title: "Velvet Butter Glaze", category: "Plating", description: "A premium dish capture for campaign-led storytelling.", image: "assets/images/chicken-butter-garlic.png", type: "image" },
  { title: "Signature Curry Canvas", category: "Regional Stories", description: "Southern-inspired richness with gold-stage contrast.", image: "assets/images/chicken-thai-curry.png", type: "image" },
  { title: "Banquet Rice Composition", category: "Regional Stories", description: "Layered grains, garnish, and banquet-style finish.", image: "assets/images/veg-persian-special-rice.png", type: "image" },
  { title: "Networking Table Hero", category: "Experience", description: "An image built for sponsor decks and premium event promos.", image: "assets/images/chicken-tikka-oriental-rice.png", type: "image" },
  { title: "Vegetarian Fire Notes", category: "Food Portraits", description: "A high-contrast hero for menu and package sections.", image: "assets/images/veg-seekh-kebab.png", type: "image" },
  { title: "Dessert Finale", category: "Dessert", description: "A polished finish for luxury tasting narratives.", image: "assets/images/arabian-pudding.png", type: "image" },
  { title: "Stage Reel", category: "Film", description: "Use this cinematic motion layer as a hero or gallery popup.", image: "assets/images/chicken-tangdi-kufi-kebab.png", src: "assets/video/hero-cinematic.mp4", type: "video" }
];

const packages = [
  { name: "Standard", price: "INR 24,999", descriptor: "for emerging participants", badge: "Entry Tier", highlight: false, urgency: "Applications close after batch one fills.", features: ["1 participation category", "Delegate badge for 2 team members", "Brand listing on event microsite", "Access to networking floor and gallery zones", "Digital participation certificate"] },
  { name: "Gold", price: "INR 54,999", descriptor: "for growth-stage brands", badge: "Most Popular", highlight: false, urgency: "Only 35 Gold showcase slots planned.", features: ["Everything in Standard", "Priority jury scheduling", "Branding on step-and-repeat wall", "Chef or founder interview clip", "Access to sponsor and media mixer"] },
  { name: "VIP", price: "INR 1,19,999", descriptor: "for headline-ready hospitality brands", badge: "VIP Glow", highlight: true, urgency: "Only 20 VIP spotlight slots left.", features: ["Everything in Gold", "Premium showcase placement", "Private concierge and arrival host", "Dedicated press-photo session", "Afterparty and investor lounge access"] }
];

const comparisonRows = [
  ["Participation categories", "1", "2", "Up to 4"],
  ["Team delegate passes", "2", "4", "8"],
  ["Media interview support", "Basic", "Priority", "Dedicated"],
  ["Branding visibility", "Directory listing", "Wall placement", "Stage plus lounge visibility"],
  ["Networking access", "General floor", "Mixer access", "VIP lounge"],
  ["Showcase placement", "Standard", "Preferred", "Spotlight zone"]
];

const faqItems = [
  { title: "Is this only for restaurants?", body: "No. The site includes a broader participation funnel for chefs, cafes, cloud kitchens, beverage brands, dessert studios, and hospitality innovators." },
  { title: "Can I apply without final payment today?", body: "Yes. The form supports seat reservation intent first, then payment confirmation as the next concierge touchpoint." },
  { title: "Will media and content coverage be included?", body: "Gold and VIP tiers are positioned with stronger coverage support, while all tiers benefit from the event's premium branded environment." },
  { title: "Can packages be customized for sponsors?", body: "Yes. VIP is presented as the base for custom sponsor storytelling, branded lounges, and co-created media moments." }
];

const testimonials = [
  { name: "Founder Preview", title: "Hospitality Collective, Mumbai", quote: "This feels less like an awards form and more like a launch stage for brands that want to be remembered." },
  { name: "Chef Preview", title: "Independent Chef Studio", quote: "The storytelling, the regional map, and the premium visual language make the event feel aspirational before anyone even arrives." },
  { name: "Sponsor Preview", title: "Luxury Beverage Partner", quote: "The packages read like activation opportunities, not standard sponsorship slabs. That is the right tone for premium hospitality." }
];

function iconSvg(name) {
  const icons = {
    restaurant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3v8"/><path d="M10 3v8"/><path d="M6 7h4"/><path d="M15 3v18"/><path d="M18 3c1.7 1.6 2 4.5.7 6.5-.4.6-1 .9-1.7 1.1"/></svg>',
    chef: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 11h8v8H8z"/><path d="M7 11a4 4 0 1 1 10 0"/><path d="M5 12h14"/></svg>',
    cafe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 8h10v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z"/><path d="M15 10h2a2 2 0 0 1 0 4h-2"/><path d="M7 4v2"/><path d="M10 4v2"/></svg>',
    cloche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 14h16"/><path d="M6 14a6 6 0 0 1 12 0"/><path d="M12 8V6"/><path d="M9 18h6"/></svg>',
    media: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M9 18v2"/><path d="M15 18v2"/><path d="M10 10l5 2-5 2z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="9" y="3" width="6" height="10" rx="3"/><path d="M6 10a6 6 0 0 0 12 0"/><path d="M12 16v5"/><path d="M9 21h6"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4Z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8Z"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 8a2 2 0 0 0 0 4v4h16v-4a2 2 0 0 1 0-4V4H4z"/><path d="M12 4v12"/></svg>'
  };
  return icons[name] || icons.spark;
}

function renderShell() {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  const actions = document.getElementById("floatingActions");
  const progress = document.getElementById("scrollProgress");
  const modalHost = document.getElementById("modalHost");
  const lightboxHost = document.getElementById("lightboxHost");

  if (progress) progress.innerHTML = "<span></span>";

  if (header) {
    header.innerHTML = `
      <div class="nav-shell">
        <a class="nav-brand" href="index.html" aria-label="TasteOfHindustan Home">
          <div class="brand-mark">TH</div>
          <div class="brand-copy">
            <strong>TasteOfHindustan</strong>
            <span>Luxury Culinary Awards 2026</span>
          </div>
        </a>
        <nav aria-label="Primary Navigation">
          <ul class="nav-links">
            ${navItems.map((item) => `<li><a class="${item.key === page ? "active" : ""}" href="${item.href}">${item.label}</a></li>`).join("")}
          </ul>
        </nav>
        <div class="nav-actions">
          <a class="button-secondary" href="packages.html">View Tiers</a>
          <a class="button" href="apply.html">Apply Now</a>
          <button class="mobile-toggle" type="button" aria-label="Toggle menu" id="mobileToggle"><span></span></button>
        </div>
      </div>`;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="section-shell footer-grid">
        <div class="footer-copy">
          <div class="footer-brand">
            <div class="brand-mark">TH</div>
            <div>
              <strong>TasteOfHindustan 2026</strong>
              <span>Black-tie culinary celebration</span>
            </div>
          </div>
          <p>A premium cultural stage for Indian cuisine, hospitality ambition, chef-led storytelling, and media-ready brand moments.</p>
          <div class="footer-links">
            <div class="footer-link-group">
              <h3>Contact</h3>
              <ul class="footer-list">
                <li>concierge@tasteofhindustan.com</li>
                <li>+91 90000 2026 26</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
            <div class="footer-link-group">
              <h3>Quick Links</h3>
              <ul class="footer-list">
                <li><a href="experience.html">Event experience</a></li>
                <li><a href="gallery.html">Gallery and testimonials</a></li>
                <li><a href="packages.html">Packages</a></li>
                <li><a href="apply.html">Application funnel</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="location-card glass-panel">
          <div class="location-placeholder">
            <div>
              <strong>Venue Direction</strong>
              <p style="margin:0;color:var(--muted);max-width:320px;">Mumbai luxury ballroom setting, designed for red carpet arrival, tasting lounges, and high-gloss media capture.</p>
              <div class="footer-actions" style="justify-content:center;margin-top:1rem;">
                <a class="button-ghost" href="https://maps.google.com/?q=Mumbai+India" target="_blank" rel="noreferrer">Open Route</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Event date: October 24, 2026</span>
        <span>Crafted to feel like a luxury award night, not a brochure.</span>
      </div>`;
  }

  if (actions) {
    actions.innerHTML = `
      <a class="floating-button" href="apply.html">
        <div>
          <strong>Book Your Spot</strong>
          <span>Start the 4-step application</span>
        </div>
      </a>
      <a class="floating-button whatsapp" href="https://wa.me/9190000202626" target="_blank" rel="noreferrer">
        <div>
          <strong>WhatsApp Concierge</strong>
          <span>Quick response for sponsorships</span>
        </div>
      </a>`;
  }

  if (modalHost) {
    modalHost.innerHTML = `
      <div class="modal" id="regionModal" aria-hidden="true">
        <div class="modal-card" style="position:relative;">
          <button class="close-button" type="button" data-close-modal aria-label="Close modal">&times;</button>
          <div class="modal-grid">
            <div class="modal-media"><img id="regionModalImage" alt="" /></div>
            <div class="modal-content">
              <small class="package-badge" id="regionModalCuisine"></small>
              <h3 id="regionModalTitle"></h3>
              <p id="regionModalDescription" class="copy"></p>
              <div class="map-meta" id="regionModalNotes"></div>
            </div>
          </div>
        </div>
      </div>`;
  }

  if (lightboxHost) {
    lightboxHost.innerHTML = `
      <div class="lightbox" id="galleryLightbox" aria-hidden="true">
        <div class="lightbox-card" style="position:relative;">
          <button class="close-button" type="button" data-close-lightbox aria-label="Close lightbox">&times;</button>
          <div class="lightbox-media" id="lightboxMedia"></div>
          <div class="lightbox-content">
            <small class="package-badge" id="lightboxCategory"></small>
            <h3 id="lightboxTitle"></h3>
            <p id="lightboxDescription" class="copy"></p>
          </div>
        </div>
      </div>`;
  }
}

function setupMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => document.body.classList.toggle("nav-open"));
  document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => document.body.classList.remove("nav-open")));
}

function setupParticles() {
  const particles = document.getElementById("goldParticles");
  if (!particles) return;
  const fragment = document.createDocumentFragment();
  Array.from({ length: 18 }).forEach(() => {
    const dot = document.createElement("span");
    dot.style.setProperty("--size", `${Math.random() * 5 + 2}px`);
    dot.style.setProperty("--left", `${Math.random() * 100}%`);
    dot.style.setProperty("--top", `${Math.random() * 100}%`);
    dot.style.setProperty("--duration", `${Math.random() * 11 + 10}s`);
    dot.style.setProperty("--delay", `${Math.random() * -12}s`);
    fragment.appendChild(dot);
  });
  particles.appendChild(fragment);
}

function setupCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  window.addEventListener("mousemove", (event) => {
    glow.style.setProperty("--glow-x", `${event.clientX}px`);
    glow.style.setProperty("--glow-y", `${event.clientY}px`);
  });
}

function setupScrollProgress() {
  const bar = document.querySelector("#scrollProgress span");
  if (!bar) return;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${value}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealItems.forEach((item) => observer.observe(item));
}

function setupParallax() {
  const items = [...document.querySelectorAll("[data-parallax]")];
  if (!items.length) return;
  const update = () => {
    items.forEach((item) => {
      const speed = Number(item.dataset.parallax || 0.08);
      const rect = item.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * speed;
      item.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function startCountdown() {
  const nodes = {
    days: document.querySelector("[data-countdown='days']"),
    hours: document.querySelector("[data-countdown='hours']"),
    minutes: document.querySelector("[data-countdown='minutes']"),
    seconds: document.querySelector("[data-countdown='seconds']")
  };
  if (!nodes.days) return;
  const target = new Date("2026-10-24T18:30:00+05:30").getTime();
  const update = () => {
    const distance = Math.max(target - Date.now(), 0);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);
    nodes.days.textContent = String(days).padStart(2, "0");
    nodes.hours.textContent = String(hours).padStart(2, "0");
    nodes.minutes.textContent = String(minutes).padStart(2, "0");
    nodes.seconds.textContent = String(seconds).padStart(2, "0");
  };
  update();
  setInterval(update, 1000);
}

function renderMap() {
  const hotspotHost = document.getElementById("indiaHotspots");
  const preview = document.getElementById("mapPreview");
  if (!hotspotHost || !preview) return;

  hotspotHost.innerHTML = regionData.map((region) => `
    <button class="india-hotspot ${region.markerClass || ""}" type="button" data-region="${region.id}" style="top:${region.position.top};left:${region.position.left};">
      <span>${region.title}</span>
    </button>`).join("");

  const previewTitle = preview.querySelector("[data-preview='title']");
  const previewCuisine = preview.querySelector("[data-preview='cuisine']");
  const previewDescription = preview.querySelector("[data-preview='description']");
  const previewImage = preview.querySelector("[data-preview='image']");
  const previewNotes = preview.querySelector("[data-preview='notes']");

  const applyPreview = (region) => {
    previewTitle.textContent = region.title;
    previewCuisine.textContent = region.cuisine;
    previewDescription.textContent = region.description;
    previewImage.src = region.image;
    previewImage.alt = region.title;
    previewNotes.innerHTML = region.notes.map((note) => `<span>${note}</span>`).join("");
  };

  applyPreview(regionData[0]);
  hotspotHost.querySelectorAll("[data-region]").forEach((button) => {
    const region = regionData.find((item) => item.id === button.dataset.region);
    button.addEventListener("mouseenter", () => applyPreview(region));
    button.addEventListener("focus", () => applyPreview(region));
    button.addEventListener("click", () => openRegionModal(region));
  });
}

function openRegionModal(region) {
  const modal = document.getElementById("regionModal");
  if (!modal) return;
  document.getElementById("regionModalImage").src = region.image;
  document.getElementById("regionModalImage").alt = region.title;
  document.getElementById("regionModalCuisine").textContent = region.cuisine;
  document.getElementById("regionModalTitle").textContent = region.title;
  document.getElementById("regionModalDescription").textContent = `${region.tagline} ${region.description}`;
  document.getElementById("regionModalNotes").innerHTML = region.notes.map((note) => `<span>${note}</span>`).join("");
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function setupModalClose() {
  document.addEventListener("click", (event) => {
    const modal = document.getElementById("regionModal");
    const lightbox = document.getElementById("galleryLightbox");

    if (event.target.matches("[data-close-modal]") || event.target === modal) {
      modal?.classList.remove("active");
      document.body.classList.remove("modal-open");
    }

    if (event.target.matches("[data-close-lightbox]") || event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.getElementById("regionModal")?.classList.remove("active");
      closeLightbox();
      document.body.classList.remove("modal-open");
    }
  });
}

function renderExperience() {
  const rail = document.getElementById("experienceRail");
  if (!rail) return;
  rail.innerHTML = experienceData.map((item) => `
    <article class="experience-card" style="background-image:url('${item.image}')">
      <small>${item.kicker}</small>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const filters = document.getElementById("galleryFilters");
  if (!grid) return;

  const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];
  let active = "All";
  const encodeItem = (item) => encodeURIComponent(JSON.stringify(item));

  const renderItems = () => {
    const items = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);
    grid.innerHTML = items.map((item, index) => `
      <article class="gallery-card reveal" style="transition-delay:${index * 50}ms;">
        <button type="button" data-lightbox="${encodeItem(item)}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="gallery-overlay">
            <strong>${item.title}</strong>
            <span>${item.category}</span>
          </div>
        </button>
      </article>`).join("");

    grid.querySelectorAll("[data-lightbox]").forEach((button) => {
      button.addEventListener("click", () => openLightbox(JSON.parse(decodeURIComponent(button.dataset.lightbox))));
    });
    setupReveal();
  };

  if (filters) {
    filters.innerHTML = categories.map((category) => `
      <button class="gallery-filter ${category === active ? "active" : ""}" type="button" data-filter="${category}">
        ${category}
      </button>`).join("");

    filters.addEventListener("click", (event) => {
      const target = event.target.closest("[data-filter]");
      if (!target) return;
      active = target.dataset.filter;
      filters.querySelectorAll("[data-filter]").forEach((node) => node.classList.toggle("active", node.dataset.filter === active));
      renderItems();
    });
  }

  renderItems();
}

function openLightbox(item) {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) return;
  document.getElementById("lightboxCategory").textContent = item.category;
  document.getElementById("lightboxTitle").textContent = item.title;
  document.getElementById("lightboxDescription").textContent = item.description;
  document.getElementById("lightboxMedia").innerHTML = item.type === "video"
    ? `<video src="${item.src}" controls autoplay playsinline poster="${item.image}"></video>`
    : `<img src="${item.image}" alt="${item.title}" />`;
  lightbox.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) return;
  lightbox.classList.remove("active");
  document.getElementById("lightboxMedia").innerHTML = "";
  document.body.classList.remove("modal-open");
}

function renderPackages() {
  const cards = document.getElementById("pricingCards");
  const table = document.getElementById("comparisonTable");
  const faqGrid = document.getElementById("faqGrid");
  const testimonialsHost = document.getElementById("testimonialGrid");

  if (cards) {
    cards.innerHTML = packages.map((pkg) => `
      <article class="package-card ${pkg.highlight ? "highlight" : ""} reveal">
        <div class="package-header">
          <div>
            <span class="package-badge">${pkg.badge}</span>
            <h3>${pkg.name}</h3>
            <p>${pkg.descriptor}</p>
          </div>
        </div>
        <div class="package-price"><strong>${pkg.price}</strong><span>+ taxes</span></div>
        <ul class="package-features">${pkg.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
        <div class="urgency-badge">${pkg.urgency}</div>
        <div class="cta-row" style="margin-top:1.4rem;">
          <a class="button ${pkg.highlight ? "" : "button-secondary"} full" href="apply.html?plan=${pkg.name.toLowerCase()}">Choose ${pkg.name}</a>
        </div>
      </article>`).join("");
  }

  if (table) {
    table.innerHTML = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Standard</th>
            <th>Gold</th>
            <th>VIP</th>
          </tr>
        </thead>
        <tbody>
          ${comparisonRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>`;
  }

  if (faqGrid) {
    faqGrid.innerHTML = faqItems.map((item) => `<article class="faq-item reveal"><h3>${item.title}</h3><p>${item.body}</p></article>`).join("");
  }

  if (testimonialsHost) {
    testimonialsHost.innerHTML = testimonials.map((item) => `
      <article class="testimonial-card reveal">
        <span class="stat-kicker">${item.name}</span>
        <h3>${item.title}</h3>
        <p>"${item.quote}"</p>
      </article>`).join("");
  }
}

function renderFeatureCards() {
  const participantHost = document.getElementById("participantGrid");
  const benefitHost = document.getElementById("benefitGrid");
  const socialHost = document.getElementById("socialGrid");

  if (participantHost) {
    const participants = [
      { icon: "restaurant", title: "Restaurants", body: "Flagship dining rooms ready to claim premium national visibility." },
      { icon: "chef", title: "Chefs", body: "Independent culinary voices building authority through stage, plate, and press." },
      { icon: "cafe", title: "Cafes", body: "Modern formats seeking a luxury storytelling frame and investor-ready presence." },
      { icon: "cloche", title: "Cloud Kitchens", body: "Digital-first brands that want physical prestige and social proof." },
      { icon: "media", title: "Hospitality Brands", body: "Beverage, dessert, tableware, and premium ingredient collaborators." },
      { icon: "ticket", title: "Sponsors", body: "Partners who want immersive brand moments rather than logo placement alone." }
    ];

    participantHost.innerHTML = participants.map((item) => `
      <article class="participant-card reveal">
        <div class="icon-badge">${iconSvg(item.icon)}</div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`).join("");
  }

  if (benefitHost) {
    const benefits = [
      { icon: "spark", title: "Luxury-first visual language", body: "Every page frames participation as prestige, not paperwork." },
      { icon: "media", title: "Social-ready storytelling", body: "Media, reels, and gallery sections are built for high-shareability." },
      { icon: "mic", title: "Conversion-ready funnel", body: "Packages, urgency, and the multi-step form are designed to move people to action." }
    ];

    benefitHost.innerHTML = benefits.map((item) => `
      <article class="feature-card reveal">
        <div class="icon-badge">${iconSvg(item.icon)}</div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`).join("");
  }

  if (socialHost) {
    const stats = [
      ["1,000+", "projected participants for the 2026 edition"],
      ["50+", "culinary cities and regional influences represented"],
      ["20", "VIP showcase slots positioned with urgency"],
      ["4-step", "application funnel for fast decision-making"],
      ["Red carpet", "arrival and media storytelling built in"],
      ["3D", "award-stage visual touch with trophy showcase"]
    ];

    socialHost.innerHTML = stats.map(([number, label]) => `
      <article class="social-card reveal">
        <strong>${number}</strong>
        <p>${label}</p>
      </article>`).join("");
  }
}

function setupApplicationForm() {
  const form = document.getElementById("applicationForm");
  if (!form) return;

  const urlPlan = new URLSearchParams(window.location.search).get("plan");
  if (urlPlan) {
    const selected = form.querySelector(`input[name="plan"][value="${urlPlan}"]`);
    if (selected) selected.checked = true;
  }

  let currentStep = 0;
  const steps = [...form.querySelectorAll(".form-step")];
  const stepper = [...document.querySelectorAll(".stepper-item")];
  const progress = document.querySelector(".step-progress span");

  const updateStep = () => {
    steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
    stepper.forEach((item, index) => item.classList.toggle("active", index === currentStep));
    if (progress) progress.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    if (currentStep === steps.length - 1) fillConfirmation(form);
  };

  form.querySelectorAll("[data-prev-step]").forEach((button) => button.addEventListener("click", () => {
    currentStep = Math.max(currentStep - 1, 0);
    updateStep();
  }));

  form.querySelectorAll("[data-next-step]").forEach((button) => button.addEventListener("click", () => {
    currentStep = Math.min(currentStep + 1, steps.length - 1);
    updateStep();
  }));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fillConfirmation(form);
    const panel = document.getElementById("submitMessage");
    if (panel) {
      panel.innerHTML = `<div class="confirmation-card"><strong>Application Sequenced</strong><p>Your TasteOfHindustan submission has been staged for concierge review. Use this screen as your confirmation while payment and document pickup are finalized.</p></div>`;
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  updateStep();
}

function fillConfirmation(form) {
  const values = new FormData(form);
  const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  setText("confirmBrand", values.get("brand") || "Your Brand");
  setText("confirmCategory", values.get("category") || "Premium Participant");
  setText("confirmPlan", String(values.get("plan") || "vip").toUpperCase());
  setText("confirmCity", values.get("city") || "City pending");
  setText("confirmPayment", values.get("payment") || "Concierge invoice");
}

function setupCustomTriggers() {
  document.querySelectorAll("[data-open-stage-reel]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const reel = galleryItems.find((item) => item.type === "video");
      if (reel) openLightbox(reel);
    });
  });
}

renderShell();
setupMobileNav();
setupParticles();
setupCursorGlow();
setupScrollProgress();
startCountdown();
renderMap();
renderExperience();
renderGallery();
renderPackages();
renderFeatureCards();
setupApplicationForm();
setupModalClose();
setupCustomTriggers();
setupParallax();
setupReveal();
