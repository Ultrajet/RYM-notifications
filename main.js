$(function() {
  $('#container').load('https://rateyourmusic.com/~Ultrajet #allNotifications');
  $('body').on('click', 'a', e => {
    // ouvrir le lien dans un nouvel onglet tout en y ajoutant l'url de RYM
    e.preventDefault();
    let href = e.currentTarget.getAttribute('href');
    let url = 'https://rateyourmusic.com' + href;
    chrome.tabs.create({
      url: url,
      active: true,
    });
    return false;
  });
});