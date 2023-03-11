// const user = {
//     name: 'Mango',
//     age: 2,
// };
// console.log(JSON.stringify(user));  // Метод stringify() робить з обєкта ---> рядок(строку)

// //-----------------------------------------------------------------

// const savedUserDate = '{"name":"Mango","age":2}';
// console.log(JSON.parse(savedUserDate))  // Метод parse() робить з рядка ---> обєкт


// // ЛОКАЛ СТОРИДЖ
// console.log(localStorage)  // цілий час зберегаються дані поки сам не видалтш

// // створює
// localStorage.setItem('my-data', 'строка')
// localStorage.setItem('my-data2', JSON.stringify({ "name": "Mango", "age": 2 }))

// //читає
// console.log(localStorage.getItem('my-data'));

// console.log(localStorage.removeItem('my-data'));
// console.log(localStorage.clearItem('my-data'));

// // СЕШИН СТОРИДЖ  // зберігаються дані тільки коли триває сесія, після перезагрузки сторінки пропадають
// console.log(sessionStorage)

//=================================================================================

// try {
// // код який виконується і може видати помилку
// } catch (error) {
// // якщо винекне помилка виконається тіло кеч
// }
// // код після конструкції


// // ========= приклад ==========


// try {
//     const myJson = JSON.parse('Hi!')
//     //const myJson = JSON.parse("{}")
// } catch (error) {
//     console.log('error.message')  // виведе помилку
// }
// console.log('success!')








