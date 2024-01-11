let user = localStorage.getItem('user')

 user = user ? JSON.parse(user) : null 

export { user }