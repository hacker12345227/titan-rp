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

// Cursor glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});

// Fake player counter (later vervangen met API)
let count = 0;
setInterval(() => {
if (count < 128) {
count++;
document.getElementById("players").innerText = count;
}
}, 50);
