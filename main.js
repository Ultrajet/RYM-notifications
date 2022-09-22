$(function() {
  // récupérer le username via les cookies
  chrome.cookies.get(
    {
      name: 'username',
      url: 'https://rateyourmusic.com'
    },
    cookie => {
      let string = 'https://rateyourmusic.com/~'+ cookie.value +' #allNotifications';
      $('#container').load(string, () => {
        if ($('#container').is(':empty')) {
          $('#container').html('<p>Not connected<br><a href="/account/login">https://rateyourmusic.com/account/login</a></p>');
        }
      });
    }
  );

  $('body').on('click', 'a', event => {
    // ouvrir le lien dans un nouvel onglet tout en y ajoutant l'url de RYM
    event.preventDefault();
    let href = event.currentTarget.getAttribute('href');
    let url = '';
    if (event.currentTarget.classList[0] === 'btn') {
      url = 'https://rateyourmusic.com/' + href;
    } else {
      url = 'https://rateyourmusic.com' + href;
      chrome.tabs.create({
        url: url,
        active: true,
      });
    }
    return false;
  });
});