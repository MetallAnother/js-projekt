let a = document.querySelector(".input_width")
let b = document.querySelector(".input_height")
let c = document.querySelector(".input_color")
let but = document.querySelector(".btn")
let clear = document.querySelector(".clear")
let vid = document.querySelector(".vid")
let rotate = document.querySelector(".rotate")
let in_up = document.querySelector(".input_up")
let in_lef = document.querySelector(".input_lef")
let but_up = document.querySelector(".btn-up")
let but_lef = document.querySelector(".btn-lef")
but.onclick = function(){
    a = a.value
    b = b.value
    c = c.value
    newDiv = document.createElement("div")
    newDiv.style.width = a + "px"
    newDiv.style.height = b + "px"
    newDiv.style.backgroundColor= c;
    newDiv.className = 'din'
    document.querySelector(".div").append(newDiv)

}


clear.onclick = function(){
    document.querySelector(".div").firstChild.remove()
    isDiv=false 
}
let k = true
rotate.onclick = function(){
    if(k == true){
        document.getElementsByClassName('din')[0].style.height = b;
        document.getElementsByClassName('din')[0].style.width = a;
        k = false
    }
    else if(k == false){
        document.getElementsByClassName('din')[0].style.height = a;
        document.getElementsByClassName('din')[0].style.width = b;
        k = true
    }
}
let j = true
vid.onclick = function(){
    if(j == true){
        document.getElementsByClassName('din')[0].style.borderRadius = '60px';
        document.getElementsByClassName('div')[0].style.borderRadius = '60px';
        j = false
    }
    else if(j == false){
        document.getElementsByClassName('din')[0].style.borderRadius = '0px';
        document.getElementsByClassName('div')[0].style.borderRadius = '0px';
        j = true
    }
}


but_up.onclick = function(){
    up = in_up.value
    document.getElementsByClassName('din')[0].style.top = up+'px';
    console.log(up)
}
but_lef.onclick = function(){
    lef = in_lef.value
    document.getElementsByClassName('din')[0].style.left = lef+'px';
    console.log(lef)
}




