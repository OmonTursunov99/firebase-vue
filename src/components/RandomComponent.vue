<template>
    <section>
        <h2>Random Component</h2>
        <RandomChildComponent />
    </section>
</template>

<script>
import RandomChildComponent from "@/components/RandomChildComponent";
export default {
    name: "RandomComponent",
    components: {RandomChildComponent},
    mounted () {
        console.log('Firebase cloud messaging object', this.$messaging);
    }
}
</script>
