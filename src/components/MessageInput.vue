<template>
    <div class="input-container">
        <v-form @submit.prevent="addMessage" ref="form">
            <v-text-field label="New Message:" v-model="message"></v-text-field>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'MessageInput',
    props: ['name'],
    data: () => ({
        message: '',
    }),
    methods: {
        addMessage() {
            console.log(this.message, this.name, Date.now())
            this.$refs.form.reset()
        }
    }
}
</script>

<style lang="sass" scoped>
    .input-container
        width: 100%
</style>

