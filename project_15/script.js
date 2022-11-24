
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
    },     // (el)- один объект массива, один элемент
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
    // console.log(productName.value)
    // console.log(productPrice.value)

    //создаем объект с продуктом, который хочет добавить пользователь ,
    // на основе введенных данных
    let newProduct = {
        name: productName.value,
        price: Number(productPrice.value)
    }
   // console.log(newProduct) // переменная видна только внутри блока кода
   
   //добавляем объект newProduct в массив products
   products.push(newProduct)
   //console.log(products)

    renderProducts(products)
    onHover()
    clearInputs()


})

function clearInputs() {
    productName.value = ''
    productPrice.value = ''
}
//________________________________________________
//________________________________________________
// Создать функцию renderProducts(), которая принимает массив arr в аргументы
// Функция должна для каждого элемента массива arr отобразить разметку
// В получаемом массиве лежат объекты со свойтсвами name, price
// forEach(), innerHTML. Вызвать функцию с массивом products. renderProducts(products)
// `${name}${price}`
//_____________________
function renderProducts(arr) {
    productsWrapper.innerHTML = ''

    arr.forEach(function(el) {
        productsWrapper.innerHTML += `
        <div class="product">
        <p class="product-name">${el.name}</p>
        <p class="product-price">${el.price}</p>
        <button class="delete-btn">X</button>
        </div>
        `
    })
}
renderProducts(products)

//Функция, которая позволяет, при наведении на элемент, отображать кнопку удаления
function onHover() {
    let product = document.querySelectorAll(".product")
    product.forEach(function(el) {
        el.addEventListener("mouseover", function() {
            el.querySelector(".delete-btn").style.display = "block"
        })
        el.addEventListener("mouseout", function() {
            el.querySelector(".delete-btn").style.display = "none"
        })
    })
}
onHover()
//Функция удаления элемента при нажатии
function deleteProduct() {
    let deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove() //удаляем родителя кнопки удаления
        
        })
    })
}
deleteProduct()


//_____________________________________________________________
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
//____________________________________________


