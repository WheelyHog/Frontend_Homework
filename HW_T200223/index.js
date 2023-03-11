// Дан массив с пользователями.
// Сформировать карточки пользователей и отобразить их в браузере. Если пользователь online, прописать в карточке 'Status: online', если нет - 'Status: offline'
// Стилизовать карточки. Если пользователь в сети, у его карточки должен быть светло-голубой цвет заднего фона. Если не online - цвета нет.
// Добавить форму с тремя инпутами для сбора данных об имени, фамилии и возрасте пользователя. По умолчанию все добавляемые пользователи должны иметь свойство online со значением true
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают
// При клике на карточку менять статус (online) пользователя на противоположный
let users = [
    {
        id: 1,
        firstname: 'Ivan',
        lastname: 'Petrov',
        age: 17,
        online: true
    },
    {
        id: 2,
        firstname: 'Vladimir',
        lastname: 'Kuzmin',
        age: 77,
        online: true
    },
    {
        id: 3,
        firstname: 'Irina',
        lastname: 'Ivanova',
        age: 37,
        online: false
    },
    {
        id: 4,
        firstname: 'Olga',
        lastname: 'Sokolova',
        age: 29,
        online: false
    },
    {
        id: 5,
        firstname: 'Boris',
        lastname: 'Ushanov',
        age: 43,
        online: true
    }
]


let userDiv = document.querySelector('.users-container')

function render(users) {
    userDiv.innerHTML = '';
    users.forEach(({id, firstname, lastname, age, online}) => {

        let user_card = document.createElement('div')
        user_card.className = 'user_card'
        user_card.onclick = () => {
            users.forEach(elem => {
                if (elem.id == id) {
                    elem.online = elem.online ? false : true
                }
            })
            localStorage.setItem('users', JSON.stringify(users))
            render(JSON.parse(localStorage.getItem('users')))
        }

        let user_name = document.createElement('h4')
        user_name.innerText = `Name: ${firstname}`

        let user_lastname = document.createElement('h4')
        user_lastname.innerText = `Lastname: ${lastname}`

        let user_age = document.createElement('p')
        user_age.innerText = `Age: ${age}`

        let user_online = document.createElement('p')
        if (online) {
            user_online.innerText = `Status: online`
            user_card.classList.add('online')
        } else user_online.innerText = `Status: offline`


        user_card.append(user_name, user_lastname, user_age, user_online)
        userDiv.append(user_card)
    })
}

users = JSON.parse(localStorage.getItem('users')) ?? users;
render(users)

let form = document.querySelector('#form_elem')
form.onsubmit = (e) => {
    e.preventDefault()
    let dataList = new FormData(e.target)
    let data = Object.fromEntries(dataList)
    data.online = 'true'
    data.id = Date.now();
    console.log(data)
    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))
    render(JSON.parse(localStorage.getItem('users')))
    form.reset()
}

let cardList = document.querySelectorAll('.user_card')



