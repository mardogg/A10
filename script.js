function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
  alert("Cookie has been set! Reload the page to see the message.");
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

document.addEventListener('DOMContentLoaded', () => {
  const cookieValue = getCookie('username');
  const messageElement = document.getElementById('message');
  if (cookieValue) {
    messageElement.textContent = `Welcome back, ${cookieValue}!`;
  } else {
    messageElement.textContent = "No cookie found. Set one using the button below.";
  }

  document.getElementById('setCookieButton').addEventListener('click', () => {
    setCookie('username', 'Marwa', 7); 
  });
});
