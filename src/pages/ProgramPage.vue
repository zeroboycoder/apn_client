<template>
  <div
    :style="{
      paddingTop: '60px',
      backgroundColor: 'var(--simbolo_red)',
    }"
  >
    <v-container class="py-10 text-white hero_text">
      <h1>Browse All of Simbolo Program</h1>
      <p class="mt-2">You can find the best programs in here.</p>
    </v-container>
  </div>
  <div
    class="py-3"
    :style="{
      backgroundColor: '#F5F4F8',
    }"
  >
    <v-container>
      <div class="py-6">
        <v-row>
          <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
            <course-card />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import CourseCard from "@/components/Cards/CourseCard.vue";
export default {
  components: { CourseCard },
};
</script>