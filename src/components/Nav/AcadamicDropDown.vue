<template>
  <div>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <div color="primary" v-bind="props" class="dropDown_title">
          {{ title }}
          <v-icon>mdi-chevron-down</v-icon>
        </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-menu location="end" open-on-hover>
            <template v-slot:activator="{ props }">
              <div
                color="primary"
                v-bind="props"
                class="dorpDown_item"
                @click="$emit('goTo', item.link)"
              >
                {{ item.text }}
                <v-icon
                  v-if="item.dropdown"
                  :style="{
                    transform: 'rotate(-90deg)',
                  }"
                >
                  mdi-chevron-down
                </v-icon>
              </div>
            </template>

            <v-list class="mx-3">
              <v-list-item v-for="(item, index) in item.dropdown" :key="index">
                <div class="dorpDown_item" @click="$emit('goTo', item.link)">
                  {{ item.text }}
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
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
        link: "/courses",
      },
      {
        text: "PROGRAMS",
        dropdown: [
          {
            text: "Jump-Start Program",
            link: "/programs",
          },
        ],
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