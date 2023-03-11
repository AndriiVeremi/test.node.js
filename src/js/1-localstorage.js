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









const LOCAL_KEY = 'feedback-form-state';
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputData, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFeedbackForm();

function onInputData(e) {
    formData = {
        email: refs.input.value.trim(),
        message: refs.textarea.value.trim(),
    };
    //formData[e.target.name] = e.target.value.trim(); // виводить в localStorage лише один ключ з значенням, якщо інший не заповнений
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    const { email, message } = e.currentTarget.elements;
    console.log({ email: email.value.trim(), message: message.value.trim() });

    if (localStorage.getItem(LOCAL_KEY)) {
        // let data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        // console.log(data);
        localStorage.removeItem(LOCAL_KEY);
    }
    e.currentTarget.reset();
    formData = {};
}

function populateFeedbackForm() {
    let data = localStorage.getItem(LOCAL_KEY);
    if (!data) return;
    formData = JSON.parse(data);
    refs.input.value = formData.email ?? '';
    refs.textarea.value = formData.message ?? '';
}