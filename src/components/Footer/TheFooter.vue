<template>
  <div class="pt-7 footer">
    <v-container>
      <v-row>
        <v-col class="text-white text-right">
          <h4>APN Content Creation</h4>
          <p style="line-height: 24px">
            Thama Saitta Road, G2, Two Story, 7 Qt, <br />
            Hlaing Township, Yangon, Myanmar
          </p>
          <p>+959 123 456 789</p>
        </v-col>
      </v-row>
      <div class="d-flex justify-center mt-3">
        <v-btn variant="plain" icon>
          <v-icon color="var(--apn_gray)">mdi-facebook</v-icon>
        </v-btn>
        <v-btn variant="plain" icon>
          <v-icon color="var(--apn_gray)">mdi-facebook-messenger</v-icon>
        </v-btn>
        <v-btn variant="plain" icon>
          <v-icon color="var(--apn_gray)">mdi-youtube</v-icon>
        </v-btn>
        <v-btn variant="plain" icon>
          <v-icon color="var(--apn_gray)">mdi-pinterest</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
.footer {
  background-color: var(--apn_dark_blue);
  * {
    line-height: 32px;
  }
}
</style>
