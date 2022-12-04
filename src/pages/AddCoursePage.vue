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
        <v-text-field
          label="Title"
          variant="outlined"
          v-model="title"
        ></v-text-field>
        <v-select
          label="Instructor"
          variant="outlined"
          v-model="instructor"
          :items="instructorLists"
          item-title="name"
          return-object=""
        />
        <v-select
          label="Track"
          variant="outlined"
          multiple
          :items="['ARTIFICIAL INTELLIGENCE', 'DATA SCIENCE', 'AI FOR TEANS']"
          v-model="category"
        />
        <v-file-input label="Select a course image"></v-file-input>
        <v-text-field
          label="Duration"
          variant="outlined"
          v-model="duration"
        ></v-text-field>
        <v-select
          label="Course level"
          variant="outlined"
          :items="['Beginner', 'Intermediate', 'Advanced']"
          v-model="level"
        />
        <v-text-field
          label="Fee"
          variant="outlined"
          v-model="fee"
        ></v-text-field>
        <v-text-field
          label="Start Date"
          type="date"
          variant="outlined"
          v-model="startDate"
        ></v-text-field>
        <v-select
          label="Day"
          variant="outlined"
          v-model="day"
          multiple
          :items="[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ]"
        />
        <v-text-field
          label="time"
          type="time"
          variant="outlined"
          v-model="time"
        ></v-text-field>
        <v-text-field
          label="Description"
          variant="outlined"
          v-model="description"
        ></v-text-field>
        <div class="mt-2 btn">
          <v-btn
            style="width: 100%; color: var(--simbolo_red)"
            @click="addCourse"
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
      instructorLists: null,
      title: null,
      instructor: null,
      category: null,
      image: null,
      duration: null,
      level: null,
      startDate: null,
      fee: null,
      day: [],
      time: null,
      description: null,
    };
  },
  methods: {
    fetchInstructors() {
      this.$apollo
        .query({
          query: gql`
            query Instructor {
              instructors {
                _id
                name
              }
            }
          `,
        })
        .then((res) => (this.instructorLists = res.data.instructors))
        .catch((err) => console.log(err));
    },
    addCourse() {
      const dayArr = [];
      for (let i = 0; i < this.day.length; i++) {
        dayArr.push(this.day[i]);
      }
      const course = {
        title: this.title,
        instructorId: this.instructor?._id,
        duration: this.duration,
        level: this.level,
        startDate: this.startDate,
        fee: this.fee,
        day: dayArr,
        time: this.time,
        description: this.description,
      };
      this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateCourse($course: courseDTO!) {
              createCourse(course: $course) {
                _id
              }
            }
          `,
          variables: {
            course,
          },
        })
        .then((res) => {
          if (res.data.createCourse?._id) console.log("success");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.fetchInstructors();
  },
};
</script>

<style scoped>
h1 {
  font: normal 40px made_tommy_medium;
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