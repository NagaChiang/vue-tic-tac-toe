<template>
  <div class="grid">
    <tile /><tile /><tile />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Tile from '@/components/Tile.vue'

@Component({
  components: {
    Tile
  },
})

export default class Grid extends Vue {

}
</script>

<style scoped>
.grid {
  margin: auto;
}
</style>