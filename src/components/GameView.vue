<script>
import GlassObjectView from "@/components/GlassObjectView";

export default {
  name: 'GameView',
  components: {
    GlassObjectView
  }
}
</script>

<template>
  <div><b>Color - Puzzle</b></div>

  <div class="game-container">
    <GlassObjectView :topWidth="70" :height="100" :max-layers="5"/>
  </div>
</template>

<style scoped>
.game-container {
  padding: 10px;
  background-color: black;
}
</style>