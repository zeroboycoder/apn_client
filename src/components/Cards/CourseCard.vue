<template>
  <div class="pa-2">
    <v-card
      elevation="2"
      :style="{
        'border-radius': '0.3rem',
      }"
    >
      <img
        :src="require('../../assets/imgs/course.jpeg')"
        alt="Course"
        :style="{
          width: '100%',
          'border-top-right-radius': '0.25rem',
          'border-top-left-radius': '0.25rem',
        }"
      />
      <div class="px-5 py-3">
        <h2 class="pt-1 pb-3" @click="$router.push('/categories')">
          Introduction to Artificial Intelligence
        </h2>
        <v-row
          class="pb-3"
          :style="{
            'font-size': '14px',
            color: 'var(--simbolo_gray)',
          }"
        >
          <v-col class="d-flex align-center">
            <v-icon size="16">mdi-clock-outline</v-icon>
            <p class="ml-1">2 months</p>
          </v-col>
          <v-col class="d-flex align-center">
            <img
              :src="require('../../assets/imgs/beginner_level.svg')"
              alt="Course level"
            />
            <p class="ml-1">Beginner</p>
          </v-col>
        </v-row>
      </div>
      <v-divider />
      <v-row
        class="px-5 py-4"
        :style="{
          'font-size': '14px',
          color: 'var(--simbolo_gray)',
        }"
      >
        <v-col cols="9" class="d-flex align-center">
          <img
            :src="require('../../assets/imgs/instructor.jpg')"
            alt="Course level"
            :style="{
              width: '24px',
              height: '24px',
              'border-radius': '50%',
            }"
          />
          <p class="ml-2">Phyo Thu Htet</p>
        </v-col>
        <v-col
          v-if="$route.path === '/course'"
          cols="3"
          class="d-flex align-center text-right"
          :style="{
            cursor: 'pointer',
          }"
        >
          <v-icon size="16" color="var(--simbolo_red)" class="mr-1">
            mdi-pencil-outline
          </v-icon>
          <p
            :style="{
              color: 'var(--simbolo_red)',
            }"
          >
            Edit
          </p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped>
h2 {
  font: bold 17px made_tommy_bold;
  cursor: pointer;
}

h2:hover,
h2:active {
  color: var(--simbolo_red);
}
</style>