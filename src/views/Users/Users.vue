<template>
  <section>
    <h1>This is the user page</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "TaskUsers",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      //   const getUsersFun = async () => {
      //     console.log("getUsersFun async");
      //     try {
      //       console.log("getUsersFun async 1");

      //       const response = await fetch(
      //         "https://jsonplaceholder.typicode.com/users"
      //       );
      //       if (!response) {
      //         throw new Error("Something went wrong");
      //       }
      //       const data = await response.json();
      //       this.users = data;
      //       console.log(this.users);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };
      //   getUsersFun();

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          this.users = json;
          console.log(this.users);
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
