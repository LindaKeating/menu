<template>
  <i :class="{'fa fa-caret-down': open, 'fa fa-caret-right': !open }"/>
</template>
<script>
  import t from 'vue-types';
  export default {
    props: {
      open: t.bool.def(false)
    }
  }
</script>
<style lang="scss" scoped>
</style>