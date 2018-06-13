<template>
<div class="component">
    <h3> You may view the user Details here </h3>
    <p> Many Details </p>
    <p> User Name: {{ myName }} </p>
    <p> User Age: {{ userAge }} </p>
    <button class="btn btn-primary" @click="resetName"> Reset name </button>
</div>
<!-- <div>
    <p> Server Status: {{ status }} </p>
    <hr>
    <button @click="changeStatus">Change status</button>
</div> -->
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {
        myName:  {
            type: String,
            required: true
            }, 
        userAge: Number
        
    },
    methods: {
        resetName() {
             this.myName = 'Max';
             this.$emit('nameWasReset', this.myName);
            }       
    },
    created() {
        eventBus.$on('ageWasReset', (age) => {
            this.userAge = age;
        });

    }
} 
</script>

<style lang="scss">

</style>
 