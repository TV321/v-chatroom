<template>
    <div>
        <h2 class="display-2">Chatroom {{ name }}</h2>
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