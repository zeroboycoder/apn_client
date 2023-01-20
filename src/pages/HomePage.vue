<template>
  <v-container>
    <!-- Hero section -->
    <v-row style="min-height: calc(100vh - 60px)" class="align-center hero-section">
      <v-col cols="12" sm="8">
        <h1>APN Contents Creation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio sapiente
          quaerat, nulla rerum similique saepe ad culpa velit blanditiis, consectetur,
          nobis deleniti ullam repudiandae delectus voluptatum fugiat accusantium. Minima.
        </p>
      </v-col>
      <v-col>
        <img :src="require('../assets/imgs/img1.png')" alt="Image 1" />
      </v-col>
    </v-row>
    <!-- What is New? -->
    <div>
      <div class="d-flex justify-center mb-10">
        <h2 class="line-end">What is New?</h2>
      </div>
      <v-row>
        <v-col v-for="i in 3" :key="i">
          <course-card />
        </v-col>
      </v-row>
    </div>
    <!-- Our Vision -->
    <v-row class="my-10 visions">
      <v-col class="vision-body">
        <div>
          <v-img :src="require('../assets/imgs/img2.png')" cover></v-img>
        </div>
      </v-col>
      <v-col class="vision-body">
        <div>
          <h3 class="mb-3 line-start">Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus
            nobis facere, voluptatibus expedita enim ipsum pariatur quibusdam aut
            necessitatibus perferendis culpa laudantium accusantium harum obcaecati
            inventore beatae numquam!
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- Our Mission -->
    <v-row class="my-10 visions">
      <v-col class="vision-body">
        <div>
          <h2 class="mb-3 line-end">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus
            nobis facere, voluptatibus expedita enim ipsum pariatur quibusdam aut
            necessitatibus perferendis culpa laudantium accusantium harum obcaecati
            inventore beatae numquam!
          </p>
        </div>
      </v-col>
      <v-col class="vision-body">
        <div>
          <v-img :src="require('../assets/imgs/img3.png')" cover></v-img>
        </div>
      </v-col>
    </v-row>
    <!-- Our Goals -->
    <v-row class="my-10 visions">
      <v-col class="vision-body">
        <div>
          <v-img :src="require('../assets/imgs/img4.png')" cover></v-img>
        </div>
      </v-col>
      <v-col class="vision-body">
        <div>
          <h3 class="mb-3 line-start">Our Goals</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus
            nobis facere, voluptatibus expedita enim ipsum pariatur quibusdam aut
            necessitatibus perferendis culpa laudantium accusantium harum obcaecati
            inventore beatae numquam!
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- Achevements -->
    <div class="my-10">
      <div class="d-flex justify-center mb-10">
        <h2 class="line-end">Our Achievements</h2>
      </div>
      <div style="width: 80%; margin: auto" class="d-flex justify-space-around">
        <div class="text-center" style="width: fit-content">
          <v-icon size="60">mdi-laptop</v-icon>
          <h4>COURSES</h4>
          <div class="text-body-1">180</div>
        </div>
        <div class="text-center" style="width: fit-content">
          <v-icon size="60">mdi-account-group-outline</v-icon>
          <h4>STUDENTS</h4>
          <div class="text-body-1">2000</div>
        </div>
        <div class="text-center" style="width: fit-content">
          <v-icon size="60">mdi-handshake-outline</v-icon>
          <h4>CLIENTS</h4>
          <div class="text-body-1">80</div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import CourseCard from "@/components/Cards/CourseCard.vue";
export default {
  components: { CourseCard },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
h2 {
  font-size: 42px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
h2.line-end::after {
  width: 80px;
  height: 4px;
  background-color: var(--apn_red);
  content: "";
}
h3 {
  font-size: 42px;
  width: fit-content;
  display: flex;
  flex-direction: column;
}
h3.line-start::after {
  width: 80px;
  height: 4px;
  background-color: var(--apn_red);
  content: "";
}
.hero-section {
  padding-bottom: 3rem;
  h1 {
    font: bold 56px Raleway;
    margin-bottom: 1.5rem;
  }
  p {
    width: 80%;
    font-size: 18px;
  }
}

.vision-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    width: 70%;
    margin: auto;
  }
}
</style>
