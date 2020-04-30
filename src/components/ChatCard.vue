<template>
    <div>
        <v-card
            class="mx-auto text-left mt-5 grey lighten-5"
            max-width="600"
        >
            <div class="msg-container" ref="msg">
            <div v-for="msg in messages" :key="msg.id">
            <v-card-text>
            
                <p class="text--primary body-1">{{ msg.message }}</p>
                <div class="text--primary">
                    {{ msg.name }}
                </div>
                <div class="text--secondary">
                    {{ msg.time }}
                </div>
            
            </v-card-text>
            <v-divider></v-divider>
            </div>
            </div>
            
            <v-card-actions>
                <MessageInput :name="name" :updateMsgs="updateMsgs"/>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import MessageInput from './MessageInput'

export default {
    props: ['name'],
    name: 'ChatCard',
    components: {
        MessageInput
    },
    data: () => ({
        messages: []
    }),
    methods: {
        updateMsgs(msgList) {
            this.messages = [...this.messages, ...msgList]
        }
    },

    watch: {
        messages() {
            this.$nextTick(() => {
                const el = this.$refs.msg
                console.log(el.scrollTop)
                el.scrollTop = el.scrollHeight - el.offsetHeight
                console.log(el.scrollTop, el.scrollHeight, el.offsetHeight)
            })

        }
    }
}
</script>

<style lang="sass" scoped>
    .msg-container
        border-bottom: 1px solid lighten(grey, 30%)
        max-height: 300px
        overflow: auto
        &::-webkit-scrollbar
            width: 6px
        &::-webkit-scrollbar-track
            background: #f1f1f1
        &::-webkit-scrollbar-thumb
            background: #888
        &::-webkit-scrollbar-thumb
            &:hover
                background: #555
</style>