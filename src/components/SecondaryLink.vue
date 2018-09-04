<template>
    <li class="SecondaryLink"
      @click="action"
      :style="linkStyle"
      >
     {{ text }}
    </li>
</template>
<script>
    import t from 'vue-types';
    export default {
        name: 'secondary-link',
        props: {
            text: t.string,
            action: t.func,
            colour: t.string,
        },
        computed: {
            linkStyle() {
                return {
                    'border-left': `1px solid ${this.colour}`
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .SecondaryLink {
        list-style: none;
        text-align: left;
        padding: 15px;
    }
</style>