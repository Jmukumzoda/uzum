import { getData } from "../../modules/helper";
import { category, footer, head, navbar_window, reload_likes } from "../../modules/ui";

getData('/goods')
    .then(res => {
        category(res.data)
        head()
    })
navbar_window()

let get = JSON.parse(localStorage.getItem('favorite')) || []
let wrap = document.querySelector('.wrapper')

console.log(get);
let movies_like = []

get.forEach(el => {
    getData(`/goods/${el}`)
        .then(res => {
            movies_like.push(res.data)
            reload_likes(movies_like, wrap)
        })
})
if (get.length === 0) {
    let div = document.createElement('div')
    let img = document.createElement("img");
    let message = document.createElement("p");
    let tip = document.createElement("span");

    img.src = "/public/img/hearts.png";
    wrap.style.display = 'block'

    message.innerHTML = "Добавьте то, что понравилось";
    tip.innerHTML =
        "Перейдите на главную страницу и нажмите на лайк в товаре<br />На главную";
    div.classList.add('liked')
    div.append(img, message, tip);
    wrap.append(div)

}
footer()
