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
        <h1>Add an Instructor</h1>
      </div>
      <!-- Input Fields -->
      <div class="my-6 form">
        <v-text-field
          label="Name"
          variant="outlined"
          v-model="name"
        ></v-text-field>
        <v-file-input label="Select a instructor image"></v-file-input>
        <v-text-field
          label="Education"
          variant="outlined"
          v-model="education"
        ></v-text-field>
        <v-text-field
          label="Specialist Field"
          variant="outlined"
          v-model="specialistField"
        ></v-text-field>
        <v-text-field
          label="Description"
          variant="outlined"
          v-model="description"
        ></v-text-field>
        <div class="mt-2 btn">
          <v-btn
            style="width: 100%; color: var(--simbolo_red)"
            @click="createInstructor"
          >
            Save
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      name: null,
      image: null,
      education: null,
      specialistField: null,
      description: null,
    };
  },
  methods: {
    createInstructor() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateInstructor($instructor: instructorDTO!) {
              createInstructor(instructor: $instructor) {
                _id
                name
                description
              }
            }
          `,
          variables: {
            instructor: {
              name: this.name,
              education: this.education,
              specialistField: this.specialistField,
              description: this.description,
            },
          },
        })
        .then((res) => {
          if (res.data.createInstructor._id) console.log("Success");
        })
        .catch((err) => console.log(err));
    },
  },
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