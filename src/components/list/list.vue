<template>
    <div class="offers-list">
        <div class="offers-list__col" v-for="item in data">
            <v-item :data="item" :current="current"></v-item>
        </div>
    </div>
</template>


<script>
    // Components
    import item from '../item/item.vue'

    export default {
        name: "v-list",

        props: {
            data: {
                type: Array,
                default: function () {
                    return []
                }
            },

            current: {
                type: Boolean,
                default: true
            }
        },

        data: function() {
            return {
                
            }
        },

        components: {
            "v-item": item
        }
    };
</script>