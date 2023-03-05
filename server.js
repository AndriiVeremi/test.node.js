// підключаєс мібліотеку
// const joi = require('joi');
// const shortid = require('shortid');
const express = require('express');

// робить валідацю пароля( це має бути строка, мінімум 3 чифри, максімум 10 і повинні бути цифри)
// const passwordSchema = joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('q'));



const app = express();

const listener = app.listen(4444, () => {
    console.log(`Веб - сервер запущений на порті ${listener.address().port}`);
})