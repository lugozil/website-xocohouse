// PageHero — compact hero for interior pages. Photo background + scrim + title block.
// Text anchored bottom-left, editorial style.
function PageHero({ eyebrow, title, sub, photo, alt }) {
  return (
    <section className="phero" data-screen-label={title}>
      <div className="phero-media">
        <img src={photo} alt={alt || title} />
        <div className="phero-scrim"></div>
      </div>
      <div className="phero-inner rise">
        <div className="eyebrow on-dark">{eyebrow}</div>
        <hr className="rule on-dark" style={{ margin: '18px 0 22px' }} />
        <h1 className="serif phero-title">{title}</h1>
        {sub ? <p className="phero-sub">{sub}</p> : null}
      </div>
      <style>{`
        .phero { position: relative; min-height: 62vh; display: flex; align-items: flex-end;
          color: var(--xh-bone); overflow: hidden; padding: 160px 0 72px; }
        .phero-media { position: absolute; inset: 0; background: var(--xh-ink-800); }
        .phero-media img { width: 100%; height: 100%; object-fit: cover; }
        .phero-scrim { position: absolute; inset: 0; pointer-events: none; background:
          linear-gradient(0deg, rgba(18,16,14,0.82) 0%, rgba(18,16,14,0.28) 52%, rgba(18,16,14,0.38) 100%),
          linear-gradient(90deg, rgba(18,16,14,0.45) 0%, rgba(18,16,14,0) 65%); }
        .phero-inner { position: relative; max-width: 820px; padding: 0 48px;
          display: flex; flex-direction: column; align-items: flex-start; }
        .phero-title { font-size: clamp(2.6rem, 5.2vw, 4.2rem); line-height: 1.04; margin: 0; }
        .phero-sub { font-size: clamp(0.95rem, 1.25vw, 1.1rem); line-height: 1.72;
          color: rgba(249,248,246,0.82); margin: 18px 0 0; max-width: 50ch; }
        @media (max-width: 640px) { .phero { padding-bottom: 52px; } .phero-inner { padding: 0 22px; } }
      `}</style>
    </section>
  );
}
window.PageHero = PageHero;
