<template>
    <div class="col-lg-12">
        <ul class="list-group">
          <server v-for="server in servers" :server="server"></server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

export default {
    components: {
        'server': Server
    },
    props: {
        status: {
            type: String
        }
    },
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Danger'},
            ]
        };
    },
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }

}
</script>

<style>

</style>
