$(document).ready(function () {
  var start_about = document.getElementById('about'),
    end_about = document.getElementById('about_dot'),
    start_contact = document.getElementById('contact'),
    end_contact = document.getElementById('contact_dot');

  new LeaderLine(start_about, end_about, {
    color: '#656565',
    size: 1,
    path: 'straight',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
  });

  new LeaderLine(start_contact, end_contact, {
    color: '#656565',
    size: 1,
    path: 'straight',
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
});
