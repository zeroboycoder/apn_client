<template>
  <div
    :style="{
      backgroundColor: '#F5F4F8',
    }"
  >
    <v-row
      :style="{
        minHeight: '100vh',
      }"
    >
      <v-col
        cols="12"
        sm="6 "
        class="d-flex justify-center align-center"
        :style="{
          backgroundColor: '#fff',
        }"
      >
        <div
          :style="{
            width: '50%',
          }"
        >
          <div class="mb-10">
            <img :src="require('../assets/imgs/logo.svg')" alt="Logo" />
          </div>
          <div class="title mb-13">
            <h1>Get In Touch</h1>
            <p>
              Fill in the form to the right to get in touch with someone on our
              team, and we will reach out shortly.
            </p>
          </div>
          <div class="body">
            <p>
              If you are seeking support please visit our
              <span>support portal</span> before reaching out directly.
            </p>
            <div>
              <v-icon color="#ae9afc">mdi-phone-outline</v-icon>
              <p>(+95)99 517 168 47</p>
            </div>
            <div>
              <v-icon color="#ae9afc">mdi-email-outline</v-icon>
              <p>simboloit@gmail.com</p>
            </div>
            <div>
              <v-icon color="#ae9afc">mdi-map-marker-outline</v-icon>
              <p>Mandalay, Myanmar</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6 "
        class="d-flex justify-center align-center mt-3 mb-7"
      >
        <div
          :style="{
            width: '60%',
          }"
        >
          <v-row>
            <v-col
              ><v-text-field
                label="First Name:*"
                variant="outlined"
              ></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                label="Last Name:*"
                variant="outlined"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-text-field label="Email:*" variant="outlined"></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                label="Phone Number:*"
                variant="outlined"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                variant="outlined"
                label="Contact Reason"
                :items="['Design', 'Developemnt', 'Other']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Message" variant="outlined"> </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn class="text-white" color="var(--simbolo_red)"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.title h1 {
  font-size: 40px;
  font-weight: bold;
}

.title p {
  font-size: 20px;
  margin-top: 8px;
}

.body p {
  font-size: 17px;
  margin-bottom: 1rem;
}

.body p span {
  color: var(--simbolo_red);
}

.body div {
  display: flex;
}

.body div p {
  margin-left: 14px;
}
</style>