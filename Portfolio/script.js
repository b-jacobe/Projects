//jquery
$(function () {
  count = -1; // start with -1
  initText = 'Software Engineer'; //set your init text here
  let wordsArray = [
    'Volleyball Player',
    'Coffee Enthusiast',
    'Marathon Runner',
    'Medium Writer',
    'Software Engineer',
  ];

  $('#word').text(initText).delay(1000);

  setInterval(function () {
    count++;
    $('#word').fadeOut(400, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(400);
    });
  }, 3000); // set interval time
});

$(document).ready(function () {
  // Navbar collapse on click
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

$(document).ready(function () {
  // Close the collapsed navbar on click outside
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $('.navbar-collapse'); // Select your navbar div
    var _opened = $navbar.hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $navbar.collapse('hide');
    }
  });
});

// Smooth scrolling
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        'swing',
        function () {
          window.location.hash = target;
        }
      );
  });
});

// Theme toggle

const lightButton = document.querySelector(".dropdown-item.light");
const darkButton = document.querySelector(".dropdown-item.dark");

lightButton.addEventListener("click", () => {
  document.body.classList.remove("dark-theme");
  document.documentElement.classList.remove("dark-theme");
  document.querySelector(".navbar").classList.remove("navbar-dark");
});

darkButton.addEventListener("click", () => {
  document.body.classList.add("dark-theme");
  document.documentElement.classList.add("dark-theme");
  document.querySelector(".navbar").classList.add("navbar-dark");
});
