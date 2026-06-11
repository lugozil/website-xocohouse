// Contact page — inquiry form with a success state, plus venue info.
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', type: 'Wedding', guests: '', date: '', note: '' });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const types = ['Wedding', 'Quinceañera', 'Corporate Event', 'Cocktail Party', 'Other Celebration'];

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
          {sent ? (
            <div className="contact-success rise">
              <img src="assets/monogram-simple-black.png" alt="" style={{ height: 80, margin: '0 auto 22px' }} />
              <h3 className="serif" style={{ fontSize: 30, margin: '0 0 12px' }}>Thank you, {form.name.split(' ')[0] || 'friend'}.</h3>
              <p>Your request is in. Our events team will reach out within two business days to schedule your tour.</p>
              <button className="btn btn-ghost" style={{ marginTop: 20 }} onClick={() => { setSent(false); setForm({ name: '', email: '', type: 'Wedding', guests: '', date: '', note: '' }); }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="fld"><label>Full name</label><input required value={form.name} onChange={set('name')} placeholder="Your name" /></div>
              <div className="fld-row">
                <div className="fld"><label>Email</label><input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" /></div>
                <div className="fld"><label>Event date</label><input type="text" value={form.date} onChange={set('date')} placeholder="Month / year" /></div>
              </div>
              <div className="fld-row">
                <div className="fld"><label>Event type</label>
                  <select value={form.type} onChange={set('type')}>
                    {types.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="fld"><label>Guest count</label><input value={form.guests} onChange={set('guests')} placeholder="Approximate" /></div>
              </div>
              <div className="fld"><label>Tell us more</label><textarea rows="4" value={form.note} onChange={set('note')} placeholder="A little about your event…"></textarea></div>
              <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>Request a Tour</button>
            </form>
          )}
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
        .contact-card { background: var(--xh-white); border: 1px solid var(--border-soft); box-shadow: var(--shadow-md); padding: 40px; }
        .fld { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .fld-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .fld label { font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--fg-2); }
        .fld input, .fld select, .fld textarea { font-family: var(--font-sans); font-size: 14.5px; color: var(--fg); background: var(--xh-white); border: 1px solid var(--xh-stone-300); border-radius: var(--radius-md); padding: 13px 14px; transition: border-color var(--dur), box-shadow var(--dur); }
        .fld input::placeholder, .fld textarea::placeholder { color: var(--xh-stone-400); }
        .fld input:focus, .fld select:focus, .fld textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(144,104,72,0.13); }
        .fld textarea { resize: vertical; }
        .contact-success { text-align: center; padding: 16px 0; }
        .contact-success p { font-size: 15px; line-height: 1.7; color: var(--fg-2); max-width: 38ch; margin: 0 auto; }
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 460px) {
          .contact-meta { gap: 22px 24px; }
          .contact-card { padding: 26px 22px; }
          .fld-row { grid-template-columns: 1fr; gap: 0; }
        }
      `}</style>
    </section>
  );
}
window.ContactSection = ContactSection;
