// =========================================urok-3========================================================

// zad-1

// let arr = ["a","b","c"]
// console.log(arr)

// zad-2

// let arr = ["a","b","c"]
// console.log(arr[0],arr[1],arr[2])


// zad-3

// let arr = ["a","b","c","d"]
// console.log(arr[0],"+",arr[1],",",arr[2],"+",arr[3])


// zad-4

// let arr = ["2","5","3","9"]
// console.log(arr[0]*arr[1],':',arr[2]*arr[3])


// zad-5

// let obj = {a: 1, b: 2, c: 3}
// console.log(obj['c'])


// zad-6

// let obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj['Коля'],'i',obj['Петя'])


// zad-7

// let a = {1 : 'Понеділок',2 : 'Вівторок',3 : 'Середа',4 : 'Четвер',5 : "П'ятниця",6 : 'Субота',7 : 'Неділя'}
// console.log(a['4'])


// zad-8

// let a = {'1' : 'Понеділок',2 : 'Вівторок',3 : 'Середа',4 : 'Четвер',5 : "П'ятниця",6 : 'Субота',7 : 'Неділя'}
// let day = prompt('day')
// console.log(a[day])


// zad-9

// let a = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// console.log(a[1][0])


// zad-10

// let a =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(a['js'][0])


// zad-11

// let a =  {ru:['Понділок','Вівторок','Середа','Четвер','П`ятниця','Субота','Неділя'], en:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']}
// console.log(a['ru'][0],'i',a['en'][2])


// zad-12

// let lang = prompt('ru || en')
// let day = prompt('1-7')
// let a =  {ru:{1:'Понділок',2:'Вівторок',3:'Середа',4:'Четвер',5:'П`ятниця',6:'Субота',7:'Неділя'}, en:{1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday',7:'Sunday'}}
// console.log(a[lang][day])




// =========================================urok-5========================================================


// zad-1

// let a = 1
// while(a <= 100){
//     console.log(a)
//     a++
// }


// zad-2

// let a = 11
// while(a <= 100){
//     console.log(a)
//     a++
// }


// zad-3

// for (let a = 0; a <= 100; a++) {
//     if (a % 2 == 0) {
//       console.log(a);
//     }
//   }


// zad-4

// let b = 0
// for (let a = 1; a <=100; a++){
//     b += a;
// }
// console.log(b);


// zad-5

// let a = [1, 2, 3, 4, 5]
// for(b = 0; b <= 4; b++){
//     console.log(a[b])
// }


// zad-6

// let result = 0
// let a = [1, 2, 3, 4, 5]
// for(b = 0; b <= 4; b++){
//     result += a[b];
// }
// console.log(result)


// zad-7

// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (var key in obj ){
//     console.log(key,obj[key])
// }


// zad-8

// let obj = {коля: '200', вася: '300', петя: '400'}
// for (var key in obj ){
//     console.log(key+' -зарпоата '+obj[key]+'$')
// }


// zad-9

// let a = [2, 5, 9, 15, 0, 4]
// for(b = 0; b <= 5; b++){
//     c = (a[b])
//     if(c>3 && c<10){
//         console.log(c)
//     }
// }


// zad-10
// let v = 0
// let a = [100, -50, 1, 1, 0, -40]
// for(b = 0; b <= 5; b++){
//     c = (a[b])
//     if(c>0){
//         v += c
//     }
// }
// console.log(v)


// zad-11

// let a = [1, 2, 5, 9, 4, 13, 4, 10]
// for(b = 0; b <= 5; b++){
//     c = (a[b])
//     if(c == 4){
//         console.log('Est')
//         break;
//     }
// }


// zad-12
