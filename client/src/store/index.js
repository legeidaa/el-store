import { createStore } from 'vuex'
import DeviceStore from './DeviceStore'
import UserStore from './UserStore'

// Create a new store instance.
export default createStore({
    modules: {
        UserStore,
        DeviceStore,
    },
    actions: {
        log() {
            this.$router.options.routes
        },
    }
})