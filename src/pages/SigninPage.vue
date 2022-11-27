<template>
  <div
    class="d-flex align-center justify-center"
    :style="{
      paddingTop: '60px',
      backgroundColor: '#F5F4F8',
      minHeight: '100vh',
    }"
  >
    <v-container>
      <v-row class="d-flex align-center justify-center">
        <v-col class="d-flex justify-center" cols="12" sm="6">
          <div
            :style="{
              width: '80%',
            }"
          >
            <HappyCharacter />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-center align-center mt-3 mb-7"
        >
          <div
            :style="{
              width: '60%',
            }"
          >
            <v-row>
              <v-col>
                <h1>SIGN IN</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Email:*" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Password:*" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="text-white" color="var(--simbolo_red)">
                  SIGN IN
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div
                  class="text-overline"
                  :style="{
                    color: 'var(--simbolo_red)',
                  }"
                >
                  * This is only for admins.
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HappyCharacter from "@/components/HappyCharacter.vue";

export default { components: { HappyCharacter } };
</script>

<style scoped>
h1 {
  font: bold 40px/70px made_tommy_bold;
  letter-spacing: 2px;
}
</style>