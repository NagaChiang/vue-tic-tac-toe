<template>
  <div id="app">
    <div class="columns is-centered is-vcentered is-mobile">
      <transition appear
        name="animate-flip"
        mode="out-in"
        enter-active-class="animated flipInY faster"
        leave-active-class="animated flipOutY faster"
      >
        <i v-if="currentPlayer == 1" class="far fa-circle" key="1"></i>
        <i v-else-if="currentPlayer == 2" class="fas fa-times" key="2"></i>
      </transition>
    </div>
    <transition appear
      name="animate-zoomIn"
      enter-active-class="animated zoomIn"
    >
      <div class="columns is-centered is-mobile">
        <Grid
          v-bind:size="3"
          v-on:playerChanged="onPlayerChanged"
          v-on:gameOver="onGameOver"
          ref="gameGrid"
        />
      </div>
    </transition>
    <div class="columns is-centered is-mobile">
      <transition
        name="animate-bounceIn"
        enter-active-class="animated bounceIn"
      >
        <button
          v-if="isGameOver"
          class="button is-success is-large"
          v-on:click="onRestartButtonClicked">
            <i class="fas fa-redo-alt"></i>
        </button>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free'
import Grid from '@/components/Grid.vue';
import { Tile, TileValueTypes } from '@/components/Tile.vue';

@Component({
  components: {
    Grid,
    Tile,
  },
})

export default class App extends Vue {
  private isGameOver: boolean = false;
  private winner: TileValueTypes = TileValueTypes.None;
  private currentPlayer: TileValueTypes = TileValueTypes.None;

  private onPlayerChanged(player: TileValueTypes): void {
    this.currentPlayer = player;
  }

  private onRestartButtonClicked(): void {
    this.isGameOver = false;
    this.winner = TileValueTypes.None;
    this.$emit('restart');
  }

  private onGameOver(winner: TileValueTypes): void {
    this.isGameOver = true;
    this.winner = winner;
  }
}
App.use(Buefy);
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html {
  background-color: #87b6a7;
}

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fa-circle, .fa-times {
  margin: auto;
  color: #e3f09b;
  font-size: 32px;
}

.columns {
  margin: 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
