// ### Задача 1: Поиск первого чётного числа
// Задача:  
// Дан массив чисел. Используйте метод find, чтобы найти первое чётное число в массиве.
// Пример:  
// Для массива [1, 3, 7, 8, 10] функция должна вернуть 8.


// const numbers = [1, 3, 7, 8, 10]
// const num = numbers.find(item => {
//     return item === 8
// })
// console.log(num)







// ### Задача 2: Поиск строки с длиной больше 5 символов
// Задача:  
// Создайте массив строк. Используйте метод find, чтобы найти первую строку, длина которой больше 5 символов.
// Пример:  
// Для массива ['кот', 'собака', 'тигр', 'слон'] функция должна вернуть 'собака'.


// const strings = ['кот', 'собака', 'тигр', 'слон'] 
// const result = strings.find(item => {
//     return item.length > 5
// })
// console.log(result)





// ### Задача 3: Поиск числа больше 10
// Задача:  
// Дан массив чисел. Используйте метод find, чтобы найти первое число, которое больше 10.
// Пример:  
// Для массива [5, 9, 12, 3, 18] функция должна вернуть 12.


// const numbers = [5, 9, 12, 3, 18];
// const num = numbers.find(item => {
//     return item > 10
// })
// console.log(num)







// ### Задача 4: Поиск объекта с определённым именем
// Задача:  
// Дан массив объектов, каждый объект представляет пользователя с полями name и age. Используйте метод find, чтобы найти объект с именем "Мария".
// Пример:  
// Для массива:
// [
//   { name: 'Алекс', age: 25 },
//   { name: 'Мария', age: 17 },
//   { name: 'Иван', age: 19 }
// ]
// Функция должна вернуть объект { name: 'Мария', age: 17 }.


// const users = [
//     { name: 'Алекс', age: 25 },
//     { name: 'Мария', age: 17 },
//     { name: 'Иван', age: 19 }
// ]
// const result = users.find(item => {
//     return item.name = "Мария"
// })
// console.log(result)








// ### Задача 5: Поиск первого отрицательного числа
// Задача:
// Дан массив чисел. Используйте метод find, чтобы найти первое отрицательное число в массиве.
// Пример:
// Для массива [3, 5, -2, -8, 7] функция должна вернуть -2


// const numbers = [3, 5, -2, -8, 7]
// const num = numbers.find(item => {
//     return item < 0
// })
// console.log(num)