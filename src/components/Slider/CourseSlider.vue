<template>
  <vue-tiny-slider
    :style="{
      width: '100%',
    }"
    :options="options"
  >
    <course-card />
  </vue-tiny-slider>
</template>


<script>
import "../../assets/css/tiny-slider.scss";
import VueTinySlider from "./VueTinySlider.vue";
import CourseCard from "../Cards/CourseCard.vue";

export default {
  components: {
    VueTinySlider,
    CourseCard,
  },
  data() {
    return {
      options: {
        items: 4,
        rewind: true,
        swipeAngle: false,
        speed: 400,
        autoplay: true,
        autoplayTimeout: 3500,
      },
    };
  },
};
</script>

<style>
.tns-nav,
.tns-conntrol {
  display: none;
}
</style>