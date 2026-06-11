/* XOCO HOUSE — scroll-reveal engine (plain JS, no Babel).
   Robust + fail-safe:
   - Adds <html class="js"> and ARMS each .reveal/.reveal-img by adding `.armed`
     (the CSS hidden pre-state only applies to `.armed` elements — so if this
     script never runs, or IntersectionObserver is unsupported, NOTHING is armed
     and all content stays fully visible: no invisible-content trap, print-safe).
   - Reveals via IntersectionObserver (fires on visibility regardless of scroll-
     event timing). Elements already in/above view are revealed at hookup.
   - Safety sweep after load force-reveals anything still hidden in the viewport.
   Call window.initReveal() after React mounts; idempotent. */
(function () {
  var supported = 'IntersectionObserver' in window;
  if (!supported) return; // leave everything unarmed = fully visible
  document.documentElement.classList.add('js');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

  function hook() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var nodes = document.querySelectorAll('.reveal:not([data-rev]), .reveal-img:not([data-rev])');
    nodes.forEach(function (el) {
      el.setAttribute('data-rev', '1');
      el.classList.add('armed');
      var top = el.getBoundingClientRect().top;
      if (top < vh * 0.92) {
        // Already in / above view — reveal on the next frame so the transition plays.
        requestAnimationFrame(function () { el.classList.add('in'); });
      } else {
        observer.observe(el);
      }
    });
  }

  window.initReveal = function initReveal() {
    hook();
    setTimeout(hook, 150);
    setTimeout(hook, 500);
  };

  // Safety: never leave armed content invisible inside the viewport.
  function safety() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll('.reveal.armed:not(.in), .reveal-img.armed:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh) el.classList.add('in');
    });
  }

  window.addEventListener('load', function () { hook(); setTimeout(safety, 800); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { hook(); });
  }
})();
