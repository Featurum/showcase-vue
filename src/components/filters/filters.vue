<template>
    <form class="block-padding" v-on:submit.prevent="getFilters()">
        <div class="attach">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <v-select class="filters-select" placeholder="Все предметы" label="label" v-model="guiFilters.subj" :options="options.subj"></v-select>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-12">
                    <v-select class="filters-select" placeholder="Все жанры" label="label" v-model="guiFilters.genre" :options="options.genre"></v-select>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-12">
                    <v-select class="filters-select" placeholder="Все классы" label="label" v-model="guiFilters.grade" :options="options.grade"></v-select>
                </div>

                <div class="col-lg-3 col-md-12">
                    <div class="filters-search">
                        <input type="text" class="v_input filters-search__input" v-model="guiFilters.search" placeholder="Поиск">
                        <button type="submit" class="btn filters-search__btn">
                            <img class="filters-icon" src="src/static/img/search.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    // Components
    import item from '../item/item.vue'

    export default {
        name: "v-list",

        props: {
            options: {
                type: Object,
                default: function () {
                    return {
                        subj: [],
                        genre: [],
                        grade: []
                    }
                }
            },

            subj: {
                type: String,
                dafault: ""
            },
            genre: {
                type: String,
                dafault: ""
            },
            grade: {
                type: String,
                dafault: ""
            },
            search: {
                type: String,
                dafault: ""
            },
        },

        data: function() {
            return {
                guiFilters: {
                    subj: '',
                    genre: '',
                    grade: '',
                    search: ''
                }
            }
        },

        watch: {
            subj(val) {
                this.$set(this.guiFilters, 'subj', val)
            },

            genre(val) {
                this.$set(this.guiFilters, 'genre', val)
            },

            grade(val) {
                this.$set(this.guiFilters, 'grade', val)
            },

            search(val) {
                this.$set(this.guiFilters, 'search', val)
            }
        },

        created() {
            for(let i in this.filters) {
                this.$set(this.guiFilters, i, this.filters[i])
            }
        },

        components: {
            "v-item": item
        },

        methods: {
            // Отправка запроса
            getFilters () {
                this.$emit('input', this.guiFilters)
            }
        }
    };
</script>