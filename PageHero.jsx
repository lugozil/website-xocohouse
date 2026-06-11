// PageHero — compact hero for interior pages. Photo background + scrim + title block.
function PageHero({ eyebrow, title, sub, photo, alt }) {
  return (
    <section className="phero" data-screen-label={title}>
      <div className="phero-media">
        <img src={photo} alt={alt || title} />
        <div className="phero-scrim"></div>
      </div>
      <div className="phero-inner rise">
        <div className="eyebrow on-dark">{eyebrow}</div>
        <hr className="rule on-dark" style={{ margin: '20px auto 24px' }} />
        <h1 className="serif phero-title">{title}</h1>
        {sub ? <p className="phero-sub">{sub}</p> : null}
      </div>
      <style>{`
        .phero { position: relative; min-height: 60vh; display: flex; align-items: center; justify-content: center;
          text-align: center; color: var(--xh-bone); overflow: hidden; padding: 140px 24px 80px; }
        .phero-media { position: absolute; inset: 0; background: var(--xh-ink-800); }
        .phero-media img { width: 100%; height: 100%; object-fit: cover; }
        .phero-scrim { position: absolute; inset: 0; background:
          linear-gradient(0deg, rgba(18,16,14,0.7) 0%, rgba(18,16,14,0.4) 60%, rgba(18,16,14,0.5) 100%); pointer-events: none; }
        .phero-inner { position: relative; max-width: 760px; display: flex; flex-direction: column; align-items: center; }
        .phero-title { font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05; margin: 0; }
        .phero-sub { font-size: clamp(1rem, 1.3vw, 1.15rem); line-height: 1.7; color: rgba(249,248,246,0.88); margin: 22px 0 0; max-width: 52ch; }
      `}</style>
    </section>
  );
}
window.PageHero = PageHero;
