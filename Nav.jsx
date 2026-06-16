// Nav — shared top navigation across all pages.
// Transparent over a dark hero; solidifies to bone on scroll (or always solid on light pages via `solid`).
const NAV_LINKS = [
  ['Home', 'index.html'],
  ['About Us', 'about.html'],
  ['Amenities', 'amenities.html'],
  ['Gallery', 'gallery.html'],
  ['FAQs', 'faqs.html'],
  ['Contact', 'contact.html'],
];

function Nav({ active, solid }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const isSolid = solid || scrolled;

  return (
    <header className={'nav' + (isSolid ? ' nav-solid' : '')} data-screen-label="Nav">
      <div className="nav-inner">
        <a className="nav-logo" href="index.html" aria-label="Xoco House Gallery — Home">
          <img className="logo-light" src="assets/logo-horizontal-white.png" alt="Xoco House Gallery" />
          <img className="logo-dark" src="assets/logo-horizontal-black.png" alt="Xoco House Gallery" />
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className={active === href ? 'active' : ''}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="contact.html">Book a Tour</a>
        <button className={'nav-burger' + (open ? ' x' : '')} aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={'nav-drawer' + (open ? ' open' : '')}>
        {NAV_LINKS.map(([label, href]) => (
          <a key={href} href={href} className={active === href ? 'active' : ''}>{label}</a>
        ))}
        <a className="btn btn-primary" href="contact.html" style={{ marginTop: 8, justifyContent: 'center' }}>Book a Tour</a>
      </div>

      <style>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: background var(--dur) var(--ease-out), box-shadow var(--dur), border-color var(--dur);
          border-bottom: 1px solid transparent; }
        .nav-solid { background: rgba(249,248,246,0.94); backdrop-filter: blur(10px); border-bottom-color: var(--border-soft); }
        .nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 48px; height: 80px; display: flex; align-items: center; gap: 32px; }
        .nav-logo { display: flex; align-items: center; position: relative; }
        .nav-logo img { height: 26px; }
        .nav-logo .logo-dark { display: none; }
        .nav-solid .nav-logo .logo-light { display: none; }
        .nav-solid .nav-logo .logo-dark { display: block; }
        .nav-links { display: flex; gap: 34px; margin-left: auto; }
        .nav-links a { font-size: 11.5px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; position: relative; transition: color var(--dur); padding: 4px 0; }
        .nav:not(.nav-solid) .nav-links a { color: rgba(249,248,246,0.9); }
        .nav-solid .nav-links a { color: var(--xh-ink-700); }
        .nav-links a::after { content:''; position:absolute; left:0; right:0; bottom:-4px; height:1px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform var(--dur) var(--ease-out); }
        .nav-links a:hover::after, .nav-links a.active::after { transform: scaleX(1); }
        .nav-links a.active { color: var(--accent); }
        .nav:not(.nav-solid) .nav-links a.active { color: var(--xh-bone); }
        .nav-cta { padding: 11px 22px; }
        .nav:not(.nav-solid) .nav-cta { background: var(--xh-bone); color: var(--xh-ink-900); }
        .nav:not(.nav-solid) .nav-cta:hover { background: var(--xh-white); }
        .nav-burger { display: none; flex-direction: column; gap: 5px; background: none; border: 0; padding: 8px; margin-left: auto; }
        .nav-burger span { width: 24px; height: 1.5px; display: block; transition: transform var(--dur), opacity var(--dur), background var(--dur); }
        .nav:not(.nav-solid) .nav-burger span { background: var(--xh-bone); }
        .nav-solid .nav-burger span { background: var(--xh-ink-900); }
        .nav-burger.x span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-burger.x span:nth-child(2) { opacity: 0; }
        .nav-burger.x span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        .nav-drawer { display: none; }

        @media (max-width: 920px) {
          .nav-links, .nav-cta { display: none; }
          .nav-burger { display: flex; }
          .nav { background: rgba(249,248,246,0.94); backdrop-filter: blur(10px); border-bottom-color: var(--border-soft); }
          .nav .nav-burger span { background: var(--xh-ink-900); }
          .nav .nav-logo .logo-light { display: none; }
          .nav .nav-logo .logo-dark { display: block; }
          .nav-drawer { display: flex; flex-direction: column; gap: 4px; overflow: hidden; max-height: 0;
            background: var(--xh-bone); border-bottom: 1px solid var(--border-soft);
            padding: 0 32px; transition: max-height var(--dur) var(--ease-out), padding var(--dur); }
          .nav-drawer.open { max-height: 420px; padding: 14px 32px 24px; }
          .nav-drawer a { font-size: 13px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--xh-ink-700); padding: 13px 0; border-bottom: 1px solid var(--border-soft); }
          .nav-drawer a.active { color: var(--accent); }
          .nav-drawer a.btn { border-bottom: 0; color: var(--xh-bone); }
        }
      `}</style>
    </header>
  );
}
// On mobile the logo must be dark since the bar is always solid there.
window.Nav = Nav;
