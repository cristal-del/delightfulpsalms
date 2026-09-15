// Delightful Psalms — small vanilla-JS helpers (no build step, no dependencies)

document.addEventListener('DOMContentLoaded', function () {
  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Pre-check an item on the order form when arriving from a
  // "Order This" link like order.html?item=Tres%20Leches%20Cakes ----
  var params = new URLSearchParams(window.location.search);
  var item = params.get('item');

  if (item) {
    var checkbox = document.querySelector('input[name="items[]"][value="' + item + '"]');
    if (checkbox) {
      checkbox.checked = true;
    }

    var notes = document.getElementById('order-details');
    if (notes && !notes.value) {
      notes.value = "I'd like to order: " + item + '\nFlavor(s): \nSize/quantity: \n';
      notes.focus();
      // put the cursor at the end instead of selecting all the placeholder text
      var end = notes.value.length;
      notes.setSelectionRange(end, end);
    }
  }
});
