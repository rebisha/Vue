<template>
    <div class="col-lg-12">
        <p v-if="!server">Plese select a server</p>
        <p v-else>Server {{ server.id }} selected <br> Status: {{ server.status }}</p>
        <hr>
        <button class="btn btn-primary" @click="resetStatus">Change to normal </button>
    </div>

</template>

<script>
import { serverBus } from '../../main.js';

export default {
    data: function() {
        return {
            server: null
        }
    },
    methods: {
        resetStatus() {
            this.server.status = 'Normal';
        }
    },
    created() {
        serverBus.$on('serverSelected', (server) => {
            this.server = server;
        });
    }
}

</script>

<style>

</style>
