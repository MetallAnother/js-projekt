let num = document.querySelector('.input_numb')
let nAme = document.querySelector('.input_name')
let but1 = document.querySelector('.but1')

but1.onclick = function(){
    num = num.value
    newDiv = document.createElement('h1')
    newDiv.className = 'card-nomer'
    newDiv.innerHTML = num
    document.querySelector('.ramka').append(newDiv)
    nAme = nAme.value
    newDiv2 = document.createElement('h1')
    newDiv2.className = 'card-name'
    newDiv2.innerHTML = nAme
    document.querySelector('.name').append(newDiv2)
}
