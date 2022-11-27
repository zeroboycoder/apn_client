<template>
  <div
    :style="{
      background:
        'linear-gradient(-125deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
    }"
  >
    <!-- Hero Section -->
    <div
      class="d-flex justify-center align-center"
      :style="{
        backgroundImage: 'url(' + require('@/assets/imgs/home_bg.svg') + ')',
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
      }"
    >
      <v-container
        :style="{
          paddingTop: '64px',
          width: '80%',
          height: '100%',
        }"
      >
        <v-row>
          <v-col sm="12" md="6">
            <div
              class="mb-4"
              :style="{
                font: 'normal normal bold 2.9rem/4.125rem made_tommy_bold',
              }"
            >
              LET'S LEARN ARTIFICIAL INTELLIGENCE & IT WITH SIMBOLO
            </div>
            <p
              class="mb-7"
              :style="{
                font: '400 1.25rem/2rem made_tommy',
              }"
            >
              A Myanmar(Burma) based AI and IT training school. We provide best
              quality courses. Learn more about us.
            </p>
            <v-btn
              :style="{
                color: '#fff',
                backgroundColor: '#000',
              }"
              >View Course</v-btn
            >
          </v-col>
          <v-col sm="12" md="6">
            <happy-character />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Simbolo Description -->
    <v-container class="mt-5 mb-7">
      <v-row>
        <v-col cols="12" md="4" class="description">
          <v-icon>mdi-school</v-icon>
          <h2>THEORY + PRACTICAL</h2>
          <p>
            Símbolo uses learner-centric curriculum design to offer both
            theoretical knowledge and practical application through interactive
            lessons, assignments and projects.
          </p>
        </v-col>
        <v-col cols="12" md="4" class="description">
          <v-icon>mdi-account-group</v-icon>
          <h2>LEARN AND GROW</h2>
          <p>
            Símbolo is dedicated to supporting IT enthusiasts with a chance to
            learn affordable and learner-centric best-quality courses and we
            hope you will grow together with us.
          </p>
        </v-col>
        <v-col cols="12" md="4" class="description">
          <v-icon>mdi-finance</v-icon>
          <h2>GET EXPERT SUPPORT</h2>
          <p>
            Símbolo is always ready to provide you with career ready programs if
            you are trying to find a place in IT and AI field. Moreover, you can
            always get support from experts whenever you need help with your
            projects and lessons.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-divider class="my-7" />
    </v-container>

    <!-- Top courses -->
    <v-container class="my-7">
      <div class="top_course">
        <p>POPULAR COURSES</p>
        <h2>THE WORLD'S TOP COURSES</h2>
        <p>Over 10+ online courses with new additions published every month.</p>
      </div>
      <v-row class="mt-7 mb-2">
        <v-col cols="12" sm="6" md="3" v-for="i in 4" :key="i">
          <CourseSlider />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-divider class="my-7" />
    </v-container>

    <!-- Become an instructor -->
    <v-container class="my-7">
      <InstructorGroup />
      <v-row class="my-2">
        <v-col sm="12" md="4">
          <h1 class="become_instructor_title">BECOME AN INSTRUCTOR</h1>
        </v-col>
        <v-col sm="12" md="8">
          <v-row class="d-flex justify-center">
            <v-col sm="12" md="9">
              <p class="become_instructor_desc">
                Top instructors from around the countries are teaching now on
                Simbolo. We provide the tools and skills to teach what you love
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="my-2">
        <v-col cols="12" sm="6" md="4" class="become_instructor_grid">
          <h2>GROW WITH US</h2>
          <p>
            Grow together with Símbolo while supporting students to learn and
            grow.
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="become_instructor_grid">
          <h2>INSPIRE STUDENTS</h2>
          <p>
            Help people learn new skills, advance their careers, and explore
            their hobbies by sharing your knowledge.
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="become_instructor_grid">
          <h2>JOIN OUR COMMUNITY</h2>
          <p>
            Take advantage of our active community of instructors to help you
            through your course creation process.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-2">
        <v-btn
          :style="{
            padding: '0px 20px',
            height: '50px',
            color: '#fff',
            'background-color': '#D55E59',
            font: '500 14px made_tommy_medium',
            'letter-spacing': '0px',
          }"
          >START TEACHING TODAY</v-btn
        >
      </v-row>
    </v-container>
    <v-container>
      <v-divider class="my-7" />
    </v-container>

    <!-- World class instructor -->
    <v-container class="my-7">
      <v-row class="d-flex justify-center">
        <v-col sm="12" md="8" class="text-center section-description">
          <p>WORLD-CLASS INSTRUCTORS</p>
          <h2>CLASSES TAUGHT BY INDUSTRY EXPERT</h2>
          <p>
            Simbolo teachers are icons, experts, and industry rock stars excited
            to share their experience, wisdom, and trusted tools with you.
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-4">
        <v-col cols="12" sm="6" md="3" v-for="i in 4" :key="i">
          <EventCard />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-divider class="my-7" />
    </v-container>

    <!-- Testimonials -->
    <v-container class="my-7">
      <v-row class="d-flex justify-center">
        <v-col sm="12" md="8" class="text-center section-description">
          <p>TESTIMONNIALS</p>
          <h2>DON'T JUST TAKE OUR WORDS FOR IT</h2>
          <p>500+ people are already learning on Simbolo</p>
        </v-col>
      </v-row>
      <v-row class="mt-7 mb-2">
        <v-col cols="12" sm="6" md="4" v-for="i in 3" :key="i">
          <testimonial-slider />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="my-7"></div>
    </v-container>
  </div>
</template>

<script>
import HappyCharacter from "@/components/HappyCharacter.vue";
import InstructorGroup from "@/components/InstructorGroup.vue";
import CourseSlider from "@/components/Slider/CourseSlider.vue";
import EventCard from "@/components/Cards/EventCard.vue";
import TestimonialSlider from "@/components/Slider/TestimonialSlider.vue";
export default {
  components: {
    HappyCharacter,
    CourseSlider,
    InstructorGroup,
    EventCard,
    TestimonialSlider,
  },
};
</script>

<style scoped>
/* Simbolo Description */
.description i {
  color: var(--simbolo_red);
  font-size: 48px;
}

.description h2 {
  font: bold 24px made_tommy_bold;
  margin: 1.25rem 0;
}

.description p {
  color: var(--simbolo_gray);
  font: normal 16px/26px made_tommy;
}

/* Top Courses */
.top_course p:first-of-type {
  color: var(--simbolo_red);
  font: normal 14px made_tommy_medium;
  letter-spacing: 2px;
}

.top_course h2 {
  margin: 0.75rem 0;
  font: bold 2.5rem made_tommy_bold;
}

.top_course p:last-of-type {
  color: var(--simbolo_gray);
  font: normal 1.25rem made_tommy;
}

/* Become an instructor */
.become_instructor_title {
  font: bold 40px made_tommy_bold;
}

.become_instructor_desc {
  padding: 0 1rem;
  color: var(--simbolo_gray);
  font: normal 20px made_tommy;
}

.become_instructor_grid h2 {
  font: bold 22px made_tommy_bold;
}
.become_instructor_grid p {
  margin: 0.5rem 0;
  color: var(--simbolo_gray);
  font: normal 1rem/1.75rem made_tommy;
}

/* World class instructor */
.section-description p:first-of-type {
  color: #d65e5a;
  margin-bottom: 1rem;
  letter-spacing: 2.5px;
  font: normal 14px made_tommy_medium;
}

.section-description h2 {
  color: #18113c;
  margin-bottom: 5px;
  letter-spacing: -0.8px;
  font: bold 40px made_tommy_bold;
}

.section-description p:last-of-type {
  color: var(--simbolo_gray);
  letter-spacing: -0.4px;
  font: normal 1.25rem/2rem made_tommy;
}
</style>