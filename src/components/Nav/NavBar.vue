<template>
  <v-app-bar
    :style="
      scrollPosition > 35 || !isHomeRoute
        ? { 'background-color': 'white' }
        : { 'background-color': 'transparent', 'box-shadow': 'unset' }
    "
  >
    <v-container>
      <v-row>
        <v-col cols="4" class="d-flex align-center">
          <img
            :src="require('../../assets/imgs/logo.svg')"
            alt="Logo"
            :style="{ height: '80%' }"
          />
        </v-col>
        <v-col class="d-none d-lg-flex align-center justify-end nav_items">
          <div @click="goTo('/')">HOME</div>
          <AcadamicDropDown title="ACADAMIC" @goTo="goTo" />
          <div @click="goTo('/about')">ABOUT</div>
          <div>
            <CategoryDropDown title="CATEGORIES" @goTo="goTo" />
          </div>
          <div
            class="d-flex align-center justify-center contact_us"
            @click="goTo('/contact')"
          >
            CONTACT US
          </div>
          <div @click="goTo('/signin')">SIGN IN</div>
          <div @click="goTo('/add-course')">ADD</div>
        </v-col>
        <v-col class="d-lg-none text-right">
          <MobileDropdown />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import CategoryDropDown from "./CategoryDropDown.vue";
import AcadamicDropDown from "./AcadamicDropDown.vue";
import MobileDropdown from "./MobileDropdown.vue";
export default {
  components: { CategoryDropDown, AcadamicDropDown, MobileDropdown },
  data: () => ({
    scrollPosition: null,
  }),
  computed: {
    isHomeRoute() {
      return this.$route.path === "/";
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goTo(route) {
      this.$router.push(route);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.nav_items > div {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 0.7rem;
  font-size: 1rem;
  font-family: made_tommy_medium;
  cursor: pointer;
}
.nav_items > div:hover,
.nav_items > div:active {
  color: var(--simbolo_red);
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