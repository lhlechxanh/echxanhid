function noMenu() {
  return false;
}
function disableCopyPaste(elm) {
  // Disable cut/copy/paste key events
  elm.onkeydown = interceptKeys
  // Disable right click events
  elm.oncontextmenu = function() {
    return false
  }
}
function interceptKeys(evt) {
  evt = evt||window.event // IE support
  var c = evt.keyCode
  var ctrlDown = evt.ctrlKey||evt.metaKey // Mac support
  // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
  if (ctrlDown && evt.altKey) return true
  // Check for ctrl+c, v and x
  else if (ctrlDown && c==67) return false // c
  else if (ctrlDown && c==86) return false // v
  else if (ctrlDown && c==88) return false // x
  // Otherwise allow
  return true
}
function myFunction() {
  location.href = "http://www.facebook.com";
}
      const links = document.querySelectorAll('.link');
      links.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const url = link.getAttribute('data-url');
          window.location.href = url;
        });
      });

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{document.getElementById("linkzalo").href="https://zalo.me/0865653005";}
