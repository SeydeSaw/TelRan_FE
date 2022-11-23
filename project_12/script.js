//<img src="" alt=""></img> img- тег, src- атрибут, ""- значение атрибута

//____________________Получить атрибут______________________________

//Задача , получить атрибут класс тега div
//_______varian1
// let item = document.querySelector("div a")

// let itemClass = item.getAttribute("class")
//console.log(itemClass)

//______varian2
// let itemId = item.getAttribute("id")
// let itemClass1 = document.querySelector("div").getAttribute("class")

//console.log(itemClass1)

//___________________________________________________
//Задача. Получить значение атрибута href у тега а

// let link = document.querySelector("a")
// let googleLink= link.getAttribute("href")

// console.log(googleLink)
//___________________________________________________

//Задача. Получить значение атрибута Id у тега p

// let text = document.querySelector("p")
// let textId = text.getAttribute("id")

// console.log(textId)

//____________________Добавляем атрибут и значение_______________________________

//Задача . Тегу div добавить атрибут id  со значением "item-1"

// let item = document.querySelector("div")

// item.setAttribute("id", "item-1") 
// //после добавления id , получаем его
// console.log(item.getAttribute("id"))
//_________________

// Задача. Для тега img добавить в атрибут src картинку image1.png
// Для картинки надо всегда вводить путь до нее

// let icon = document.querySelector("img")
// icon.setAttribute("src", "./images/image1.png") 

// console.log(icon.getAttribute("src"))

//_________________
//Задача. При нажатии на кнопку Button
// менять изначальную картинку на новую

// let icon = document.querySelector("img")
// icon.setAttribute("src", "./images/image1.png") 
// let button = document.querySelector("button")

// button.addEventListener("click", function () {
//     icon.setAttribute("src", "./images/image2.png")    
// })
//______________
//Задача.При нажатии на кнопку Button добавлять атрибут src

//Variant 1

// let icon = document.querySelector("img")
// let button = document.querySelector("button")

// button.addEventListener("click", function () {
//     icon.setAttribute("src", "./images/image1.png")    
// })
//______
// Пояснение---button.addEventListener("click", function() {})
// callback функция - функция обратного вызова ---

//_________________

//Variant 2

// let image = document.querySelector("img")
// let button = document.querySelector("button")
// function addAttr() {
//     image.setAttribute("src", "./images/image1.png") 
// }

// button.addEventListener("click", addAttr)// срабатывает только после нажатия на кнопку

// addAttr() //принудительный вызов функции без клика на кнопку

//Пояснение--
/*
    addAttr() // immediately invoke - немедленный вызов функции. принудительный вызов. мы иницируем вызов функции

    addEventListener("eventType", callback)

    addAttr - callback функция обратного вызова - вызов передаем в другую функцию/метод, круглые скобки не ставим
    инициатором вызова cb функции является другая функция
    коллбеки при вызове не нуждаются в добавлении () 
*/
//__________________________________

//Задача.Есть 3 тега img , для каждого добавить атрибут src с соответствующей картинкой 

// let images = document.querySelectorAll("img")
// console.log(images)

// for (let i = 0; i < images.length; i++) {
//    images[i].setAttribute("src", `./images/image${i+1}.png`)

// }
//___________________________________
