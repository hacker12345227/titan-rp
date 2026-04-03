function joinServer() {
window.location.href = "fivem://connect/your-ip";
}

// Loader
window.addEventListener("load", () => {
document.getElementById("loader").style.display = "none";
});

// Scroll animations
const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
if (top < window.innerHeight - 100) {
el.classList.add('show');
}
});
});



// Fake player counter (later vervangen met API)
let count = 0;
setInterval(() => {
if (count < 1) {
count++;
document.getElementById("players").innerText = count;
}
}, 50);
