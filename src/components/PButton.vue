<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PButton'
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.btn {
  background-color: $color-primary;
  color: $color-text-primary;
  font-size: $font-size;
  font-family: $font-family;
  padding: $spacing-small $spacing-medium;
  border-radius: $border-radious;


  width: 100%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color .15s, transform .15s;

  &:hover {
    background-color: $color-primary-hover;
    transform: translateY(-1px);
    box-shadow: 0 3px 2px rgba(0,0,0,0.2);
  }

  &:active {
    background-color: $color-primary-active;
  }
}
</style>
