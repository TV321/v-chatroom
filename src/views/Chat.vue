<template>
    <div class="ma-9">
        <h2 class="display-2">Chatroom</h2>
            <h3>Name: <span class="cyan--text text--darken-3">{{ name }}</span></h3>
        <ChatCard :name="name"/>
    </div>
</template>

<script>
import ChatCard from '@/components/ChatCard'
export default {
    props: ['name'],
    name: 'Chat',
    components: {
        ChatCard
    } 
}
</script>