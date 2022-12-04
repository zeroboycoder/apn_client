<template>
  <div style="margin-top: 60px">
    <v-container>
      <div class="text-h3 d-flex align-center mt-12 mb-5 title">
        Admin Profile
      </div>
      <v-row style="min-height: 300px">
        <v-col
          cols="12"
          sm="6 "
          class="d-flex justify-center align-center"
          :style="{
            backgroundColor: '#fff',
          }"
        >
          <div class="text-center">
            <v-avatar
              :image="require('../assets/imgs/instructors/eaintlayhmone.jpg')"
              size="150"
            />
            <div class="text-h5 mt-3">
              <b style="font: normal 28px made_tommy_medium">{{ this.name }}</b>
            </div>
          </div>
        </v-col>
        <!-- Inputs -->
        <v-col
          cols="12"
          sm="6 "
          class="d-flex flex-column justify-center align-center mt-3 mb-7"
        >
          <div style="width: 60%">
            <div
              v-if="!editState"
              class="d-flex justify-end mb-3"
              style="cursor: pointer"
              @click="editState = true"
            >
              <span style="color: var(--simbolo_dark_blue)">Edit</span>
              <v-icon
                icon="mdi-pencil"
                color="var(--simbolo_dark_blue)"
              ></v-icon>
            </div>
            <v-text-field
              variant="outlined"
              v-model="nameFromUser"
              label="Name"
              :disabled="!editState"
            />
            <v-text-field
              variant="outlined"
              v-model="emailFromUser"
              label="Email"
              :disabled="true"
            />
            <v-text-field
              variant="outlined"
              label="Password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :disabled="!editState"
            />
            <div
              class="d-flex justify-end"
              style="color: var(--simbolo_red)"
              v-if="editState"
            >
              <v-btn variant="text" @click="editState = false">Cancel</v-btn>
              <v-btn @click="submit">Update</v-btn>
            </div>
          </div>
          <div style="width: 60%">
            <div class="my-3">
              <v-divider />
            </div>
            <v-btn class="text-white" color="var(--simbolo_red)">
              Logout
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapState, mapWritableState } from "pinia";
import { user } from "../store/user";

export default {
  data() {
    return {
      nameFromUser: null,
      emailFromUser: null,
      password: "Admin123",
      showPassword: false,
      editState: false,
    };
  },
  computed: {
    ...mapState(user, ["name", "email"]),
    ...mapWritableState(user, ["name", "email"]),
  },
  methods: {
    submit() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation UpdateAdmin($admin: adminDTO!) {
              updateAdmin(admin: $admin)
            }
          `,
          variables: {
            admin: {
              name: this.nameFromUser,
              email: this.emailFromUser,
              password: this.password,
            },
          },
        })
        .then((res) => {
          if (res.data.updateAdmin) {
            this.editState = false;
            this.showPassword = false;
            this.name = this.nameFromUser;
            this.email = this.emailFromUser;
          }
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.emailFromUser = this.email;
    this.nameFromUser = this.name;
  },
};
</script>
  
<style scoped>
.title::before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 50px;
  margin-right: 14px;
  background-color: var(--simbolo_red);
}
</style>