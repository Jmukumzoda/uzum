import { getData, postData } from "../../modules/helper"


let form = document.forms.registration
let form_input = form.querySelectorAll('input')
let patterns = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    phone:  /^\d+$/i
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
form.onsubmit = (e) => {
    e.preventDefault()
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
    let data = new FormData(form);
    let user = {
        name: data.get("name"),
        email: data.get("email"),
        number: data.get("phone")
    }

    if (user.name === "" || user.email === "" || user.number === "") {
        alert("Please enter")
        return
    }

    getData("/users?number=" + user.number)
        .then(res => {
            if (res.status !== 200 && res.status !== 201) return
            if (res.data.length > 0) {
                alert('Phone already has been taken')
                return
            }
            postData('/users', user)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        alert('Account created')
                        form.reset()
                        localStorage.setItem('user', JSON.stringify(user))
                        location.assign('/')
                    }
                })
        })

}

