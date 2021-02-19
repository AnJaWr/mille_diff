$(document).ready(function () {
  var start_about = document.getElementById('about-btn'),
    end_about = document.getElementById('about_dot'),
    start_contact = document.getElementById('contact-btn'),
    end_contact = document.getElementById('contact_dot');

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
});
