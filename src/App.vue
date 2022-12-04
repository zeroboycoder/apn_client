<template>
  <v-app>
    <NavBar />
    <router-view> </router-view>
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

<style>
:root {
  --simbolo_red: #ca4343;
  --simbolo_red_orange: #e43f3c;
  --simbolo_gray: #5c5776;
  --simbolo_dark_blue: #18113c;
}

@font-face {
  font-family: made_tommy_thin;
  src: url("./assets/fonts/made_tommy_thin.otf");
}
@font-face {
  font-family: made_tommy;
  src: url("./assets/fonts/made_tommy_regular.otf");
}
@font-face {
  font-family: made_tommy_medium;
  src: url("./assets/fonts/made_tommy_medium.otf");
}
@font-face {
  font-family: made_tommy_bold;
  src: url("./assets/fonts/made_tommy_bold.otf");
}
</style>