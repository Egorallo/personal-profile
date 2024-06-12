<template>
  <div class="card-container">
    <CardTemplate v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description"
      :button-text="card.buttonText" />
  </div>
</template>


<script>
import CardTemplate from './../components/CardTemplate.vue'
import { cards } from './../data'

export default {
  components: { CardTemplate },
  computed: {
    cards() {
      return cards;
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start
}
</style>