const authProvider = {
    // authentication
    login: params => {        
        localStorage.setItem('auth', true);
        return Promise.resolve()
    },
    checkError: error => Promise.resolve(),
    checkAuth: params => {
        const auth = localStorage.getItem('auth')
        
        if(auth) {
            return Promise.resolve()
        } else {
            return Promise.reject()
        }
    },
    logout: () => {
        localStorage.removeItem('auth')
        return Promise.resolve()
    },
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),
}

export default authProvider