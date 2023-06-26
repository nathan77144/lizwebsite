function Setcookie(name, value, expireHours, path) {
    var d = new Date();
    d.setTime(d.getTime() + (expireHours*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=" + path;
}

function Checkcookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function Getcookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
            var cookie = c.substring(nameEQ.length,c.length);
            var cookieObj = JSON.parse(cookie);
            return cookieObj;
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
  var cookieAlert = document.getElementById('cookie-alert');
  var acceptBtn = document.getElementById('accept');
  var rejectBtn = document.getElementById('reject');

  if (!Checkcookie('cookie-accepted')) {
    cookieAlert.classList.add('show');
  }

  acceptBtn.onclick = function() {
    Setcookie('cookie-accepted', 'true', 24, "/");
    cookieAlert.classList.remove('show');
  }

  rejectBtn.onclick = function() {
    cookieAlert.classList.remove('show');
  }
});


console.log(Checkcookie('cookie-accepted', 'true', 24, "/"));
