<template>
  <transition name="slide-y-transition">
    <v-alert
      :class="`mg-5  on-${getColor(type)[0]}--text`"
      style="margin: 0px; position: fixed; top: 0; width: 100%; z-index: 10000"
      v-if="alert"
      :type="type"
      :color="getColor(type)[0]"
      dismissible
    >
      {{ message }}
      <template #close>
        <v-icon>mdi-close</v-icon>
      </template>
    </v-alert>
  </transition>
</template>
  <script>
export default {
  data() {
    return {
      alert: false,
      type: "success",
      message: null,
      color: {
        success: ["success", "black"],
        error: ["error", "white"],
        info: ["primary", "white"],
        warning: ["warning", "white"],
      },
      defaultTimeoutInMS: 2500,
    };
  },
  methods: {
    showAlert(args) {
      console.log("showAlert", { args });
      this.alert = false;
      this.type = args.type;
      this.message = args.message;
      if (!args.permanent) {
        setTimeout(() => {
          this.alert = false;
        }, args.timeout || this.defaultTimeoutInMS);
      }
      this.alert = true;
    },
    getColor(alertType) {
      return this.color[alertType] || this.color.info;
    },
    showBadConnectionAlert() {
      this.alert = false;
      this.type = "warning";
      this.message = "Warning: poor connection, still trying...";
      this.alert = true;
    },
    showNetworkTimeoutAlert() {
      this.alert = false;
      this.type = "error";
      this.message = "Network timeout!";
      this.alert = true;
    },
  },

  mounted() {
    this.$eventBus.$on("show-alert", (args) => {
      this.showAlert(args);
    });

    this.$eventBus.$on("show-alert-success", (args) =>
      this.showAlert({ ...args, type: "success" })
    );

    this.$eventBus.$on("show-alert-error", (args) =>
      this.showAlert({ ...args, type: "error" })
    );

    this.$eventBus.$on("show-alert-bad-connection", (args) =>
      this.showBadConnectionAlert(args)
    );

    this.$eventBus.$on("show-alert-network-timeout", (args) =>
      this.showNetworkTimeoutAlert(args)
    );

    window.addEventListener("showTestAlert", () => {
      this.showAlert({
        message: "Test Alert",
        type: "success",
        permanent: true,
      });
    });
  },
};
</script>
  <style>
.mg-5 {
  margin: 5px;
}
</style>
  