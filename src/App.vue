<template>
  <div id="app" class="columns is-centered">
    <div class="column is-6">
      <Grid />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Grid from '@/components/Grid.vue';

@Component({
  components: {
    Grid,
  },
})

export default class App extends Vue {}
App.use(Buefy);
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html {
  background-color: #555555;
}

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
