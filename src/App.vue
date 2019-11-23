<template>
  <div id="app">
    <main>
      <h1>Crea tu ensalada:</h1>
      <ul>
        <li><strong>Base:</strong> {{ base }}</li>
        <li><strong>Ingredientes:</strong> {{ ingredients }}</li>
        <li><strong>Salsa:</strong> {{ sauce }}</li>
      </ul>
      <p-button>Crear</p-button>
    </main>
  </div>
</template>

<script>
import PButton from './components/PButton.vue'

export default {
  data: () => ({
    base: '',
    ingredients: '',
    sauce: ''
  }),

  components: {
    PButton
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app > main {
  min-width: 300px;
}
</style>
