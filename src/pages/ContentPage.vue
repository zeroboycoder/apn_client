<template>
  <v-container>
    <v-row class="justify-center my-7">
      <v-col cols="12" sm="8" class="d-flex">
        <v-text-field variant="outlined" label="Search" hide-details="auto" />
        <v-btn variant="tonal" style="height: 56px" class="ml-7">Search</v-btn>
      </v-col>
    </v-row>
    <div style="width: 85%; margin: auto">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  </v-container>
</template>

<script>
import ContentCard from "@/components/Cards/ContentCard.vue";
export default {
  components: {
    ContentCard,
  },
};
</script>
