


//____________________Домашка 1 _______________________


//let r = 90
//let g = 50
//let b = 210  
//console.log("rgb(" + r + ", " + g + ", " + b + ")" )


//____________________Домашка 2 _______________________


//let number = +prompt("Введите число")
//if(number > 100) { alert("Больше") }
//else if(number == 100) { alert("Равны") }
//else { alert("Меньше") }
//console.log(alert)

//____________________Домашка 3 ____________________


//let number1 = +prompt("Введите первое число")
//let number2 = +prompt("Введите второе число")
//let а = number1 + number2
//let б = number1 - number2
//let в = number1 * number2
//let г = number1 / number2

//console.log("сумма)" + а ,"разность)" + б ,"произведение)" + в ,"деление)" + г )




//__________________________________________________

//let number1 = +prompt("Введите первое число")
//let number2 = +prompt("Введите второе число")
//if(number1 > number2) { console.log(number1) }
//else if(number1 < number2) { console.log(number2) }
//else { console.log("Равны") }


//___________________________________________________










//alert("Hello World")
//console.log("Hello Arsen")

//alert(username)
//console.log(username)
//username = "Ruslan"
//let userName = "Arsen"
//let filteredUserProduct = "Product"
//____________________________________________
//Задаём переменной значение онлайн с помощью prompt:
//let username = prompt("Введите своё имя")

//Задаём переменной значение
//(вводим в переменную определённые данные):
//let hello = "Hello "
//____________________________________________
// Выводим в консоль данные:
//1.let hello = "Hello "
//let username = prompt("Введите своё имя")
//console.log(hello + username)
//2.let username = prompt("Введите своё имя")
//console.log("Hello " + username)

//console.log(hello + "World")

//____________________________________________
//Условный оператор.Если что-то сделал,то вышел результат
//Наприме: Если идёт дождь, нужно взять зонт, ИНАЧЕ "Погода сегодня солнечная" 

//let isRaining = false
//if(isRaining == true) {
//alert("Возьми зонт") //выполняется только если условие верно
//}
//else {
//alert("Погода сегодня солнечная")
//}
//___

//let degree = 20
//if(degree > 15) {
//    alert("Выходи в футболке")
//}
//else if(degree < 3) {
//    alert("Надеть куртку")
//}
//else {
//    alert("Надень кофту")
//}
//______________________________________________

//let price = 100
//if(price >= 700) {
//   alert("Твоя скидка 20%")
//}
//else if(price >= 500) {
//   alert("Твоя скидка 15%")
//}
//else {
//  alert("У Вас нет скидки")
//}






//Объекты и массивы:

//Объект:
// let subject = {
//     name : "Book",
//     autor : "Autor",
//     issue : "1980",
//     properities : ["read", "language", "sleep", "", ""]
// }
// console.log(subject)

// // Массивы:

// let books = ["HarryPottr1", "HarryPottr2", "HarryPottr3",]
// console.log(books)
// let login = [{}, {}, {}]


// let book = ["Мастер и Маргарита", "Социальная драма", 1937]
// console.log(book[0]) --> Мастер и Маргарита
// console.log(book[2]) --> 1937

// let numbers = [0, 1, 2, 3, 4]
// console.log(numbers)

// numbers.push(5) //позволяет добавить элемент в конец массива
// console.log(numbers)





//_____________________Метод push__________________________
// 

// let number1 = +prompt("Введите первое число")
// let number2 = +prompt("Введите второе число")
// let number3 = +prompt("Введите третье число")

// let numbers = [100, 500]
// numbers.push(number1, number2, number3)

// console.log(numbers);


//____________________Цикл_________________________
//(повторяющееся действие)




// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])
// console.log(nums[3])
// console.log(nums[4]);

// ___________________________
// let arr = [32, 51, 60, 78, 105, 14, 10]

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] >= 50) { console.log(arr[i])}
     
// }


//_________________
// for(let i = 0; i <= 100; i++) {
//     if(i > 30){ console.log("Больше", i)}
//     else {
//     console.log(i)}
// }
//_________________

//_____________Домашка(09.11.22) ____________
//--------
// ДЗ.1.Есть массив [-10, 50, 60, 0, -100, 125]. 
//Вывести в консоль только положительные+ числа.

// let arr = [-10, 50, 60, 0, -100, 125]
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) { 
//             console.log(arr[i])}
//     }
//----------

// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. 
//Вывести в консоль только четные числа. % - 
//вычислить остаток от деления. 10 % 2 = 0. 11 % 2 = 1

// let arr = [11, 12, 15, 17, 18, 25, 26]

    
// for(let i = 0; i <= arr.length; i++){
//     if(i % 2 == 0) console.log(i);
// }



//---------

// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60].
// Найти сумму чисел в массиве и вывести их в консоль.
//let sum =  sum + arr[i]


// let arr = [10, 20, 30 ,40 , 50, 60]
// let sum = 0
// for( let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)





//--------
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. 
//Найти произведение отрицательных чисел


// let numbers = [-10, 50, 60, 0, -100, 125]
// let result = 1;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         result = result* numbers[i];
//     }
// }

// console.log(result);

  



//---------
/* ДЗ.5
    Запросить 10 чисел. 
    let num1 = +prompt("enter num 1")
    let num2 = +prompt("enter num 2")
    let num3 = +prompt("enter num 3")

    let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
    nums.push(num1, num2, num3)
    console.log(nums);
*/



// let nums = [100, 500]

// for (let i = 0; i < 10; i++) {
//     nums.push(+prompt("Ведите число"))
// }
// console.log(nums)



// _______________________________________

//_________________Объект__________________ !

// let user = {            //объект
//     name : "Seyde"
//     age : 32
// }

// let user1 = [           //массив
//     "Seyde"
//     32
// ]

//________________________________________

// let laptop = {
//     color : "black",
//     mark : "Acer",
//     model : "45564GG",
//     size : "15.6",
//     tech : {
//         ozu : "16GB",
//         proccessor : "Inter i7",
//         videocard : "Nvidia"
//     },
//     price : 50000
// }


// console.log(`<div class="laptop">
//                 <h1>${laptop.model}</h1>
//                 <p>${laptop.color}</p>
//                 <p>${laptop.price}</p>
//             </div>`)
// ____________________________________


// //Вывести для всех ноутов одинаковую разметку

// let laptop = {
//     color : "black",
//     mark : "Acer",
//     model : "45564GG",
//     size : "15.6",
//     tech : {
//         ozu : "16GB",
//         proccessor : "Inter i7",
//         videocard : "Nvidia"
//     },
//     price : 50000
// }
//------------------
// let laptops = [
//     {
//         color : "black",
//         mark : "Acer",
//         model : "45564GG",
//         size : "15.6",
//         tech : {
//             ozu : "16GB",
//             proccessor : "Inter i7",
//             videocard : "Nvidia"
//         },
//         price : 50000
//     },
//     {
//         color : "white",
//         mark : "Asus",
//         model : "GR1114GG",
//         size : "17",
//         tech : {
//             ozu : "8GB",
//             proccessor : "Inter i5",
//             videocard : "Nvidia"
//         },
//         price : 65000
//     }
// ]
// console.log(`
//     <div>
//         <h1>${laptops[0].price}</h1>
//         <p>${laptops[0].mark}</P>
//         <p>${laptops[0].color}</p>
//     </div>

//     <div>
//         <h1>${laptops[1].price}</h1>
//         <p>${laptops[1].mark}</P>
//         <p>${laptops[1].color}</p>
//     </div>        
//     `)
// -------------

// console.log(`<div class="laptop">
//                 <h1>${laptop.price}</h1>
//                 <p>${laptop.mark}</p>
//                 <p>${laptop.color}</p>
//             </div>`)
//_________________________

// let instaPosts = [
//     {
//         title : "моё первое фото",
//         descr : "фото было сделано",
//         author : "Seyde",
//         likes : 100,
//         img : "https://img1.jpg"
//     },
//     {
//         title : "super фото",
//         descr : "фото было сделано в горах",
//         author : "Ruslan",
//         likes : 200,
//         img : "https://img2.png"
//     },
//     {
//         title : "супер-пупер фото",
//         descr : "фото было сделано в городе",
//         author : "Darina",
//         likes : 300,
//         img : "https://img3.png"
//     },
//     {
//         title : "моё лучшее фото",
//         descr : "фото было сделано на Гавайах",
//         author : "Katja",
//         likes : 400,
//         img : "https://img3.png"
//     }
// ]

// for (let i = 0; i < instaPosts.length; i++) {

// if ( instaPosts[i].likes > 250 ) {
//     console.log(`
//     <div class="insta-post">
//         <h1>${instaPosts[i].title}</h1>
//         <p>${instaPosts[i].descr}</p>
//         <p>${instaPosts[i].author}</p> 
//         <p>${instaPosts[i].likes}</p>
//         <img src="${instaPosts[i].img}" alt="фото в инсте">
//     </div>
//     `)
// } 
// }



// console.log(`
// <div class="insta-post">
//     <h1>${instaPosts[0].title}</h1>
//     <p>${instaPosts[0].descr}</p>
//     <p>${instaPosts[0].author}</p> 
//     <p>${instaPosts[0].likes}</p>
//     <img src="${instaPosts[0].img}" alt="фото в инсте">
// </div>

// `)

// for (let i = 0; i < instaPosts.length; i++) {
// console.log(`
// <div class="insta-post">
//     <h1>${instaPosts[i].title}</h1>
//     <p>${instaPosts[i].descr}</p>
//     <p>${instaPosts[i].author}</p> 
//     <p>${instaPosts[i].likes}</p>
//     <img src="${instaPosts[i].img}" alt="фото в инсте">
// </div>

// `)
// }



// Задача 1. Вывести в консоли:
// а) все ноутбуки. лучше с разметкой в html
// б) все ноутбуки, цена которых больше 40000
// в) Посчитать сумму цен всех ноутбуков. итого 

// let laptops = [
//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
// ]
// console.log (laptops)











// Задача.2
// а) Вывести все ноутбуки, у которых есть категория "laptop"
// б) Вывести все ноутбуки, у которых категория "premium"
// в) Вывести все ноутбуки, у которых категория "tech"
// let laptopsSecond = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
// ]





// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.

// Задача 4. 
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене
//____________

// let laptopsSecond1 = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
// ]

//добавить в новый массив только те числа, которые входят от 0 до 10

// let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12]
// let dia_arr = []
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]>=0 && arr[i]<10) {
//     dia_arr.push(arr[i])
//   }
    
// }

// console.log(dia_arr);
//----
//с помощью цикла найти сумму элементов

// let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum =+ arr[i]  // sum = sum + arr[i]
// }
// console.log(sum)

//----



// let arr = [1, 2, 4, "false", -40, "true", -3, 87, 0, {}, -5, 18, 12]
// let posSum = 0
// let negSum = 0
// let rest = []
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "number" && arr[i]>0) { 
//         posSum += arr[i];
//     } else if (typeof arr[i] === "number" && arr[i]<0) {
//         negSum +=arr[i];  
//     } else {
//         rest.push(arr[i])
//     }
// }
// let arr1 = [posSum, negSum]
// console.log(arr1, rest)


//---------

// let arr = [5, 2, 4, -3, 8, 7, 0, -5, 18, 12];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     const iterElement = arr[i]
//   sum += iterElement
//   if( sum > 10) {
//     console.log(`sum > 10 at ${i+1} iteracion`)
//   }
    
// }

//--------

// let arr = [
//     {'salary':'1000','name':'alex'},
//     {'salary':'500','name':'ivan'},
//     {'salary':'200','name':'petr'},
//     ]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {

//     sum += Number(arr[i].salary)
    
// }  
// console.log(sum) 

//___________________________________________________
//______________________ФУНКЦИИ______________________

// function sum(a, b){
//     return a + b
// }

// function mult(a, b){
//     return a * b 
// }

// console.log(sum(20, 25))
// console.log(sum(100, 200))

// function calc(){
//     let num = +prompt("Введите число")
//    return mult(num,num)

// }
// console.log(calc())
//-------------------------
// function power(a, b){
//   return Math.pow(a, b) + a
// }

// console.log(power(5,2))

//------------------------
//Вариант, если запрашивать имя у пользователя
// function greeting() {
//     let name = prompt("Введите имя")
//     return "Hello " + name
// //return `Hello ${name}`  - с помощью шаблонной строки
// }
// console.log(greeting())
//--------------------------
//Вариант с уже имеющимся именем
// function greeting(name) {
//     return "Hello " + name
//return `Hello ${name}`  - с помощью шаблонной строки
// }
// console.log(greeting("Seyde"))
//---------------------------

// const quarterOf = (month) => {
//     if(month <= 3) {
//         return 1
//         } 
//     if(month <= 6) {
//         return 2
//         } 
//     if(month <= 9) {
//         return 3
//         } 

//     return 4
      
//     }
// console.log(quarterOf(вводим своё число))   

//------------------------------
//Если пишем число больше 50, то выводим в консоли "больше и число"
//иначе выводим только число
//вариант 1
// function num(number) {
//     if(number > 50)
//     return "Больше " + number
//     //return `больше ${number}`
//     return number
// }

// console.log(num(99)) //вводим своё число

//------------------------------
//Если пишем число больше 50, то выводим в консоли "больше и число"
//иначе выводим только число
//вариант 2
// function num(number) {
//     if(number > 50) {
//         console.log("Больше " , number)
//     }
//    else {
//     console.log(number)
//    }
// }
// num(7) // вводим число
//-------------------------------
//Если пишем число больше 50, то выводим в консоли "больше и число"
//иначе выводим только число
//вариант 3
// function num(number) {
//   if(number > 50) {
//     return `больше ${number}`
//     }
//     return number
// }
// console.log(num()) // вводим число
//--------------------------------

// ДЗ.
// Задача1. Написать функцию, которая аргументами 
//получает два числа и возвращает большее из них.


// function num(a, b) {
//   if(a > b) {
//     return a
//     }
//     return b
// }
// console.log(num(80,9)) // вводим своё число




// Задача2. Написать функцию, которая принимает аргументом число(больше 0)
//и возвращает массив чисел от 0 до этого числа


// let n = +prompt("Введите число")

// function numbers() {
   
//     let nums = [];
 
//     for (let i = 0; i <= n; i++) {
//         nums[i] = i + 0; 
//     }  
 
//     return nums;
//  }
//  console.log(numbers())
//________________________________________________

