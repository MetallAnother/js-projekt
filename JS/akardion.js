let but1 = document.querySelector('.btn1')
let but2 = document.querySelector('.btn2')
let but3 = document.querySelector('.btn3')
let a = true
but1.onclick = function(){
    if(a==true){
        newDiv = document.createElement('div')
        newDiv.style.width = '400px'
        newDiv.style.heigth = '100px'
        newDiv.style.background = 'red'
        newDiv.style.marginLeft = '15px'
        newDiv.style.textAlign = 'center'
        newDiv.className = 'texst1'
        newDiv.innerHTML ="заходи"
        document.querySelector('.cont1').append(newDiv)
        a = false
    }
    else if(a==false){
        document.querySelector('.cont2').remove()
        newDiv3 = document.createElement('div')
        newDiv3.style.width = '400px'
        newDiv3.style.heigth = '100px'
        newDiv3.style.background = 'red'
        newDiv3.style.marginLeft = '15px'
        newDiv3.style.textAlign = 'center'
        newDiv3.className = 'texst1'
        newDiv3.innerHTML ="заходи"
        document.querySelector('.cont1').append(newDiv3)
        a = false
    }
}

but2.onclick = function(){
    if(a==false){
        document.querySelector('.cont1').remove()
        newDiv2 = document.createElement('div')
        newDiv2.style.width = '400px'
        newDiv2.style.heigth = '100px'
        newDiv2.style.background = 'red'
        newDiv2.style.marginLeft = '15px'
        newDiv2.style.textAlign = 'center'
        newDiv2.className = 'texst1'
        newDiv2.innerHTML ="заходи"
        document.querySelector('.cont2').append(newDiv2)
        a = false
    }
}

// but3.onclick = function(){
//     if(a==true){
//         document.querySelector('.cont2').remove()
//         newDiv3 = document.createElement('div')
//         newDiv3.style.width = '400px'
//         newDiv3.style.heigth = '100px'
//         newDiv3.style.background = 'red'
//         newDiv3.style.marginLeft = '15px'
//         newDiv3.style.textAlign = 'center'
//         newDiv3.className = 'texst1'
//         newDiv3.innerHTML ="заходи"
//         document.querySelector('.cont3').append(newDiv2)
//         a = false
//     }
// }