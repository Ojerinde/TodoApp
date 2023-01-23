<template>
  <button class="button" @click="clickHandler">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "MyButton",
  methods: {},
};
</script>

<style lang="scss">
.button {
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 1rem 0;
  font-size: 1.6rem;
  background-color: $primary-color;
  color: $secondary-color;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
</style>
