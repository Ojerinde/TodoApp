<template>
  <div>
    <h2>{{ name.name }}</h2>
    <h2>{{ name.age }}</h2>
  </div>
  <div>
    <h3>{{ student.name }}</h3>
    <h3>{{ student.age }}</h3>
  </div>
  <button @click="changeName">Change Nme</button>
</template>

<!-- The setup attributes is essential -->
<script setup>
import { ref, reactive } from "vue";
// ALl variables declared here is available in the templates
const name = ref({ name: "Joel", age: 25 });
const student = reactive({ name: "Joel", age: 25 });

const changeName = () => {
  name.value.name = "John";
  student.name = "John";
};
</script>
