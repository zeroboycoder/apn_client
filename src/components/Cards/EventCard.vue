<template>
  <div class="px-4 py-2">
    <v-card
      elevation="2"
      :style="{
        'border-radius': '0.25rem',
      }"
    >
      <img
        :src="require('../../assets/imgs/event.jpeg')"
        alt="Course"
        :style="{
          width: '100%',
          'border-top-right-radius': '0.25rem',
          'border-top-left-radius': '0.25rem',
        }"
      />
      <div class="px-5 py-7">
        <h2 class="py-1">Beauty behind the AI</h2>
        <p>Yi Yi Chan Myae Win Shein</p>
      </div>
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

p {
  color: var(--simbolo_gray);
  font: normal 14px made_tommy;
}
</style>