function main() {
    var app = document.getElementById('app');
    setInterval(function() {
        app.innerHTML = generateRandomId();
    },1000);
}

function generateRandomId() {
    return '#' + Math.random().toString(36).substr(2,7);
}