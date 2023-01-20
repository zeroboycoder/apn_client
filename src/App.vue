<template>
  <v-app>
    <NavBar />
    <router-view style="padding-top: 60px" />
    <TheFooter v-if="!disableFooter" />
  </v-app>
</template>

<script>
import TheFooter from "./components/Footer/TheFooter.vue";
import NavBar from "./components/Nav/NavBar.vue";

export default {
  components: { NavBar, TheFooter },
  data() {
    return {
      disableFooter: false,
    };
  },
  watch: {
    $route() {
      const disableFooterRoutes = ["profile"];
      this.disableFooter = this.$route.name.includes(disableFooterRoutes);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap");
:root {
  --apn_red: #ad1111;
  --apn_gray: #d9d9d9;
  --apn_white: #fafafa;
  --apn_blue: #3685b5;
  --apn_dark_blue: #1a2634;
}

* {
  font-family: "Raleway", sans-serif;
}
button {
  span.v-btn__content {
    font-weight: 700;
  }
}
</style>
