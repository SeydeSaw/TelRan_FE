// let item = document.querySelector("main")

// console.log(item.innerText)
// console.log(item.innerHTML)
//_____________________________________________________

//____________заменить h1 на h2

//item.innerHTML = "<h2>HELLO</h2>"

//____________к тегу h1 добавить тег h2, не удаляя первый

//item.innerHTML = item.innerHTML + "<h2>HELLO</h2>" //длинная запись
//item.innerHTML += "<h2>HELLO</h2>" // короткая запись
//____________________________________________________

//___________прибавить к десяти 5 
/*
let num = 10
//num = 10 + 5 (можно в ручную прописать)
num = num + 5 //длинная запись
num += 5 // короткая запись
*/
//___________________________________________________

//__________Добавить к переменной greeting добавить значени "Arsen"
/*
let greeting = "Hello"
greeting += "Arsen"
*/

//_________
/*
let num = 10
num +=1
num ++ // действуе только с прибавление 1 
*/
//___________________________________________________

//__добавить в main тег<p> сo значением из переменной, 
//не удаляя содержимое main. <p>name</p> _____________

//let main = document.querySelector("main")
//let name = "Seyde"

//main.innerHTML += `<p>${name}</p>`

//  `` - шаблонные литералы. шаблонная строка
// внутри можем записывать и строку и js переменную или выражение
// let num = 10
//`число равно ${num + 10 }` - число равно num
//_______________________________________________

//____Добавить 5 тегов <p> со значением Hello_____

// let main = document.querySelector("main")

// for (let i = 0; i < 5; i++) {
//    main.innerHTML += "<p>Hello</p>"
// }
//________________________________________________

// Добавить 5 тегов <p> со значениями от 1 до 5, 
// не удаляя содержимое main. <p>Hello 1</p> <p>Hello 2</p> ...
//Variant 1

// let main = document.querySelector("main")

// for (let i = 1; i <= 5; i++) {
//    main.innerHTML += `<p>Hello${i}</p>`
// }

//________________________________________________

// Добавить 5 тегов <p> со значениями от 1 до 5, 
// не удаляя содержимое main. <p>Hello 1</p> <p>Hello 2</p> ...
//Variant 2

// let main = document.querySelector("main")

// for (let i = 0; i < 5; i++) {
//    main.innerHTML += `<p>Hello${i + 1}</p>`
// }
//________________________________________________

//Добавить в main тег <а> , у которого ссылкой будет link, 
//а названием link_name

// let main = document.querySelector("main")

// let link = "https://google.com"
// let link_name = "Google"

// main.innerHTML += `<a href="${link}">${link_name}</a>`

//_________________________________________________

// В main добавить разметку <div>...</div>. 
/*
    .innerHTML += `
    <div>
        <h1></h1>
        <p></p>
        ...
    </div>`
    <div>
        <h1>mark</h1>
        <p>model</p>
        <p>price</p>
    </div>
*/

// let main = document.querySelector("main")
// let laptop = {
//     mark : "Acer",
//     model : "G44M",
//     price : 15000
// }

// main.innerHTML += 
// `<div>
// <h1>${laptop.mark}</h1>
// <p>${laptop.model}</p>
// <p>${laptop.price}</p>
// </div>`
//__________________________________________________
// Есть объект book. Нужно отобразить разметку <div>...</div>
/*
       <div>
//         <h1>name</h1>
//         <p>author</p>
//         <p>count</p>
//     </div>
*/

// let main = document.querySelector("main")

// let book = {
//     name : "Капитанская дочка",
//     author : "Пушкин А. С.",
//     count : 700
// }

// main.innerHTML += 
// `<div>
// <h1>${book.name}</h1>
// <p>${book.author}</p>
// <p>${book.count}</p>
// </div>`
//___________________________________________________

// Есть массив laptops [ {объектов}] . 
//Нужно отобразить разметку <div>...</div>

// let main = document.querySelector("main")

// let laptops = [
//     {
//         mark : "Acer",
//         model : "G444M",
//         price : 18000
//     },
//     {
//         mark : "Asus",
//         model : "705K",
//         price : 25000
//     },
//     {
//         mark : "HP",
//         model : "P500",
//         price : 50000
//     }
// ]

// for (let i = 0; i < laptops.length; i++) {
//    main.innerHTML += 
//    `<div class="laptop">
//    <h1 class="mark">${laptops[i].mark}</h1>
//    <p class="model">${laptops[i].model}</p>
//    <p class="price">${laptops[i].price}</p>
//    </div>`
// }
//____________________________________________________

//Если хотим выполнить действие по каждому элементу, 
// не используя цикл for

// laptops.forEach(function(laptop) {
//     main.innerHTML += 
//     `<div class="laptop">
//     <h1 class="mark">${laptop.mark}</h1>
//     <p class="model">${laptop.model}</p>
//     <p class="price">${laptop.price}</p>
//     </div>`
// })

//____________________________________________________
//есть массив let arr = [2, 4, 6, 8, 10]
//Каждому элементу массива добавить 2

//Variant 1
// let arr = [2, 4, 6, 8, 10]

// arr.forEach(function(num) {
//     console.log(num + 2)
// })
//_________

//есть массив let arr = [2, 4, 6, 8, 10]
//Каждому элементу массива добавить 2

//Variant 2
// let arr = [2, 4, 6, 8, 10]

// arr.forEach(function(num) {
//    return num + 2
// })
// console.log(arr)
//____________________________________________________
// Есть массив let names = ["Arsen", "Paul", "Ludmila", "Grisha"]
// В консоли вывести "Hello +имя" для каждого элемента массива
// Hello Arsen, Hello Paul, Hello Ludmila, Hello Grisha. forEach

// let names = ["Arsen", "Paul", "Ludmila", "Grisha"]

// names.forEach(function(name) {
//     console.log("Hello " + name)
// })
//____________________________________________________

//Есть массив объектов. 
//  Для каждого из элементов массива отобразить разметку
//  <div class="car">  
//     <h1>Mark Model</h1>
//     <p>Год выпуска: year</p>
//     <p>Цена: price</p>
//  </div>


let main = document.querySelector("main")
 let cars = [
    {
        mark : "Mercedes-Benz",
        model : "S600",
        year : "2005",
        price : 50000
    }, 
    {
        mark : "BMW",
        model : "M5",
        year : "2010",
        price : 30000
    },
    {
        mark : "VW",
        model : "Golf5",
        year : "2015",
        price : 25000
    },
    {
        mark : "Toyota",
        model : "Camry",
        year : "2015",
        price : 25000
    }
 ] 


cars.forEach(function(product) {
    main.innerHTML += 
    `<div class="cars">
    <h1 class="mark">${product.mark} ${product.model}</h1>
    <p class="year">"Год выпуска: "${product.year}</p>
    <p class="price">${product.price}</p>
    </div>`
})
