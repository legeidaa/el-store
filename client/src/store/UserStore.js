export default {
    state() {
        return {
            count: 0,
            isAuth: false,
            user: {}
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setIsAuth(state) {
            state.isAuth = !state.isAuth
        },
        setUser(state, user) {
            state.user = user
        },
    },
    getters: {
        getIsAuth(state) {
            return state.isAuth
        },
        getUser(state) {
            return state.user
        },
    },
}