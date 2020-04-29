<template>
    <div>

    <v-card
        class="mx-auto"
        max-width="344"
    >
        <div class="mt-4 pt-4">
            <h2 class="display-1 text--primary text-center">Welcome</h2>  
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
                    :disabled="!valid"
                    text
                    color="deep-purple accent-4"
                    @click="onSubmit"
                >
                Submit
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