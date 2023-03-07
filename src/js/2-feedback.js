import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg'; // роблю константу( антіпаатерн )
const formData = {};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

refs.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
//зробити так щоб повідомлення і імя, все в одном обєкті
    formData[e.target.name] = e.target.value;
    console.log(formData)
})

function onFormSubmit(evt) {
    evt.preventDefault(); // щоб не перезагружалась

    evt.currentTarget.reset(); // після відправки чиститься форма
    localStorage.removeItem(STORAGE_KEY); // при відправці форми чистим локалсторидж
 }


function onTextareaInput(evt) {
    const message = evt.target.value;   // зберігаєм в змінній те що воддять в інтупі
    localStorage.setItem(STORAGE_KEY, message) // зберігаєм ведені повідомлення в локал сторедж
}


function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {  // перевіряєм чи є якесь повідомлення якщо є товиконується код нище
        refs.textarea.value = saveMessage; //записуємо повідомлення
    }
}