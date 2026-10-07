/**
 * BeanCraft - Modern Specialty Coffee Rating & Brew Guide Application
 */

// ==========================================================================
// Curated Artisanal Roasts Library (Offline & Standalone Redundancy Engine)
// ==========================================================================
const CURATED_COFFEES = [
  {
    id: 1,
    name: "Panama Geisha Hacienda",
    origin: "Panama (Boquete)",
    notes: "Jasmine Blossom, Peach, Bergamot, Meyer Lemon",
    image: "🌸",
    roast_level: "Light",
    process: "Natural",
    elevation: "1800m",
    brew_method: "V60 Pour Over",
    category: "single_origin",
    rating_avg: 5.0,
    rating_count: 18,
    votes: 42,
    reviews: [
      { id: 101, author: "Marcus Vance (Q-Grader)", rating: 5, notes: "Exceptional cup clarity. The jasmine florals burst immediately on drawdown, followed by sweet peach and sparkling lemon acidity.", body_score: 3, acidity_score: 5, sweetness_score: 5, created_at: "2026-10-06T10:00:00Z" },
      { id: 102, author: "Elena Rostova", rating: 5, notes: "Worth every penny. Brewed on Kalita Wave at 93°C, tea-like elegance with vibrant fruit notes.", body_score: 3, acidity_score: 4, sweetness_score: 5, created_at: "2026-10-07T12:30:00Z" }
    ]
  },
  {
    id: 2,
    name: "Ethiopian Yirgacheffe G1",
    origin: "Ethiopia (Yirgacheffe)",
    notes: "Floral Jasmine, Citrus Lemon, Earl Grey Tea, Honey",
    image: "☕",
    roast_level: "Light",
    process: "Washed",
    elevation: "2100m",
    brew_method: "Pour Over",
    category: "single_origin",
    rating_avg: 4.9,
    rating_count: 15,
    votes: 34,
    reviews: [
      { id: 103, author: "Sarah Jenkins", rating: 5, notes: "My daily morning ritual bean. Clean floral aroma and refreshing citrus finish.", body_score: 3, acidity_score: 5, sweetness_score: 4, created_at: "2026-10-07T08:15:00Z" }
    ]
  },
  {
    id: 3,
    name: "Costa Rica Tarrazú Honey",
    origin: "Costa Rica (Tarrazú)",
    notes: "Wild Honey, Crisp Apricot, Golden Raisin, Cane Sugar",
    image: "🍯",
    roast_level: "Medium-Light",
    process: "Honey",
    elevation: "1750m",
    brew_method: "AeroPress",
    category: "single_origin",
    rating_avg: 4.9,
    rating_count: 12,
    votes: 31,
    reviews: [
      { id: 104, author: "David Kim (Barista)", rating: 5, notes: "Superb sweetness from the honey process. Silky mouthfeel on AeroPress inverted.", body_score: 4, acidity_score: 3, sweetness_score: 5, created_at: "2026-10-05T14:20:00Z" }
    ]
  },
  {
    id: 4,
    name: "Colombian Huila Supremo",
    origin: "Colombia (Huila)",
    notes: "Rich Caramel, Red Apple, Milk Chocolate, Vanilla",
    image: "🫘",
    roast_level: "Medium",
    process: "Washed",
    elevation: "1650m",
    brew_method: "French Press",
    category: "single_origin",
    rating_avg: 4.8,
    rating_count: 14,
    votes: 28,
    reviews: [
      { id: 105, author: "Carlos Mendez", rating: 5, notes: "Classic Colombian profile done to perfection. Balanced, comforting chocolate and crisp apple notes.", body_score: 4, acidity_score: 3, sweetness_score: 4, created_at: "2026-10-04T16:00:00Z" }
    ]
  },
  {
    id: 5,
    name: "Kenya Nyeri AA Hillside",
    origin: "Kenya (Nyeri)",
    notes: "Blackcurrant, Grapefruit Zest, Brown Sugar, Juicy Body",
    image: "🍒",
    roast_level: "Medium-Light",
    process: "Washed",
    elevation: "1900m",
    brew_method: "Chemex",
    category: "single_origin",
    rating_avg: 4.8,
    rating_count: 10,
    votes: 26,
    reviews: [
      { id: 106, author: "Chloe Martin", rating: 5, notes: "Packs a punch of blackcurrant and sparkling wine acidity. In Chemex it brews exceptionally clean.", body_score: 3, acidity_score: 5, sweetness_score: 4, created_at: "2026-10-03T09:45:00Z" }
    ]
  },
  {
    id: 6,
    name: "Guatemala Antigua Finca",
    origin: "Guatemala (Antigua)",
    notes: "Dark Cocoa Nibs, Warm Cinnamon, Citrus Peel, Velvety",
    image: "☕",
    roast_level: "Medium",
    process: "Washed",
    elevation: "1550m",
    brew_method: "Espresso",
    category: "single_origin",
    rating_avg: 4.7,
    rating_count: 9,
    votes: 23,
    reviews: [
      { id: 107, author: "Liam Gallagher", rating: 5, notes: "Subtle spice with a thick velvety cocoa body. Fantastic as a flat white base.", body_score: 4, acidity_score: 3, sweetness_score: 4, created_at: "2026-10-02T11:10:00Z" }
    ]
  },
  {
    id: 7,
    name: "Velvet Roast Espresso Blend",
    origin: "Brazil & Colombia",
    notes: "Dark Chocolate Truffle, Toasted Hazelnut, Crema Rich",
    image: "🍫",
    roast_level: "Dark",
    process: "Pulped Natural",
    elevation: "1300m",
    brew_method: "Espresso",
    category: "espresso",
    rating_avg: 4.8,
    rating_count: 16,
    votes: 22,
    reviews: [
      { id: 108, author: "Marco Rossi", rating: 5, notes: "Golden crema and thick syrupy dark chocolate profile. Zero harsh bitterness.", body_score: 5, acidity_score: 1, sweetness_score: 4, created_at: "2026-10-01T15:30:00Z" }
    ]
  },
  {
    id: 8,
    name: "Sumatra Mandheling Gr.1",
    origin: "Indonesia (Sumatra)",
    notes: "Earthy Cedar, Dark Chocolate, Spiced Molasses, Heavy",
    image: "🌿",
    roast_level: "Dark",
    process: "Wet Hulled",
    elevation: "1400m",
    brew_method: "French Press",
    category: "single_origin",
    rating_avg: 4.6,
    rating_count: 8,
    votes: 19,
    reviews: [
      { id: 109, author: "Hannah Baker", rating: 4, notes: "Deep cedar wood, heavy molasses and rustic herbal notes. Perfect for cold mornings.", body_score: 5, acidity_score: 1, sweetness_score: 3, created_at: "2026-09-28T08:00:00Z" }
    ]
  },
  {
    id: 9,
    name: "Rwanda Bourbon Nyamagabe",
    origin: "Rwanda (Nyamagabe)",
    notes: "Red Currant, Black Ceylon Tea, Mandarin Orange",
    image: "🍊",
    roast_level: "Medium",
    process: "Washed",
    elevation: "1950m",
    brew_method: "Pour Over",
    category: "single_origin",
    rating_avg: 4.8,
    rating_count: 7,
    votes: 18,
    reviews: [
      { id: 110, author: "Daniel Reed", rating: 5, notes: "Silky black tea structure with juicy mandarin acidity.", body_score: 3, acidity_score: 4, sweetness_score: 4, created_at: "2026-09-27T17:15:00Z" }
    ]
  },
  {
    id: 10,
    name: "Swiss Water Decaf Organic",
    origin: "Peru (Cajamarca)",
    notes: "Silky Milk Chocolate, Sweet Toasted Almond, Honey Finish",
    image: "🌙",
    roast_level: "Medium",
    process: "Swiss Water Decaf",
    elevation: "1600m",
    brew_method: "Drip / Filter",
    category: "decaf",
    rating_avg: 4.6,
    rating_count: 6,
    votes: 15,
    reviews: [
      { id: 111, author: "Sonia Patel", rating: 5, notes: "Hands down the best decaf I have ever tasted. Rich sweetness without any chemical aftertaste.", body_score: 4, acidity_score: 2, sweetness_score: 5, created_at: "2026-09-25T20:00:00Z" }
    ]
  }
];

// ==========================================================================
// Application State
// ==========================================================================
const state = {
  coffees: [],
  favorites: JSON.parse(localStorage.getItem('beancraft_favorites') || '[]'),
  theme: localStorage.getItem('beancraft_theme') || 'dark',
  soundEnabled: localStorage.getItem('beancraft_sound') !== 'false',
  activeCategory: 'all',
  activeFlavors: new Set(),
  activeOrigin: 'all',
  activeSort: 'votes',
  searchQuery: '',
  viewMode: 'grid',
  isOfflineMode: false,
  timerState: {
    isRunning: false,
    intervalId: null,
    totalSeconds: 180,
    currentSeconds: 180,
    preset: 'v60',
    currentStageIndex: 0
  }
};

// ==========================================================================
// Synthesized Web Audio Engine
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {}
  }

  playVoteSuccess() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } catch {}
  }

  playDrip() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {}
  }

  playTimerChime() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [587.33, 880, 1174.66].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0.2, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.6);
      });
    } catch {}
  }
}

const sounds = new SoundFX();

// ==========================================================================
// DOM Element Selectors
// ==========================================================================
const DOM = {
  coffeeList: document.querySelector('#coffee-list'),
  statusMsg: document.querySelector('#status'),
  emptyState: document.querySelector('#empty-state'),
  searchInput: document.querySelector('#search-input'),
  clearSearchBtn: document.querySelector('#clear-search-btn'),
  originSelect: document.querySelector('#origin-select'),
  sortSelect: document.querySelector('#sort-select'),
  viewGridBtn: document.querySelector('#view-grid-btn'),
  viewListBtn: document.querySelector('#view-list-btn'),
  categoryPills: document.querySelectorAll('.category-pill'),
  flavorPillsWrap: document.querySelector('#flavor-pills-wrap'),
  activeFilterBar: document.querySelector('#active-filter-bar'),
  filterSummaryText: document.querySelector('#filter-summary-text'),
  resetFiltersBtn: document.querySelector('#reset-filters-btn'),
  favCountBadge: document.querySelector('#fav-count'),
  themeToggleBtn: document.querySelector('#theme-toggle-btn'),
  themeIcon: document.querySelector('#theme-icon'),
  soundToggleBtn: document.querySelector('#sound-toggle-btn'),
  soundIcon: document.querySelector('#sound-icon'),
  shortcutsBtn: document.querySelector('#shortcuts-btn'),
  exportJsonBtn: document.querySelector('#export-json-btn'),
  toastContainer: document.querySelector('#toast-container'),

  // Stats
  totalRoastsCount: document.querySelector('#total-roasts-count'),
  totalVotesCount: document.querySelector('#total-votes-count'),
  topRoastName: document.querySelector('#top-roast-name'),
  avgRatingValue: document.querySelector('#avg-rating-value'),

  // Modals
  openBrewLabBtn: document.querySelector('#open-brew-lab-btn'),
  openAddRoastBtn: document.querySelector('#open-add-roast-btn'),
  brewLabModal: document.querySelector('#brew-lab-modal'),
  addRoastModal: document.querySelector('#add-roast-modal'),
  reviewsModal: document.querySelector('#reviews-modal'),
  brewGuideModal: document.querySelector('#brew-guide-modal'),
  shortcutsModal: document.querySelector('#shortcuts-modal'),

  // Add Roast Form
  addRoastForm: document.querySelector('#add-roast-form'),

  // Reviews Modal
  reviewsModalTitle: document.querySelector('#reviews-modal-title'),
  reviewsModalSub: document.querySelector('#reviews-modal-sub'),
  reviewModalIcon: document.querySelector('#review-modal-icon'),
  reviewCoffeeInfo: document.querySelector('#review-coffee-info'),
  reviewsListContainer: document.querySelector('#reviews-list-container'),
  reviewsCountNum: document.querySelector('#reviews-count-num'),
  addReviewForm: document.querySelector('#add-review-form'),
  reviewCoffeeId: document.querySelector('#review-coffee-id'),
  reviewStarRating: document.querySelector('#review-star-rating'),
  reviewRatingValue: document.querySelector('#review-rating-value'),
  sliderAcidity: document.querySelector('#slider-acidity'),
  sliderBody: document.querySelector('#slider-body'),
  sliderSweetness: document.querySelector('#slider-sweetness'),
  acidityVal: document.querySelector('#acidity-val'),
  bodyVal: document.querySelector('#body-val'),
  sweetnessVal: document.querySelector('#sweetness-val'),

  // Brew Lab
  timerPresetSelect: document.querySelector('#timer-preset-select'),
  timerCountdownDisplay: document.querySelector('#timer-countdown-display'),
  timerStageName: document.querySelector('#timer-stage-name'),
  timerStageTarget: document.querySelector('#timer-stage-target'),
  timerRingFill: document.querySelector('#timer-ring-fill'),
  timerStagesIndicator: document.querySelector('#timer-stages-indicator'),
  timerStartBtn: document.querySelector('#timer-start-btn'),
  timerBtnText: document.querySelector('#timer-btn-text'),
  timerResetBtn: document.querySelector('#timer-reset-btn'),
  ratioPreset: document.querySelector('#ratio-preset'),
  calcCoffeeGrams: document.querySelector('#calc-coffee-grams'),
  calcWaterGrams: document.querySelector('#calc-water-grams'),
  calcYieldVal: document.querySelector('#calc-yield-val'),
  calcCupsVal: document.querySelector('#calc-cups-val'),
  calcTempVal: document.querySelector('#calc-temp-val'),
  calcBloomVal: document.querySelector('#calc-bloom-val')
};

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '☕' : '⚠️'}</span> <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Escape HTML for XSS prevention
const escapeHtml = (val) => String(val ?? '').replace(/[&<>'"]/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[char]));

// ==========================================================================
// Theme & Sound Setup
// ==========================================================================
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  DOM.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('beancraft_theme', theme);
}

function toggleTheme() {
  sounds.playClick();
  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  showToast(`Switched to ${nextTheme === 'dark' ? 'Dark Roast' : 'Cafe Creme'} theme.`);
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem('beancraft_sound', state.soundEnabled);
  DOM.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
  sounds.playClick();
  showToast(state.soundEnabled ? 'Cafe sound effects enabled.' : 'Sound effects muted.');
}

// ==========================================================================
// Data Fetching & Sync
// ==========================================================================
async function loadCoffees() {
  DOM.statusMsg.textContent = 'Refreshing...';
  try {
    const res = await fetch('/api/coffees', { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('API unavailable');
    const serverCoffees = await res.json();
    state.coffees = serverCoffees;
    state.isOfflineMode = false;
    DOM.statusMsg.textContent = '';
  } catch {
    // Offline or static mode fallback
    state.isOfflineMode = true;
    const localSaved = localStorage.getItem('beancraft_offline_coffees');
    if (localSaved) {
      try {
        state.coffees = JSON.parse(localSaved);
      } catch {
        state.coffees = [...CURATED_COFFEES];
      }
    } else {
      state.coffees = [...CURATED_COFFEES];
    }
    DOM.statusMsg.textContent = '✨ Standalone Mode';
  }

  updateStats();
  renderCoffees();
  updateFavBadge();
}

function saveOfflineData() {
  if (state.isOfflineMode) {
    localStorage.setItem('beancraft_offline_coffees', JSON.stringify(state.coffees));
  }
}

// ==========================================================================
// Statistics Summary
// ==========================================================================
function updateStats() {
  const totalRoasts = state.coffees.length;
  const totalVotes = state.coffees.reduce((acc, c) => acc + (c.votes || 0), 0);
  const sortedByVotes = [...state.coffees].sort((a, b) => (b.votes || 0) - (a.votes || 0));
  const topRoast = sortedByVotes[0];
  const avgRating = totalRoasts > 0
    ? (state.coffees.reduce((acc, c) => acc + (c.rating_avg || 4.8), 0) / totalRoasts).toFixed(1)
    : '4.9';

  DOM.totalRoastsCount.textContent = totalRoasts;
  DOM.totalVotesCount.textContent = totalVotes;
  DOM.topRoastName.textContent = topRoast ? topRoast.name : 'Panama Geisha';
  DOM.avgRatingValue.textContent = `${avgRating} / 5.0`;
}

function updateFavBadge() {
  DOM.favCountBadge.textContent = state.favorites.length;
}

// ==========================================================================
// Filtering & Sorting Logic
// ==========================================================================
function getFilteredCoffees() {
  let list = [...state.coffees];

  // Category Filter
  if (state.activeCategory === 'favorites') {
    list = list.filter(c => state.favorites.includes(c.id));
  } else if (state.activeCategory === 'light') {
    list = list.filter(c => (c.roast_level || '').toLowerCase().includes('light'));
  } else if (state.activeCategory === 'medium') {
    list = list.filter(c => (c.roast_level || '').toLowerCase().includes('medium'));
  } else if (state.activeCategory === 'dark') {
    list = list.filter(c => (c.roast_level || '').toLowerCase().includes('dark'));
  } else if (state.activeCategory !== 'all') {
    list = list.filter(c => c.category === state.activeCategory);
  }

  // Origin Filter
  if (state.activeOrigin !== 'all') {
    list = list.filter(c => (c.origin || '').toLowerCase().includes(state.activeOrigin.toLowerCase()));
  }

  // Flavor Notes Filter
  if (state.activeFlavors.size > 0) {
    list = list.filter(c => {
      const notes = (c.notes || '').toLowerCase();
      for (const f of state.activeFlavors) {
        if (!notes.includes(f.toLowerCase())) return false;
      }
      return true;
    });
  }

  // Search Query
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(c =>
      (c.name || '').toLowerCase().includes(q) ||
      (c.origin || '').toLowerCase().includes(q) ||
      (c.notes || '').toLowerCase().includes(q) ||
      (c.brew_method || '').toLowerCase().includes(q) ||
      (c.process || '').toLowerCase().includes(q)
    );
  }

  // Sorting
  switch (state.activeSort) {
    case 'rating':
      list.sort((a, b) => (b.rating_avg || 0) - (a.rating_avg || 0) || (b.votes || 0) - (a.votes || 0));
      break;
    case 'name':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'roast_light': {
      const rank = { Light: 1, 'Medium-Light': 2, Medium: 3, 'Medium-Dark': 4, Dark: 5 };
      list.sort((a, b) => (rank[a.roast_level] || 3) - (rank[b.roast_level] || 3));
      break;
    }
    case 'roast_dark': {
      const rank = { Light: 1, 'Medium-Light': 2, Medium: 3, 'Medium-Dark': 4, Dark: 5 };
      list.sort((a, b) => (rank[b.roast_level] || 3) - (rank[a.roast_level] || 3));
      break;
    }
    case 'newest':
      list.sort((a, b) => (b.id || 0) - (a.id || 0));
      break;
    case 'votes':
    default:
      list.sort((a, b) => (b.votes || 0) - (a.votes || 0) || (b.rating_avg || 0) - (a.rating_avg || 0));
      break;
  }

  return list;
}

// ==========================================================================
// Coffee Card Render Engine
// ==========================================================================
function renderRoastDots(roastLevel) {
  const levels = { Light: 1, 'Medium-Light': 2, Medium: 3, 'Medium-Dark': 4, Dark: 5 };
  const score = levels[roastLevel] || 3;
  let dotsHtml = '';
  for (let i = 1; i <= 5; i++) {
    dotsHtml += `<span class="roast-dot ${i <= score ? 'filled' : ''}"></span>`;
  }
  return dotsHtml;
}

function renderFlavorTags(notes) {
  if (!notes) return '';
  const tags = notes.split(',').map(n => n.trim()).filter(Boolean);
  return tags.map(tag => `<button type="button" class="flavor-tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('');
}

function renderCoffees() {
  const filtered = getFilteredCoffees();

  // Active filter banner check
  const hasActiveFilters = state.activeCategory !== 'all' ||
    state.activeFlavors.size > 0 ||
    state.activeOrigin !== 'all' ||
    Boolean(state.searchQuery.trim());

  if (hasActiveFilters) {
    DOM.activeFilterBar.classList.remove('hidden');
    DOM.filterSummaryText.textContent = `Showing ${filtered.length} of ${state.coffees.length} roasts matching your filter.`;
  } else {
    DOM.activeFilterBar.classList.add('hidden');
  }

  if (filtered.length === 0) {
    DOM.coffeeList.innerHTML = '';
    DOM.emptyState.classList.remove('hidden');
    return;
  }

  DOM.emptyState.classList.add('hidden');

  DOM.coffeeList.innerHTML = filtered.map(coffee => {
    const isFav = state.favorites.includes(coffee.id);
    const roastName = coffee.roast_level || 'Medium';
    const ratingAvg = (coffee.rating_avg || 4.8).toFixed(1);
    const reviewCount = coffee.reviews ? coffee.reviews.length : (coffee.rating_count || 1);

    return `
      <article class="coffee-card" data-id="${coffee.id}">
        <!-- Top Row -->
        <div class="card-header-row">
          <span class="origin-badge">
            <span>📍</span> ${escapeHtml(coffee.origin)}
          </span>
          <div class="card-quick-actions">
            <button type="button" class="icon-btn ${isFav ? 'active-fav' : ''}" data-fav-id="${coffee.id}" title="${isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}" aria-label="Favorite">
              ${isFav ? '❤️' : '🤍'}
            </button>
            <button type="button" class="icon-btn" data-share-id="${coffee.id}" title="Share Roast" aria-label="Share">
              🔗
            </button>
          </div>
        </div>

        <!-- Main Body -->
        <div class="card-main-body">
          <div class="card-avatar" aria-hidden="true">${coffee.image || '☕'}</div>
          <div class="card-text-group">
            <h3 class="card-title">${escapeHtml(coffee.name)}</h3>
            <div class="card-meta-chips">
              <span class="chip">⚙️ ${escapeHtml(coffee.process || 'Washed')}</span>
              <span class="chip">⛰️ ${escapeHtml(coffee.elevation || '1600m')}</span>
              <span class="chip">⚗️ ${escapeHtml(coffee.brew_method || 'Pour Over')}</span>
            </div>
            <div class="roast-meter">
              <span>Roast: ${escapeHtml(roastName)}</span>
              <div class="roast-dots" title="${roastName} roast level">${renderRoastDots(roastName)}</div>
            </div>
          </div>
        </div>

        <!-- Flavor Notes Tags -->
        <div class="card-flavor-tags">
          ${renderFlavorTags(coffee.notes)}
        </div>

        <!-- Community Rating Score -->
        <div class="card-rating-row">
          <div class="stars-display" data-rate-id="${coffee.id}" title="Community Cupping Score">
            <span>★</span>
            <span class="rating-score-num">${ratingAvg}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:500;">/5.0</span>
          </div>
          <button type="button" class="reviews-trigger-link" data-reviews-id="${coffee.id}">
            📝 ${reviewCount} ${reviewCount === 1 ? 'Cupping Review' : 'Cupping Reviews'}
          </button>
        </div>

        <!-- Footer: Votes & Actions -->
        <div class="card-footer">
          <div class="vote-tally">
            <span class="vote-num" id="vote-count-${coffee.id}">${coffee.votes || 0}</span>
            <span class="vote-label">${coffee.votes === 1 ? 'Community Vote' : 'Community Votes'}</span>
          </div>
          <div class="card-action-btns">
            <button type="button" class="btn-guide-pill" data-guide-id="${coffee.id}" title="View brew recipe">
              📖 Recipe
            </button>
            <button type="button" class="btn-vote-primary" data-vote-id="${coffee.id}">
              <span>🔥</span>
              <span>Vote</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// Voting & Rating Actions
// ==========================================================================
async function handleVote(coffeeId, button) {
  sounds.playVoteSuccess();
  button.disabled = true;

  // Particle effect
  const particle = document.createElement('span');
  particle.className = 'vote-particle';
  particle.textContent = '+1';
  button.appendChild(particle);
  setTimeout(() => particle.remove(), 900);

  // Optimistic UI update
  const coffee = state.coffees.find(c => c.id === coffeeId);
  if (coffee) {
    coffee.votes = (coffee.votes || 0) + 1;
    const countEl = document.querySelector(`#vote-count-${coffeeId}`);
    if (countEl) countEl.textContent = coffee.votes;
    updateStats();
  }

  if (!state.isOfflineMode) {
    try {
      const res = await fetch(`/api/coffees/${coffeeId}/vote`, { method: 'POST' });
      if (!res.ok) throw new Error('Vote API failed');
      const updated = await res.json();
      if (coffee) coffee.votes = updated.votes;
    } catch {
      saveOfflineData();
    }
  } else {
    saveOfflineData();
  }

  setTimeout(() => {
    button.disabled = false;
  }, 400);

  showToast(`Voted for ${coffee ? coffee.name : 'Coffee'}! 🔥`);
}

function handleFavorite(coffeeId) {
  sounds.playClick();
  const idx = state.favorites.indexOf(coffeeId);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showToast('Removed from your coffee wishlist.');
  } else {
    state.favorites.push(coffeeId);
    showToast('Saved to your coffee wishlist! ❤️');
  }
  localStorage.setItem('beancraft_favorites', JSON.stringify(state.favorites));
  updateFavBadge();
  renderCoffees();
}

function handleShare(coffeeId) {
  sounds.playClick();
  const coffee = state.coffees.find(c => c.id === coffeeId);
  if (!coffee) return;

  const shareText = `☕ Check out ${coffee.name} (${coffee.origin}) - ${coffee.notes}! Rated ${coffee.rating_avg || 5.0}★ on BeanCraft.`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('Coffee summary copied to clipboard! 📋');
    }).catch(() => {
      showToast('Shared: ' + coffee.name);
    });
  } else {
    showToast('Shared: ' + coffee.name);
  }
}

// ==========================================================================
// Cupping Reviews & Tasting Notes Modal
// ==========================================================================
async function openReviewsModal(coffeeId) {
  sounds.playClick();
  const coffee = state.coffees.find(c => c.id === coffeeId);
  if (!coffee) return;

  DOM.reviewCoffeeId.value = coffee.id;
  DOM.reviewsModalTitle.textContent = `${coffee.name}`;
  DOM.reviewsModalSub.textContent = `${coffee.origin} • ${coffee.process} • ${coffee.roast_level} Roast`;
  DOM.reviewModalIcon.textContent = coffee.image || '☕';

  DOM.reviewCoffeeInfo.innerHTML = `
    <div style="font-size:2rem;">${coffee.image || '☕'}</div>
    <div>
      <div style="font-weight:700; font-size:1.05rem;">${escapeHtml(coffee.name)}</div>
      <div style="font-size:0.8rem; color:var(--accent-gold); font-weight:600;">Flavor Profile: ${escapeHtml(coffee.notes)}</div>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Elevation: ${escapeHtml(coffee.elevation)} • Best Brew: ${escapeHtml(coffee.brew_method)}</div>
    </div>
  `;

  // Fetch reviews if available
  let reviews = coffee.reviews || [];
  if (!state.isOfflineMode) {
    try {
      const res = await fetch(`/api/coffees/${coffeeId}/reviews`);
      if (res.ok) {
        reviews = await res.json();
        coffee.reviews = reviews;
      }
    } catch {}
  }

  renderReviewsList(reviews);
  openModal('reviews-modal');
}

function renderReviewsList(reviews) {
  DOM.reviewsCountNum.textContent = reviews.length;
  if (!reviews || reviews.length === 0) {
    DOM.reviewsListContainer.innerHTML = '<div class="empty-reviews">No cupping notes yet. Be the first to share your tasting impression!</div>';
    return;
  }

  DOM.reviewsListContainer.innerHTML = reviews.map(r => `
    <div class="review-item">
      <div class="review-item-header">
        <span class="review-author-name">👤 ${escapeHtml(r.author)}</span>
        <span class="review-stars">${'★'.repeat(r.rating || 5)}</span>
      </div>
      <p class="review-text">“${escapeHtml(r.notes)}”</p>
      <div class="review-cupping-meters">
        <span>Acidity: ${r.acidity_score || 4}/5</span>
        <span>•</span>
        <span>Body: ${r.body_score || 4}/5</span>
        <span>•</span>
        <span>Sweetness: ${r.sweetness_score || 4}/5</span>
      </div>
    </div>
  `).join('');
}

async function handleReviewSubmit(e) {
  e.preventDefault();
  sounds.playClick();
  const coffeeId = Number(DOM.reviewCoffeeId.value);
  const author = DOM.addReviewForm.querySelector('#review-author').value.trim();
  const rating = Number(DOM.reviewRatingValue.value) || 5;
  const notes = DOM.addReviewForm.querySelector('#review-notes-text').value.trim();
  const acidity = Number(DOM.sliderAcidity.value) || 4;
  const body = Number(DOM.sliderBody.value) || 4;
  const sweetness = Number(DOM.sliderSweetness.value) || 4;

  if (!author || !notes) return;

  const newReview = {
    id: Date.now(),
    coffee_id: coffeeId,
    author,
    rating,
    notes,
    acidity_score: acidity,
    body_score: body,
    sweetness_score: sweetness,
    created_at: new Date().toISOString()
  };

  const coffee = state.coffees.find(c => c.id === coffeeId);
  if (coffee) {
    if (!coffee.reviews) coffee.reviews = [];
    coffee.reviews.unshift(newReview);
    // Recalculate rating
    const count = coffee.reviews.length;
    coffee.rating_count = count;
    coffee.rating_avg = Number((coffee.reviews.reduce((a, r) => a + r.rating, 0) / count).toFixed(1));
    renderReviewsList(coffee.reviews);
    renderCoffees();
    updateStats();
  }

  if (!state.isOfflineMode) {
    try {
      await fetch(`/api/coffees/${coffeeId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
    } catch {
      saveOfflineData();
    }
  } else {
    saveOfflineData();
  }

  DOM.addReviewForm.reset();
  DOM.reviewRatingValue.value = '5';
  updateStarRatingVisual(5);
  showToast('Tasting review posted successfully! 📝');
}

function updateStarRatingVisual(rating) {
  const starBtns = DOM.reviewStarRating.querySelectorAll('.star-btn');
  starBtns.forEach(btn => {
    const starNum = Number(btn.dataset.star);
    if (starNum <= rating) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ==========================================================================
// Brew Recipe Guide Modal
// ==========================================================================
function openBrewGuideModal(coffeeId) {
  sounds.playClick();
  const coffee = state.coffees.find(c => c.id === coffeeId);
  if (!coffee) return;

  const brewMethod = coffee.brew_method || 'V60 Pour Over';
  const content = document.querySelector('#brew-guide-content');
  const modalSub = document.querySelector('#brew-guide-sub');

  modalSub.textContent = `${coffee.name} • ${brewMethod}`;

  content.innerHTML = `
    <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:1.25rem; margin-bottom:1.2rem;">
      <div style="font-size:1.15rem; font-family:var(--font-serif); font-weight:700; margin-bottom:0.4rem;">
        Recommended Parameters for ${escapeHtml(coffee.name)}
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.85rem; margin-top:0.75rem;">
        <div><strong style="color:var(--accent-gold);">Method:</strong> ${escapeHtml(brewMethod)}</div>
        <div><strong style="color:var(--accent-gold);">Dose:</strong> 18g coffee</div>
        <div><strong style="color:var(--accent-gold);">Water Yield:</strong> 288g (1:16 ratio)</div>
        <div><strong style="color:var(--accent-gold);">Water Temp:</strong> ${coffee.roast_level === 'Light' ? '94°C (201°F)' : '91°C (196°F)'}</div>
        <div><strong style="color:var(--accent-gold);">Grind Size:</strong> ${brewMethod.includes('Espresso') ? 'Fine' : brewMethod.includes('French') ? 'Coarse' : 'Medium-Fine'}</div>
        <div><strong style="color:var(--accent-gold);">Target Time:</strong> 3:00 min</div>
      </div>
    </div>

    <div style="font-size:0.9rem; line-height:1.6; color:var(--text-secondary);">
      <h4 style="color:var(--text-primary); margin-bottom:0.4rem;">Step-by-step extraction:</h4>
      <ol style="padding-left:1.2rem; display:flex; flex-direction:column; gap:0.4rem;">
        <li>Rinse paper filter with hot water and discard rinse water.</li>
        <li>Add 18g ground coffee, make a gentle well in the center.</li>
        <li><strong>0:00 - 0:45:</strong> Pour 50g water for bloom. Swirl gently to saturate.</li>
        <li><strong>0:45 - 1:45:</strong> Pour steadily in spirals up to 288g.</li>
        <li><strong>1:45 - 3:00:</strong> Allow gentle drawdown. Swirl once, let coffee bed settle flat.</li>
        <li>Serve at ~65°C to taste delicate floral notes: <em>${escapeHtml(coffee.notes)}</em>.</li>
      </ol>
    </div>

    <div style="margin-top:1.5rem; text-align:center;">
      <button type="button" class="btn-primary" id="guide-open-timer-btn" style="width:100%;">
        ⏱️ Open in Barista Brew Timer
      </button>
    </div>
  `;

  content.querySelector('#guide-open-timer-btn').addEventListener('click', () => {
    closeModal('brew-guide-modal');
    openModal('brew-lab-modal');
  });

  openModal('brew-guide-modal');
}

// ==========================================================================
// Add Roast Form Submission
// ==========================================================================
async function handleAddRoastSubmit(e) {
  e.preventDefault();
  sounds.playClick();

  const name = document.querySelector('#roast-name').value.trim();
  const origin = document.querySelector('#roast-origin').value.trim();
  const category = document.querySelector('#roast-category').value;
  const roast_level = document.querySelector('#roast-level').value;
  const process = document.querySelector('#roast-process').value;
  const elevation = document.querySelector('#roast-elevation').value.trim() || '1800m';
  const brew_method = document.querySelector('#roast-brew').value;
  const notes = document.querySelector('#roast-notes').value.trim();
  const selectedEmoji = document.querySelector('input[name="roast-emoji"]:checked')?.value || '☕';

  if (!name || !origin || !notes) return;

  const newCoffee = {
    id: Date.now(),
    name,
    origin,
    category,
    roast_level,
    process,
    elevation,
    brew_method,
    notes,
    image: selectedEmoji,
    rating_avg: 5.0,
    rating_count: 1,
    votes: 1,
    reviews: []
  };

  state.coffees.unshift(newCoffee);
  renderCoffees();
  updateStats();

  if (!state.isOfflineMode) {
    try {
      const res = await fetch('/api/coffees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCoffee)
      });
      if (res.ok) {
        const saved = await res.json();
        newCoffee.id = saved.id;
      }
    } catch {
      saveOfflineData();
    }
  } else {
    saveOfflineData();
  }

  DOM.addRoastForm.reset();
  closeModal('add-roast-modal');
  showToast(`Added "${name}" to community board! ☕`);
}

// ==========================================================================
// Barista Brew Lab Timer & Golden Ratio Engine
// ==========================================================================
const TIMER_PRESETS = {
  v60: {
    name: 'V60 Pour Over',
    total: 180,
    stages: [
      { time: 45, name: 'Bloom Phase', target: 'Pour ~50g water & swirl' },
      { time: 60, name: '1st Spiral Pour', target: 'Pour to ~160g water' },
      { time: 45, name: '2nd Center Pour', target: 'Pour to ~288g target' },
      { time: 30, name: 'Final Drawdown', target: 'Swirl server & enjoy' }
    ]
  },
  aeropress: {
    name: 'AeroPress Inverted',
    total: 120,
    stages: [
      { time: 30, name: 'Pour & Stir', target: 'Pour 220g water & stir 10s' },
      { time: 60, name: 'Steep Phase', target: 'Attach cap & rinsed filter' },
      { time: 30, name: 'Plunge Draw', target: 'Flip & plunge gently for 30s' }
    ]
  },
  chemex: {
    name: 'Chemex Clean Body',
    total: 240,
    stages: [
      { time: 45, name: 'Bloom Phase', target: 'Pour ~60g water' },
      { time: 75, name: 'Main Concentric Pour', target: 'Pour up to ~300g' },
      { time: 60, name: 'Secondary Pour', target: 'Fill up to 450g' },
      { time: 60, name: 'Drawdown Filter', target: 'Let complete drawdown' }
    ]
  },
  frenchpress: {
    name: 'French Press Immersion',
    total: 270,
    stages: [
      { time: 60, name: 'Pour & Saturate', target: 'Pour 450g near-boiling water' },
      { time: 180, name: 'Immersion Steep', target: 'Place lid gently on top' },
      { time: 30, name: 'Break Crust & Plunge', target: 'Scoop foam & press slowly' }
    ]
  },
  espresso: {
    name: 'Espresso Double Shot',
    total: 30,
    stages: [
      { time: 8, name: 'Pre-infusion', target: 'Gentle low-pressure wetting' },
      { time: 22, name: 'Extraction Pull', target: 'Yield 36g espresso at 9 bar' }
    ]
  },
  coldbrew: {
    name: 'Cold Brew Flash Guide',
    total: 60,
    stages: [
      { time: 60, name: 'Cold Brew Guide', target: '1:8 ratio, steep 16h refrigerated' }
    ]
  }
};

function initTimerPreset(presetKey) {
  const preset = TIMER_PRESETS[presetKey] || TIMER_PRESETS.v60;
  state.timerState.preset = presetKey;
  state.timerState.totalSeconds = preset.total;
  state.timerState.currentSeconds = preset.total;
  state.timerState.currentStageIndex = 0;
  state.timerState.isRunning = false;
  clearInterval(state.timerState.intervalId);

  DOM.timerBtnText.textContent = '▶ Start Brew';
  updateTimerUI();
}

function updateTimerUI() {
  const preset = TIMER_PRESETS[state.timerState.preset] || TIMER_PRESETS.v60;
  const mins = Math.floor(state.timerState.currentSeconds / 60);
  const secs = state.timerState.currentSeconds % 60;
  DOM.timerCountdownDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Progress Ring Offset: circumference 596.9
  const progressRatio = state.timerState.currentSeconds / state.timerState.totalSeconds;
  const circumference = 596.9;
  DOM.timerRingFill.style.strokeDashoffset = circumference * (1 - progressRatio);

  // Stage calculation
  const elapsed = state.timerState.totalSeconds - state.timerState.currentSeconds;
  let runningSum = 0;
  let activeIndex = 0;

  for (let i = 0; i < preset.stages.length; i++) {
    runningSum += preset.stages[i].time;
    if (elapsed < runningSum || i === preset.stages.length - 1) {
      activeIndex = i;
      break;
    }
  }

  const currentStage = preset.stages[activeIndex] || preset.stages[0];
  DOM.timerStageName.textContent = currentStage.name;
  DOM.timerStageTarget.textContent = currentStage.target;

  // Render stage indicator steps
  DOM.timerStagesIndicator.innerHTML = preset.stages.map((st, i) => `
    <div class="stage-step ${i === activeIndex ? 'active' : ''}">
      <span>${i + 1}</span> ${escapeHtml(st.name)}
    </div>
  `).join('');
}

function toggleTimer() {
  sounds.playClick();
  if (state.timerState.isRunning) {
    // Pause
    clearInterval(state.timerState.intervalId);
    state.timerState.isRunning = false;
    DOM.timerBtnText.textContent = '▶ Resume';
  } else {
    // Start
    state.timerState.isRunning = true;
    DOM.timerBtnText.textContent = '⏸ Pause';

    state.timerState.intervalId = setInterval(() => {
      if (state.timerState.currentSeconds > 0) {
        state.timerState.currentSeconds -= 1;
        updateTimerUI();
        if (state.timerState.currentSeconds % 30 === 0 && state.timerState.currentSeconds > 0) {
          sounds.playDrip();
        }
      } else {
        clearInterval(state.timerState.intervalId);
        state.timerState.isRunning = false;
        DOM.timerBtnText.textContent = '↺ Brew Complete!';
        sounds.playTimerChime();
        showToast('Brew finished! Pour & enjoy your artisanal coffee. ☕');
      }
    }, 1000);
  }
}

function resetTimer() {
  sounds.playClick();
  initTimerPreset(state.timerState.preset);
}

// Ratio Calculator Engine
function calculateRatio() {
  const ratio = Number(DOM.ratioPreset.value) || 16;
  let coffeeGrams = Number(DOM.calcCoffeeGrams.value) || 18;
  const waterGrams = Math.round(coffeeGrams * ratio);

  DOM.calcWaterGrams.value = waterGrams;

  // Yield estimation (~2x coffee weight retained in grounds)
  const estimatedYield = Math.max(0, waterGrams - Math.round(coffeeGrams * 2));
  DOM.calcYieldVal.textContent = `~${estimatedYield} ml`;

  const cups = (estimatedYield / 250).toFixed(1);
  DOM.calcCupsVal.textContent = `${cups} ${cups === '1.0' ? 'Cup' : 'Cups'} (250ml size)`;

  DOM.calcBloomVal.textContent = `~${Math.round(coffeeGrams * 3)}g (3× dose)`;

  if (ratio === 2) {
    DOM.calcTempVal.textContent = '93°C (200°F) • 9 Bar Pressure';
  } else if (ratio <= 15) {
    DOM.calcTempVal.textContent = '92°C - 94°C (198°F - 201°F)';
  } else {
    DOM.calcTempVal.textContent = '94°C - 96°C (201°F - 205°F)';
  }
}

// ==========================================================================
// Modal Control Helpers
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.add('hidden');
  });
  document.body.style.overflow = '';
}

// ==========================================================================
// Export Collection as JSON
// ==========================================================================
function exportCollectionJson() {
  sounds.playClick();
  const exportPayload = {
    exportedAt: new Date().toISOString(),
    totalRoasts: state.coffees.length,
    favorites: state.favorites,
    coffees: state.coffees
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `BeanCraft-Coffee-Collection-${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('Coffee collection exported as JSON! 📥');
}

// ==========================================================================
// Event Listeners & Interactions Setup
// ==========================================================================
function initEventListeners() {
  // Theme & Sound
  DOM.themeToggleBtn.addEventListener('click', toggleTheme);
  DOM.soundToggleBtn.addEventListener('click', toggleSound);

  // Search input
  DOM.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery) {
      DOM.clearSearchBtn.classList.remove('hidden');
    } else {
      DOM.clearSearchBtn.classList.add('hidden');
    }
    renderCoffees();
  });

  DOM.clearSearchBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    state.searchQuery = '';
    DOM.clearSearchBtn.classList.add('hidden');
    renderCoffees();
    DOM.searchInput.focus();
  });

  // Category Pills
  DOM.categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      sounds.playClick();
      DOM.categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category;
      renderCoffees();
    });
  });

  // Flavor Pills Filter
  DOM.flavorPillsWrap.addEventListener('click', (e) => {
    const pill = e.target.closest('.flavor-pill');
    if (!pill) return;
    sounds.playClick();
    const flavor = pill.dataset.flavor;
    if (state.activeFlavors.has(flavor)) {
      state.activeFlavors.delete(flavor);
      pill.classList.remove('active');
    } else {
      state.activeFlavors.add(flavor);
      pill.classList.add('active');
    }
    renderCoffees();
  });

  // Origin Filter & Sort
  DOM.originSelect.addEventListener('change', (e) => {
    sounds.playClick();
    state.activeOrigin = e.target.value;
    renderCoffees();
  });

  DOM.sortSelect.addEventListener('change', (e) => {
    sounds.playClick();
    state.activeSort = e.target.value;
    renderCoffees();
  });

  // View Switcher
  DOM.viewGridBtn.addEventListener('click', () => {
    sounds.playClick();
    DOM.viewGridBtn.classList.add('active');
    DOM.viewListBtn.classList.remove('active');
    DOM.coffeeList.classList.remove('list-view');
  });

  DOM.viewListBtn.addEventListener('click', () => {
    sounds.playClick();
    DOM.viewListBtn.classList.add('active');
    DOM.viewGridBtn.classList.remove('active');
    DOM.coffeeList.classList.add('list-view');
  });

  // Reset Filters
  const resetAllFilters = () => {
    sounds.playClick();
    state.activeCategory = 'all';
    state.activeFlavors.clear();
    state.activeOrigin = 'all';
    state.searchQuery = '';
    DOM.searchInput.value = '';
    DOM.clearSearchBtn.classList.add('hidden');
    DOM.originSelect.value = 'all';
    DOM.flavorPillsWrap.querySelectorAll('.flavor-pill').forEach(p => p.classList.remove('active'));
    DOM.categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
    renderCoffees();
  };

  DOM.resetFiltersBtn?.addEventListener('click', resetAllFilters);
  document.querySelector('#empty-reset-btn')?.addEventListener('click', resetAllFilters);

  // Delegated Coffee List Clicks (Vote, Fav, Share, Reviews, Recipe, Flavor Tag)
  DOM.coffeeList.addEventListener('click', (e) => {
    const voteBtn = e.target.closest('[data-vote-id]');
    if (voteBtn) {
      handleVote(Number(voteBtn.dataset.voteId), voteBtn);
      return;
    }

    const favBtn = e.target.closest('[data-fav-id]');
    if (favBtn) {
      handleFavorite(Number(favBtn.dataset.favId));
      return;
    }

    const shareBtn = e.target.closest('[data-share-id]');
    if (shareBtn) {
      handleShare(Number(shareBtn.dataset.shareId));
      return;
    }

    const reviewsBtn = e.target.closest('[data-reviews-id]');
    if (reviewsBtn) {
      openReviewsModal(Number(reviewsBtn.dataset.reviewsId));
      return;
    }

    const rateBtn = e.target.closest('[data-rate-id]');
    if (rateBtn) {
      openReviewsModal(Number(rateBtn.dataset.rateId));
      return;
    }

    const guideBtn = e.target.closest('[data-guide-id]');
    if (guideBtn) {
      openBrewGuideModal(Number(guideBtn.dataset.guideId));
      return;
    }

    const flavorTag = e.target.closest('.flavor-tag');
    if (flavorTag) {
      sounds.playClick();
      const tagText = flavorTag.dataset.tag;
      DOM.searchInput.value = tagText;
      state.searchQuery = tagText;
      DOM.clearSearchBtn.classList.remove('hidden');
      renderCoffees();
    }
  });

  // Modal Openers
  DOM.openBrewLabBtn.addEventListener('click', () => { sounds.playClick(); openModal('brew-lab-modal'); });
  DOM.openAddRoastBtn.addEventListener('click', () => { sounds.playClick(); openModal('add-roast-modal'); });
  DOM.shortcutsBtn.addEventListener('click', () => { sounds.playClick(); openModal('shortcuts-modal'); });
  document.querySelector('#footer-brew-lab-btn')?.addEventListener('click', () => { sounds.playClick(); openModal('brew-lab-modal'); });
  document.querySelector('#footer-add-roast-btn')?.addEventListener('click', () => { sounds.playClick(); openModal('add-roast-modal'); });
  document.querySelector('#footer-shortcuts-btn')?.addEventListener('click', () => { sounds.playClick(); openModal('shortcuts-modal'); });

  // Modal Closer delegation
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-close-modal]');
    if (closeBtn) {
      sounds.playClick();
      closeModal(closeBtn.dataset.closeModal);
    }
    if (e.target.classList.contains('modal-backdrop')) {
      closeAllModals();
    }
  });

  // Forms
  DOM.addRoastForm.addEventListener('submit', handleAddRoastSubmit);
  DOM.addReviewForm.addEventListener('submit', handleReviewSubmit);

  // Star rating interactive selector in review modal
  DOM.reviewStarRating.addEventListener('click', (e) => {
    const starBtn = e.target.closest('.star-btn');
    if (!starBtn) return;
    sounds.playClick();
    const rating = Number(starBtn.dataset.star);
    DOM.reviewRatingValue.value = rating;
    updateStarRatingVisual(rating);
  });

  // Cupping sliders input
  DOM.sliderAcidity.addEventListener('input', (e) => { DOM.acidityVal.textContent = `${e.target.value} / 5`; });
  DOM.sliderBody.addEventListener('input', (e) => { DOM.bodyVal.textContent = `${e.target.value} / 5`; });
  DOM.sliderSweetness.addEventListener('input', (e) => { DOM.sweetnessVal.textContent = `${e.target.value} / 5`; });

  // Brew Lab Tabs
  document.querySelectorAll('.tab-headers .tab-btn').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      sounds.playClick();
      document.querySelectorAll('.tab-headers .tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tabBtn.classList.add('active');
      const target = document.getElementById(tabBtn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // Brew Lab Timer Controls
  DOM.timerPresetSelect.addEventListener('change', (e) => {
    sounds.playClick();
    initTimerPreset(e.target.value);
  });
  DOM.timerStartBtn.addEventListener('click', toggleTimer);
  DOM.timerResetBtn.addEventListener('click', resetTimer);

  // Golden Ratio Calculator Controls
  DOM.ratioPreset.addEventListener('change', calculateRatio);
  DOM.calcCoffeeGrams.addEventListener('input', calculateRatio);
  DOM.calcWaterGrams.addEventListener('input', () => {
    const water = Number(DOM.calcWaterGrams.value) || 288;
    const ratio = Number(DOM.ratioPreset.value) || 16;
    DOM.calcCoffeeGrams.value = (water / ratio).toFixed(1);
    calculateRatio();
  });

  // Export JSON
  DOM.exportJsonBtn.addEventListener('click', exportCollectionJson);

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
      return;
    }

    if (e.key === '/') {
      e.preventDefault();
      DOM.searchInput.focus();
    } else if (e.key === 'b' || e.key === 'B') {
      e.preventDefault();
      openModal('brew-lab-modal');
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      openModal('add-roast-modal');
    } else if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      toggleTheme();
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      toggleSound();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      const favPill = document.querySelector('[data-category="favorites"]');
      if (favPill) favPill.click();
    } else if (e.key === '?') {
      e.preventDefault();
      openModal('shortcuts-modal');
    } else if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  applyTheme(state.theme);
  DOM.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
  initTimerPreset('v60');
  calculateRatio();
  initEventListeners();
  loadCoffees();
}

init();
