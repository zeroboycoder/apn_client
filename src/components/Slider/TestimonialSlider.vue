<template>
  <vue-tiny-slider
    :style="{
      width: '100%',
    }"
    :options="options"
  >
    <TestimonialCard />
  </vue-tiny-slider>
</template>
  
  
  <script>
import "../../assets/css/tiny-slider.scss";
import VueTinySlider from "./VueTinySlider.vue";
import TestimonialCard from "../Cards/TestimonialCard.vue";

export default {
  components: {
    VueTinySlider,
    TestimonialCard,
  },
  data() {
    return {
      options: {
        items: 3,
        rewind: true,
        swipeAngle: false,
        speed: 400,
        autoplay: true,
        autoplayTimeout: 3000,
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