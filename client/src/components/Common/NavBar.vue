<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar__wrapper">
                <nav>
                    <div class="navbar__link" v-for="route in getPaths" :key="route.path">
                        <router-link class="router-link" :to="route.path">{{ route.name }}</router-link>
                    </div>
                </nav>
                <!-- <router-link class="router-link" :to="{ name: 'Device', params: { id: '3333' } }">
                        Device/3333
                    </router-link> -->
                <!-- <button @click="$router.push('/auth')">Auth</button> -->
                <button @click="changeAuth()" style="position: absolute; right: 0; top: 0;">Change Auth</button>
           
                <div class="navbar__wrapper-inner">
                    <div class="navbar__search">
                        <input type="text" placeholder="Поиск продуктов">
                        <button>
                            <svg id="Icon" enable-background="new 0 0 96 96" viewBox="0 0 96 96" height="32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path id="Search"
                                    d="m49.557 18.444c.781.781.781 2.047 0 2.828-.391.391-.902.586-1.414.586s-1.023-.195-1.414-.586c-7.02-7.019-18.438-7.019-25.457 0-.781.781-2.047.781-2.828 0s-.781-2.047 0-2.828c8.577-8.578 22.535-8.578 31.113 0zm40.443 63.556c0 2.137-.832 4.146-2.344 5.656-1.51 1.512-3.519 2.344-5.656 2.344s-4.146-.832-5.656-2.344l-21-21c-.781-.781-.781-2.047 0-2.828l2.828-2.828-4.435-4.435c-5.28 4.623-12.184 7.435-19.737 7.435-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30c0 7.553-2.812 14.457-7.435 19.737l4.435 4.435 2.828-2.828c.781-.781 2.047-.781 2.828 0l21 21c1.512 1.51 2.344 3.519 2.344 5.656zm-30-48c0-14.336-11.663-26-26-26s-26 11.664-26 26 11.663 26 26 26 26-11.664 26-26zm26 48c0-1.068-.416-2.072-1.172-2.828l-19.586-19.586-5.656 5.656 19.586 19.586c1.512 1.512 4.145 1.512 5.656 0 .756-.756 1.172-1.76 1.172-2.828z" />
                            </svg>
                        </button>
                    </div>
                    <a href="#" class="navbar__cart">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" height="32" x="0px" y="0px"
                            viewBox="0 0 450.391 450.391" style="enable-background:new 0 0 450.391 450.391;"
                            xml:space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
                                            c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
                                            c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
                                            C169.796,411.77,158.1,423.465,143.673,423.465z" />
                                        <path
                                            d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
                                            C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
                                            c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z" />
                                        <path
                                            d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
                                            C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
                                            c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
                                            c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
                                            H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
                                            c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
                                            c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z" />
                                    </g>
                                </g>
                            </g>

                        </svg>

                        <div class="navbar__cart-wrapper">
                            <div class="navbar__cart-count">1 товар</div>
                            <div class="navbar__cart-amount">₽ <span>0.00</span></div>
                        </div>
                    </a>
                </div>


            </div>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
    name: 'NavBar',
    data() {
        return {
            // routes: null,
    };      
    },
    props: {
        getPaths: {
            type: Array,
            default: (routes ) => {
                return routes
            }
        },
    },
    computed: {
        ...mapGetters([
            'getIsAuth',
            'getUser'
        ]),
        routes() {
            return this.$router.options.routes
        }
    },
    created() {
        console.log(this.getPaths, this.$router);

        /* this.$watch(
                () => this.$route.params,
                (toParams, previousParams) => {
                    console.log(toParams, previousParams);
                }
            ) */
    },
    methods: {
        changeAuth() {
            this.$store.commit('setIsAuth')
            console.log(this.getIsAuth);
        },
    },
}
</script>
<style>
</style>