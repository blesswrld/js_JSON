"use strict";

// Создаем объект person с данными о человеке.
const person = {
    name: 'Alex', // Имя
    tel: '+744444444', // Телефон
    parents: { // Вложенный объект с данными о родителях
        mom: 'Olga', // Имя матери
        dad: 'Mike' // Имя отца
    }
};

// Создаем глубокую копию объекта person с помощью JSON.parse и JSON.stringify.
const clone = JSON.parse(JSON.stringify(person));
// Вносим изменения в копию объекта: изменяем имя матери.
clone.parents.mom = 'Ann';

// Выводим оригинальный объект person в консоль.
console.log(person); // Оригинальный объект остается неизменным.

// Выводим измененную копию clone в консоль.
console.log(clone); // В копии имя матери изменено на 'Ann'.
