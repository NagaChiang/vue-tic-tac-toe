<template>
  <div
    class="tile"
    v-bind:class="{ 'disable-hover': value != 0 || isGameOver}"
    v-on:click="$emit('tileClicked', x, y)"
  >
    <transition appear name="bounce">
      <i v-if="value == 1" class="far fa-circle" v-bind:class="{ 'enlarge': isHighlighted }" key="1"></i>
      <i v-else-if="value == 2" class="fas fa-times" v-bind:class="{ 'enlarge': isHighlighted }"></i>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator';

enum TileValueTypes {
  None,
  O,
  X,
}

@Component
export default class Tile extends Vue {
  @Prop({ default: 0 })
  public x!: number;

  @Prop({ default: 0 })
  public y!: number;

  @Prop({ default: TileValueTypes.None })
  public value!: TileValueTypes;

  @Prop({ default: false })
  public isHighlighted!: boolean;

  @Prop({ default: false })
  public isGameOver: boolean = false;
}

export {
  Tile,
  TileValueTypes,
};
</script>

<style scoped>
.tile {
  display: flex;
  background-color: #f7d08a;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  transition: transform 0.2s;
}

.tile:not(.disable-hover):hover {
  transform: scale(1.1);
}

.disable-hover {

}

.fa-circle, .fa-times {
  color: #f79f79;
  transition: transform 0.2s;
}

.fa-circle {
  font-size: 56px;
}

.fa-times {
  font-size: 64px;
}

.enlarge {
  transform: scale(2.0);
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.0);
  }
}
</style>