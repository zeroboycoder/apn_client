<template>
  <div
    :style="{
      paddingTop: '60px',
      backgroundColor: '#F5F4F8',
    }"
  >
    <v-container>
      <div class="mt-3 text-center">
        <h1>Create a course</h1>
      </div>
      <!-- Input Fields -->
      <div class="my-6 form">
        <v-text-field label="Title" variant="outlined"></v-text-field>
        <v-select
          label="Instructor"
          variant="outlined"
          :items="['Phyo Thu Htet', 'Htet Htet Mon', 'Dr Cynthia']"
        />
        <v-file-input label="Select a course image"></v-file-input>
        <v-text-field label="Duration" variant="outlined"></v-text-field>
        <v-select
          label="Course level"
          variant="outlined"
          :items="['Beginner', 'Intermediate', 'Advanced']"
        />
        <v-text-field label="Description" variant="outlined"></v-text-field>
        <div class="mt-2 btn">
          <v-btn style="width: 100%; color: var(--simbolo_red)"> Save </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
h1 {
  font: bold 40px made_tommy_bold;
}
.form {
  width: 70%;
  margin: auto;
}
.form * {
  margin: 6px 0;
}
.btn {
  width: 100%;
}
</style>