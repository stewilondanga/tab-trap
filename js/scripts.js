var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

function closeModal() {
  modalLinks.forEach(link => {
    link.setAttribute('tabindex', -1);
  });
  let overlay = document.querySelector('.overlay');
  modal.style.opacity = 0;
  document.body.removeChild(overlay);
}
let open = document.querySelector('button[name=open]');
let close = document.querySelector('button[name=close]');
let submit = document.querySelector('button[name=submit]');
let form = document.querySelector('form');
let modal = document.querySelector('#modal');
let modalLinks = modal.querySelectorAll('.keyboardTrap');

let outsideLinks = document.querySelectorAll('a:not(.keyboardTrap)');

modal.style.opacity = 1;
modalLinks.forEach(link => {
  link.setAttribute('tabindex', 0);
});
let overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

firstModalLink = modalLinks[0];
secondModalLink = modalLinks[1];
lastModalLink = modalLinks[modalLinks.length - 1];
modalLinks.forEach((modalLink, key) => {
  modalLink.addEventListener('focus', function(e) {
    if (key == 0) {
      secondModalLink.focus()
    }
    if (key == modalLinks.length - 1) {
      firstModalLink.focus()
    }
  })
});

outsideLinks.forEach(outsideLink => {
  outsideLink.addEventListener('focus', function(e) {
    if (modal.style.opacity == '1') {
      secondModalLink.focus();
    }
  })
})

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submit.setAttribute('disabled', 'disabled');
  submit.innerHTML = 'Submitting...';
  setTimeout(function() {
    console.log('Executed');
    submit.removeAttribute('disabled');
    submit.innerHTML = 'SUBMIT';
    closeModal();
    outsideLinks[0].focus();
  }, 2000);
});
