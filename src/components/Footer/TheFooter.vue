<template>
  <div
    :style="
      $route.path === '/'
        ? {
            'background-color': '#F5F5FE',
          }
        : {
            'background-color': '#FFFFFF',
          }
    "
  >
    <v-container>
      <!-- Description -->
      <v-row class="mt-2 mb-7">
        <v-col cols="8" sm="7">
          <img :src="require('../../assets/imgs/logo.svg')" alt="Logo" />
          <div class="my-4 footer_text">
            A Myanmar(Burma) based AI and IT training school. We provide best
            quality courses.
          </div>
          <div class="d-flex social_link">
            <a href="https://www.facebook.com/Simboloit">
              <v-icon>mdi-facebook</v-icon> </a
            ><a href="https://www.youtube.com/channel/UCx6xQi8wlJKTSKXL5xzwXXQ">
              <v-icon>mdi-youtube</v-icon> </a
            ><a href="https://www.linkedin.com/company/s%C3%ADmboloitschool/">
              <v-icon>mdi-linkedin</v-icon>
            </a>
          </div>
        </v-col>
        <v-col cols="4" sm="2">
          <div class="footer_title">Get in touch</div>
          <div class="footer_text">Mandalay, Myanmar</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="footer_title">Contact information</div>
          <div class="footer_text">Email: hola@simbolomm.com</div>
          <div class="footer_text">
            Phone:
            <span
              :style="{
                color: '#000',
                fontWeight: 'bold',
              }"
              >(+95) 995 171 6847</span
            >
          </div>
        </v-col>
      </v-row>
      <!-- Copyright -->
      <v-row>
        <v-col>
          <div class="footer_text">© 2022 Simbolo UI. All Rights Reserved</div>
        </v-col>
        <v-col>
          <div class="text-right footer_text">
            All of course information owned by Simbolo
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.social_link a {
  color: #a8a3b9;
  text-decoration: none;
  margin-right: 0.75rem;
}

.social_link a:first-of-type:hover {
  color: #1877f2;
}

.social_link a:nth-of-type(2):hover {
  color: #cd201f;
}

.social_link a:last-of-type:hover {
  color: #0a66c2;
}

.social_link a i {
  font-size: 20px;
}

.footer_title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer_text {
  color: #5c5776;
  line-height: 1.5rem;
  font-size: 14px;
}
</style>