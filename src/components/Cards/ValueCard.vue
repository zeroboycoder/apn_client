<template>
  <div class="px-1 mb-3">
    <v-card class="pa-7">
      <v-icon color="#754ffe" size="50">{{ icon }}</v-icon>
      <h2 class="my-4">{{ title }}</h2>
      <p>
        {{ body }}
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      requied: true,
    },
    title: {
      type: String,
      requied: true,
    },
    body: {
      type: String,
      requied: true,
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 600;
  font-size: 20px;
  font-family: sans-serif;
}
p {
  color: var(--simbolo_gray);
  font-weight: 400;
  font-size: 15px;
  font-family: sans-serif;
}
</style>