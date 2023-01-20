<template>
  <v-container>
    <v-row class="justify-center my-7">
      <v-col cols="12" sm="8" class="d-flex">
        <v-text-field variant="outlined" label="Search" hide-details="auto" />
        <v-btn variant="tonal" style="height: 56px" class="ml-7">Search</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center my-7">
      <v-col cols="12" sm="8" class="d-flex justify-space-evenly btn-group">
        <v-btn class="active" variant="tonal" rounded> All </v-btn>
        <v-btn variant="tonal" rounded> Marking </v-btn>
        <v-btn variant="tonal" rounded> Content </v-btn>
        <v-btn variant="tonal" rounded> Design </v-btn>
      </v-col>
    </v-row>
    <!-- Courses -->
    <v-row>
      <v-col cols="12" sm="4" v-for="i in 8" :key="i">
        <course-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseCard from "@/components/Cards/CourseCard.vue";
export default {
  components: { CourseCard },
};
</script>

<style lang="scss">
.btn-group {
  button {
    width: 120px;
  }
  button.active {
    color: var(--apn_blue);
  }
}
</style>
