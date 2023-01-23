<template>
  <input :type="aType" :placeholder="aText" class="input" />
</template>

<script >
export default {
  name: "InputField",
  props: ["aText", "aType"],
};


</script>

<style lang="scss">
.input {
  width: 80%;
  font-size: 1.6rem;
  border-radius: 4rem;
  border: 0.1rem solid $primary-color;
  color: $primary-color;
  padding: 1.2rem 1.5rem;

  &:focus {
    outline: none;
    border: 0.1rem solid $tertiary-color;
  }
}
</style>
