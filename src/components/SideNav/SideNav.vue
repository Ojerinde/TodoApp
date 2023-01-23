<template>
  <section class="sidenav">
    <router-link to="/alltasks"><my-button>Add task</my-button></router-link>
    <task-categories></task-categories>
  </section>
</template>
<script>
import MyButton from "../UI/Button.vue";
import TaskCategories from "./TaskCategories.vue";
export default {
  name: "SideNav",
  components: {
    MyButton,
    TaskCategories,
  },
};
</script>
<style lang="scss">
.sidenav {
  flex-basis: 30%;
  border-right: 0.1rem solid rgba($tertiary-color, 0.5);
}
</style>
