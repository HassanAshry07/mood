let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Welcome = document.querySelector('.Welcome');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value  * 4 + 'px';
    mountains3.style.top = value  * 2 + 'px';
    mountains4.style.top = value  * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3 + 'px';
    Welcome.style.fontSize = value + 'px';
    if(scrollY >= 68){
        Welcome.style.fontSize = 68 + 'px';
        Welcome.style.position = 'fixed';
        if(scrollY >= 400){
            Welcome.style.display = 'none';
        }else{
            Welcome.style.display = 'block';
        }
    }
}