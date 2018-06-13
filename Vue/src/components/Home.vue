<template>
<div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User! </p>
    <button class="btn btn-primary" @click="changeName"> Change my name </button>
    <hr>

    <app-server-status :myName="name" @nameWasReset="name = $event" :userAge="age"></app-server-status>

     <hr>
    <app-footer :userAge="age" @ageWasReset="age = $event"></app-footer>
</div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';
export default { 
    components: {
        'app-server-status': ServerStatus
    },
    data() {
        return {
            name: 'Max',
            age: 27
        };
    },
    methods: {
        changeName() {
            this.name = 'Anna';
        }
    }
}
</script>

<style lang="scss">

</style>
 