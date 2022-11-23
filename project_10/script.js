// console.log(document.body)
// console.log(document.body.firstChild.childNodes)
// console.log(document.body.lastChild)
// console.log(document.querySelector("button")) //селекторы по тегу
// console.log(document.querySelector(".item")) //селекторы по классу
// console.log(document.querySelector("#green")) //селктору по id
// console.log(document.querySelector("#red"))

// console.log(document.querySelectorAll("button"))//выбор всех элементов по тегу
// console.log(document.querySelectorAll(".item"))//выбор всех элементов по классу

// document.body.addEventListener("click", function(e) {
//     // 
//     if(e.target.className == "item") {
//         console.log("кликнули по кнопке")
//     } else {
//         document.body.style.backgroundColor = "white"
//     }
// })

// let buttonRed = document.querySelector("#red")
// buttonRed.style.backgroundColor = "red"

//поменять цвет фона с белого на черный:
//variant 1 длинный способ:
// let body = document.body
// body.style.backgroundColor = "black"
//variant 2 короткий способ:
// document.body.style.backgroundColor = "black"
//_______________
// Задача: при нажатии на кнопку Ред,
// цвет фона Боди должен меняться на красный

let buttonRed = document.querySelector("#red")
// console.log(buttonRed.innerText)

buttonRed.addEventListener("click", function () {
    document.body.style.background = "red"
    
})
//________________
// Задача: при нажатии на кнопку Green,
// цвет фона Боди должен меняться на зеленый

let buttonGreen = document.querySelector("#green")

buttonGreen.addEventListener("click", function () {
    document.body.style.background = "green"
})
//_______________
// Задача: при нажатии на кнопку Img, 
// цвет фона Боди меняется на картинку
let buttonImg = document.querySelector("#img")

buttonImg.addEventListener("click", function () {
    document.body.style.background = "url(./images/pionq.jpeg)"

})

// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!
//поменять backgroundColor или BackgroundImg просто на Background.

// Задача2. Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]

let buttonRandom = document.querySelector("#random")
let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]
buttonRandom.addEventListener("click", function () {
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
})
//_________________
//Задача,поочередно вывести в консоль элементы поочередно через цикл:
// let title = document.querySelector(".title").innerText
// let text = document.querySelector(".text").innerText
// let a = document.querySelector("a").innerText

// let arr = [title, text, a]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);    
// }
//_________________
// let main = document.querySelector("main")
// console.log(main.innerText)

// Если хотим выбрать один элемент, то используем метод querySelector()
//     Мы можем использовать такие же селекторы, как и в css

//     1. Селектор по тегу - document.querySelector("tagName") - без точки, решетки и тд
//     2. Селектор по классу - document.querySelector(".className") - с точкой
//     3. Селектор по идентификатору(id) - document.querySelector("#id") - с решеткой

//Задача,поочередно вывести в консоль элементы поочередно:
//____вариант1_______найти по тэгу
// let p = document.querySelector("p")// или let text = document.querySelector("p")
// let h4 = document.querySelector("h4")//или let title = document.querySelector("h4")
// let a = document.querySelector("a")//или let link = document.querySelector("a")
// console.log(p.innerText)//тогда console.log(text.innerText)
// console.log(h4.innerText)//тогда console.log(title.innerText)
// console.log(a.innerText)//тогда console.log(link.innerText)
//  или 
//_____вариант2_________найти по классу
// let p = document.querySelector(".text")// или let text = document.querySelector(".text")
// let h4 = document.querySelector(".title")//или let title = document.querySelector(".title")
// let a = document.querySelector("a")
//___________________

let text = document.querySelector(".item-1 p")
let title = document.querySelector(".item-1 .title")
let link = document.querySelector(".item-1 a")

console.log(text.innerText)
console.log(title.innerText)
console.log(link.innerText)

let item = document.querySelector(".item-1")
let text1 = item.querySelector(".title")
console.log(text1)