
var stars = document.getElementById('stars');
var moon = document.getElementById('moon');
var mountains_behind = document.getElementById('mountains_behind');
var text = document.querySelector('.title');
var btn = document.getElementById('btn');
var mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    stars.style.left = value *0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.2 + 'px';
    text.style.marginRight = value *4 + 'px';
})