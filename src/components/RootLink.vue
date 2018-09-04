<template>
 <span>
  <li class="RootLink"
    :style="{ '{background-color: `${this.dColour}}': dIsSelected }"
    @click="RootLinkClick"
    @mouseenter="hoverStyle"
    @mouseleave="returnStyle"
  >
   <i :class="dIcon"
      class="RootLink-Icon"
    />
   <span v-if="isFullView"
     class="RootLink-Text">
      {{ dText }}
      <caret v-if="dChildLinks"
        :open="dIsSelected"
      />
   </span>
  </li>
  <ul class="RootLink-Children"
      >
       <transition-group name="list">
          <child-link 
            v-for="(child, index) in dChildLinks"
            v-show="dChildLinks && dIsSelected && dIsFullView"
            :key="index"
            :text="child.name"
            :action="child.action"
          >
          </child-link>
        </transition-group>
   </ul>
</span>
</template>
<script>
    import t from 'vue-types';
    import ChildLink from './SecondaryLink';
    import Caret from './Caret';
    export default {
        name: 'RootLink',
        props: {
           text: t.string.def('secondary link'),
           action: t.func.def(() => {}),
           childLinks: t.array,
           icon: t.string.def('fa fa-bath'),
           isSelected: t.bool,
           isFullView: t.bool,
           colour: t.string,
        },
        data() {
            return {
                dText: this.text,
                dAction: this.action,
                dChildLinks: this.childLinks,
                dIcon: this.icon,
                dIsSelected: this.isSelected,
                dIsFullView: this.isFullView,
                dColour: this.colour,
            }
        },
        components: {
            ChildLink,
            Caret,
        },
        computed: {
            isSelectedStyle() {
                return { 'background-color': this.dColour }
            }
        },
        methods: {
            RootLinkClick() {
                this.action();
                return this.dIsSelected = !this.dIsSelected;
            },
            hoverStyle(event) {
                return event.target.style.backgroundColor = this.dColour;
            },
            returnStyle(event) {
                return event.target.style.backgroundColor = '#f6f4f4'
            }
        }
    }
</script>
<style lang="scss" scoped>
.RootLink {
    padding: 15px;
    text-align: left;
    &-Icon {
        color: white;
        padding-right: 10px;
    }
    &-Text {

    }
    &-Children {

    }
}
</style>
<style>
    .list-enter {
      opacity: 0;
    }

    .list-enter-active {
        animation: slide-in .5s ease-out forwards;
    }

    .list-leave-to, .list-leave-active {
        opacity: 0;
    animation: slide-out .5s ease-out forwards;
    }

    @keyframes slide-in {
        from { height: 0; } to { height: 40px; }
    }

    @keyframes slide-out {
        from { height: 40px; } to { height: 0; }
    }
</style>