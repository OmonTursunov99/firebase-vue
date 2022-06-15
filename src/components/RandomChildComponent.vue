<template>
    <div>
        <h2>Child Component</h2>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    name: "RandomChildComponent",
    inject: ['messaging'],
    mounted() {
        
        console.log('Firebase cloud messaging object', this.$messaging)
    },
    setup() {
        const messaging = inject('messaging')
        console.log('Firebase cloud messaging object', messaging)
        messaging.getToken({ vapidKey: 'BCCOm39UIB5JnU637__0geYHE76hAhCXJQa5kzFi-WeJyYaxy8iiWRjIBVz6XSKDDnH5aRwTASFo1jp8_6i6WzY' })
    }
}
</script>
