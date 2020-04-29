<template>
    <div>
        <v-card
            class="mx-auto text-left mt-5"
            max-width="600"
        >
            <v-card-text>
            <div>
                <p class="text--primary body-1">well meaning and kindly.a benevolent smile</p>
                <div class="text--primary">
                    {{ name }}
                </div>
                <div class="">
                    Time
                </div>
            </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <MessageInput :name="name"/>
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
}
</script>