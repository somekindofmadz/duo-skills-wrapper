var ybutton = document.querySelector('[data-test="notification-button"]')
var nbutton = document.querySelector('[data-test="notification-drawer-no-thanks-button"]')
if (ybutton !== null && nbutton !== null) {
    console.log('found buttons');
    ybutton.addEventListener('click', () => {
        window.location.href = 'https://join.duolingo.com/';
    }, false)
    nbutton.addEventListener('click', () => {
        window.location.href = 'https://join.duolingo.com/';
    }, false)
} else {
    window.location.href = 'https://join.duolingo.com/';
}