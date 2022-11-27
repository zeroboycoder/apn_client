<template>
  <div class="px-3">
    <v-card class="px-3 py-6 text-center">
      <img :src="require('../../assets/imgs/instructors/htethtetmon.jpg')" />
      <div class="mt-3">
        <h2 class="mb-2">Htet Htet Mon</h2>
        <p>Academic Executive</p>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

h2 {
  font: normal 18px made_tommy_medium;
}

p {
  color: var(--simbolo_gray);
  font: normal 14px made_tommy;
}
</style>