<template>
    <div>
        <v-card
            class="mx-auto text-left mt-5"
            max-width="600"
        >
            <div v-for="msg in messages" :key="msg.id">
            <v-card-text>
            
                <p class="text--primary body-1">{{ msg.message }}</p>
                <div class="text--primary">
                    {{ msg.name }}
                </div>
                <div class="">
                    {{ msg.time }}
                </div>
            
            </v-card-text>
            <v-divider></v-divider>
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
            this.messages = [...msgList]
        }
    }
}
</script>