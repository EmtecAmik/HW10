//Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.

// const form = document.querySelector("form")
// const names = document.querySelector(".names")
// const lastnames = document.querySelector(".lastnames")
// const ages = document.querySelector(".ages")

// form.addEventListener("submit", function(event){
//      event.preventDefault()
//         console.log("Имя:", names.value)
//         console.log("Фамилия:", lastnames.value)
//         console.log("Возраст:", ages.value)
// })



//Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.

// const form = document.querySelector("form");
// const names = document.querySelector(".names");
// const lastnames = document.querySelector(".lastnames");
// const ages = document.querySelector(".ages");

// const users = [];

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     const firstName = names.value;
//     const lastName = lastnames.value;
//     const age = ages.value;

//     const user = {
//         name: firstName,
//         lastname: lastName,
//         age: age
//     };

//     users.push(user);

    

//     console.log("Имя:", firstName);
//     console.log("Фамилия:", lastName);
//     console.log("Возраст:", age);
// });




//Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.


const form = document.querySelector("form");
const names = document.querySelector(".names");
const lastnames = document.querySelector(".lastnames");
const ages = document.querySelector(".ages");
const usersContainer = document.querySelector(".users-container"); // Контейнер для пользовательских карточек

const users = [];

// function rerender() {
    
//     usersContainer.innerHTML = "";

    
//     users.forEach(function(user) {
//         const userCard = document.createElement("div");
//         userCard.classList.add("user-card");
//         userCard.innerHTML = `
//             <h2>${user.name} ${user.lastname}</h2>
//             <p>${user.age}</p>
//         `;
//         usersContainer.appendChild(userCard);
//     });
// }

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const firstName = names.value;
//     const lastName = lastnames.value;
//     const age = ages.value;

//     const user = {
//         name: firstName,
//         lastname: lastName,
//         age: age
//     };

//     users.push(user); 

    
//     rerender();

    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
// });




// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.



function rerender() {
    usersContainer.innerHTML = "";

    users.forEach(function(user, index) {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h2>${user.name} ${user.lastname}</h2>
            <p>${user.age}</p>
        `;
        
        // Назначаем обработчик событий для двойного клика по карточке
        userCard.addEventListener("dblclick", function() {
            deleteUser(index); // Удаляем пользователя по индексу в массиве
            rerender(); // Вызываем rerender для обновления интерфейса
        });

        usersContainer.appendChild(userCard);
    });
}

function deleteUser(index) {
    users.splice(index, 1); // Удаляем пользователя из массива по индексу
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = names.value;
    const lastName = lastnames.value;
    const age = ages.value;

    const user = {
        name: firstName,
        lastname: lastName,
        age: age
    };

    users.push(user);

    rerender();

    console.log("Имя:", firstName);
    console.log("Фамилия:", lastName);
    console.log("Возраст:", age);
});













    


























