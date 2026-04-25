const clock = document.getElementById("clock");
const date = document.getElementById("date");



setInterval(function() {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

function updateDate() {
    const dateObj = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.innerHTML = dateObj.toLocaleDateString(undefined, options);
}
updateDate();
