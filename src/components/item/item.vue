<template>
    <div class="offers-item">
        <div class="offers-item__poster" v-if="poster">
            <div class="offers-item__poster__case">
                <img :src="poster" :alt="data.title">
            </div>
        </div>
        <div class="offers-item__content">
            <div class="offers-item__title">{{ data.subject }}</div>
            <div class="offers-item__grade" v-if="grade">{{ grade }}</div>
            <div class="offers-item__genre">{{ data.genre }}</div>
            <div class="offers-item__price">{{ price }}</div>

            <div class="btn" @click="openModal">
                Попробовать
            </div>
        </div>
    </div>
</template>


<script>
    // MapState
    import { mapState } from 'vuex'

    // Functions
    import decline from '../../functions/decline.js'

    export default {
        name: "v-item",

        props: {
            data: {
                type: Object,
                default: function () {
                    return {}
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

        computed: {
            grade() {
                let grade = this.data.grade.split(';');
                
                if(grade.length == 1) {
                    return grade[0] + " класс"
                }
                else if(grade.length > 1){
                    return Math.min.apply(null, grade) + " - " + Math.max.apply(null, grade) + " классы"
                }
                else {
                    return false
                }
            },

            poster() {
                if(this.data.courseId) {
                    return this.config.static + this.config.folder + "/" + this.data.courseId + ".png"
                } else {
                    return false
                }
            },

            price() {
                if(this.current) {
                    return this.data.price + " " + decline.sub(this.data.price, ["рубль", "рубля", "рублей"])
                } else {
                    return this.data.priceBonus + " " + decline.sub(this.data.priceBonus, ["бонус", "бонуса", "бонусов"])
                }
            },

            ...mapState({
                config (state) {
                    return state.config
                },
            })
        },

        methods: {
            openModal() {

            }
        }
    };
</script>

<style lang="sass?outputStyle=expanded" src="./item.scss"></style>