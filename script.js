let text = document.querySelector('#text');
window.setInterval(func, 1000);

function func() {
    if (text.style.color == 'red') {
        text.style.color = 'yellow';
    } else {
        text.style.color = 'red';
    }
}
