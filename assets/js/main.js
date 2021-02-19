$(document).ready(function () {
  var start_about = document.getElementById('about-btn'),
    end_about = document.getElementById('about_dot'),
    start_contact = document.getElementById('contact-btn'),
    end_contact = document.getElementById('contact_dot'),
    SELECTOR_SCREEN_ELEMENT = document.getElementsByClassName('.screen'),
    SELECTOR_SWITCHER_TV = document.getElementById('switcher-tv'),
    isTurnedOn = true,
    timeline;

  new LeaderLine(start_about, end_about, {
    color: '#656565',
    size: 1,
    path: 'grid',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
  });

  new LeaderLine(start_contact, end_contact, {
    color: '#656565',
    size: 1,
    path: 'grid',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
  });

  $('.tip').hide();
  $('.leader-line').hide();

  $('#logotyp').on('click', function () {
    $('.tip').fadeToggle(1000);
    $('.leader-line').fadeToggle(1000);
  });

  $('.section').hide();

  $('.navigation-button').click(function () {
    $('.section').hide();
    console.log($('#' + $(this).data('id')));
    $('#' + $(this).data('id')).fadeIn(1000);
  });

  function buildTimeline() {
    timeline = new TimelineMax({
      paused: true,
    });

    timeline
      .to(SELECTOR_SCREEN_ELEMENT, 0.2, {
        width: '100vw',
        height: '2px',
        background: '#ffffff',
        ease: Power2.easeOut,
      })
      .to(SELECTOR_SCREEN_ELEMENT, 0.2, {
        width: '0',
        height: '0',
        background: '#ffffff',
      });
  }

  function toggleSwitcherTV() {
    if (isTurnedOn) {
      timeline.restart();
    }

    if (!isTurnedOn) {
      timeline.reverse();
    }

    isTurnedOn = !isTurnedOn;
  }

  // Initialize

  buildTimeline();
  // Bindings
  $(document).on('click', SELECTOR_SWITCHER_TV, function () {
    toggleSwitcherTV();
  });
})();
