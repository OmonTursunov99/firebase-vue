<template>
    <section>
        <RandomComponent />
    </section>
</template>

<script>
import RandomComponent from "@/components/RandomComponent";
import {provide} from 'vue';
import firebaseMessaging from './firebase';

export default {
    name: 'App',
    components: {RandomComponent},
    provide: {
        messaging: firebaseMessaging
    },
    setup() {
        provide('messaging', firebaseMessaging);
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
