<template>
  <!-- Hero Text -->
  <div
    :style="{
      paddingTop: '60px',
      backgroundColor: 'var(--simbolo_red)',
    }"
  >
    <v-container class="py-10 text-white hero_text">
      <h1>Browse All of Simbolo Courses</h1>
      <p class="mt-2">Over 500+ students are learning at Simbolo.</p>
    </v-container>
  </div>
  <div
    class="py-3"
    :style="{
      backgroundColor: '#F5F4F8',
    }"
  >
    <v-container>
      <!-- Popular instructors -->
      <div class="pb-6">
        <div class="my-10 title">
          <h1 class="mb-2">Instructors</h1>
          <p>We got best and professional Instructors</p>
        </div>
        <v-row>
          <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
            <InstructorCard />
          </v-col>
        </v-row>
      </div>
      <!-- Course category 1 -->
      <div class="py-6">
        <div class="my-10 title">
          <p class="mb-2 subtitle">COURSE CATEGORY</p>
          <h1>Artificial Intelligence</h1>
          <p class="mt-2">
            Artificial intelligence (AI) is a wide-ranging branch of computer
            science concerned with building smart machines capable of performing
            tasks
          </p>
        </div>
        <v-row>
          <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
            <course-card />
          </v-col>
        </v-row>
      </div>
      <!-- Course category 2 -->
      <div class="py-6">
        <div class="my-10 title">
          <p class="mb-2 subtitle">COURSE CATEGORY</p>
          <h1>Data Science</h1>
          <p class="mt-2">
            Data science is an interdisciplinary field that uses scientific
            methods, processes and algorithms.
          </p>
        </div>
        <v-row>
          <v-col cols="12" sm="6" lg="3" v-for="i in 2" :key="i">
            <course-card />
          </v-col>
        </v-row>
      </div>
      <!-- Course category 3 -->
      <div class="py-6">
        <div class="my-10 title">
          <p class="mb-2 subtitle">COURSE CATEGORY</p>
          <h1>AI for Teens</h1>
          <p class="mt-2">
            Artificial intelligence (AI) is a wide-ranging branch of computer
            science concerned with building smart machines capable of performing
            tasks
          </p>
        </div>
        <v-row>
          <v-col scols="12" sm="6" lg="3" v-for="i in 1" :key="i">
            <course-card />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import InstructorCard from "@/components/Cards/InstructorCard.vue";
import CourseCard from "@/components/Cards/CourseCard.vue";
export default {
  components: {
    InstructorCard,
    CourseCard,
  },
};
</script>

<style scoped>
/* Reuseable class */
.title h1 {
  font: bold 40px made_tommy_bold;
}

.title p {
  color: var(--simbolo_gray);
  font: normal 20px/32px made_tommy;
}

.title p.subtitle {
  color: #d65e5a;
  letter-spacing: 2.5px;
  font: normal 14px made_tommy_medium;
}

/* Hero text */
.hero_text h1 {
  font: normal 40px made_tommy_medium;
}
.hero_text p {
  font: normal 20px made_tommy;
}
</style>