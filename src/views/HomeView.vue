<script setup lang="ts">
import { computed, ref } from 'vue'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  poster?: string
}

interface Installation {
  code: string
  label: string
  desc: string
  media: MediaItem[]
}

const installations: Installation[] = [
  {
    code: 'A.01',
    label: 'Waben',
    desc: 'Rückzugsort. Zum Chillen, Quatschen, vielleicht auch ein bisschen Kuscheln.',
    media: [
      { type: 'video', src: '/images/IMG_5985.mp4', poster: '/images/IMG_5984.jpeg' },
      { type: 'image', src: '/images/IMG_6562.jpeg' },
      { type: 'image', src: '/images/IMG_6566.jpeg' },
      { type: 'image', src: '/images/IMG_6567.jpeg' },
      { type: 'image', src: '/images/IMG_6569.jpeg' },
      { type: 'image', src: '/images/IMG_6570.jpeg' },
      { type: 'image', src: '/images/IMG_6573.jpeg' },
      { type: 'image', src: '/images/IMG_6576.jpeg' },
      { type: 'image', src: '/images/IMG_6577.jpeg' },
      { type: 'image', src: '/images/IMG_6578.jpeg' },
      { type: 'image', src: '/images/IMG_6579.jpeg' },
      { type: 'image', src: '/images/IMG_6581.jpeg' },
      { type: 'image', src: '/images/IMG_1674.JPG' },
      { type: 'image', src: '/images/IMG_5437.jpeg' },
      { type: 'image', src: '/images/IMG_5438.jpeg' },
      { type: 'image', src: '/images/IMG_5460.jpeg' },
      { type: 'image', src: '/images/IMG_5978.jpeg' },
      { type: 'image', src: '/images/IMG_5995.jpeg' },
      { type: 'image', src: '/images/IMG_6051.jpeg' },
      { type: 'image', src: '/images/signal-2025-07-11-103610_006.jpeg' },
    ],
  },
  {
    code: 'A.02',
    label: 'Lightstrips',
    desc: 'Linienlicht für Wände, Wege, Wahnsinn.',
    media: [
      { type: 'video', src: '/images/lightstrips/IMG_0368.mp4' },
      { type: 'video', src: '/images/lightstrips/IMG_0370.mp4' },
      { type: 'video', src: '/images/lightstrips/IMG_3169.MP4' },
      { type: 'image', src: '/images/lightstrips/IMG_0309.jpeg' },
      { type: 'image', src: '/images/lightstrips/IMG_0320.jpeg' },
      { type: 'image', src: '/images/lightstrips/IMG_0321.jpeg' },
      { type: 'image', src: '/images/lightstrips/IMG_3168.JPG' },
    ],
  },
  {
    code: 'A.03',
    label: 'Spiegelsonne',
    desc: 'Reflektiert alles. Auch dich.',
    media: [
      { type: 'image', src: '/images/spiegelsonne/IMG_6216.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6215.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6212.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6211.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6205.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6201.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6200.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6199.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6198.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6193.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6192.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6190.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6178.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6177.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6176.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6175.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6174.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6048.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6047.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6046.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6045.jpeg' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6025.JPG' },
      { type: 'image', src: '/images/spiegelsonne/IMG_6024.JPG' },
      { type: 'video', src: '/images/spiegelsonne/IMG_6191.mp4' },
      { type: 'video', src: '/images/spiegelsonne/IMG_6044.mp4' },
    ],
  },
  {
    code: 'A.04',
    label: 'Ventilatoren',
    desc: 'Für den industriellen Look. Bewegung, Geräusch, Atmosphäre.',
    media: [
      { type: 'video', src: '/images/ventilator/IMG_5168%202.mp4' },
      { type: 'video', src: '/images/ventilator/IMG_5592%202.mp4' },
      { type: 'image', src: '/images/ventilator/IMG_0033%202.JPG' },
      { type: 'image', src: '/images/ventilator/IMG_0034%202.JPG' },
      { type: 'image', src: '/images/ventilator/IMG_0035%202.JPG' },
      { type: 'image', src: '/images/ventilator/IMG_5138%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5146%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5154%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5165%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5166%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5172%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5180%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5197%202.JPG' },
      { type: 'image', src: '/images/ventilator/IMG_5207%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5210%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5211%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5217%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5218%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5219%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5560%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5591%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5593%202.jpeg' },
      { type: 'image', src: '/images/ventilator/IMG_5920%202.jpeg' },
      { type: 'image', src: '/images/ventilator/camphoto_1903590565%202.jpg' },
    ],
  },
  {
    code: 'A.05',
    label: 'Kaleidoskop',
    desc: 'Für Momente, die sich vervielfachen sollen.',
    media: [
      { type: 'video', src: '/images/kaleidoskop/IMG_5198.mp4' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5175.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5177.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5178.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5179.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5199.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5212.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5213.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5214.jpeg' },
      { type: 'image', src: '/images/kaleidoskop/IMG_5215.jpeg' },
    ],
  },
  {
    code: 'A.06',
    label: 'Auspuff',
    desc: 'Auch für den industriellen Look. Fungiert als Nebelmaschine, bringt Druck und Rauch ins Spiel.',
    media: [
      { type: 'image', src: '/images/auspuff/IMG_4201%202.jpeg' },
      { type: 'image', src: '/images/auspuff/signal-2025-01-18-174553_002.jpeg' },
    ],
  },
  {
    code: 'A.07',
    label: 'Segel',
    desc: 'Stoff, Spannung, Schatten.',
    media: [
      { type: 'image', src: '/images/segel/signal-2025-07-31-142840.jpeg' },
      { type: 'image', src: '/images/segel/signal-2025-07-31-142917.jpeg' },
      { type: 'image', src: '/images/segel/signal-2025-07-31-143116.jpeg' },
      { type: 'image', src: '/images/segel/signal-2025-07-31-143158.jpeg' },
    ],
  },
  {
    code: 'A.08',
    label: 'Seelentauscher',
    desc: 'Funktionsweise wird nicht erläutert.',
    media: [{ type: 'image', src: '/images/seelentauscher/IMG_3120.JPG' }],
  },
  {
    code: 'A.09',
    label: 'Ampeln',
    desc: 'Verkehrsregelung für die Tanzfläche. Grün heißt tanzen, Rot heißt tanzen.',
    media: [],
  },
  {
    code: 'A.10',
    label: 'Halbes Auto',
    desc: 'Ein halbes Auto. Der Verbleib der anderen Hälfte ist Gegenstand eines laufenden Verfahrens.',
    media: [],
  },
]

const active = ref(0)
const activeInstallation = computed(() => installations[active.value])
const photoCount = computed(
  () => activeInstallation.value.media.filter((m) => m.type === 'image').length,
)
const videoCount = computed(
  () => activeInstallation.value.media.filter((m) => m.type === 'video').length,
)
</script>

<template>
  <div class="page-bg">
    <div class="page">
    <!-- nav -->
    <header class="site-header">
      <div class="brand">
        <svg viewBox="0 0 167 81" class="brand-logo" aria-label="TTN Logo">
          <path
            d="M58.6914 0V19.5312H39.8438V78.7109H18.8965V19.5312H0V0H58.6914Z"
            fill="currentColor"
          />
          <path
            d="M98.5352 0V19.5312H79.6875V78.7109H58.7402V19.5312H39.8438V0H98.5352Z"
            fill="currentColor"
          />
          <path
            d="M145.605 0.683594H166.553V80.2734H159.912L119.434 41.0645V79.541H98.5352V0H105.273L145.605 39.0625V0.683594Z"
            fill="currentColor"
          />
        </svg>
        <span class="brand-name">TECHNO TANZ ÜBERPRÜFUNGSVEREIN NORD E.V.</span>
      </div>
      <nav class="site-nav">
        <a href="#verein">VEREIN</a>
        <a href="#installationen">INSTALLATIONEN</a>
        <a href="#termine">TERMINE</a>
        <a href="#merch">MERCH</a>
        <a href="#impressum">IMPRESSUM</a>
        <a href="mailto:info@der-ttn.de" class="nav-cta">MITGLIED WERDEN</a>
      </nav>
    </header>

    <!-- hero -->
    <div class="hero">
      <video
        class="hero-media"
        src="/images/IMG_5985.mp4"
        poster="/images/IMG_5984.jpeg"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <div class="hero-overlay"></div>
      <div class="hero-stamp">
        <div class="stamp-top">GEPRÜFT</div>
        <div class="stamp-mid">100 dB+</div>
        <div class="stamp-bottom">KEINE MÄNGEL</div>
      </div>
      <div class="hero-content">
        <div class="hero-kicker">AKTENZEICHEN TTN-2026/BASS · ÖFFENTLICHE BEKANNTMACHUNG</div>
        <h1 class="hero-title">
          <span class="c-pink">Bass.</span> <span class="c-white">Liebe.</span>
          <span class="c-yellow">Sicherheit.</span>
        </h1>
        <div class="hero-actions">
          <a href="#merch" class="btn-primary">→ ZUM MERCH</a>
          <a href="mailto:info@der-ttn.de" class="btn-outline">ANTRAG AUF MITGLIEDSCHAFT</a>
        </div>
      </div>
    </div>

    <!-- verein -->
    <section id="verein" class="verein">
      <div class="section-marker">§ 1 — DER VEREIN</div>
      <div class="verein-body">
        <p class="verein-text">
          Gemäß Beschluss der Mitgliederversammlung wird getanzt. Der Techno Tanz
          Überprüfungsverein Nord e.V. vereint Menschen, die Soundsysteme schleppen,
          Lichtinstallationen schrauben und Räume schaffen, in denen alle sicher sind.
          Ehrenamtlich, gemeinnützig, laut.
        </p>
        <div class="satzung-quote">
          <div class="quote-label">AUS DER SATZUNG — § 2 ZWECK DES VEREINS</div>
          <div class="quote-text">
            Der Zweck des Vereins ist die Förderung von Kunst und Kultur. Der Satzungszweck wird
            insbesondere verwirklicht durch die Förderung und Organisation von Veranstaltungen im
            Bereich der elektronischen Musik. Der Fokus liegt insbesondere auf der Förderung und
            Vernetzung von regionalen Künstlern und der Schaffung eines diskriminierungsfreien
            Ortes zur kulturellen Entfaltung.
          </div>
        </div>
      </div>
    </section>

    <!-- installationen -->
    <section id="installationen" class="installationen">
      <div class="inst-header">
        <h2 class="inst-title">Anlage A — Installationen</h2>
        <span class="inst-sub">MIETBAR · MOBIL · ERPROBT</span>
      </div>
      <div class="inst-tabs" role="tablist">
        <button
          v-for="(inst, i) in installations"
          :key="inst.code"
          role="tab"
          :aria-selected="i === active"
          class="inst-tab"
          :class="{ active: i === active }"
          @click="active = i"
        >
          {{ inst.label.toUpperCase() }}
        </button>
      </div>
      <div class="inst-detail">
        <div class="inst-info">
          <div class="inst-code">{{ activeInstallation.code }}</div>
          <div class="inst-label">{{ activeInstallation.label }}</div>
          <p class="inst-desc">{{ activeInstallation.desc }}</p>
          <div class="inst-akte">
            AKTE {{ activeInstallation.code }} — BEWEISMITTEL: {{ photoCount }}
            {{ photoCount === 1 ? 'FOTO' : 'FOTOS' }}<template v-if="videoCount">
              · {{ videoCount }} {{ videoCount === 1 ? 'VIDEO' : 'VIDEOS' }}</template
            >
          </div>
        </div>
        <div v-if="activeInstallation.media.length" class="inst-gallery">
          <div v-for="m in activeInstallation.media" :key="m.src" class="gallery-cell">
            <video
              v-if="m.type === 'video'"
              :src="m.src"
              :poster="m.poster"
              autoplay
              muted
              loop
              playsinline
              controls
              preload="metadata"
            ></video>
            <img
              v-else
              :src="m.src"
              :alt="`${activeInstallation.label} — Fotodokumentation`"
              loading="lazy"
            />
          </div>
        </div>
        <div v-else class="gallery-empty">
          Fotodokumentation ausstehend. Beweismittel werden nachgereicht.
        </div>
      </div>
      <div class="inst-note">
        Hinweis: Alles mobil, alles erprobt. Wer es braucht, nimmt es. Danach geht's zurück.
      </div>
    </section>

    <!-- termine + merch -->
    <div class="split">
      <section id="termine" class="split-cell">
        <h3 class="split-title">§ 2 — Termine</h3>
        <div class="dashed-box">
          Bekanntmachung: Die nächsten Veranstaltungen befinden sich derzeit im
          Genehmigungsverfahren. Veröffentlichung erfolgt an dieser Stelle sowie auf den amtlichen
          Kanälen.
        </div>
      </section>
      <section id="merch" class="split-cell">
        <h3 class="split-title">§ 3 — Merch</h3>
        <div class="merch-grid">
          <div class="merch-card">
            <div class="merch-slot">MERCH-FOTO FOLGT</div>
            Shirt „GEPRÜFT“
          </div>
          <div class="merch-card">
            <div class="merch-slot">MERCH-FOTO FOLGT</div>
            Ohrstöpsel, amtlich
          </div>
        </div>
        <div class="merch-note">Ausgabe erfolgt gegen Nachweis der Tanzfähigkeit.</div>
      </section>
    </div>

    <!-- impressum -->
    <section id="impressum" class="impressum">
      <h3 class="imp-title">Impressum <span class="imp-sub">— ANGABEN GEMÄSS § 5 TMG</span></h3>
      <div class="imp-grid">
        <div>
          <div class="imp-label">ANSCHRIFT</div>
          Techno Tanz Überprüfungsverein Nord e.V.<br />Jungfernstieg 21<br />24103 Kiel<br />Deutschland
          <div class="imp-label spaced">KONTAKT</div>
          E-Mail: <a href="mailto:info@der-ttn.de" class="imp-mail">info@der-ttn.de</a>
        </div>
        <div>
          <div class="imp-label">VERTRETEN DURCH DEN VORSTAND</div>
          Janne Lentsch<br />Bent Müller<br />Hannes Laubach<br />Maximilian Milkereit<br />Leo
          Stitzing<br />Arne Bartelt
          <div class="imp-label spaced">V. i. S. d. P. (§ 55 ABS. 2 RSTV)</div>
          Arne Bartelt, Anschrift wie oben
        </div>
        <div>
          <div class="imp-label">REGISTEREINTRAG</div>
          Amtsgericht Kiel · VR 7675 KI
          <div class="imp-label spaced">HAFTUNGSAUSSCHLUSS</div>
          Inhalte mit größter Sorgfalt erstellt, ohne Gewähr. Für externe Links keine Haftung.
          Inhalte unterliegen deutschem Urheberrecht.
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="site-footer">
      <span>© 2025 TECHNO TANZ ÜBERPRÜFUNGSVEREIN NORD E.V. ALLE RECHTE VORBEHALTEN.</span>
      <div class="footer-links">
        <RouterLink to="/satzung">SATZUNG</RouterLink>
        <a href="#impressum">IMPRESSUM</a>
      </div>
    </footer>
    </div>
  </div>
</template>

<style scoped>
.page-bg {
  min-height: 100vh;
  background: #050505;
}
.page {
  width: 100%;
  background: #050505;
  color: #f0f0ea;
  font-family: 'IBM Plex Mono', monospace;
}

.page a {
  color: inherit;
}
.page a:hover {
  color: #eeff00;
}

/* nav */
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 18px 32px;
  border-bottom: 2px solid #ff1654;
}
.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}
.brand-logo {
  width: 52px;
  height: 25px;
  color: #ff1654;
  flex-shrink: 0;
}
.brand-name {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #9a9a90;
}
.site-nav {
  display: flex;
  gap: 24px;
  font-size: 12px;
  letter-spacing: 0.08em;
  align-items: center;
  flex-wrap: wrap;
}
.site-nav a {
  text-decoration: none;
  color: #f0f0ea;
}
.site-nav a:hover {
  color: #eeff00;
}
.site-nav a.nav-cta {
  color: #050505;
  background: #eeff00;
  padding: 7px 14px;
  font-weight: 700;
}
.site-nav a.nav-cta:hover {
  color: #050505;
  background: #f0f0ea;
}

/* hero */
.hero {
  position: relative;
  height: 620px;
  border-bottom: 2px solid #ff1654;
  overflow: hidden;
}
.hero-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.15) 35%, rgba(5, 5, 5, 0.95) 100%);
  pointer-events: none;
}
.hero-stamp {
  position: absolute;
  right: 40px;
  top: 40px;
  transform: rotate(9deg);
  border: 3px solid #eeff00;
  color: #eeff00;
  padding: 14px 20px;
  text-align: center;
  background: rgba(5, 5, 5, 0.55);
  pointer-events: none;
}
.stamp-top {
  font-size: 11px;
  letter-spacing: 0.3em;
}
.stamp-mid {
  font-family: 'Archivo Black', sans-serif;
  font-size: 24px;
  margin: 4px 0;
}
.stamp-bottom {
  font-size: 10px;
  letter-spacing: 0.2em;
}
.hero-content {
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 32px;
}
.hero-kicker {
  font-size: 12px;
  letter-spacing: 0.2em;
  color: #b5b5aa;
  margin-bottom: 14px;
}
.hero-title {
  margin: 0;
  font-family: 'Anton', sans-serif;
  font-size: clamp(48px, 10.5vw, 136px);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  font-weight: 400;
}
.c-pink {
  color: #ff1654;
}
.c-white {
  color: #f0f0ea;
}
.c-yellow {
  color: #eeff00;
}
.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 26px;
  flex-wrap: wrap;
}
.btn-primary {
  text-decoration: none;
  background: #ff1654;
  color: #050505;
  font-weight: 700;
  font-size: 13px;
  padding: 14px 26px;
  letter-spacing: 0.06em;
}
.btn-primary:hover {
  background: #eeff00;
  color: #050505;
}
.btn-outline {
  text-decoration: none;
  border: 1px solid #eeff00;
  color: #eeff00;
  font-size: 13px;
  padding: 14px 26px;
  letter-spacing: 0.06em;
  background: rgba(5, 5, 5, 0.5);
}

/* verein */
.verein {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  padding: 56px 32px;
  border-bottom: 1px solid rgba(255, 22, 84, 0.35);
}
.section-marker {
  font-size: 12px;
  letter-spacing: 0.2em;
  color: #9a9a90;
}
.verein-body {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.verein-text {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: #d8d8cc;
}
.satzung-quote {
  border-left: 2px solid #eeff00;
  padding: 16px 20px;
  background: rgba(238, 255, 0, 0.04);
}
.quote-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #eeff00;
  margin-bottom: 10px;
}
.quote-text {
  font-size: 13px;
  line-height: 1.8;
  color: #b5b5aa;
}

/* installationen */
.installationen {
  padding: 56px 32px;
  border-bottom: 1px solid rgba(255, 22, 84, 0.35);
}
.inst-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.inst-title {
  margin: 0;
  font-family: 'Archivo Black', sans-serif;
  font-size: 34px;
  text-transform: uppercase;
  color: #f0f0ea;
}
.inst-sub {
  font-size: 11px;
  color: #9a9a90;
  letter-spacing: 0.15em;
}
.inst-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.inst-tab {
  cursor: pointer;
  user-select: none;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  padding: 9px 16px;
  border: 1px solid rgba(255, 22, 84, 0.45);
  background: transparent;
  color: #f0f0ea;
  font-weight: 400;
}
.inst-tab.active {
  border-color: #eeff00;
  background: #eeff00;
  color: #050505;
  font-weight: 700;
}
.inst-detail {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}
.inst-code {
  color: #eeff00;
  font-size: 11px;
  letter-spacing: 0.2em;
}
.inst-label {
  font-family: 'Archivo Black', sans-serif;
  font-size: 26px;
  text-transform: uppercase;
  margin: 10px 0 12px;
  color: #f0f0ea;
}
.inst-desc {
  margin: 0;
  font-size: 13px;
  line-height: 1.8;
  color: #a8a89c;
}
.inst-akte {
  margin-top: 20px;
  border: 1px dashed rgba(238, 255, 0, 0.5);
  padding: 14px;
  font-size: 11px;
  line-height: 1.7;
  color: #9a9a90;
  letter-spacing: 0.08em;
}
.inst-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}
.gallery-cell {
  position: relative;
  height: 200px;
  border: 1px solid rgba(255, 22, 84, 0.35);
  background: #0a0a0a;
}
.gallery-cell img,
.gallery-cell video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gallery-empty {
  border: 1px dashed rgba(238, 255, 0, 0.5);
  padding: 40px 22px;
  font-size: 13px;
  line-height: 1.7;
  color: #b5b5aa;
  align-self: start;
}
.inst-note {
  margin-top: 20px;
  font-size: 12px;
  color: #9a9a90;
}

/* termine + merch */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: rgba(255, 22, 84, 0.35);
  border-bottom: 1px solid rgba(255, 22, 84, 0.35);
}
.split-cell {
  background: #050505;
  padding: 48px 32px;
}
.split-title {
  margin: 0 0 18px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
}
.dashed-box {
  border: 1px dashed rgba(238, 255, 0, 0.5);
  padding: 22px;
  font-size: 13px;
  line-height: 1.7;
  color: #b5b5aa;
}
.merch-grid {
  display: flex;
  gap: 14px;
}
.merch-card {
  flex: 1;
  border: 1px solid rgba(255, 22, 84, 0.5);
  padding: 14px;
  font-size: 12px;
}
.merch-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  margin-bottom: 10px;
  border: 1px dashed rgba(238, 255, 0, 0.35);
  color: #9a9a90;
  font-size: 10px;
  letter-spacing: 0.2em;
}
.merch-note {
  margin-top: 12px;
  font-size: 11px;
  color: #9a9a90;
}

/* impressum */
.impressum {
  padding: 56px 32px;
  border-bottom: 1px solid rgba(255, 22, 84, 0.35);
}
.imp-title {
  margin: 0 0 26px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  color: #f0f0ea;
}
.imp-sub {
  color: #9a9a90;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
}
.imp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  font-size: 12px;
  line-height: 1.9;
  color: #b5b5aa;
}
.imp-label {
  color: #eeff00;
  letter-spacing: 0.15em;
  margin-bottom: 8px;
}
.imp-label.spaced {
  margin: 18px 0 8px;
}
.imp-mail {
  color: #ff1654;
  text-decoration: none;
}

/* footer */
.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 26px 32px;
  font-size: 11px;
  color: #9a9a90;
  letter-spacing: 0.1em;
}
.footer-links {
  display: flex;
  gap: 22px;
}
.footer-links a {
  color: #9a9a90;
  text-decoration: none;
}
.footer-links a:hover {
  color: #eeff00;
}

/* responsive */
@media (max-width: 900px) {
  .verein {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .inst-detail {
    grid-template-columns: 1fr;
  }
  .inst-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  .split {
    grid-template-columns: 1fr;
  }
  .imp-grid {
    grid-template-columns: 1fr;
  }
  .hero {
    height: 520px;
  }
  .hero-stamp {
    right: 20px;
    top: 20px;
    padding: 10px 14px;
  }
}
@media (max-width: 560px) {
  .site-header,
  .verein,
  .installationen,
  .split-cell,
  .impressum,
  .site-footer {
    padding-left: 18px;
    padding-right: 18px;
  }
  .hero-content {
    left: 18px;
    right: 18px;
    bottom: 22px;
  }
  .inst-gallery {
    grid-template-columns: 1fr;
  }
  .merch-grid {
    flex-direction: column;
  }
}
</style>
