<template>
    <div>
        <div class="container">
            <h2 v-if="getIsAuth">Админпанель</h2>
            <h2 v-else>Доступ только для администратора</h2>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
			'getIsAuth',
			'getUser'
		]),
    }
}
</script>