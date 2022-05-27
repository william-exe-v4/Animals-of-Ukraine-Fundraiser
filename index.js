function copy(x) {
    navigator.clipboard.writeText("'"+x+"'");
}

document.getElementById('titletile').onclick = function() {
    location.href = './index.html';
}
document.getElementById('donate1').onclick = function() {
    window.location.hash = 'donate';
}
document.getElementById('donate2').onclick = function() {
    window.location.hash = 'donate';
}
document.getElementById('infobutton').onclick = function() {
    window.location.hash = 'info';
}
document.getElementById('webdonation').onclick = function() {
    window.open('./donate.html')
}

document.getElementById('nano').onclick = copy('nano_3mzyse9hswq8ptiptisum7xpbfq9iybh8j6u5d7nx8ngkgu8kbefge1mj8ey');
