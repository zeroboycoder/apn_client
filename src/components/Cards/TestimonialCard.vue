<template>
  <div class="px-5 mb-3">
    <v-card class="pa-7">
      <div class="mb-5">
        <!-- star -->
        <div>
          <v-icon
            size="16"
            :style="{
              color: '#ffaa46',
            }"
          >
            mdi-star
          </v-icon>
          <v-icon
            size="16"
            :style="{
              color: '#ffaa46',
            }"
          >
            mdi-star
          </v-icon>
          <v-icon
            size="16"
            :style="{
              color: '#ffaa46',
            }"
          >
            mdi-star
          </v-icon>
          <v-icon
            size="16"
            :style="{
              color: '#ffaa46',
            }"
          >
            mdi-star
          </v-icon>
          <v-icon
            size="16"
            :style="{
              color: '#ffaa46',
            }"
          >
            mdi-star
          </v-icon>
        </div>
        <p class="mt-1">
          "The main thing is that I entered a field that I did not know, so
          there were many difficulties, but because the instructor and
          classmates were courteous, it was easier to solve any difficulties
          that I encountered. The instructor who teaches with patience has a
          good way of teaching. The older classmates are also more mature and
          get the points explained quickly. Anyway, I am deeply thanks to both
          the instructor and simbolo for showing me about the field that I do
          not know."
        </p>
      </div>
      <v-divider />
      <v-row class="pt-4">
        <v-col class="d-flex align-center">
          <img
            :src="require('../../assets/imgs/student.png')"
            alt="Course level"
            :style="{
              width: '40px',
              height: '40px',
              'border-radius': '50%',
            }"
          />
          <div class="ml-3 card-footer">
            <h3>Khant Pyae Sone</h3>
            <p>Student</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped>
p {
  font: normal 1.25rem/2rem made_tommy;
}
.card-footer h3 {
  margin-bottom: 5px;
  font: normal 1rem made_tommy_medium;
}

.card-footer p {
  color: var(--simbolo_gray);
  font: normal 14px made_tommy;
}
</style>