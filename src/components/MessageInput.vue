<template>
    <div class="input-container">
        <v-form @submit.prevent="addMessage" ref="form">
            <v-text-field label="New Message:" v-model="message" :rules="msgRules" @blur="resetValid" color="cyan darken-3"></v-text-field>
        </v-form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'

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
            snap.docChanges()
                .forEach(change => {
                    change.doc.id
                    let data = change.doc.data()
                    let obj = {
                        name: data.name,
                        message: data.message,
                        time: moment(data.time).format('lll')
                    }
                    obj.id = change.doc.id
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

