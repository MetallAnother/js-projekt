let but1 = document.querySelector('.btn1')
let but2 = document.querySelector('.btn2')
let but3 = document.querySelector('.btn3')
let a = true

for (let index = 0; index < title.length; index++) {
    title[index].addEventListener('click', function() {
        if (!(this.classList.contains('active'))) {
            for (let index = 0; index < title.length; index++) {
                title[index].classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}