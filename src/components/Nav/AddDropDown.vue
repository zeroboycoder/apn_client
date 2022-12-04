<template>
  <div>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <div color="primary" v-bind="props" class="dropDown_title">
          {{ title }}
          <!-- <v-icon>mdi-chevron-down</v-icon> -->
        </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <div
            color="primary"
            v-bind="props"
            class="dorpDown_item"
            @click="$emit('goTo', item.link)"
          >
            {{ item.text }}
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
    
  <script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data: () => ({
    items: [
      {
        text: "COURSES",
        link: "/add-course",
      },
      {
        text: "CATEGORY",
        link: "/add-category",
      },
      {
        text: "INSTRUCTOR",
        link: "/add-instructor",
      },
      {
        text: "PROGRAM",
        link: "/add-program",
      },
      {
        text: "PROFILE",
        link: "/profile",
      },
    ],
  }),
};
</script>
    
  <style scoped>
.dropDown_title {
  display: flex;
  align-items: center;
  height: 64px;
}
.dorpDown_item {
  font-size: 1rem;
  font-family: made_tommy_medium;
  cursor: pointer;
}
.dorpDown_item:hover {
  color: var(--simbolo_red);
}
</style>