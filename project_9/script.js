//________________Задача 1. Вывести в консоли:

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
//-----------а) все ноутбуки. лучше с разметкой в html
 

// for (let i = 0; i < laptops.length; i++) {

// console.log(`
// <div class="laptops">
//     <h1>${laptops[i].mark}</h1>
//     <p>${laptops[i].price}</p>
// </div>  

// `)
// }


//-----------б) все ноутбуки, цена которых больше 40000


// for (let i = 0; i < laptops.length; i++) {

//     if(laptops[i].price > 40000 ) {

//         console.log(`
//         <div class="laptops">
//             <h1>${laptops[i].mark}</h1>
//             <p>${laptops[i].price}</p>
//         </div>  
//         `)
//     }
// }


//------------в) Посчитать сумму цен всех ноутбуков. итого 

// let sum = 0
// for (let i = 0; i < laptops.length; i++) {

//     if(laptops[i].price > 0 ) {
//         sum += laptops[i].price;
//     }
// }
//         console.log(`
//         <div class="laptops">
//             <h1>Итого: ${sum}</h1>
         
//         </div>  
//         `)
    
//____________ Задача.2 Вывести все ноутбуки :____________________

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

//--------а) у которых есть категория "laptop"

// for (let i = 0; i < laptopsSecond.length; i++) {

// if(laptopsSecond[i].category[i] == "laptop"){

//     console.log(`
//     <div class="laptopsSecond">
//         <h1>${laptopsSecond[i].mark}</h1>
//         <p>${laptopsSecond[i].category}</p>
//     </div>  

//     `)
//     }
// }

//--------б) у которых категория "premium"

// for (let i = 0; i < laptopsSecond.length; i++) {

//     if(laptopsSecond[i].category[1] == "premium"){
    
//         console.log(`
//         <div class="laptopsSecond">
//             <h1>${laptopsSecond[i].mark}</h1>
//             <p>${laptopsSecond[i].category}</p>
//         </div>  
    
//         `)
//         }
//     }

//--------в) у которых категория "tech"    

// for (let i = 0; i < laptopsSecond.length; i++) {

//     if(laptopsSecond[i].category[1] == "tech"){
    
//         console.log(`
//         <div class="laptopsSecond">
//             <h1>${laptopsSecond[i].mark}</h1>
//             <p>${laptopsSecond[i].category}</p>
//         </div>  
    
//         `)
//         }
//     }

//______________________ Задача.3:____________________

// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.
//--------

// let laptops = []
// for (let i = 0; i < 3; i++) {
//     let mark = prompt("Введите Марку");
//     let price = +prompt("Введите цену"); 
//     laptops.push({mark, price})
// }

// console.log(laptops) 


// _____________________Задача 4:_______________________ 

// У пользователя с prompta запрашивать марку/цену. 
// По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене
//----------

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

//Вариант 1. Выводим результат по запросу марки :

// let mark = prompt("Введите Марку");


// for (let i = 0; i < laptopsSecond1.length; i++) {
//     if(laptopsSecond1[i].mark == mark) {
    
//     console.log(`
//         <div class="laptopsSecond1">
//             <h1>${laptopsSecond1[i].mark}</h1>
//             <p>${laptopsSecond1[i].category}</p>                
//             <p>${laptopsSecond1[i].price}</p>

//         </div>  
        
//         `)
//     };}

//Вариант 2. Выводим результат по цене: 

// let price = +prompt("Введите цену"); 

// for (let i = 0; i < laptopsSecond1.length; i++) {

//     if(laptopsSecond1[i].price <= price) {
    
//         console.log(`
//             <div class="laptopsSecond1">
//                 <h1>${laptopsSecond1[i].mark}</h1>
//                 <p>${laptopsSecond1[i].category}</p>                
//                 <p>${laptopsSecond1[i].price}</p>
    
//             </div>  
            
//             `)
//         };
// }

  