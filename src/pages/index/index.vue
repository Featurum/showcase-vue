<template>
    <div class="wrapper">
        <div class="block-padding header">
            <div class="attach">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <a href="#" class="header-logo">
                            <img src="src/static/img/logo.svg" alt="Облако знаний">
                        </a>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="header-price">
                            <div class="check-price">
                                <span class="check-price__text">За бонусы</span>
                                <v-checkbox class="check-price__input" v-model="current"></v-checkbox>
                                <span class="check-price__text">За рубли</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-filters
            :subj="subj"
            :genre="genre"
            :grade="grade"
            :search="search"
            :options="options"
            v-on:input="newUrl($event)"
        />
            
        
        <div class="block-padding">
            <div class="attach">
                <v-list :data="data" :current="current"></v-list>
            </div>
        </div>

        <v-modal v-model="modal"></v-modal>
    </div>
</template>

<script>
    // MapState
    import { mapState, mapGetters } from 'vuex'

    // Components
    import checkbox from '../../components/checkbox/checkbox.vue'
    import filters from '../../components/filters/filters.vue'
    import list from '../../components/list/list.vue'
    import modal from '../../components/modal/modal.vue'

    export default {
        metaInfo: {
            title: 'Главная'
        },

        data: function() {
            return {
                list: [],
                current: true,
                query: {},
                modal: false
            }
        },

        components: {
            "v-checkbox": checkbox,
            "v-filters": filters,
            "v-list": list,
            "v-modal": modal
        },

        computed: {
            routeQuery() {
                return this.$route.query
            },
            data() {
                return this.$store.getters['offers/getDatd'](this.query)
            },
            ...mapState({
                options(state) {
                    return state.offers.options
                },
                subj(state) {
                    return state.offers.filters.subj
                },
                genre(state) {
                    return state.offers.filters.genre
                },
                grade(state) {
                    return state.offers.filters.grade
                },
                search(state) {
                    return state.offers.filters.search
                },
            }),
        },

        methods: {
            newUrl(event) {
                let query = {}

                for(let i in event) {
                    if(event[i]) {
                        query[i] = event[i]
                    }
                }

                this.$router.push({
                    name: 'index',
                    query: query
                })
            },

            getFilters(query) {
                for(let i in query) {
                    if(query[i]) {
                        this.$store.state.offers.filters[i] = query[i]
                    }
                }
                this.query = query
            },

            openModal() {
                this.modal = true
            }
        },

        created () {
            // Отправка запроса
            this.$store.dispatch('offers/getData').then(
                response => {
                    this.getFilters(this.routeQuery)
                },
                error => {
                    console.error("Ошибка загрузки данных")
                }
            )
        },

        watch: {
            '$route' (to, from) {
                this.getFilters(to.query)
            }
        },
    };
</script>


<style lang="sass?outputStyle=expanded" src="../../styles/grids.scss"></style>
<style lang="sass?outputStyle=expanded" src="../../styles/gui.scss"></style>
<style lang="sass?outputStyle=expanded" src="./index.scss"></style>