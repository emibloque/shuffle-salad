<template>
  <div id="app">
    <main>
      <h1>Shuffle Salad</h1>
      <h3>Crea tu ensalada:</h3>
      <ul>
        <li><strong>Base:</strong> {{ base }}.</li>
        <li><strong>Ingredientes:</strong> {{ ingredients }}.</li>
        <li><strong>Salsa:</strong> {{ sauce }}.</li>
      </ul>
      <p-button v-on:click="newSalad">Crear</p-button>
    </main>
  </div>
</template>

<script>
import PButton from './components/PButton.vue'
import { randomSalad } from './services/salad-generator'

export default {
  data: () => ({
    base: '',
    ingredients: '',
    sauce: ''
  }),

  components: {
    PButton
  },

  methods: {
    newSalad() {
      const { base, ingredients, sauce } = randomSalad()
      this.base = base
      this.ingredients = ingredients
      this.sauce = sauce
    }
  }
}
</script>

<style lang="scss">
@import './styles/variables';

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app > main {
  width: 400px;
  padding: $spacing-medium;
}
</style>
