import { getData } from "../../modules/helper";

let form_signin = document.forms.signin
let form_input = form_signin.querySelectorAll('input')
let patterns = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^\d+$/i
}
form_input.forEach((inp) => {
    inp.onkeyup = () => {
        if (patterns[inp.name].test(inp.value)) {
            inp.style.borderColor = 'blue'
        } else {
            inp.style.borderColor = 'red'
        }


    }

})
form_signin.onsubmit = (e) => {
    e.preventDefault();
    let error = false
    form_input.forEach(ipn => {
        if (ipn.style.borderColor === 'red') {
            error = true
        }
    })
    if (error) {
        alert('error')
        return
    }
    let data = new FormData(form_signin);
    let user = {
        name: data.get("name"),
        number: data.get("phone"),
    };

    getData("/users?number=" + user.number)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                if (res.data.length === 0) {
                    alert('user not found')
                    return
                }

                if (res.data[0].number === user.number) {
                    alert('welcome')
                    localStorage.setItem('user', JSON.stringify(res.data[0]))
                    location.assign('/')

                } else {
                    alert('wrong number')
                }
            }

        })


};