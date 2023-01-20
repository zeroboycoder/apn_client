import alert from "./TheAlert.vue";

export default {
    install(app) {
        app.component("TheAlert", alert);
    },
}
