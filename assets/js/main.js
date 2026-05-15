// Newsletter submit enhancer — shows an inline "Thanks!" without leaving the page.
// Falls back to a normal form POST if fetch fails or JS is disabled.
(function () {
  var form = document.querySelector('form.buttondown-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    var email = form.querySelector('input[type="email"]');
    if (!email || !email.value) return;
    e.preventDefault();
    var fd = new FormData(form);
    fetch(form.action, { method: 'POST', body: fd, mode: 'no-cors' })
      .finally(function () {
        var thanks = document.createElement('p');
        thanks.className = 'thanks';
        thanks.textContent = 'Thanks — check your inbox to confirm.';
        form.replaceWith(thanks);
      });
  });
})();