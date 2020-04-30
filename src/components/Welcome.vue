<template>
    <div class="">
    <v-card
        class="mx-auto mt-10 grey lighten-5"
        max-width="344"
    >
        <div class="mt-4 pt-4">
            <h2 class="display-1 text-center cyan--text text--darken-3">Welcome</h2>  
        </div> 
        <v-card-text>  
            <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="onSubmit">
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                    <v-text-field
                        color="cyan darken-3"
                        v-model="name"
                        :rules="nameRules"
                        :counter="10"
                        label="Enter your name"
                        required
                    ></v-text-field>
                    </v-col>

                </v-row>
                </v-container>
                <v-btn
                    depressed
                    :disabled="!valid"
                    dark          
                    color="cyan darken-3"
                    @click="onSubmit"
                >
                Enter
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
   </div>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
    }),
    methods: {
        onSubmit() {
            console.log(this.name)
            this.$refs.form.validate()
            if(this.name) {
                this.$router.push({ name: 'Chat', params: { name: this.name }})
            } else {
                null
            }
            
        }
    }
}
</script>

<style lang="sass" scoped>
    .theme--dark.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined) 
        color: #FAFAFA !important
        background-color: darken(#E0E0E0, 10%) !important

</style>