
//При отправке пользователем формы, в консоле отобразить "отправлено"

//1. находим форму и вешаем на неё слушатель события

let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productsWrapper = document.querySelector(".products-wrapper")


let products = [

    {
        name : "Велосипед",
        price : 40000
    },
    {
        name : "Самокат",
        price : 15000
    },
    {
        name : "Лыжи",
        price : 20000
    },
    {
        name : "Сноуборд",
        price : 25000
    },
]


form.addEventListener("submit", function(event) {
    event.preventDefault()
    //console.log(event)
    //console.log("отправлено")
    console.log(productName.value)
    console.log(productPrice.value)

})

// Создать функцию renderProducts(), которая принимает массив arr в аргументы
// Функция должна для каждого элемента массива arr отобразить разметку
// В получаемом массиве лежат объекты со свойтсвами name, price
// forEach(), innerHTML. Вызвать функцию с массивом products. renderProducts(products)
// `${name}${price}`

function renderProducts(arr) {
    arr.forEach(function(el) {
        productsWrapper.innerHTML += `
        <div class="product">
        <p class="product-name">${el.name}</p>
        <p class="product-price">${el.price}</p>
        </div>
        `
    })
}
renderProducts(products)


// если вызывать функцию только 1 раз, но не подействует если появятся ещё другие теги 
/*  
    products.forEach(function renderProducts(arr) {
    productsWrapper.innerHTML += 
    `<div class="product">
        <p class="product-name">${arr.name}</p>
        <p class="product-price">${arr.price}</p>
    </div> `
    }) 
*/





/* 
    При любом событии создается объект события - event, внутри которого лежит информация об этом событии
    -кто вызвал событие, -какие компоненты участвуют, элементы формы со значениями и т.д
    Иногда нужно отменять действия по умолчанию при создании события с помощью event.preventDefault()
*/



/* 
<div class="product">
<p class="product-name">велосипед</p>
<p class="product-price">40000</p>
</div> */

