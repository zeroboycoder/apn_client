<template>
  <v-app-bar style="background-color: white">
    <v-container>
      <v-row>
        <v-col cols="4" class="d-flex align-center">
          <img
            :src="require('../../assets/imgs/logo.png')"
            alt="Logo"
            :style="{ height: '80%' }"
          />
        </v-col>
        <v-col class="d-none d-lg-flex align-center justify-end nav_items">
          <div @click="goTo('/')">Home</div>
          <div @click="goTo('/courses')">Courses</div>
          <div @click="goTo('/contents')">Contents</div>
          <div @click="goTo('/')">About Us</div>
          <div @click="goTo('/')">Contact</div>
          <div @click="goTo('/')">APN
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.nav_items > div {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 0.7rem;
  font: bold 1rem "Raleway";
  cursor: pointer;
}
.nav_items > div:hover,
.nav_items > div:active {
  color: var(--apn_blue);
}
div.contact_us {
  color: white;
  background-color: black;
  border-radius: 10px;
  margin-left: 12px;
  width: 130px;
  height: 40px;
}
div.contact_us:hover {
  color: white;
}
</style>
