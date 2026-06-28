// Footer — shared across pages, with a closing CTA band.
function Footer() {
  return (
    <footer className="ft" data-screen-label="Footer">
      <div className="container">
        <div className="ft-cta">
          <h3 className="serif">Let&rsquo;s plan something unforgettable.</h3>
          <a className="btn btn-primary" href="contact.html">Book a Tour</a>
        </div>
        <div className="ft-top">
          <div className="ft-brand">
            <img src="assets/logo-horizontal-white.png" alt="Xoco House Gallery" className="ft-mono" />
            <p className="ft-tag serif">A space where every moment comes to life.</p>
          </div>
          <div className="ft-cols">
            <div className="ft-col">
              <span className="ft-h">Explore</span>
              <a href="about.html">About Us</a>
              <a href="amenities.html">Amenities</a>
              <a href="gallery.html">Gallery</a>
            </div>
            <div className="ft-col">
              <span className="ft-h">Plan</span>
              <a href="faqs.html">FAQs</a>
              <a href="contact.html">Contact</a>
              <a href="contact.html">Book a tour</a>
            </div>
            <div className="ft-col">
              <span className="ft-h">Visit</span>
              <a href="https://maps.google.com/?q=2317+W+18th+St+Chicago+IL+60608" target="_blank" rel="noopener">2317 W. 18th St.</a>
              <a href="https://maps.google.com/?q=2317+W+18th+St+Chicago+IL+60608" target="_blank" rel="noopener">Chicago, IL 60608</a>
              <a href="tel:+13128746699">312-874-6699</a>
            </div>
          </div>
        </div>
        <div className="ft-base">
          <span>© 2026 Xoco House Gallery</span>
          <div className="ft-legal">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
          </div>
          <span>Event Gallery · Pilsen, Chicago</span>
        </div>
      </div>
      <style>{`
        .ft { background: var(--xh-black); color: var(--xh-bone); padding: 0 0 40px; }
        .ft-cta { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;
          padding: 80px 0; border-bottom: 1px solid rgba(249,248,246,0.14); }
        .ft-cta h3 { font-size: clamp(1.7rem, 3.2vw, 2.6rem); margin: 0; color: var(--xh-bone); max-width: 18ch; }
        .ft-top { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; padding: 64px 0; border-bottom: 1px solid rgba(249,248,246,0.14); }
        .ft-mono { height: 30px; margin-bottom: 22px; }
        .ft-tag { font-size: 21px; line-height: 1.3; max-width: 16ch; color: var(--xh-bone); margin: 0; }
        .ft-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .ft-col { display: flex; flex-direction: column; gap: 13px; }
        .ft-h { font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--xh-terracotta-500); margin-bottom: 4px; }
        .ft-col a { font-size: 14px; color: rgba(249,248,246,0.72); transition: color var(--dur); }
        .ft-col a:hover { color: var(--xh-bone); }
        .ft-base { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(249,248,246,0.5); padding-top: 28px; }
        .ft-legal { display: flex; gap: 24px; }
        .ft-legal a { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(249,248,246,0.5); transition: color var(--dur); }
        .ft-legal a:hover { color: rgba(249,248,246,0.85); }
        @media (max-width: 860px) { .ft-top { grid-template-columns: 1fr; gap: 40px; } .ft-cols { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </footer>
  );
}
window.Footer = Footer;
