<template>
    <div class="checkbox" :class="{ 'checkbox-active': state, 'checkbox-disabled': disabled }" @click.event="toggle()" tabindex="0"></div>
</template>

<style>
    .checkbox {
        width: 50px;
        height: 26px;
        position: relative;
        cursor: pointer;
    }
    .checkbox:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 26px;
        border-radius: 13px;
        background: #CDD1DA;
        box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
        transition: .2s;
    }
    .checkbox:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 22px;
        height: 22px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0 2px 5px rgba(0,0,0,.3);
        transition: .2s;
    }
    .checkbox-active:before {
        background: #9FD468;
    }
    .checkbox-active:after {
        left: 26px;
    }
</style>

<script>
    export default {
        name: 'checkbox',

        data () {
            return {
                state: ''
            }
        },

        props: {
            value: {
                default: null
            },

            label: {
                type: String,
                default() {
                    return ''
                },
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        watch: {
            value: function (val) {
                if(val == undefined || val == null || typeof val == "undefined"){
                    this.state = false
                    this.$emit('input', this.state)
                } else {
                    this.state = val
                }
            }
        },

        methods: {
            toggle() {
                if(!this.disabled) {
                    this.state = !this.state
                    this.$emit('input', this.state)
                }
            }
        },

        created() {
            this.state = this.value 
        }
    }
</script>
