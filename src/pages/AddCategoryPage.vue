<template>
  <div
    class="d-flex align-center"
    :style="{
      paddingTop: '60px',
      backgroundColor: '#F5F4F8',
      minHeight: '100vh',
    }"
  >
    <v-container>
      <div class="mt-3 pb-3 text-center">
        <h1>Add a Category</h1>
      </div>
      <!-- Input Fields -->
      <div class="my-6 form">
        <v-text-field
          label="Add a category"
          variant="outlined"
          v-model="category"
        ></v-text-field>
      </div>
    </v-container>
  </div>
</template>
  
  <script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: null,
    };
  },
  methods: {},
};
</script>
    
<style scoped>
h1 {
  font: normal 40px made_tommy_medium;
}
.form {
  width: 60%;
  margin: auto;
}
.form * {
  margin: 6px 0;
}
.btn {
  width: 100%;
}
</style>