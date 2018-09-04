<template>
    <ul class="Menu">
        <root-link 
          v-for="link in menuConfig"
          :text="link.text"
          :action="link.action"
          :child-links="link.children"
          :icon="link.icon"
          :is-selected="link.isSelected"
          :is-full-view="link.isFullView"
          :colour="link.colour"
          >
        </root-link>
    </ul>
</template>
<script>
import RootLink from './RootLink';
import t from 'vue-types';

const menuConfig = require('./MenuConfig');

export default {
    name: 'Menu',
    components: {
        RootLink
    },
    data(){
        return {
            menuConfig: menuConfig.menuConfig
        }
    }
}
</script>
<style lang="scss" scoped>
  .Menu {
      height: 100vh;
      background-color: #f6f4f4;
      max-width: 300px; 
  }
</style>