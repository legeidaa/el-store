export default {
    state() {
        return {
            types: [
                {id: 1, name: "Холодильники"},
                {id: 2, name: "Смартфоны"},
            ],
            brands: [
                {id: 1, name: "Холодильники"},
                {id: 2, name: "Смартфоны"},
            ],
            devices: [
                {id: 1, name: "Iphone 12 pro", rating: 5, img: 'somepath'},
            ]
        }
    },
    mutations: {
        setIsTypes(state, types) {
            state.types = types
        },
        setBrands(state, brands) {
            state.brands = brands
        },
        setDevices(state, devices) {
            state.devices = devices
        },
    },
    getters: {
        types(state) {
            return state.types
        },
        brands(state) {
            return state.brands
        },
        devices(state) {
            return state.devices
        },
    },
}