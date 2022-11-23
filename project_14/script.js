
// let main = document.querySelector("main")
//main.className = "block" поменять имя класса
//main.classList.add("active") //добавить класс, не удаляя передыдущий
//____________________Задача 1______________________________

// let main = document.querySelector("main")
// //1. При нажатии на кнопку добавить класс

// let buttonAdd = document.querySelector(".add")

// buttonAdd.addEventListener("click", function() {
//     main.classList.add("active")
// })

// //____________
// //2. При нажатии на вторую кнопку удалять новый класс

// let buttonRemove = document.querySelector(".remove")

// buttonRemove.addEventListener("click", function() {
//     main.classList.remove("active")
// })

//____________________Задача 2______________________________
//при нажатии на кнопку добавлять или удалять класс active
//если класс есть, то удаляет. Если класса нет, то добавляется.
// let main = document.querySelector("main")

// let button = document.querySelector(".btn")
// button.addEventListener("click", function() {
//     main.classList.toggle("active")
// })

//____________________Задача 3__________________________________
//Создать 10 тегов p с числами от 1 до 10 с помощью forEach(). 
//При нажатии на любой из тегов p, менять цвет текста на красный
//При еще одном нажатии, возвращать обратно на черный

// let main = document.querySelector("main")

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(function(num) {
//     main.innerHTML += `<p>${num}</p>`
// })

// let texts = document.querySelectorAll("p")

// texts.forEach(function(text) {
//     text.addEventListener("click", function() {
//         text.classList.toggle("red")
//     })
// })

//____________________Задача 4_____________________________________
//Есть массив todos[], надо отобразить разметку в html, 
//внутрь <div> положить тег <p> с текстом из массива.
/*
    <div class="todo">
        <p>{Вынести мусор}</p>
    </div>
    <div class="todo">
        <p>{Проверить ДЗ}</p>
    </div>
*/
// let main = document.querySelector("main")

// let todos = [
//     {
//         name : "Вынести мусор"
//     },
//     {
//         name : "Проверить ДЗ"
//     },
//     {
//         name : "Создать веб-приложение"
//     },
//     {
//         name : "Помыть посуду"
//     }
// ]

// todos.forEach(function(todo) {
//     main.innerHTML += 
//     `<div class="todo">
//     <p class="todo">${todo.name}</p>
//     </div>`
// })

// let items = document.querySelectorAll(".todo")
// console.log(items)
// items.forEach(function(item) {
//     item.addEventListener("click", function() {
//     //вариант 1:
//     //console.log(item.children[0].classList.toggle("line"))
//     console.log(item.children)  // children = это тег Р 

//     // или вариант 2: 
    
//     // let text = item.querySelector("p")
//     // text.classList.toggle("line")
        
//         //или короткая запись :

//     let text = item.querySelector("p").classList.toggle("line")
//     })
// })
//______________________________________________


// let main = document.querySelector("main")

// let todo = document.querySelector(".todo")
// let text = document.querySelector("p")

// todo.addEventListener("click", function() {
//     console.log("klik po tegu div")
// })

// text.addEventListener("click", function() {
//     console.log("klik po tegu p")
// })

// console.log(todo.children)

// //поменять текст на Hello,у дочернего элемента тега div, 
// //у которого индекс 1

// console.log(todo.children[1].innerText = "Hello")

//_________________________________________________

// С помощью forEach() создать карточки товаров из массива arr. 
// При нажатии на карточку делать ее фон красным. При втором нажатии возвращать на прежний цвет. 

// let main = document.querySelector("main")
// let arr = [
//     {
//         name : "Acer",
//         price : 50000,
//     },
//     {
//         name : "Asus",
//         price: 45000
//     },
//     {
//         name : "HP",
//         price: 60000
//     }
// ]

// arr.forEach(function(laptop) {
//     main.innerHTML += 
//     `<div class="laptops">
//     <p>Mark: ${laptop.name}</p>
//     <p>Price: ${laptop.price}</p>
//     </div>`
// })

// let items = document.querySelectorAll("div")

// items.forEach(function(item) {
//     item.addEventListener("click", function() {
//         item.classList.toggle("laptops1")
//     })
// })

//_________________________________________________