import { getData } from "./modules/helper"
import { category, footer, head, navbar_window, reload } from "./modules/ui"
import Swiper from "swiper"

getData('/goods')
    .then(res => {
        category(res.data)
        head()
    })
navbar_window()
let Furniture = document.querySelector('.grid_Furniture')
let PC = document.querySelector('.grid_PC')
let audio = document.querySelector('.grid_audio')
let TV = document.querySelector('.grid_TV')
let kitchen = document.querySelector('.grid_kitchen')



getData('/goods?type=' + 'furniture')
    .then(res => {
        reload(res.data, Furniture)
    })

getData('/goods?type=' + 'PC')
    .then(res => {
        reload(res.data, PC)
    })
getData('/goods?type=' + 'audio')
    .then(res => {
        reload(res.data, audio)
    })
getData('/goods?type=' + 'TV')
    .then(res => {
        reload(res.data, TV)
    })
getData('/goods?type=' + 'kitchen')
    .then(res => {
        reload(res.data, kitchen)
    })


let swiper = new Swiper(".swiper", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
        delay: 200,
    },
    allowTouchMove: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar',
    },

    mousewheel: true,
    keyboard: true,
});
footer()
console.log(swiper);