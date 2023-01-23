<template>
  <ul class="categories">
    <li
      v-for="(category, index) in categories"
      :key="index"
      class="categories__item"
    >
      <router-link to="/"> {{ category }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TaskCategory",
  props: {
    categories: {
      type: Array,
      default: () => ["All", "Work", "Home", "Personal"],
    },
  },
};
</script>

<style lang="scss">
.categories {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  &__item {
    width: fit-content;
    padding: 1rem 2rem;
    margin: 1rem 0;
    color: $primary-color;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 0.5rem;
    background-color: rgba($tertiary-color, 0.2);
    border: 0.1rem solid rgba($tertiary-color, 0.5);
    box-shadow: $box-shadow;
    animation: slideIn 1.5s ease-in-out;
    transition: all 0.3s;

    &:hover {
      color: rgba($tertiary-color, 0.8);
      box-shadow: unset;
      background-color: rgba($primary-color, 0.5);
    }
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-150%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
