<template>
    <div class="input-container">
        <v-form @submit.prevent="addMessage" ref="form">
            <v-text-field label="New Message:" v-model="message" :rules="msgRules" @blur="resetValid"></v-text-field>
        </v-form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'MessageInput',
    props: ['name', 'updateMsgs'],
    data: () => ({
        message: '',
        msgRules: [
            v => !!v || 'Enter a message',
        ],
        messages: []
    }),
    methods: {
        addMessage() {
            console.log(this.message, this.name, Date.now())
            this.$refs.form.validate()
            if(this.message) {
                db.collection('messages').add({
                name: this.name,
                message: this.message,
                time: Date.now()
                }).catch(console.log)
                this.$refs.form.reset()
            }
        },
        resetValid() {
            this.$refs.form.resetValidation()
        }
    },
    created() {

        db.collection('messages').orderBy('time').onSnapshot(snap =>{
            console.log(snap.docChanges())
            snap.docs.forEach(doc => {
                let data = doc.data()
                let obj = {
                    name: data.name,
                    message: data.message,
                    time: data.time
                }
                obj.id = doc.id
                this.messages = [...this.messages, obj]
            })
            this.updateMsgs(this.messages)
            this.messages = []
        })
    }
}
</script>

<style lang="sass" scoped>
    .input-container
        width: 100%
</style>

