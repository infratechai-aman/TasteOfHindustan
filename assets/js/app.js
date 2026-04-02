document.body.classList.add("js-ready");

const page = document.body.dataset.page || "home";

const navItems = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "experience.html", label: "Experience", key: "experience" },
  { href: "gallery.html", label: "Gallery", key: "gallery" },
  { href: "packages.html", label: "Packages", key: "packages" },
  { href: "apply.html", label: "Apply", key: "apply" }
];

const chapterData = [
  { kicker: "Chapter I", title: "North Fire", description: "The opening chapter leans into Delhi and Lucknow: galouti kebabs, copper-handled gravies, sheermal, charcoal heat, and a room that feels like smoke has been curated on purpose.", notes: ["Galouti and seekh trail", "Qawwali-led mood shift", "Copper, coal, and velvet tones"], image: "assets/images/chicken-tikka-kebab.png" },
  { kicker: "Chapter II", title: "South Coast", description: "The middle act cools into curry leaf fragrance, ghee roast drama, appam service, filter coffee, and polished coastal plating that slows the pace before the street chapter explodes.", notes: ["Appam and pepper fry", "Filter coffee and brass service", "Coastal spice and softer lighting"], image: "assets/images/chicken-thai-curry.png" },
  { kicker: "Chapter III", title: "Street After Dark", description: "The final chapter belongs to Mumbai chaat, Kolkata rolls, neon counters, late-night crowds, and the kind of food lane that makes phones come out automatically.", notes: ["Chaat, rolls, and grills", "Creator pit and flash photography", "After-dark festival energy"], image: "assets/images/chicken-tangdi-kufi-kebab.png" }
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
  { kicker: "Open", title: "Fire Procession And Opening Plates", description: "The first wave is theatre: grills igniting, brass service moving through the room, and the crowd immediately understanding this is not a passive food exhibition.", bullets: ["Open-fire grill line", "Host-led opening countdown", "Arrival camera flash corridor"], image: "assets/images/chicken-tikka-kebab.png" },
  { kicker: "Perform", title: "Qawwali, Folk Pulse, And Stage Crossovers", description: "Live acts are not background filler here. They reshape the pace of the night, pull people back to the stage, and give the room a second wind between tasting runs.", bullets: ["Qawwali and folk percussion sets", "Lighting cues built for the music", "Front-stage spotlight moments for featured partners"], image: "assets/images/aab-gosht-shorba.png" },
  { kicker: "Capture", title: "Creator Pit And Crowd-Ready Moments", description: "A dedicated visual layer gives reels, interviews, behind-the-scenes content, and sponsor-friendly moments a reason to happen organically all night.", bullets: ["Reel booth and interview nook", "Step-and-repeat moments", "Fast-share food and crowd visuals"], image: "assets/images/chicken-tikka-oriental-rice.png" },
  { kicker: "After Dark", title: "Street Food Lane After Sunset", description: "Once the room is warm, the night shifts into a louder, looser street-food chapter with rolling counters, bolder flavours, and the most social part of the event.", bullets: ["Mumbai-style chaat and late-night bites", "Faster service rhythm", "Closing-hour crowd energy"], image: "assets/images/chicken-jujeh-kebab.png" }
];

const vendorHighlights = [
  { name: "Karim's", city: "Old Delhi", signature: "Seekh kebab and mutton korma", body: "The benchmark for smoke-heavy North Indian richness and the kind of flavour memory people travel for." },
  { name: "Tunday Kababi", city: "Lucknow", signature: "Galouti kebab and sheermal", body: "Soft-spiced Awadhi detail, slow-cooked depth, and the exact kind of regal bite that anchors the North chapter." },
  { name: "Bademiya", city: "Mumbai", signature: "Roomali rolls and late-night grills", body: "A reminder that Mumbai's strongest food memories often happen after dark, standing, talking, and ordering one more roll." },
  { name: "MTR", city: "Bengaluru", signature: "Masala dosa and filter coffee", body: "The precision of South Indian service and comfort is essential if the festival wants real culinary range." },
  { name: "Paragon", city: "Kozhikode", signature: "Malabar biryani and coastal plates", body: "Proof that coastal spice, restraint, and confidence can feel just as dramatic as charcoal and fire." },
  { name: "Arsalan", city: "Kolkata", signature: "Biryani and rezala", body: "A clean benchmark for eastern richness, softer perfume, and crowd-pulling familiarity." }
];

const instagramMoments = [
  { handle: "@tasteofhindustan", label: "Hero drop", caption: "First smoke burst. First camera flash. First plate that makes people stop walking.", meta: "Built for the opening reel" },
  { handle: "@foodreelsindia", label: "Street lane", caption: "If the after-dark chaat lane does not get posted instantly, the lane is not built right.", meta: "Crowd-energy moment" },
  { handle: "@mumbaifoodscene", label: "Creator pit", caption: "Short-form content works when the room already looks alive before the creators arrive.", meta: "Fast-share interview zone" }
];

const proofQuotes = [
  { label: "Preview Partner Note", title: "Hospitality group chat reaction", body: "This is the first festival page in a while that feels like the night will actually be louder, hotter, and more social than the poster." },
  { label: "Creator Watchlist", title: "Short-form food creator instinct", body: "If the grills, qawwali, and street lane hit the same night, the content from this event will travel on its own." },
  { label: "Partner Intent Signal", title: "Restaurant participation behavior", body: "The right package framing matters. Once brands believe the room will feel full, premium, and culturally relevant, decisions happen faster." }
];

const proofReels = [
  { title: "Smoke And Fire Opening", caption: "The first twenty seconds should already feel worth filming.", image: "assets/images/chicken-tikka-kebab.png", lightboxIndex: 0 },
  { title: "Coastal Chapter Shift", caption: "A softer visual beat before the crowd energy spikes again.", image: "assets/images/chicken-thai-curry.png", lightboxIndex: 3 },
  { title: "Street Lane Close", caption: "This is the part of the night where the phones all come out.", image: "assets/images/chicken-tangdi-kufi-kebab.png", lightboxIndex: 8 }
];

const ticketTiers = [
  { name: "Showcase Counter", badge: "Entry Package", price: "From INR 25,000", note: "Ideal for curated restaurant and cafe participation.", plan: "standard", highlight: false, features: ["Festival-floor presence within the tasting journey", "Brand listing across core event creatives", "Access to attendee and creator footfall", "Operational coordination with the event team"] },
  { name: "Featured Pavilion", badge: "Most Popular", price: "From INR 75,000", note: "Best fit for brands that want stronger visibility and storytelling.", plan: "gold", highlight: true, features: ["Everything in Showcase Counter", "Priority placement within a featured zone", "Stage mention or curated spotlight opportunity", "Higher media and creator visibility across the night"] },
  { name: "Headline Partner", badge: "Premium Access", price: "Custom Quote", note: "Built for anchor brands, sponsors, and large-format presence.", plan: "vip", highlight: false, features: ["Everything in Featured Pavilion", "Premium branding integration across the venue", "Dedicated partner hosting and concierge support", "Priority media moments and VIP networking access"] }
];

const galleryItems = [
  { title: "Kebab Prelude", category: "Food Portraits", description: "Fire-char, lacquered glaze, and hero-plating detail.", image: "assets/images/chicken-tikka-kebab.png", type: "image" },
  { title: "Royal Broth", category: "Heritage Courses", description: "Slow-cooked depth under warm cinematic light.", image: "assets/images/aab-gosht-shorba.png", type: "image" },
  { title: "Velvet Butter Glaze", category: "Plating", description: "A premium dish capture for campaign-led storytelling.", image: "assets/images/chicken-butter-garlic.png", type: "image" },
  { title: "Signature Curry Canvas", category: "Regional Stories", description: "Southern-inspired richness with gold-stage contrast.", image: "assets/images/chicken-thai-curry.png", type: "image" },
  { title: "Banquet Rice Composition", category: "Regional Stories", description: "Layered grains, garnish, and banquet-style finish.", image: "assets/images/veg-persian-special-rice.png", type: "image" },
  { title: "Networking Table Hero", category: "Experience", description: "An image built for sponsor decks and premium event promos.", image: "assets/images/chicken-tikka-oriental-rice.png", type: "image" },
  { title: "Vegetarian Fire Notes", category: "Food Portraits", description: "A high-contrast hero for curation decks and partner package sections.", image: "assets/images/veg-seekh-kebab.png", type: "image" },
  { title: "Dessert Finale", category: "Dessert", description: "A polished finish for luxury tasting narratives.", image: "assets/images/arabian-pudding.png", type: "image" },
  { title: "Stage Reel", category: "Film", description: "Use this cinematic motion layer as a hero or gallery popup.", image: "assets/images/chicken-tangdi-kufi-kebab.png", src: "assets/video/hero-cinematic.mp4", type: "video" }
];

const packages = [
  { name: "Showcase Counter", plan: "standard", price: "From INR 25,000", descriptor: "for restaurants, cafes, and food concepts joining the event floor", badge: "Entry Package", highlight: false, urgency: "Best for curated participation without overbuilding the setup.", features: ["Festival-floor participation across the tasting journey", "Brand presence in core event communication", "Footfall from guests, creators, and media", "Support from the event operations team", "Straight application and review flow"] },
  { name: "Featured Pavilion", plan: "gold", price: "From INR 75,000", descriptor: "for brands that want stronger placement and a larger visual footprint", badge: "Most Popular", highlight: true, urgency: "Designed for higher visibility before premium zones fill up.", features: ["Everything in Showcase Counter", "Preferred placement in a featured zone", "Spotlight mentions during the event flow", "Higher creator and media visibility", "Priority WhatsApp and concierge support"] },
  { name: "Headline Partner", plan: "vip", price: "Custom Quote", descriptor: "for sponsors and anchor brands shaping the identity of the night", badge: "Premium Access", highlight: false, urgency: "Reserved for limited title, co-powered, and sponsor-led integrations.", features: ["Everything in Featured Pavilion", "Large-format branding across event touchpoints", "Dedicated partner hosting and coordination", "Priority media interviews and VIP networking", "Custom integration planning with the event team"] }
];

const comparisonRows = [
  ["Floor presence", "Curated counter", "Featured pavilion", "Premium integration"],
  ["Brand visibility", "Core listing", "Priority placement", "Venue-wide presence"],
  ["Stage mentions", "Not included", "Included", "Priority spotlight"],
  ["Creator and media access", "General", "Enhanced", "Priority"],
  ["Concierge support", "Standard", "Priority", "Dedicated"],
  ["Best for", "Independent concepts", "Growth-stage brands", "Anchor partners"]
];

const faqItems = [
  { title: "Are these attendee tickets or participation packages?", body: "These tiers are framed as participation packages for restaurants, cafes, cloud kitchens, chefs, sponsors, and hospitality brands joining the event." },
  { title: "Can we apply first and finalize commercials later?", body: "Yes. The application flow is designed to capture intent first, then move into package alignment, placement, and commercials with the event team." },
  { title: "Can multiple brands apply together?", body: "Yes. Groups, hospitality collectives, and multi-brand teams can apply together and clarify space, footprint, and showcase needs in the form." },
  { title: "What makes the top package worth it?", body: "The highest package is for brands that want stronger stage association, bigger visual presence, more media attention, and higher-touch event support." }
];

const testimonials = [
  { name: "Restaurant Partner Circle", title: "Bandra hospitality founder", quote: "You can feel the difference when an event is designed like a night out people want to post from, not just a list of stalls." },
  { name: "Food Creator Watchlist", title: "Short-form food video creator", quote: "If the street chapter, the fire line, and the music all land, this is the kind of event the city talks about for weeks." },
  { name: "Sponsor Demand Signal", title: "Mumbai experience curator", quote: "The urgency works because the page sells a feeling first. Once that lands, the participation decision becomes easy." }
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

  const tierHref = page === "home" ? "#ticketSection" : "packages.html";
  const primaryHref = page === "home" ? "#ticketSection" : "apply.html";

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
          <a class="button-secondary" href="${tierHref}">Participation Packages</a>
          <a class="button" href="${primaryHref}">Apply Now</a>
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
              <span>Restaurant and hospitality event platform</span>
            </div>
          </div>
          <p>A premium cultural stage for Indian cuisine, restaurant showcases, chef-led storytelling, sponsor integrations, and media-ready brand moments.</p>
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
                <li><a href="packages.html">Participation packages</a></li>
                <li><a href="apply.html">Apply to participate</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="location-card glass-panel">
          <div class="location-placeholder">
            <div>
              <strong>Venue Direction</strong>
              <p style="margin:0;color:var(--muted);max-width:320px;">Mumbai luxury ballroom setting, designed for red carpet arrival, tasting lounges, restaurant showcases, and high-gloss media capture.</p>
              <div class="footer-actions" style="justify-content:center;margin-top:1rem;">
                <a class="button-ghost" href="https://maps.google.com/?q=Mumbai+India" target="_blank" rel="noreferrer">Open Route</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Event date: October 24, 2026</span>
        <span>Crafted to feel like a luxury award night, not a restaurant brochure.</span>
      </div>`;
  }

  if (actions) {
    actions.innerHTML = `
      <a class="floating-button" href="${primaryHref}">
        <div>
          <strong>Apply To Participate</strong>
          <span>Restaurants, cafes, chefs, and sponsors welcome</span>
        </div>
      </a>
      <a class="floating-button whatsapp" href="https://wa.me/9190000202626" target="_blank" rel="noreferrer">
        <div>
          <strong>WhatsApp Concierge</strong>
          <span>Quick response for package and partner queries</span>
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

function renderStoryChapters() {
  const host = document.getElementById("chapterGrid");
  if (!host) return;
  host.innerHTML = chapterData.map((item, index) => `
    <article class="chapter-card reveal" style="background-image:url('${item.image}');transition-delay:${index * 70}ms;">
      <div class="chapter-overlay"></div>
      <div class="chapter-copy">
        <small>${item.kicker}</small>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="chapter-note-row">${item.notes.map((note) => `<span>${note}</span>`).join("")}</div>
        <a class="button-ghost chapter-button" href="#ticketSection">View Packages</a>
      </div>
    </article>`).join("");
}

function renderVendorEdit() {
  const host = document.getElementById("vendorGrid");
  if (!host) return;
  host.innerHTML = vendorHighlights.map((item) => `
    <article class="vendor-card reveal">
      <div class="vendor-head">
        <div>
          <strong>${item.name}</strong>
          <span>${item.city}</span>
        </div>
        <small>${item.signature}</small>
      </div>
      <p>${item.body}</p>
      <a class="button-ghost vendor-link" href="#ticketSection">See Participation Options</a>
    </article>`).join("");
}

function renderGalleryPreview() {
  const host = document.getElementById("galleryPreviewGrid");
  if (!host) return;
  const items = galleryItems.slice(0, 4);
  const encodeItem = (item) => encodeURIComponent(JSON.stringify(item));
  host.innerHTML = items.map((item, index) => `
    <article class="preview-shot reveal ${index === 0 ? "preview-shot-lg" : ""}">
      <button type="button" data-lightbox="${encodeItem(item)}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="preview-shot-copy">
          <strong>${item.title}</strong>
          <span>${item.description}</span>
        </div>
      </button>
    </article>`).join("");

  host.querySelectorAll("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => openLightbox(JSON.parse(decodeURIComponent(button.dataset.lightbox))));
  });
}

function renderInstagramWall() {
  const host = document.getElementById("instagramGrid");
  if (!host) return;
  host.innerHTML = instagramMoments.map((item) => `
    <article class="instagram-card reveal">
      <div class="instagram-head">
        <strong>${item.handle}</strong>
        <span>${item.label}</span>
      </div>
      <p>${item.caption}</p>
      <small>${item.meta}</small>
    </article>`).join("");
}

function renderHomeTickets() {
  const host = document.getElementById("ticketGrid");
  if (!host) return;
  host.innerHTML = ticketTiers.map((tier) => `
    <article class="ticket-card ${tier.highlight ? "highlight" : ""} reveal">
      <div class="ticket-head">
        <span class="package-badge">${tier.badge}</span>
        <h3>${tier.name}</h3>
      </div>
      <div class="ticket-price">${tier.price}</div>
      <p class="ticket-note">${tier.note}</p>
      <ul class="package-features">${tier.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      <a class="button ${tier.highlight ? "" : "button-secondary"} full" href="apply.html?plan=${tier.plan}">Apply For ${tier.name}</a>
    </article>`).join("");
}

function renderProofWall() {
  const stackHost = document.getElementById("proofStack");
  const reelHost = document.getElementById("proofReelGrid");
  if (stackHost) {
    stackHost.innerHTML = proofQuotes.map((item) => `
      <article class="proof-quote-card reveal">
        <span class="package-badge">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <a class="button-ghost" href="#ticketSection">Apply Before Slots Fill</a>
      </article>`).join("");
  }

  if (reelHost) {
    const encodeItem = (item) => encodeURIComponent(JSON.stringify(item));
    reelHost.innerHTML = proofReels.map((item) => `
      <article class="proof-reel-card reveal">
        <button type="button" data-lightbox="${encodeItem(galleryItems[item.lightboxIndex])}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="proof-reel-copy">
            <strong>${item.title}</strong>
            <span>${item.caption}</span>
          </div>
        </button>
      </article>`).join("");

    reelHost.querySelectorAll("[data-lightbox]").forEach((button) => {
      button.addEventListener("click", () => openLightbox(JSON.parse(decodeURIComponent(button.dataset.lightbox))));
    });
  }
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
          <a class="button ${pkg.highlight ? "" : "button-secondary"} full" href="apply.html?plan=${pkg.plan || pkg.name.toLowerCase()}">Apply For ${pkg.name}</a>
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
      { icon: "spark", title: "Exhibitors", body: "Featured vendors and food concepts ready to claim premium national visibility on the festival floor." },
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
      { icon: "mic", title: "Conversion-ready funnel", body: "Packages, urgency, and the multi-step form are designed to move restaurant and sponsor leads to action." }
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
      ["200", "curated showcase opportunities planned across formats and zones"],
      ["12", "benchmark food legends shaping the curation bar"],
      ["4", "performance-driven crowd moments across the night"],
      ["3", "food chapters from North to Coast to Street"],
      ["1", "venue: Jio World Convention Centre, Mumbai"],
      ["30+", "creator-ready photo and reel moments built in"]
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
      panel.innerHTML = `<div class="confirmation-card"><strong>Application Locked For Review</strong><p>Your TasteOfHindustan participation request has been staged for event-team follow-up. Use this screen as your confirmation while package fit, placement, and next-step details are finalized.</p></div>`;
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  updateStep();
}

function fillConfirmation(form) {
  const values = new FormData(form);
  const planLabel = {
    standard: "SHOWCASE COUNTER",
    gold: "FEATURED PAVILION",
    vip: "HEADLINE PARTNER"
  };
  const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  setText("confirmBrand", values.get("brand") || "Your Brand");
  setText("confirmCategory", values.get("category") || "Restaurant");
  setText("confirmPlan", planLabel[String(values.get("plan") || "vip")] || String(values.get("plan") || "vip").toUpperCase());
  setText("confirmCity", values.get("city") || "City pending");
  setText("confirmPayment", values.get("payment") || "Strategy call");
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
renderStoryChapters();
renderExperience();
renderVendorEdit();
renderGallery();
renderGalleryPreview();
renderInstagramWall();
renderProofWall();
renderPackages();
renderHomeTickets();
renderFeatureCards();
setupApplicationForm();
setupModalClose();
setupCustomTriggers();
setupParallax();
setupReveal();
