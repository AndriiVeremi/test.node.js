const user = {
    name: 'Mango',
    age: 2,
};

console.log(JSON.stringify(user));  // Метод stringify() робить з обєкта ---> рядок(строку)

//-----------------------------------------------------------------

const savedUserDate = '{"name":"Mango","age":2}';

console.log(JSON.parse(savedUserDate))  // Метод parse() робить з рядка ---> обєкт

