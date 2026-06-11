// FAQs page — accordion. Answers stay in brand voice and avoid hard specifics.
const FAQS = [
  ['What kinds of events can Xoco House host?',
   'Our gallery-style venue is suited to weddings, corporate events, cocktail parties, art exhibitions and private showings. The open, customizable floor plan adapts to both large celebrations and intimate gatherings.'],
  ['How many guests can the space accommodate?',
   'The open loft flexes from intimate gatherings to large-scale celebrations. During your tour we&rsquo;ll walk you through capacities and layout options for the specific event you have in mind.'],
  ['Can we bring our own caterer and vendors?',
   'Our versatile space welcomes a range of vendors and creative teams. Share your plans when you reach out and we&rsquo;ll help you coordinate the details.'],
  ['Is there a private space for the host or wedding party?',
   'Yes. The Private Lounge offers a quiet, stylish retreat with comfortable seating, soft lighting, a refreshment station, mirrors, private restroom access and Wi-Fi — ideal for getting ready or stepping away from the celebration.'],
  ['Can the venue be used for exhibitions, photo or film shoots?',
   'Absolutely. Bright, bone-white walls, sculptural details and abundant natural light make Xoco House a natural home for exhibitions, showings and shoots.'],
  ['Where are you located, and what about parking?',
   'We&rsquo;re in Chicago&rsquo;s Pilsen neighborhood. Reach out and our team will share directions, nearby parking and accessibility arrangements for your visit.'],
  ['How do we book or schedule a tour?',
   'The best way to experience the space is in person. Send us a note through our contact page and our events team will arrange a private walkthrough of the gallery and lounge.'],
];

function FaqAccordion() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="section faq-sec" data-screen-label="FAQ Accordion">
      <div className="container faq-wrap">
        <div className="faq-aside">
          <div className="eyebrow">Good to Know</div>
          <hr className="rule" style={{ margin: '20px 0 24px' }} />
          <h2 className="serif section-title" style={{ maxWidth: '12ch' }}>Frequently asked questions.</h2>
          <p className="faq-lead">Still curious about something? We&rsquo;re happy to help you picture
            your event in the space.</p>
          <a className="btn btn-primary" href="contact.html">Ask Us Anything</a>
        </div>
        <div className="faq-list">
          {FAQS.map(([q, a], i) => {
            const isOpen = openIdx === i;
            return (
              <div className={'faq-item' + (isOpen ? ' open' : '')} key={i}>
                <button className="faq-q" onClick={() => setOpenIdx(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className="serif" dangerouslySetInnerHTML={{ __html: q }}></span>
                  <span className="faq-ico" aria-hidden="true"></span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? '320px' : '0' }}>
                  <p dangerouslySetInnerHTML={{ __html: a }}></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .faq-sec { background: var(--xh-bone); }
        .faq-wrap { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 72px; align-items: start; }
        .faq-aside { position: sticky; top: 110px; }
        .faq-lead { font-size: 16px; line-height: 1.75; color: var(--fg-2); margin: 22px 0 30px; max-width: 34ch; }
        .faq-list { border-top: 1px solid var(--border); }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-q { width: 100%; background: none; border: 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; padding: 26px 0; cursor: pointer; }
        .faq-q span.serif { font-size: 20px; color: var(--fg); line-height: 1.3; transition: color var(--dur); }
        .faq-item:hover .faq-q span.serif { color: var(--accent); }
        .faq-ico { position: relative; width: 14px; height: 14px; flex-shrink: 0; }
        .faq-ico::before, .faq-ico::after { content:''; position: absolute; background: var(--accent); transition: transform var(--dur) var(--ease-out); }
        .faq-ico::before { left: 0; right: 0; top: 6.5px; height: 1.5px; }
        .faq-ico::after { top: 0; bottom: 0; left: 6.5px; width: 1.5px; }
        .faq-item.open .faq-ico::after { transform: scaleY(0); }
        .faq-a { overflow: hidden; transition: max-height var(--dur) var(--ease-out); }
        .faq-a p { font-size: 15.5px; line-height: 1.78; color: var(--fg-2); margin: 0 0 26px; max-width: 56ch; }
        @media (max-width: 860px) { .faq-wrap { grid-template-columns: 1fr; gap: 36px; } .faq-aside { position: static; } }
      `}</style>
    </section>
  );
}
window.FaqAccordion = FaqAccordion;
