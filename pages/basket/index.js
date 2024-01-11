import { getData } from "../../modules/helper";
import { category, footer, head, navbar_window, reload, reload_bucket } from "../../modules/ui";

getData('/goods')
    .then(res => {
        category(res.data)
        head()
    })
navbar_window()
let get = JSON.parse(localStorage.getItem('likes'))
let wrap = document.querySelector('.wrapper_block')
let btn = document.querySelector('.button')
let wrapper = document.querySelector('.wrap_bucket')
let wraper = document.querySelector('.wrapper')
let container_wrap = document.querySelector('.container_wrap')
let main = document.querySelector('main')
getData('/goods?type=' + 'PC')
    .then(res => {
        reload(res.data.slice(0, 6), wrapper)
    })
btn.onclick = () => {
    location.assign('/pages/basket/')
}
if (get.length === 0) {
    let div = document.createElement('div')
    let img = document.createElement("img");
    let message = document.createElement("p");
    let tip = document.createElement("span");

    img.src = "/public/img/hearts.png";
    wraper.style.display = 'none'
    container_wrap.style.display = 'none'

    message.innerHTML = "Добавьте что то в корзину";
    tip.innerHTML =
        "Перейдите на главную страницу и нажмите на корзинку в товаре<br />На главную";
    div.classList.add('liked')
    div.append(img, message, tip);
    main.append(div)
}

console.log(get);

let bucket_mas = []

get.forEach(el => {
    getData(`/goods/${el}`)
        .then(res => {
            bucket_mas.push(res.data)
            reload_bucket(bucket_mas, wrap)
        })
})
footer()