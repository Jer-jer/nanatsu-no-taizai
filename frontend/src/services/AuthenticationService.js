import Api from './Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    getUser (credentials) {
        return Api().get('findUser', credentials)
    }
}


// AuthenticationService.register({
//     firstname: 'Enrico',
//     lastname: 'Pucci',
//     username: 'MadeInHeAvEn',
//     email: 'testing@gmail.com',
//     password: '123456',
//     address: 'Rome, Italy'
// })