// Hero — immersive, Apple-grade. Full-bleed architecture, centered serif
// headline, minimalist twin CTAs. A slow 10s crossfade carousel between two
// live-event banners keeps the room feeling alive.
const HERO_SLIDES = [
  ['assets/photos/banner.webp', 'A celebration in full swing beneath the draped, light-strung ceiling'],
  ['assets/photos/banner-2.webp', 'The gallery dressed for a quinceañera, daylight pouring through the skylights'],
];

function Hero() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="ah" data-screen-label="Hero">
      <div className="ah-media">
        {HERO_SLIDES.map(([src, alt], i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={'ah-slide' + (i === active ? ' on' : '')}
            aria-hidden={i === active ? 'false' : 'true'}
          />
        ))}
        <div className="ah-scrim"></div>
      </div>

      <div className="ah-inner rise">
        <div className="ah-text">
          <div className="kicker on-dark">Xoco House Gallery</div>
          <h1 className="headline xl on-dark ah-title">Where art &amp;<br />celebration collide.</h1>
        </div>
        <div className="ah-actions">
          <a className="pill pill-solid" href="contact.html">Book a Tour</a>
          <a className="pill pill-glass" href="gallery.html">View the Gallery</a>
        </div>
      </div>

      <div className="ah-dots" role="tablist" aria-label="Hero images">
        {HERO_SLIDES.map(([src], i) => (
          <button
            key={src}
            className={'ah-dot' + (i === active ? ' on' : '')}
            aria-label={'Show hero image ' + (i + 1)}
            aria-selected={i === active ? 'true' : 'false'}
            onClick={() => setActive(i)}
          ></button>
        ))}
      </div>

      <a className="ah-scroll" href="#intro" aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <span className="ah-chev" aria-hidden="true"></span>
      </a>

      <style>{`
        .ah { position: relative; isolation: isolate; min-height: 100svh; display: flex; align-items: flex-end;
          color: var(--xh-bone); overflow: hidden; padding: 120px 0 100px; }
        .ah-media { position: absolute; inset: 0; background: var(--xh-ink-800); z-index: -1; }
        .ah-slide { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          opacity: 0; transform: scale(1.06); transition: opacity 1600ms var(--ease-soft), transform 11s linear; }
        .ah-slide.on { opacity: 1; transform: scale(1); }
        @media (prefers-reduced-motion: reduce) { .ah-slide { transition: opacity 600ms ease; transform: none; } .ah-slide.on { transform: none; } }
        .ah-scrim { position: absolute; inset: 0; pointer-events: none; background:
          linear-gradient(0deg, rgba(16,14,12,0.85) 0%, rgba(16,14,12,0.28) 48%, rgba(16,14,12,0.32) 100%),
          linear-gradient(90deg, rgba(16,14,12,0.5) 0%, rgba(16,14,12,0) 65%); }
        .ah-inner { position: relative; max-width: 820px; padding: 0 48px; display: flex; flex-direction: column; align-items: flex-start; gap: 22px; }
        .ah-text { display: flex; flex-direction: column; gap: 22px; }
        .ah-title { margin: 4px 0 2px; text-shadow: 0 2px 40px rgba(10,9,8,0.3); max-width: 14ch; }
        .ah-sub { max-width: 44ch; }
        .ah-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 6px; }
        .ah-dots { position: absolute; bottom: 38px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 2; }
        .ah-dot { width: 9px; height: 9px; padding: 0; border: 0; border-radius: 999px; cursor: pointer;
          background: rgba(249,248,246,0.4); transition: background var(--dur), transform var(--dur); }
        .ah-dot.on { background: var(--xh-bone); transform: scale(1.25); }
        .ah-dot:hover { background: rgba(249,248,246,0.75); }
        .ah-scroll { position: absolute; bottom: 34px; right: 40px; display: inline-flex; flex-direction: column; align-items: center; gap: 12px;
          font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(249,248,246,0.72); transition: color var(--dur); }
        .ah-scroll:hover { color: var(--xh-bone); }
        .ah-chev { width: 16px; height: 16px; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor;
          transform: rotate(45deg); animation: ahBob 2.4s var(--ease-in-out) infinite; }
        @keyframes ahBob { 0%,100% { transform: rotate(45deg) translate(0,0); } 50% { transform: rotate(45deg) translate(3px,3px); } }
        @media (prefers-reduced-motion: reduce) { .ah-chev { animation: none; } }
        @media (max-width: 900px) { .ah-scroll { display: none; } }
        @media (max-height: 680px) { .ah-scroll { display: none; } }
        @media (max-width: 600px) { .ah { padding-top: 132px; padding-bottom: 96px; align-items: stretch; } .ah-inner { justify-content: space-between; } .ah-title { font-size: 2rem; } .ah-actions { flex-wrap: nowrap; margin-top: 0; } .ah-actions .pill { padding: 13px 20px; font-size: 13px; } .ah-dots { bottom: 26px; } }
      `}</style>
    </section>
  );
}
window.Hero = Hero;
