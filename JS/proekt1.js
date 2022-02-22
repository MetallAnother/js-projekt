let a = document.querySelector(".input_width")
let b = document.querySelector(".input_height")
let c = document.querySelector(".input_color")
let but = document.querySelector(".btn")
let clear = document.querySelector(".clear")
let in_up = document.querySelector(".input_up")
let in_lef = document.querySelector(".input_lef")
let but_up = document.querySelector(".btn-up")
let but_lef = document.querySelector(".btn-lef")
but.onclick = function(){
    a = a.value+"px"
    b = b.value+"px"
    c = c.value
    document.getElementsByClassName('din')[0].style.height = a;
    document.getElementsByClassName('din')[0].style.width = b;
    document.getElementsByClassName('din')[0].style.background = c;
}


clear.onclick = function(){
    document.getElementsByClassName('din')[0].style.height = 0;
    document.getElementsByClassName('din')[0].style.width = 0;
    document.getElementsByClassName('din')[0].style.background = 0;
}


but_up.onclick = function(){
    up = in_up.value
    document.getElementsByClassName('din')[0].style.top = up+'px';
    console.log(up)
}
but_lef.onclick = function(){
    lef = in_lef.value
    document.getElementsByClassName('din')[0].style.left = lef+'px';
    console.log(up)
}

