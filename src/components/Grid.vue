<template>
  <div class="grid">
    <table>
      <tbody>
        <tr v-for="(column, x) in tileMatrix" :key="x">
          <td v-for="(tile, y) in column" :key="y">
            <Tile
              v-bind:x="x"
              v-bind:y="y"
              v-bind:value="tile"
              v-bind:isHighlighted="isReadyToHighlight && isHighlightedTile(x, y)"
              v-bind:isGameOver="isGameOver"
              v-on:tileClicked="onTileClicked"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Tile, TileValueTypes } from '@/components/Tile.vue';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    Tile
  },
})

export default class Grid extends Vue {
  @Prop({ default: 0 })
  public size!: number; 

  public tileMatrix: TileValueTypes[][] = [];
  public currentPlayerTile: TileValueTypes = TileValueTypes.None;
  public isGameOver: boolean = false;
  public highlightedTilePoints: Point[] = [];
  public isReadyToHighlight: boolean = false;

  public created(): void {
    this.reset();
    this.$parent.$on('restart', this.reset);
  }

  public onTileClicked(x: number, y: number): void {
    if (this.isGameOver) {
      return;
    }

    if (this.tileMatrix[x][y] != TileValueTypes.None) {
      return;
    }

    this.setTile(x, y, this.currentPlayerTile);
    this.currentPlayerTile = this.currentPlayerTile === TileValueTypes.O ? TileValueTypes.X : TileValueTypes.O;
    this.$emit('playerChanged', this.currentPlayerTile);

    const connectionPoints = this.getConnectionPoints();
    if (this.isFull() || connectionPoints.length > 0) {
      this.isGameOver = true;
      this.highlightedTilePoints = connectionPoints;
      setTimeout(() => { this.isReadyToHighlight = true; }, 1000);

      const firstPoint: Point = connectionPoints[0];
      const winner: TileValueTypes = firstPoint ? this.tileMatrix[firstPoint.x][firstPoint.y] : TileValueTypes.None;
      this.$emit('gameOver', winner);
    }
  }

  public reset(): void {
    this.isGameOver = false;
    this.currentPlayerTile = TileValueTypes.X;
    this.highlightedTilePoints = [];
    this.isReadyToHighlight = false;

    this.tileMatrix = new Array<TileValueTypes[]>(this.size);
    for (let i = 0; i < this.size; i++) {
      this.tileMatrix[i] = new Array<TileValueTypes>(this.size);
      this.tileMatrix[i].fill(TileValueTypes.None);
    }

    this.$emit('playerChanged', this.currentPlayerTile);
  }

  public setTile(x: number, y: number, newTileValue: TileValueTypes): void {
    this.tileMatrix = Object.assign({}, this.tileMatrix);
    this.tileMatrix[x][y] = newTileValue;
  }

  public isHighlightedTile(x: number, y: number): boolean {
    return this.highlightedTilePoints.find(point => point.x == x && point.y == y) != undefined;
  }

  private isFull(): boolean {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.tileMatrix[x][y] === TileValueTypes.None) {
          return false;
        }
      }
    }
    
    return true;
  }

  private getConnectionPoints(): Point[] {
    // Horizontal
    for (let y = 0; y < this.size; y++) {
      let isAllSame = true;
      let points: Point[] = [];
      const first = this.tileMatrix[0][y];
      for (let x = 0; x < this.size; x++) {
        points.push(new Point(x, y));
        if (first === TileValueTypes.None || this.tileMatrix[x][y] != first) {
          isAllSame = false;
          break;
        }
      }

      if (isAllSame) {
        return points;
      }
    }

    // Vertical
    for (let x = 0; x < this.size; x++) {
      let isAllSame = true;
      let points: Point[] = [];
      const first = this.tileMatrix[x][0];
      for (let y = 0; y < this.size; y++) {
        points.push(new Point(x, y));
        if (first === TileValueTypes.None || this.tileMatrix[x][y] != first) {
          isAllSame = false;
          break;
        }
      }

      if (isAllSame) {
        return points;
      }
    }

    // Diagonal
    let first = this.tileMatrix[0][0];
    let isAllSame = true;
    let points: Point[] = [];
    for (let x = 0, y = 0; x < this.size && y < this.size; x++, y++) {
      points.push(new Point(x, y));
      if (first === TileValueTypes.None || this.tileMatrix[x][y] != first) {
        isAllSame = false;
        break;
      }
    }

    if (isAllSame) {
      return points;
    }

    // Another diagonal
    first = this.tileMatrix[0][this.size - 1];
    isAllSame = true;
    points = [];
    for (let x = 0, y = this.size - 1; x < this.size && y >= 0; x++, y--) {
      points.push(new Point(x, y));
      if (first === TileValueTypes.None || this.tileMatrix[x][y] != first) {
        isAllSame = false;
        break;
      }
    }

    if (isAllSame) {
      return points;
    }

    return [];
  }
}

class Point {
  public x: number = 0;
  public y: number = 0;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}
</script>

<style scoped>
.grid {
  background-color: #e3f09b;
  border-radius: 5px;
  padding: 5px;
}

td {
  padding: 5px;
}
</style>