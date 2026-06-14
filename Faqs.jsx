// FAQs page — categorized accordion with real venue policy data.
const FAQ_DATA = [
  {
    cat: 'General',
    items: [
      ['How many guests can Xoco House Gallery accommodate?',
       'Our open floor plan seats up to 250 guests and can comfortably host up to 350 for standing receptions and cocktail events. For weddings and quinceañeras, we can accommodate up to 300 guests, subject to additional chair and table rental arrangements.'],
      ['What is required to secure a date?',
       'A deposit of 30–50% of your event total is required to reserve your date on our calendar.'],
      ['How is pricing structured?',
       'We offer a flat rate tailored to your specific event type. Contact us to receive a personalized quote.'],
    ]
  },
  {
    cat: 'Amenities',
    items: [
      ['What is included with the venue rental?',
       'Your rental includes tables, chairs, a stage, full bar area, lobby, private lounge room, one bartender per 100 guests, and post-event cleaning.'],
      ['Can we bring a DJ?',
       'You are welcome to bring your own DJ or use our house recommendation. For audiovisual production, we recommend working with a professional AV company.'],
      ['Is there a kitchen available?',
       'A prep kitchen is available for your caterer or food service team.'],
    ]
  },
  {
    cat: 'Vendors',
    items: [
      ['Can we bring outside vendors?',
       'Yes, outside vendors are welcome. We also have a preferred vendor list available upon request.'],
      ['Can we have a food truck or outdoor catering?',
       'Food trucks and outdoor catering setups are not permitted at the venue.'],
    ]
  },
  {
    cat: 'Alcohol & Security',
    items: [
      ['Can alcohol be served at our event?',
       'Alcohol may be served at your event but may not be sold. Because Xoco House Gallery is not a sales facility, no liquor license is required by the venue.'],
      ['What security is provided?',
       'House security is included with every event. You also have the option to hire your own additional security team.'],
    ]
  },
  {
    cat: 'Tech & Media',
    items: [
      ['Is WiFi available?',
       'Yes, WiFi is available throughout the venue for you and your guests.'],
      ['Can we bring our own lighting and AV?',
       'Yes, you are welcome to bring your own lighting equipment, stage additions, and AV setup. For full production, we recommend working with a professional AV company.'],
    ]
  },
  {
    cat: 'Rules & Guidelines',
    items: [
      ['Is there a noise curfew?',
       'Music and amplified sound must end by 12:00 AM. Exceptions to 1:00 AM are available — please inquire for details.'],
      ['What are the decor restrictions?',
       'For safety and venue preservation, real candles, glass bottles, and wall-nailing are not permitted. All decor must be pre-approved by our team.'],
      ['Is the venue all-ages? What is the smoking policy?',
       'Yes, Xoco House Gallery welcomes guests of all ages. Minors are not permitted access to alcohol service. Smoking is permitted in designated outdoor areas only.'],
    ]
  },
  {
    cat: 'Payments & Cancellations',
    items: [
      ['When is the full balance due?',
       'The full event balance is due 30 days prior to your event date.'],
      ['Are payment plans available?',
       'Yes, payment plans can be arranged. Contact our events team to discuss options.'],
      ['What is the cancellation policy?',
       'Cancellations must be submitted in writing. If cancelled within 30 days of signing, 50% of the deposit is refundable. Cancellations made after 30 days of signing are non-refundable.'],
    ]
  },
];

function FaqAccordion() {
  const [openKey, setOpenKey] = React.useState('0-0');
  const toggle = (key) => setOpenKey(openKey === key ? '' : key);

  return (
    <section className="section faq-sec" data-screen-label="FAQ Accordion">
      <div className="container faq-wrap">
        <div className="faq-aside">
          <div className="eyebrow">Good to Know</div>
          <hr className="rule" style={{ margin: '20px 0 24px' }} />
          <h2 className="serif section-title" style={{ maxWidth: '12ch' }}>Frequently asked questions.</h2>
          <p className="faq-lead">Still have questions? Our team is happy to walk you through every detail of your event.</p>
          <a className="btn btn-primary" href="contact.html">Ask Us Anything</a>
        </div>
        <div className="faq-list">
          {FAQ_DATA.map((group, gi) => (
            <div className="faq-group" key={group.cat}>
              <div className="faq-cat">{group.cat}</div>
              {group.items.map(([q, a], ii) => {
                const key = gi + '-' + ii;
                const isOpen = openKey === key;
                return (
                  <div className={'faq-item' + (isOpen ? ' open' : '')} key={key}>
                    <button className="faq-q" onClick={() => toggle(key)} aria-expanded={isOpen}>
                      <span className="serif">{q}</span>
                      <span className="faq-ico" aria-hidden="true"></span>
                    </button>
                    <div className="faq-a" style={{ maxHeight: isOpen ? '400px' : '0' }}>
                      <p>{a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .faq-sec { background: var(--xh-bone); }
        .faq-wrap { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 72px; align-items: start; }
        .faq-aside { position: sticky; top: 110px; }
        .faq-lead { font-size: 16px; line-height: 1.75; color: var(--fg-2); margin: 22px 0 30px; max-width: 34ch; }
        .faq-group { }
        .faq-cat { font-size: 10px; font-weight: 600; letter-spacing: 0.26em; text-transform: uppercase; color: var(--accent); padding: 24px 0 10px; border-top: 1px solid var(--border); margin-top: 4px; }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-q { width: 100%; background: none; border: 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; padding: 22px 0; cursor: pointer; }
        .faq-q span.serif { font-size: 18px; color: var(--fg); line-height: 1.3; transition: color var(--dur); }
        .faq-item:hover .faq-q span.serif { color: var(--accent); }
        .faq-ico { position: relative; width: 14px; height: 14px; flex-shrink: 0; }
        .faq-ico::before, .faq-ico::after { content:''; position: absolute; background: var(--accent); transition: transform var(--dur) var(--ease-out); }
        .faq-ico::before { left: 0; right: 0; top: 6.5px; height: 1.5px; }
        .faq-ico::after { top: 0; bottom: 0; left: 6.5px; width: 1.5px; }
        .faq-item.open .faq-ico::after { transform: scaleY(0); }
        .faq-a { overflow: hidden; transition: max-height var(--dur) var(--ease-out); }
        .faq-a p { font-size: 15.5px; line-height: 1.78; color: var(--fg-2); margin: 0 0 22px; max-width: 56ch; }
        @media (max-width: 860px) { .faq-wrap { grid-template-columns: 1fr; gap: 36px; } .faq-aside { position: static; } }
      `}</style>
    </section>
  );
}
window.FaqAccordion = FaqAccordion;
