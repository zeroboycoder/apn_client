<template>
  <div
    :style="{
      paddingTop: '60px',
    }"
  >
    <v-container>
      <!-- Hero text -->
      <v-row class="justify-center py-10">
        <v-col sm="12" md="8" class="py-10 hero_text">
          <h1>HI THERE, WE'RE <span>SYMBOLS</span></h1>
          <p class="mt-2">
            Simbolo is a training school that is dedicated to supporting people
            in Myanmar who are interested in Artificial Intelligence and
            Information Technology(IT). We provide affordable and
            learner-centric best-quality courses to enthusiasts.
          </p>
          <p class="mt-2">
            Simbolo သည် မြန်မာနိုင်ငံ အနယ်နယ်အရပ်ရပ်ရှိ Artificial Intelligence
            နင့် IT နည်းပညာများကို စိတ်ဝင်စားသူများအတွက် ရည်ရွယ်ဖွင့်လှစ်ထားသော
            သင်တန်းကျောင်းတစ်ခုဖြစ်ပါသည်။ ကျွန်ုပ်တို့မှ
            သိပ္ပံဘာသာရပ်အပေါ်အထူးစိတ်ဝင်စားသူများ ထံသို့
            သင်ယူသူဗဟိုပြုနည်းလမ်းများဖြင့် အရည်အသွေးပြည့်မီသော သင်တန်းများကို
            အထူးသင့်လျော်သောဈေးနှုန်းများဖြင့် ဝန်ဆောင်မှုပေးလျက်ရှိပါသည်။
          </p>
        </v-col>
      </v-row>
      <!-- Simbolo About -->
      <div class="pt-10 pb-6">
        <img
          class="pb-5"
          :src="require('../assets/imgs/simbolo_about.jpg')"
          alt="Simbolo About Image"
          :style="{
            width: '100%',
          }"
        />
        <v-row class="py-10">
          <v-col sm="12" md="10" lg="6" class="title">
            <h2 class="mb-4">Our country-wide reach</h2>
            <p>
              A Myanmar(Burma) based AI and IT training school. We provide best
              quality courses.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <!-- Our Core Value -->
    <div
      class="pb-10"
      :style="{
        backgroundColor: '#F5F4F8',
      }"
    >
      <v-container class="pb-10">
        <v-row class="py-10">
          <v-col cols="12" sm="10" lg="6" class="title">
            <h2 class="mb-4">Our core values</h2>
            <p>
              Make sure you don't miss our knowledge sharing events about AI &
              IT. And if you want to connect with us:
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <ValueCard
              icon="mdi-school"
              title="Mission"
              body="To distribute AI and IT technologies in Myanmar and produce professionals who can use AI and IT systematically and ethically"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ValueCard
              icon="mdi-account-group"
              title="Vission"
              body="To Introduce Inclusiveness Education of AI and IT in Myanmar"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ValueCard
              icon="mdi-finance"
              title="Values"
              body="Diversity, Inclusiveness, Ethnicity, Quality, Innovation, and Creativity"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ValueCard from "@/components/Cards/ValueCard.vue";

export default {
  components: { ValueCard },
};
</script>

<style scoped>
/* Reuseable class */
.title h2 {
  color: var(--simbolo_dark_blue);
  letter-spacing: -0.5px;
  font: normal 40px made_tommy_medium;
}
.title p {
  color: var(--simbolo_gray);
  font: normal 20px/32px made_tommy;
}
/* Hero Text */
.hero_text h1 {
  color: var(--simbolo_dark_blue);
  font: bold 56px made_tommy_bold;
}
.hero_text h1 span {
  color: var(--simbolo_red);
}
.hero_text p {
  font: normal 21px/32px made_tommy;
  letter-spacing: 0.5px;
}
.hero_text p:last-of-type {
  font: normal 20px/32px made_tommy;
}
</style>