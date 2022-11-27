<template>
  <div class="d-flex">
    <span class="instructor">
      <img
        alt="avatar"
        :src="require('../assets/imgs/instructors/eaintlayhmone.jpg')"
        class="instructor-img"
      />
    </span>
    <span class="instructor instructor1">
      <img
        alt="avatar"
        :src="require('../assets/imgs/instructors/htethtetmon.jpg')"
        class="instructor-img"
      />
    </span>
    <span class="instructor instructor2">
      <img
        alt="avatar"
        :src="require('../assets/imgs/instructors/kyawyethu.jpg')"
        class="instructor-img"
      />
    </span>
    <span class="instructor instructor3">
      <img
        alt="avatar"
        :src="require('../assets/imgs/instructors/phyothuhtet.jpg')"
        class="instructor-img"
      />
    </span>
    <div
      class="
        d-flex
        justify-center
        align-center
        text-white
        instructor
        instructor4
      "
    >
      10+
    </div>
  </div>
</template>

<style scoped>
.instructor {
  position: relative;
}
.instructor:hover {
  z-index: 2;
}
.instructor1 {
  left: -0.75rem;
}
.instructor2 {
  left: -1.5rem;
}
.instructor3 {
  left: -2.25rem;
}
.instructor4 {
  left: -3rem;
  background-color: var(--simbolo_red_orange);
  font: bold 14px made_tommy_medium;
}
.instructor-img,
.instructor4 {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 3px solid #fff;
}
</style>