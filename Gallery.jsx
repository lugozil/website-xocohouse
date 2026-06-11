// Gallery page — a dynamic, filterable editorial mosaic with varied spans,
// staggered reveal-in, hover motion, and a full-screen lightbox.
// Every photo features real celebrations and real people at Xoco House.
const GALLERY_PHOTOS = [
  ['assets/photos/wedding-dance.webp', 'A first dance on the lit floor, the band playing on', 'Weddings', 'feature'],
  ['assets/photos/quince-pink.webp', 'A quinceañera reception in blush and gold', 'Quinceañeras', 'wide'],
  ['assets/photos/mingling.webp', 'Guests mingling in the art-filled lounge', 'Socials', 'tall'],
  ['assets/photos/wedding-ceremony.webp', 'A wedding ceremony framed by the wedding party', 'Weddings', ''],
  ['assets/photos/quince-family.webp', 'A quinceañera and her family together', 'Quinceañeras', ''],
  ['assets/photos/banner.webp', 'A celebration in full swing under draped lights', 'Quinceañeras', 'wide'],
  ['assets/photos/cocktail-bar.webp', 'Cocktails and conversation at the gallery bar', 'Socials', ''],
  ['assets/photos/hall-bright.webp', 'A couple in a quiet moment amid the reception', 'Weddings', 'tall'],
  ['assets/photos/quince-dance.webp', 'Guests circling the quinceañera on the floor', 'Quinceañeras', ''],
  ['assets/photos/reception-bw.webp', 'A full reception beneath papel picado', 'Socials', 'wide'],
  ['assets/photos/quince-portrait.webp', 'A quinceañera beside her lit “15” marquee', 'Quinceañeras', ''],
  ['assets/photos/banner-2.webp', 'The gallery styled for a daytime quinceañera', 'Quinceañeras', ''],
];

const GAL_FILTERS = ['All', 'Weddings', 'Quinceañeras', 'Socials'];

function GalleryGrid() {
  const [filter, setFilter] = React.useState('All');
  const [idx, setIdx] = React.useState(-1);

  const shown = React.useMemo(
    () => GALLERY_PHOTOS.filter((p) => filter === 'All' || p[2] === filter),
    [filter]
  );
  const open = idx >= 0;

  // re-run the reveal observer whenever the filtered set changes
  React.useEffect(() => {
    const t = setTimeout(() => { if (window.initReveal) window.initReveal(); }, 30);
    return () => clearTimeout(t);
  }, [filter]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(-1);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % shown.length);
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + shown.length) % shown.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, shown.length]);

  return (
    <section className="section gal-sec" data-screen-label="Gallery Grid">
      <div className="wrap">
        <div className="gal-filters reveal" role="tablist" aria-label="Filter gallery">
          {GAL_FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f ? 'true' : 'false'}
              className={'gal-chip' + (filter === f ? ' on' : '')}
              onClick={() => { setFilter(f); setIdx(-1); }}
            >{f}</button>
          ))}
        </div>

        <div className="gal-grid">
          {shown.map(([src, alt, cat, span], i) => (
            <button
              className={'gal-cell reveal ' + (span || 'norm')}
              key={src}
              style={{ '--reveal-delay': (i % 6) * 70 + 'ms' }}
              onClick={() => setIdx(i)}
              aria-label={'View: ' + alt}
            >
              <img src={src} alt={alt} loading="lazy" />
              <span className="gal-meta">
                <span className="gal-tag">{cat}</span>
                <span className="gal-cap">{alt}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open ? (
        <div className="lb" onClick={() => setIdx(-1)}>
          <button className="lb-close" aria-label="Close" onClick={() => setIdx(-1)}>&times;</button>
          <button className="lb-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + shown.length) % shown.length); }}>&lsaquo;</button>
          <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
            <img src={shown[idx][0]} alt={shown[idx][1]} />
            <figcaption><span>{shown[idx][1]}</span><span className="lb-count">{(idx + 1) + ' / ' + shown.length}</span></figcaption>
          </figure>
          <button className="lb-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % shown.length); }}>&rsaquo;</button>
        </div>
      ) : null}

      <style>{`
        .gal-sec { background: var(--xh-bone); }
        .gal-filters { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 44px; }
        .gal-chip { font-family: var(--font-sans); font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
          padding: 11px 22px; border-radius: var(--r-pill); border: 1px solid var(--border-soft);
          background: transparent; color: var(--fg-2); cursor: pointer;
          transition: background var(--dur) var(--ease-soft), color var(--dur) var(--ease-soft), border-color var(--dur) var(--ease-soft); }
        .gal-chip:hover { border-color: var(--xh-stone-400); color: var(--fg); }
        .gal-chip.on { background: var(--accent); color: var(--xh-bone); border-color: var(--accent); }

        .gal-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 232px; gap: 16px; grid-auto-flow: dense; }
        .gal-cell { position: relative; padding: 0; border: 0; margin: 0; cursor: pointer; overflow: hidden;
          border-radius: var(--r-card); background: var(--xh-sand-200); isolation: isolate; }
        .gal-cell.feature { grid-column: span 2; grid-row: span 2; }
        .gal-cell.wide { grid-column: span 2; }
        .gal-cell.tall { grid-row: span 2; }
        .gal-cell img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 800ms var(--ease-soft); }
        .gal-cell::after { content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(0deg, rgba(18,16,14,0.72) 0%, rgba(18,16,14,0.1) 44%, rgba(18,16,14,0) 64%);
          opacity: 0; transition: opacity var(--dur) var(--ease-soft); }
        .gal-cell:hover img { transform: scale(1.06); }
        .gal-cell:hover::after { opacity: 1; }
        .gal-meta { position: absolute; left: 20px; right: 20px; bottom: 18px; z-index: 2; display: flex; flex-direction: column; gap: 7px;
          text-align: left; opacity: 0; transform: translateY(8px); transition: opacity var(--dur) var(--ease-soft), transform var(--dur) var(--ease-soft); }
        .gal-cell:hover .gal-meta { opacity: 1; transform: none; }
        .gal-tag { align-self: flex-start; font-family: var(--font-sans); font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--xh-ink-900); background: var(--xh-terracotta-500); padding: 4px 10px; border-radius: var(--r-pill); }
        .gal-cap { font-family: var(--font-sans); font-size: 13.5px; line-height: 1.45; color: var(--xh-bone); }
        @media (max-width: 860px) {
          .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 188px; gap: 12px; }
          .gal-cell.feature { grid-column: span 2; grid-row: span 2; }
          .gal-cell.wide { grid-column: span 2; grid-row: span 1; }
          .gal-cell.tall { grid-column: span 1; grid-row: span 2; }
        }
        @media (max-width: 520px) {
          .gal-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 150px; }
          .gal-cell.feature { grid-row: span 2; }
          .gal-meta { opacity: 1; transform: none; }
          .gal-cell::after { opacity: 0.55; }
        }

        .lb { position: fixed; inset: 0; z-index: 100; background: rgba(14,12,11,0.95); display: flex; align-items: center; justify-content: center; padding: 40px; animation: lbIn 240ms var(--ease-out); }
        @keyframes lbIn { from { opacity: 0; } to { opacity: 1; } }
        .lb-fig { margin: 0; max-width: 88vw; max-height: 86vh; display: flex; flex-direction: column; gap: 14px; }
        .lb-fig img { max-width: 88vw; max-height: 78vh; object-fit: contain; display: block; border-radius: 8px; }
        .lb-fig figcaption { display: flex; justify-content: space-between; gap: 20px; color: rgba(249,248,246,0.82); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
        .lb-count { color: var(--xh-terracotta-500); white-space: nowrap; }
        .lb-close { position: absolute; top: 22px; right: 28px; background: none; border: 0; color: var(--xh-bone); font-size: 38px; line-height: 1; cursor: pointer; opacity: 0.8; transition: opacity var(--dur); }
        .lb-close:hover { opacity: 1; }
        .lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: 0; color: var(--xh-bone); font-size: 56px; line-height: 1; cursor: pointer; opacity: 0.7; transition: opacity var(--dur); padding: 0 18px; }
        .lb-nav:hover { opacity: 1; }
        .lb-nav.prev { left: 8px; } .lb-nav.next { right: 8px; }
        @media (max-width: 600px) { .lb { padding: 18px; } .lb-nav { font-size: 38px; padding: 0 4px; } .lb-close { top: 14px; right: 16px; } }
      `}</style>
    </section>
  );
}
window.GalleryGrid = GalleryGrid;
