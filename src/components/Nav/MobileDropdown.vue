<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <div
        color="primary"
        v-bind="props"
        class="d-flex align-center justify-end"
        :style="{
          height: '64px',
        }"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </div>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <div class="px-2" :style="{ width: '100vw' }">
          {{ item.title }}
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "HOME" },
      {
        title: "ACADAMIC",
        dropdown: [
          {
            text: "COURSES",
          },
          {
            text: "PROGRAMS",
          },
        ],
      },
      { title: "ABOUT" },
      { title: "CATEGORIES" },
      { title: "CONTACT US" },
      { title: "SIGN IN" },
    ],
  }),
};
</script>