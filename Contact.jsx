// Contact page — dopymes embedded form + venue info.
function ContactSection() {
  React.useEffect(() => {
    if (!document.querySelector('script[src="https://in.dopymes.com/js/form_embed.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://in.dopymes.com/js/form_embed.js';
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="section contact-sec" data-screen-label="Contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <div className="eyebrow">Plan Your Event</div>
          <hr className="rule" style={{ margin: '20px 0 26px' }} />
          <h2 className="serif section-title" style={{ maxWidth: '13ch' }}>Book a private tour.</h2>
          <p className="contact-lead">Tell us about your celebration and we&rsquo;ll be in touch to
            arrange a walkthrough of the gallery and lounge.</p>

          <dl className="contact-meta">
            <div><dt>Address</dt><dd>2317 W. 18th St.<br />Chicago, IL 60608</dd></div>
            <div><dt>Hours</dt><dd>By appointment</dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+13124690141">312-469-0141</a></dd></div>
            <div className="cm-wide"><dt>Email</dt><dd><a href="mailto:xocohousegalleryinfo@gmail.com">xocohousegalleryinfo@gmail.com</a></dd></div>
          </dl>

          <figure className="contact-photo">
            <img src="assets/photos/cocktail-bar.webp" alt="Guests gathering for cocktails at the gallery bar" />
          </figure>
        </div>

        <div className="contact-card">
          <iframe
            src="https://in.dopymes.com/widget/form/u5okQTSv5EolMvMYUWk1"
            style={{ width: '100%', height: '544px', border: 'none', borderRadius: '0px' }}
            id="inline-u5okQTSv5EolMvMYUWk1"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website form"
            data-height="544"
            data-layout-iframe-id="inline-u5okQTSv5EolMvMYUWk1"
            data-form-id="u5okQTSv5EolMvMYUWk1"
            title="Website form"
          />
        </div>
      </div>
      <style>{`
        .contact-sec { background: var(--xh-bone); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 72px; align-items: start; }
        .contact-grid > * { min-width: 0; }
        .contact-lead { font-size: 16.5px; line-height: 1.75; color: var(--fg-2); max-width: 38ch; margin: 24px 0 34px; }
        .contact-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 40px; margin: 0 0 40px; }
        .contact-meta > div { min-width: 0; }
        .contact-meta dt { font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 7px; }
        .contact-meta .cm-wide { grid-column: 1 / -1; }
        .contact-meta .cm-wide dd { font-size: 15.5px; }
        .contact-meta dd { font-size: 17px; font-family: var(--font-display); color: var(--fg); margin: 0; line-height: 1.35; }
        .contact-meta dd a { color: var(--fg); transition: color var(--dur); word-break: break-word; }
        .contact-meta dd a:hover { color: var(--accent); }
        .contact-photo { margin: 0; aspect-ratio: 16/10; overflow: hidden; background: var(--xh-sand-200); }
        .contact-photo img { width: 100%; height: 100%; object-fit: cover; }
        .contact-card { background: var(--xh-white); border: 1px solid var(--border-soft); box-shadow: var(--shadow-md); overflow: hidden; }
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 460px) { .contact-meta { gap: 22px 24px; } }
      `}</style>
    </section>
  );
}
window.ContactSection = ContactSection;
