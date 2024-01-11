import { getData } from "../../modules/helper";
import { category, footer, head, navbar_window, reload } from "../../modules/ui";


let save = document.querySelector('.save')
let text_category = document.querySelector('.text_block')
let colors = document.querySelector('.colors')
let color_bac = document.querySelector('.colors_bac')


let id = location.search.split("=").at(-1)
navbar_window()


getData('/goods?type=' + id)
    .then(res => {
        reload(res.data, save)
    })
getData('/goods?colors=' + id)
    .then(res => {
        reload(res.data, color_bac)
    }
    )
let inp1 = document.querySelector('.inp')
let inp2 = document.querySelector('.inp_before')
let value = inp1.value
inp1.onkeyup = () => {
    // if (inp1.value > 100 || inp2.value < 10000) {
    getData('/goods?price=' + inp1.value)
        .then(res => {
            console.log(res.data.sort((a, b) => a.price - b.price));
            reload(res.data, save)

        })
    console.log(inp1.value);
}
inp2.onkeyup = () => {
    getData('/goods?price=' + inp2.value)
    .then(res => {
        console.log(res.data.sort((a, b) => a.price - b.price));
        console.log(res.data);
    })
}
let categor = []
let color = []
getData('/goods')
    .then(res => {
        category(res.data)
        head()
        categoriy(res.data)
        coloris(res.data)
    })
function coloris(arr) {
    color = [];
    for (let item of arr) {
        item.colors.forEach(colors => {
            color.push(colors);
            color = [... new Set(color)]
        });
    }
    console.log(color);

    for (let item of color) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        li.classList.add('categorie_li')

        a.innerHTML = item
        a.href = '/pages/shop/?colors=' + item

        a.style.color = 'black'
        colors.append(li)
        li.append(a)
    }

}
function categoriy(arr) {

    categor = [];
    for (let item of arr) {
        categor.push(item.type);
    }
    categor = [...new Set(categor)];

    for (let item of categor) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        li.classList.add('categorie_li')
        a.innerHTML = item
        a.href = '/pages/shop/?type=' + item
        a.style.color = 'black'

        text_category.append(li)
        li.append(a)
    }
}


footer()

