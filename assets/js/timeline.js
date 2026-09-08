// Timeline enhancer: opens the linked entry on load, and lets each entry
// copy a direct link to itself. Degrades fine without JS — entries are
// plain <details> and just won't auto-open or offer a copy button.
(function () {
  var hash = window.location.hash;
  if (hash) {
    var target = document.querySelector(hash);
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
      target.scrollIntoView({ block: 'start' });
    }
  }

  document.querySelectorAll('.t-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var anchor = btn.getAttribute('data-anchor');
      var url = window.location.href.split('#')[0] + anchor;
      var entry = document.querySelector(anchor);
      if (entry) entry.open = true;

      var reset = function () {
        btn.textContent = 'Copy link to this moment';
      };
      var succeed = function () {
        btn.textContent = 'Copied';
        setTimeout(reset, 1800);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(succeed, function () {
          window.prompt('Copy this link:', url);
        });
      } else {
        window.prompt('Copy this link:', url);
      }
    });
  });
})();
