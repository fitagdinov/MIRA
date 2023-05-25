import $api from '../action/repos'




export default class AuthService {
    static async login( fio, birthDate ) {
        return $api.post('/auth_grand ', {fio, birthDate})
    }
}