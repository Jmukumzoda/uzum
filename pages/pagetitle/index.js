import { getData } from "../../modules/helper"
import { category, footer, head, navbar_window, reload } from "../../modules/ui"




let id = location.search.split("=").at(-1)
let link = document.querySelector('.wrap')


// head()
getData('/goods')
    .then(res => {
        category(res.data)
        head()
    })
navbar_window()


getData(`/goods/${id}`)
    .then(res => {
        console.log(res)
        let likes = JSON.parse(localStorage.getItem("likes")) || []
        let Favorite = JSON.parse(localStorage.getItem("favorite")) || []
        let count = JSON.parse(localStorage.getItem("count")) || []
        let div = document.createElement('div')
        let img = document.createElement('img')
        let text = document.createElement('div')
        let h3 = document.createElement('h3')
        let text_current = document.createElement('div')
        let p = document.createElement('p')
        let strong = document.createElement('strong')
        let counter = document.createElement('div')
        let counter_plus = document.createElement('button')
        let counter_minus = document.createElement('button')
        let counter_input = document.createElement('input')
        let hr = document.createElement('hr')
        let p_descript = document.createElement('p')
        let div_btns = document.createElement('div')
        let btn_add_shop = document.createElement('button')
        let btn_add_favorites = document.createElement('button')
        let similar_products = document.createElement('div')
        // Создаем слайдер
        let swiper = document.createElement('div');
        swiper.className = 'mySwiper';
        let swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';
        let slide1 = document.createElement('div');
        slide1.className = 'swiper-slid';
        let slide1Img = document.createElement('img');
        slide1Img.src = res.data.media[0]
        slide1Img.alt = '';
        slide1.appendChild(slide1Img);

        let slide2 = document.createElement('div');
        slide2.className = 'swiper-slid';
        let slide2Img = document.createElement('img');
        slide2Img.src = res.data.media[1]
        slide2Img.alt = '';
        slide2.appendChild(slide2Img);

        let slide3 = document.createElement('div');
        slide3.className = 'swiper-slid';
        let slide3Img = document.createElement('img');
        slide3Img.src = res.data.media[2]
        slide3Img.alt = '';
        slide3.appendChild(slide3Img);


        let swiperPagination = document.createElement('div');
        swiperPagination.className = 'swiper-pagination';


        let swiperButtonNext = document.createElement('div');
        swiperButtonNext.className = 'swiper-button-next';

        let swiperButtonPrev = document.createElement('div');
        swiperButtonPrev.className = 'swiper-button-prev';


        div.classList.add('img_block')
        similar_products.classList.add('block_prodicts')
        img.classList.add('block_img')
        h3.classList.add('block_h3')
        text.classList.add('text')
        text_current.classList.add('block_text')
        p.classList.add('block_strong')
        strong.classList.add('block-p')
        counter.classList.add('counter')
        div_btns.classList.add('div_btns')
        btn_add_shop.classList.add('btn_shop')
        btn_add_favorites.classList.add('btn_favorites')
        div_btns.classList.add('div_btns')
        p_descript.style.width = '88%'

        counter_input.value = 1
        counter_plus.innerHTML = '+'
        counter_minus.innerHTML = '-'
        img.src = res.data.media[0]
        h3.innerHTML = res.data.title
        btn_add_favorites.innerHTML = 'Добавить в избранное'
        btn_add_shop.innerHTML = 'Добавить в корзину'
        p_descript.innerHTML = res.data.description
        if (res.data.description === '') {
            p_descript.innerHTML = res.data.title
        }
        strong.innerHTML = res.data.price + 'сум'
        if (res.data.salePercentage > 0) {
            p.innerHTML = Math.ceil((res.data.price * res.data.salePercentage) / 100) + ' сум'
        }
        swiperWrapper.appendChild(slide1);
        swiperWrapper.appendChild(slide2);
        swiperWrapper.appendChild(slide3);
        swiper.appendChild(swiperWrapper);
        swiper.appendChild(swiperPagination);
        swiper.appendChild(swiperButtonNext);
        swiper.appendChild(swiperButtonPrev);
        link.append(div, similar_products)
        div.append(swiper, text, text_current)
        text.append(h3, text_current, counter, hr, p_descript, div_btns)
        div_btns.append(btn_add_favorites, btn_add_shop)
        text_current.append(strong, p)
        counter.append(counter_minus, counter_input, counter_plus)


        let price = res.data.price

        const maxprodict = 15
        counter_plus.onclick = () => {
            if (counter_input.value < maxprodict) {
                counter_input.value = ++counter_input.value
                updateCounter()
            }

        }
        counter_minus.onclick = () => {
            if (counter_input.value > 1) {
                counter_input.value = --counter_input.value
                updateCounter()
            }

        }

        function updateCounter() {
            strong.innerHTML = `${price}` * counter_input.value + 'сум'

        }
      
        btn_add_shop.onclick = (e) => {
            e.preventDefault();
            if (likes.includes(id)) {
                alert('Это товар уже у вас в корзине')
                return;
                likes = likes.filter(el => el !== id);
                localStorage.setItem("likes", JSON.stringify(likes));
            } else {
                if (likes.indexOf(id) === -1) {
                    likes.push(id);
                    localStorage.setItem("likes", JSON.stringify(likes));
                    btn_add_shop.classList.add('btn_favorites')
                    btn_add_favorites.classList.add('btn_shop')
                    btn_add_shop.classList.remove('btn_shop')
                    btn_add_favorites.classList.remove('btn_favorites')
                }
            }

        }

        btn_add_favorites.onclick = (e) => {
            e.preventDefault();
            if (btn_add_favorites) {
                btn_add_shop.classList.add('btn_shop')
                btn_add_favorites.classList.add('btn_favorites')
                btn_add_shop.classList.remove('btn_favorites')
                btn_add_favorites.classList.remove('btn_shop')
            } else {
                btn_add_shop.classList.add('btn_favorites')
                btn_add_favorites.classList.add('btn_shop')
                btn_add_shop.classList.remove('btn_shop')
                btn_add_favorites.classList.remove('btn_favorites')
            }

            if (Favorite.includes(id)) {
                alert('Это товар уже у вас в Избраннном')
                return;
                Favorite = Favorite.filter(el => el !== id);
                localStorage.setItem("favorite", JSON.stringify(Favorite));
                console.log('hello');
            } else {
                if (Favorite.indexOf(id) === -1) {
                    Favorite.push(id);
                    localStorage.setItem("favorite", JSON.stringify(Favorite));
                }
            }
        }
      

    })
footer()
