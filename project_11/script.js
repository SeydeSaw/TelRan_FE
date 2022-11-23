/* 
    addEventListener() - метод, позволяющий повесить(добавить) слушатель события.
    addEventListener() - функция, но т.к она находится внутри объекта, то называется методом.
    Он принимает два аргумента. 
    1й - тип события - "click", "submit", "focus"
    2й - функция(коллбэк функция - функция обратного вызова) 
        - действие, которое должно произойти в ответ на событие
    анонимная функция - функция без названия
*/

/*
    Методы:
    querySelector() - выборка элемента
    querySelectorAll() - выборка нескольких элементов
    addEventListener() - вешаем слушатель события

    Свойства:
    firstChild - выбор первого дочернего элемента
    lastChild - выбор последнего дочернего элемента
    childNodes[] - выбор всех дочерних элементов
    innerText - текстовое содержимое элемента

    let user = {
        name : "Arsen",
        fn : function() {
            console.log("hello")
        }
    }
    user.name - свойство
    user.fn() - метод
 */
// let main = document.querySelector("main")
// main.innerText - возвращает все текстовое содержимое внутри тега и его дочерних элементов
// innerText так же позволяет изменить текстовое содержимое элемента
// console.log(main.innerText) 

// Задача. в консоли поочередно вернуть текстовый контент каждого из трех элементов
/*
    let laptop = {
        marka : "Asus"
    }

  <div class="item">
        <p class="text">Hello World</p>
        <h4 class="title">Hello, Arsen</h4>
        <a href="">Hello Hello</a>
    </div>
*/
// let text1 = document.querySelector(".text")
// console.log(document.querySelector("p"))

// let text = document.querySelector(".item-1 p")
// console.log(text.innerText)

// let title = document.querySelector(".item-1 .title")
// console.log(title.innerText)

// let link = document.querySelector(".item-1 a")
// console.log(link.innerText)



// находим div, а потом внутри него другие элементы
// let item = document.querySelector(".item-1") // item = <div class="item-1"></div>
// let text1 = item.querySelector(".title")
// console.log(text1)

// let titles = document.querySelectorAll(".title")
// console.log(titles)




/* 
    Если хотим выбрать один элемент, то используем метод querySelector()
    Мы можем использовать такие же селекторы, как и в css


    1. Селектор по тегу - document.querySelector("tagName") - без точки, решетки и тд
    2. Селектор по классу - document.querySelector(".className") - с точкой
    3. Селектор по идентификатору(id) - document.querySelector("#id") - с решеткой

    
*/
//___________________________________________

//___Задача. В теге р с классом текст(1ый), в котором написано "Hello world 2"
//заменить строку на "Привет Мир 2"

// let text = document.querySelector(".text")
// text.innerText = "Привет Мир 2"

//____________________________________________

//___Задача. Внутри тега div d теге h4 , в котором написано "Hello Arsen"
//заменить строку на "Привет Арсен"

// let title = document.querySelector(".item-1 .title")
// title.innerText = "Привет Арсен"

//_____________________________________________

//Задача.Поменять содержимое всех тегов h4 с классом title

let titles = document.querySelectorAll(".title")

//1 вариант__Ручной ввод:

// console.log(titles[0].innerText = "Привет каждому")
// console.log(titles[1].innerText = "Привет каждому")
// console.log(titles[2].innerText = "Привет каждому")
// console.log(titles[3].innerText = "Привет каждому")
// console.log(titles[4].innerText = "Привет каждому")

//или____
//2 вариант___Автоматический = через цикл:

// for (let i = 0; i < titles.length; i++) {
//     titles[i].innerText = "Привет каждому"
// }
// console.log(titles)
//_______________________________________________

//Задача. Внутри div во всех тегах р поменять текст на "Привет мой друг"

// let texts = document.querySelectorAll(".item-1 .text")

// for (let i = 0; i < texts.length; i++) {
//    texts[i].innerText = "Привет мой друг"
// }

//_______________________________________________

let newTexts = document.querySelectorAll(".item-2 p")
for (let i = 0; i < newTexts.length; i++) {
    newTexts[i].addEventListener("click", function() {
        console.log("click")
    })
    
}
//В project10. При нажатии на любую кнопку в консоли отображать "на меня кликнули"

//  При нажатии на теги p внутри item-2 меняем их содержимое на "Hello MY friend"
// let newTexts = document.querySelectorAll(".item-2 p")
// for(let i = 0; i < newTexts.length; i++) {
//     newTexts[i].addEventListener("click", function() {
//         console.log("click")
//         //ДЗ. в этом месте вам нужно заменить содержимое на "Hello MY FRIEND"
//     })
// }