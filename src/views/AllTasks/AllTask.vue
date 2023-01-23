<template>
  <div class="alltasks">
    <InputField :a-text="placeholder" :a-type="text" />
    <MyButton>Create Task</MyButton>
    <TaskItem />
  </div>
</template>

<script>
import InputField from "../../components/UI/Input.vue";
import MyButton from "../../components/UI/Button.vue";
import TaskItem from "./TaskItem.vue";
export default {
  name: "AllTasks",
  components: { InputField, MyButton, TaskItem },
  data() {
    return {
      text: "text",
      placeholder: "Add a new task here",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.alltasks {
  flex-basis: 70%;
  text-align: center;
}
</style>
