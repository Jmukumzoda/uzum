import { getData } from "./helper";
import { user } from "./user";

let id = location.search.split("=").at(-1)
let categor = [];

export function category(arr) {
    categor = [];
    for (let item of arr) {
        categor.push(item.type);
    }
    categor = [...new Set(categor)];

    return categor;
}
export function reload(arr, place) {
    place.innerHTML = ""
    let Favorite = JSON.parse(localStorage.getItem("favorite")) || []
    let likes = JSON.parse(localStorage.getItem("likes")) || []
    for (let item of arr) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement('p')
        let p_current = document.createElement('p')
        let strong = document.createElement('strong')
        let img_like = document.createElement('img')
        let img_shop = document.createElement('img')
        let container_shop = document.createElement('div')
        let star = document.createElement('img')
        let star_p = document.createElement('p')
        let container_star = document.createElement('div')


        div.classList.add('block')
        img.classList.add('block_img')
        p.classList.add('block_p')
        strong.classList.add('block_strong')
        p_current.classList.add('block_p_current')
        img_like.classList.add('like')
        img_shop.classList.add('shop')
        strong.style.color = '#ccc'
        strong.style.textDecoration = 'line-through'
        container_star.classList.add('star')
        container_shop.classList.add('star')
        img.classList.add('img_animation')

        img.src = item.media[0]
        img_like.src = '/public/img/Vector.png'
        img_shop.src = '/public/img/shopping-cart 1.png'
        star.src = '/public/img/star.svg'
        p.innerHTML = item.title
        star_p.innerHTML = item.rating
        p_current.innerHTML = parseFloat(item.price).toLocaleString('us-US') + ' сум'
        if (item.salePercentage > 0) {
            strong.innerHTML = Math.ceil((item.price * item.salePercentage) / 100) + ' сум'
        }

        place.append(div)
        div.append(img_like, img, p, container_star, strong, container_shop)
        container_star.append(star, star_p,)
        container_shop.append(p_current, img_shop)
        img.onclick = () => {
            location.assign('/pages/pagetitle/?id=' + item.id)
        }
        item.id = String(item.id)
        img_like.onclick = (e) => {
            e.preventDefault()
            let id_str = JSON.parse(item.id)
            console.log(id_str);
            if (Favorite.includes(item.id)) {
                alert('Это товар уже у вас в Избраннном ')
                return;
                Favorite = Favorite.filter(el => el !== item.id);
                localStorage.setItem("favorite", JSON.stringify(Favorite));
            } else {
                if (Favorite.indexOf(item.id) === -1) {
                    Favorite.push(item.id);
                    localStorage.setItem("favorite", JSON.stringify(Favorite));

                }
            }
        }
        img_shop.onclick = (e) => {
            e.preventDefault();
            if (likes.includes(item.id)) {
                alert('Это товар уже у вас в корзине')
                return;
                likes = likes.filter(el => el !== item.id);
                localStorage.setItem("likes", JSON.stringify(likes));
                alert('Добавлено')
            } else {
                if (likes.indexOf(item.id) === -1) {
                    likes.push(item.id);
                    localStorage.setItem("likes", JSON.stringify(likes));
                }
            }
        }
        if (item.title.length > 20) {
            p.innerHTML = item.title.slice(0, 25) + '...'
        }

    }

}
const windowDiv = document.querySelector('.window');
const closeButton = document.querySelector('.close');
let navbar = document.querySelector('.navbar')
let search = document.querySelector('.search_titil')
let search_text = document.querySelector('.text_search')
export function head() {
    let body = document.body
    let main = document.querySelector('main')
    let header = document.createElement('header')
    let wrap = document.createElement('div')
    let setings = document.createElement('div')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let li_img = document.createElement('img')
    let li_catalog = document.createElement('li')
    let btn_catalog = document.createElement('button')
    let div_btn = document.createElement('div')
    let p_catalog = document.createElement('p')
    let li_inp = document.createElement('li')
    let inp = document.createElement('input')
    let inp_img = document.createElement('img')
    let ul_user = document.createElement('ul')
    let li_user = document.createElement('li')
    let li_img_user = document.createElement('img')
    let user_p = document.createElement('a')
    let li_Favorites = document.createElement('li')
    let li_img_Favorites = document.createElement('img')
    let Favorites_p = document.createElement('a')
    let li_shops = document.createElement('li')
    let li_img_shops = document.createElement('img')
    let shops_p = document.createElement('a')
    let categories = document.createElement('div')
    let categorie = document.createElement('ul')
    let li_categories = document.createElement('li')
    let li_img_categories = document.createElement('img')
    let modal = document.createElement('div')
    let modal_tx = document.createElement('div')
    let li_logout = document.createElement('li')
    let logout_p = document.createElement('p')
    let logout_img = document.createElement('img')
    // let li_navbar = document.createElement('li')
    // let navbar_img = document.createElement('img')



    for (let item of categor) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        li.classList.add('categorie_li')

        a.innerHTML = item
        a.href = '/pages/shop/?type=' + item

        a.style.color = '#ccc'
        categorie.append(li)
        li.append(a)
    }

    header.classList.add('header')
    wrap.classList.add('wrap')
    setings.classList.add('setings')
    ul.classList.add('search')
    li.classList.add('search_li')
    li_img.classList.add('uzum')
    li_catalog.classList.add('search_li')
    li_logout.classList.add('user_shop_li')
    li_inp.classList.add('search_li')
    li_user.classList.add('user_shop_li')
    li_Favorites.classList.add('user_shop_li')
    li_shops.classList.add('user_shop_li')
    btn_catalog.classList.add('setings_btn')
    inp.classList.add('setings_input')
    inp_img.classList.add('search_img')
    ul_user.classList.add('user_shop')
    li_img_user.classList.add('user_shop_img')
    li_img_Favorites.classList.add('user_shop_img')
    li_img_shops.classList.add('user_shop_img')
    categories.classList.add('categories')
    categorie.classList.add('categorie')
    li_categories.classList.add('li_categories')
    modal.classList.add('modal')
    modal_tx.classList.add('modal_text')


    Favorites_p.style.color = 'black'
    shops_p.style.color = 'black'
    user_p.style.color = 'black'
    p_catalog.innerHTML = 'Каталог'
    inp.type = 'text'
    li_categories.innerHTML = 'Рассрочка'
    li_img_categories.src = 'https://static.uzum.uz/nasiya/union.png'
    li_img_categories.style.width = '40px'
    inp.placeholder = 'Искать товары и категории'
    user_p.innerHTML = "Войти"
    Favorites_p.innerHTML = "Избранное"
    shops_p.innerHTML = "Корзина"
    li_img.src = '/public/img/download.svg'
    inp_img.src = '/public/img/search-interface-symbol.png'
    li_img_Favorites.src = '/public/img/free-icon-love-and-romance-8579290.png'
    li_img_shops.src = '/public/img/free-icon-handbag-3345405.png'
    li_img_user.src = '/public/img/Group 237729.png'
    user_p.href = '/'
    logout_img.src = '/public/img/2676937_exit_leave_logout_signout_icon.png'
    logout_img.style.width = '30px'
    li_Favorites.onclick = () => {
        location.assign('/pages/Favorite/')
    }
    li_shops.onclick = () => {
        location.assign('/pages/basket/')
    }
    p_catalog.style.fontWeight = '800';


    body.prepend(header)
    header.append(wrap)
    wrap.append(setings, search, modal, categories)
    modal.append(modal_tx)
    categories.append(categorie)
    categorie.prepend(li_categories)
    li_categories.prepend(li_img_categories)
    setings.append(ul, ul_user)
    ul.append(li, li_catalog, li_inp)
    li.append(li_img)
    li_catalog.append(btn_catalog)
    btn_catalog.append(div_btn)
    div_btn.append(p_catalog)
    li_inp.append(inp, inp_img)
    ul_user.append(li_user, li_Favorites, li_shops)
    ul_user.after(navbar)
    li_user.append(li_img_user, user_p)
    li_Favorites.append(li_img_Favorites, Favorites_p)
    li_shops.append(li_img_shops, shops_p)
    li_logout.append(logout_p, logout_img)


    btn_catalog.onclick = () => {
        modal.classList.toggle('show')
        if (modal.classList.contains('show')) {
            modal_tx.append(categorie)
            categorie.firstElementChild.style.display = 'none'
            categorie.style.display = 'flex'
            categorie.style.flexDirection = 'column'
            categorie.style.gap = '18px'
            categorie.style.marginTop = '20px'
            categorie.style.fontSize = '30px'
            main.style.filter = 'blur(4px)'
        } else {
            categories.append(categorie)
            categorie.firstElementChild.style.display = 'flex'
            categorie.style.display = 'flex'
            categorie.style.flexDirection = 'row'
            categorie.style.marginTop = '20px'
            categorie.style.fontSize = '20px'
            main.style.filter = 'blur(0)'
        }

    }
    ul.firstElementChild.onclick = () => {
        location.assign('/')
    }
    ul_user.firstElementChild.onclick = (e) => {
        e.preventDefault()
        location.assign('/pages/signup/')
    }

    user_p.innerHTML = user.name
    ul_user.firstElementChild.onclick = (e) => {
        e.preventDefault()
        if (user_p.innerHTML = user.name) {
            windowDiv.style.right = '0';
            windowDiv.append(logout_img)
        }
        closeButton.onclick = () => {
            windowDiv.style.right = '-270px'
        }
    }
    inp.onkeyup = (e) => {
        e.preventDefault();
        search.classList.add('show_titil')
        let value = inp.value
        getData('/goods?title=' + value)
            .then(res => {
                console.log(res);
                for (let i of res.data) {
                    let a = document.createElement('a')
                    a.innerHTML = i.title
                    a.href = '/pages/pagetitle/?id=' + i.id
                    search_text.append(a)
                    console.log(a);
                }

            })
    }
    li_logout.onclick = () => {
        location.assign('/')
    }
    logout_img.onclick = () => {
        localStorage.removeItem('user')
        localStorage.clear()
        location.assign('/')
    }
}
export function navbar_window() {
    let close_navbar = document.querySelector('.close_nav')
    let ul = document.createElement('ul')
    let li_user = document.createElement('li')
    let li_img_user = document.createElement('img')
    let user_p = document.createElement('a')
    let li_Favorites = document.createElement('li')
    let li_img_Favorites = document.createElement('img')
    let Favorites_p = document.createElement('a')
    let li_shops = document.createElement('li')
    let li_img_shops = document.createElement('img')
    let shops_p = document.createElement('a')
    let window_all = document.querySelector('.all')
    let li_inp = document.createElement('li')
    let inp = document.createElement('input')
    let inp_img = document.createElement('img')


    li_user.classList.add('user_shop_li')
    li_Favorites.classList.add('user_shop_li')
    li_shops.classList.add('user_shop_li')
    li_img_user.classList.add('user_shop_img')
    li_img_Favorites.classList.add('user_shop_img')
    li_img_shops.classList.add('user_shop_img')
    // ul.style.display = 'flex'
    // ul.style.gap = '10px'
    inp.classList.add('setings_input')
    inp_img.classList.add('search_img')
    ul.classList.add('navbarUl')


    li_img_Favorites.src = '/public/img/free-icon-love-and-romance-8579290.png'
    li_img_shops.src = '/public/img/free-icon-handbag-3345405.png'
    li_img_user.src = '/public/img/Group 237729.png'
    inp.type = 'text'
    inp.placeholder = 'Искать товары и категории'

    ul.append(li_user, li_Favorites, li_shops, li_inp)
    window_all.append(ul)
    li_user.append(li_img_user, user_p)
    li_Favorites.append(li_img_Favorites, Favorites_p)
    li_shops.append(li_img_shops, shops_p)
    li_inp.append(inp, inp_img)

    navbar.onclick = (e) => {
        e.preventDefault()
        window_all.style.right = '0';
    }
    close_navbar.onclick = () => {
        window_all.style.right = '-270px'
    }
    li_Favorites.onclick = () => {
        location.assign('/pages/Favorite/')
    }
    li_shops.onclick = () => {
        location.assign('/pages/basket/')
    }
    inp.onkeyup = (e) => {
        e.preventDefault();
        search.classList.add('show_titil')
        let value = inp.value
        getData('/goods?title=' + value)
            .then(res => {
                console.log(res);
                for (let i of res.data) {
                    let a = document.createElement('a')
                    a.innerHTML = i.title
                    a.href = '/pages/pagetitle/?id=' + i.id
                    a.style.color = 'black'
                    search_text.append(a)
                    console.log(a);
                }

            })
    }
}
export function footer() {
    let main = document.querySelector('main')
    let footer = document.createElement('footer')
    let wrap = document.createElement('div')
    let uzum_foot = document.createElement('div')
    let About_Us = document.createElement('div')
    let For_users = document.createElement('div')
    let For_entrepreneurs = document.createElement('div')
    let Uzum_on_social_networks = document.createElement('div')
    let About_Us_p = document.createElement('p')
    let About_Us_p_sec = document.createElement('p')
    let For_users_p = document.createElement('p')
    let For_users_p_sec = document.createElement('p')
    let For_entrepreneurs_p = document.createElement('p')
    let For_entrepreneurs_p_sec = document.createElement('p')
    let Uzum_on_social_networks_imgs = document.createElement('img')
    let Uzum_on_social_networks_img = document.createElement('img')
    let Uzum_on_social_networks_img_tel = document.createElement('img')
    let Uzum_on_social_networks_img_you = document.createElement('img')
    let div_imgs = document.createElement('div')
    let abouth1 = document.createElement('h1')
    let usersh1 = document.createElement('h1')
    let entrehreneursh1 = document.createElement('h1')
    let Uzum_on_social_networkh1 = document.createElement('h1')


    wrap.classList.add('wrap')
    uzum_foot.classList.add('uzum_foot')
    About_Us.classList.add('information')
    For_entrepreneurs.classList.add('information')
    For_users.classList.add('information')
    Uzum_on_social_networks.classList.add('information')

    footer.style.marginTop = '30px'
    About_Us_p.innerHTML = 'Пункты выдачи'
    About_Us_p_sec.innerHTML = 'Вакансии'
    For_users_p.innerHTML = 'Связаться с нами'
    For_users_p_sec.innerHTML = 'Вопрос - Ответ'
    For_entrepreneurs_p.innerHTML = 'Продавайте на Uzum'
    For_entrepreneurs_p_sec.innerHTML = 'Вход для продавцов'
    abouth1.innerHTML = 'О нас'
    usersh1.innerHTML = 'Пользователям'
    entrehreneursh1.innerHTML = 'Для предпринимателей'
    Uzum_on_social_networkh1.innerHTML = 'Uzum в соцсетях'
    Uzum_on_social_networks_img.src = '/public/img/youtube.png'
    Uzum_on_social_networks_imgs.src = '/public/img/facebook.png'
    Uzum_on_social_networks_img_tel.src = '/public/img/instagram.png'
    Uzum_on_social_networks_img_you.src = '/public/img/telegram.png'
    div_imgs.style.display = 'flex'
    div_imgs.style.gap = '10px'



    main.after(footer)
    footer.append(wrap, uzum_foot)
    wrap.append(uzum_foot)
    uzum_foot.append(About_Us, For_users, For_entrepreneurs, Uzum_on_social_networks)
    About_Us.append(abouth1, About_Us_p, About_Us_p_sec)
    For_users.append(usersh1, For_users_p, For_users_p_sec)
    For_entrepreneurs.append(entrehreneursh1, For_entrepreneurs_p, For_entrepreneurs_p_sec)
    Uzum_on_social_networks.append(Uzum_on_social_networkh1, div_imgs)
    div_imgs.append(Uzum_on_social_networks_imgs, Uzum_on_social_networks_img, Uzum_on_social_networks_img_tel, Uzum_on_social_networks_img_you)
}



export function reload_bucket(arr, place) {
    place.innerHTML = ""
    let likes = JSON.parse(localStorage.getItem("likes")) || []
    let total_price = document.querySelector('.tovar p')
    let strong = document.querySelector('.tovar strong');
    for (let i of arr) {
        let container = document.createElement('div')
        let img = document.createElement('img')
        let div_p = document.createElement('div')
        let p = document.createElement('p')
        let p_color = document.createElement('p')
        let p_type = document.createElement('p')
        let counter = document.createElement('div')
        let counter_plus = document.createElement('button')
        let counter_minus = document.createElement('button')
        let counter_input = document.createElement('input')
        let div_p_end = document.createElement('div')
        let div_delete = document.createElement('span')
        let delete_img = document.createElement('img')
        let p_price = document.createElement('p')
        let p_sale = document.createElement('p')
        let input_chek = document.createElement('input')




        container.classList.add('bucket_container')
        img.classList.add('bucket_container_img')
        div_p.classList.add('p_container')
        counter.classList.add('counter')

        img.src = i.media[0]
        p.innerHTML = i.title
        div_delete.style.display = 'flex'
        div_delete.style.gap = '10px'
        div_delete.style.alignItems = 'center'
        input_chek.type = 'checkbox'
        div_delete.innerHTML = 'delete'
        p_type.innerHTML = 'Категория: ' + i.type
        p_color.innerHTML = 'Цвет: ' + i.colors[0]
        strong.innerHTML = JSON.parse(localStorage.getItem('likes')).length
        delete_img.src = '/public/img/delete.png'
        let count = JSON.parse(localStorage.getItem('count')) || []
        count.forEach(el => {
            counter_input.value = el
        })
        counter_plus.innerHTML = '+'
        counter_minus.innerHTML = '-'
        p_price.innerHTML = parseFloat(i.price).toLocaleString('us-US') + ' сум'
        if (i.salePercentage > 0) {
            p_sale.innerHTML = Math.ceil((i.price * i.salePercentage) / 100).toLocaleString('us-US') + ' сум'
            p_price.style.color = 'grey'
            p_price.style.textDecoration = 'line-through'
        }

        place.append(container)
        container.append(input_chek, img, div_p, counter, div_p_end, div_delete)
        div_delete.append(delete_img)
        counter.append(counter_plus, counter_input, counter_minus)
        div_p.append(p, p_type, p_color)
        div_p_end.append(p_sale, p_price)


        i.id = String(i.id)

        div_delete.onclick = () => {
            if (likes.includes(i.id)) {
                likes = likes.filter(el => el !== i.id);
                localStorage.setItem("likes", JSON.stringify(likes));
                container.remove()
                location.assign('/pages/basket/')
            } else {
                if (likes.indexOf(i.id) === -1) {
                    likes.push(i.id);
                    localStorage.setItem("likes", JSON.stringify(likes));
                }
            }

        }
        img.onclick = () => {
            location.assign('/pages/pagetitle/?id=' + i.id)
        }

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
            p_sale.innerHTML = `${i.price}` * counter_input.value + 'сум'
        }
        if (i.title.length > 20) {
            p.innerHTML = i.title.slice(0, 18) + '...'
        }
        let total = 0
        arr.forEach(product => {
            total += product.price * counter_input.value
            total_price.innerHTML = total + 'сум'
        });

    }

}

export function reload_likes(arr, place) {
    place.innerHTML = ""
    let Favorite = JSON.parse(localStorage.getItem("favorite")) || []
    let likes = JSON.parse(localStorage.getItem("likes")) || []
    for (let item of arr) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement('p')
        let p_current = document.createElement('p')
        let strong = document.createElement('strong')
        let img_like = document.createElement('img')
        let img_shop = document.createElement('img')
        let container_shop = document.createElement('div')
        let star = document.createElement('img')
        let star_p = document.createElement('p')
        let container_star = document.createElement('div')


        div.classList.add('block')
        img.classList.add('block_img')
        p.classList.add('block_p')
        strong.classList.add('block_strong')
        p_current.classList.add('block_p_current')
        img_like.classList.add('like')
        img_shop.classList.add('shop')
        strong.style.color = '#ccc'
        strong.style.textDecoration = 'line-through'
        container_star.classList.add('star')
        container_shop.classList.add('star')
        img.classList.add('img_animation')

        img.src = item.media[0]
        img_like.src = '/public/img/Vector_like.png'
        img_shop.src = '/public/img/shopping-cart 1.png'
        star.src = '/public/img/star.svg'
        p.innerHTML = item.title
        star_p.innerHTML = item.rating
        p_current.innerHTML = parseFloat(item.price).toLocaleString('us-US') + ' сум'
        if (item.salePercentage > 0) {
            strong.innerHTML = Math.ceil((item.price * item.salePercentage) / 100) + ' сум'
        }

        place.append(div)
        div.append(img_like, img, p, container_star, strong, container_shop)
        container_star.append(star, star_p,)
        container_shop.append(p_current, img_shop)
        img.onclick = () => {
            location.assign('/pages/pagetitle/?id=' + item.id)
        }
        item.id = String(item.id)

        img_like.onclick = (e) => {
            e.preventDefault()
            let id_str = JSON.parse(item.id)
            console.log(id_str);
            if (Favorite.includes(item.id)) {
                Favorite = Favorite.filter(el => el !== item.id);
                localStorage.setItem("favorite", JSON.stringify(Favorite));
                div.remove()
                location.assign('/pages/Favorite/')
            } else {
                if (Favorite.indexOf(item.id) === -1) {
                    Favorite.push(item.id);
                    localStorage.setItem("favorite", JSON.stringify(Favorite));

                }
            }
        }
        img_shop.onclick = (e) => {
            e.preventDefault();
            if (likes.includes(item.id)) {
                alert('Это товар уже у вас в корзине')
                return;
                likes = likes.filter(el => el !== item.id);
                localStorage.setItem("likes", JSON.stringify(likes));
                alert('Добавлено')
            } else {
                if (likes.indexOf(item.id) === -1) {
                    likes.push(item.id);
                    localStorage.setItem("likes", JSON.stringify(likes));
                }
            }
        }



        if (item.title.length > 20) {
            p.innerHTML = item.title.slice(0, 25) + '...'
        }

    }

}